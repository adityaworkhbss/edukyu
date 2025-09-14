const fs = require('fs');
const path = require('path');

// University name mapping from new structure to old structure
const universityMapping = {
    'niu': 'noida_international_university',
    '1.NIU': 'noida_international_university',
    '2 . AMITY UNIVERSITY': 'amity_university',
    '3.  NMIMS': 'nmims_university',
    '4. LPU': 'lpu_university',
    '5.DPU': 'dpu_university',
    '6. JAIN UNIVERSITY': 'jain_university',
    '7. UTTRANCHAL UNIVERSITY': 'uttaranchal_university'
};

// Course mapping from new structure to old structure
const courseMapping = {
    '1_about_mba': 'online_mba',
    'about_mba': 'online_mba',
    '2_about_mca': 'online_mca',
    'about_mca': 'online_mca',
    '3_about_mcom': 'online_mcom',
    'about_mcom': 'online_mcom',
    '4_about_msc_mathematics': 'online_msc',
    'about_msc': 'online_msc',
    '5_about_ma_journalism_and_mass_communication': 'online_ma_journalism',
    'about_ma': 'online_ma',
    '6_about_ma_international_relation': 'online_ma_international_relations',
    '7_about_bba': 'online_bba',
    'about_bba': 'online_bba',
    '8_about_bca': 'online_bca',
    'about_bca': 'online_bca',
    '9_about_bcom': 'online_bcom',
    'about_bcom': 'online_bcom',
    'about_ba': 'online_ba'
};

/**
 * Parse specialization data from text format to structured array
 */
function parseSpecializations(specializationText) {
    if (!specializationText || specializationText === "No Specialization") {
        return [];
    }

    const specializations = [];
    const lines = specializationText.split('\n');
    let currentSpec = {};

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line && !line.includes('Semester') && !line.includes('Duration') && !line.includes('Rs')) {
            // This might be a specialization name
            if (currentSpec.name && currentSpec.fees) {
                specializations.push({ ...currentSpec });
                currentSpec = {};
            }
            currentSpec.name = line;
        } else if (line.includes('Rs')) {
            // Extract fees
            const match = line.match(/Rs\s*-?\s*([\d,]+)/);
            if (match) {
                currentSpec.fees = `₹${match[1]}`;
            }
        }
    }

    if (currentSpec.name && currentSpec.fees) {
        specializations.push(currentSpec);
    }

    return specializations;
}

/**
 * Parse semester data from text format to structured array
 */
function parseSemesters(semesterText) {
    if (!semesterText) return [];

    const semesters = [];
    const lines = semesterText.split('\n');
    let currentSemester = null;

    for (const line of lines) {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('Semester')) {
            if (currentSemester) {
                semesters.push(currentSemester);
            }
            const semesterNum = parseInt(trimmedLine.match(/\d+/)?.[0] || 0);
            currentSemester = {
                number: semesterNum,
                courses: []
            };
        } else if (trimmedLine && currentSemester) {
            // Parse course with credits
            const courseMatch = trimmedLine.match(/^(.+?)\s*-?\s*(\d+)$/);
            if (courseMatch) {
                currentSemester.courses.push(`${courseMatch[1].trim()} (${courseMatch[2]} credits)`);
            } else if (trimmedLine.length > 0) {
                currentSemester.courses.push(trimmedLine);
            }
        }
    }

    if (currentSemester) {
        semesters.push(currentSemester);
    }

    return semesters;
}

/**
 * Parse benefits from text format to structured array
 */
function parseBenefits(benefitsText) {
    if (!benefitsText) return [];

    const benefits = [];
    const lines = benefitsText.split('\n');

    for (const line of lines) {
        const trimmedLine = line.trim();
        if (trimmedLine.includes(' - ')) {
            const [title, description] = trimmedLine.split(' - ');
            benefits.push({
                title: title.trim(),
                description: description.trim()
            });
        }
    }

    return benefits;
}

/**
 * Parse job roles and industries from text
 */
function parseCareerOpportunities(jobRolesText) {
    if (!jobRolesText) return { jobRoles: [], industries: [] };

    const lines = jobRolesText.split('\n');
    let jobRoles = [];
    let industries = [];
    let isIndustries = false;

    for (const line of lines) {
        const trimmedLine = line.trim();
        if (trimmedLine.toLowerCase().includes('industries')) {
            isIndustries = true;
            continue;
        }

        if (trimmedLine && !trimmedLine.toLowerCase().includes('leadership roles') &&
            !trimmedLine.toLowerCase().includes('entrepreneurship') &&
            !trimmedLine.toLowerCase().includes('specialized roles') &&
            !trimmedLine.toLowerCase().includes('global opportunities')) {

            if (isIndustries) {
                industries.push(trimmedLine);
            } else {
                jobRoles.push(trimmedLine);
            }
        }
    }

    return { jobRoles, industries };
}

/**
 * Transform university data from new structure to old structure
 */
function transformUniversityData(universityKey, universityData) {
    const transformedData = {};

    // Handle the main university data structure
    const mainData = universityData.about || universityData.university_info || universityData;

    // Transform each course
    Object.keys(mainData).forEach(courseKey => {
        const oldCourseKey = courseMapping[courseKey];
        if (!oldCourseKey) return;

        const courseData = mainData[courseKey];
        const transformedCourse = transformCourseData(courseData, courseKey);

        if (transformedCourse && Object.keys(transformedCourse).length > 0) {
            transformedData[oldCourseKey] = transformedCourse;
        }
    });

    return transformedData;
}

/**
 * Transform course data from new structure to old structure
 */
function transformCourseData(courseData, courseType) {
    if (!courseData || typeof courseData !== 'object') return null;

    const transformed = {};

    // Page information
    transformed.page = {
        title: getCourseTitleFromType(courseType),
        university: "University Name", // This should be set based on university
        description: courseData.description || "",
        duration: {
            length: extractDuration(courseData),
            semesters: extractSemesters(courseData)
        },
        fees: extractFees(courseData)
    };

    // Specializations
    if (courseData.mba_specialization || courseData.mca_specialization || courseData.mcom_specialization) {
        const specData = courseData.mba_specialization || courseData.mca_specialization || courseData.mcom_specialization;
        transformed.specializations = parseSpecializations(specData.description);
    }

    // Program benefits
    if (courseData.mba_benefits || courseData.mca_benefits || courseData.mcom_benefits) {
        const benefitsData = courseData.mba_benefits || courseData.mca_benefits || courseData.mcom_benefits;
        transformed.programBenefits = parseBenefits(benefitsData.description);
    }

    // Curriculum
    if (courseData.semester) {
        transformed.curriculum = {
            duration: extractDuration(courseData),
            semesters: parseSemesters(courseData.semester.description)
        };
    }

    // Eligibility
    if (courseData.eligibility_criteria) {
        transformed.eligibility = {
            domestic: {
                educationalQualification: courseData.eligibility_criteria.description || ""
            }
        };
    }

    // Admission Process
    if (courseData.admission_process_mba || courseData.admission_process_mca) {
        const admissionData = courseData.admission_process_mba || courseData.admission_process_mca;
        transformed.admissionProcess = parseAdmissionProcess(admissionData.description);
    }

    // Career Opportunities
    if (courseData.job_roles_industries_mba || courseData.job_roles_industries_mca) {
        const jobData = courseData.job_roles_industries_mba || courseData.job_roles_industries_mca;
        transformed.careerOpportunities = parseCareerOpportunities(jobData.description);
    }

    // FAQs
    if (courseData.faq) {
        transformed.faqs = []; // This would need more specific parsing based on FAQ structure
    }

    return transformed;
}

/**
 * Helper functions
 */
function getCourseTitleFromType(courseType) {
    const titles = {
        '1_about_mba': 'Master of Business Administration (Online MBA)',
        'about_mba': 'Master of Business Administration (Online MBA)',
        '2_about_mca': 'Master of Computer Applications (Online MCA)',
        'about_mca': 'Master of Computer Applications (Online MCA)',
        '3_about_mcom': 'Master of Commerce (Online MCom)',
        'about_mcom': 'Master of Commerce (Online MCom)',
        '7_about_bba': 'Bachelor of Business Administration (Online BBA)',
        'about_bba': 'Bachelor of Business Administration (Online BBA)',
        '8_about_bca': 'Bachelor of Computer Applications (Online BCA)',
        'about_bca': 'Bachelor of Computer Applications (Online BCA)',
        '9_about_bcom': 'Bachelor of Commerce (Online BCom)',
        'about_bcom': 'Bachelor of Commerce (Online BCom)'
    };
    return titles[courseType] || courseType;
}

function extractDuration(courseData) {
    // Try to extract duration from various fields
    if (courseData.course && courseData.course.description) {
        const match = courseData.course.description.match(/Duration\s*[-–]\s*(\d+)\s*years?/i);
        if (match) return `${match[1]} Years`;
    }
    return "2 Years"; // Default
}

function extractSemesters(courseData) {
    const duration = extractDuration(courseData);
    const years = parseInt(duration.match(/\d+/)?.[0] || 2);
    return `${years * 2} Semesters`;
}

function extractFees(courseData) {
    if (courseData.mba_fees || courseData.mca_fees) {
        // Extract fees from the fees object if it exists
        return {
            total: "Contact University",
            perSemester: "Contact University"
        };
    }

    // Try to extract from course description
    if (courseData.course && courseData.course.description) {
        const feeMatch = courseData.course.description.match(/Rs\s*([\d,]+)/);
        if (feeMatch) {
            return {
                total: `₹${feeMatch[1]}`,
                perSemester: `₹${Math.round(parseInt(feeMatch[1].replace(/,/g, '')) / 4).toLocaleString()}`
            };
        }
    }

    return {
        total: "Contact University",
        perSemester: "Contact University"
    };
}

function parseAdmissionProcess(admissionText) {
    if (!admissionText) return [];

    const steps = [];
    const lines = admissionText.split('\n');
    let stepNumber = 1;

    for (const line of lines) {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('Step') || trimmedLine.includes(':')) {
            const parts = trimmedLine.split(':');
            if (parts.length >= 2) {
                steps.push({
                    step: stepNumber++,
                    title: parts[0].replace(/Step\s*[-–]\s*\d+/, '').trim(),
                    description: parts[1].trim()
                });
            }
        }
    }

    return steps;
}

/**
 * Main transformation function
 */
function transformCollegeData(inputData) {
    const transformedData = [];

    // Handle array input
    const dataArray = Array.isArray(inputData) ? inputData : [inputData];

    dataArray.forEach(dataItem => {
        Object.keys(dataItem).forEach(universityKey => {
            const mappedUniversityKey = universityMapping[universityKey] || universityKey.toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, '');
            const universityData = dataItem[universityKey];

            const transformedUniversity = transformUniversityData(universityKey, universityData);

            if (Object.keys(transformedUniversity).length > 0) {
                const existingIndex = transformedData.findIndex(item => item[mappedUniversityKey]);
                if (existingIndex >= 0) {
                    // Merge with existing data
                    Object.assign(transformedData[existingIndex][mappedUniversityKey], transformedUniversity);
                } else {
                    // Add new university
                    transformedData.push({
                        [mappedUniversityKey]: transformedUniversity
                    });
                }
            }
        });
    });

    return transformedData;
}

/**
 * Main execution function
 */
function main() {
    try {
        // Read the input file
        const inputPath = path.join(__dirname, '../Data Model/college_data_output.json');
        const outputPath = path.join(__dirname, '../Data Model/CoursePage/CoursePageData_transformed.jsx');

        const inputData = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

        // Transform the data
        const transformedData = transformCollegeData(inputData);

        // Create the output content
        const outputContent = `export const CoursePageData = ${JSON.stringify(transformedData, null, 4)};`;

        // Write the output file
        fs.writeFileSync(outputPath, outputContent, 'utf8');

        console.log('✅ Data transformation completed successfully!');
        console.log(`📁 Output file: ${outputPath}`);
        console.log(`📊 Transformed ${transformedData.length} universities`);

        // Log summary
        transformedData.forEach((item, index) => {
            const universityKey = Object.keys(item)[0];
            const courses = Object.keys(item[universityKey]);
            console.log(`   ${index + 1}. ${universityKey}: ${courses.length} courses (${courses.join(', ')})`);
        });

    } catch (error) {
        console.error('❌ Error during transformation:', error.message);
        console.error(error.stack);
    }
}

// Export functions for testing
module.exports = {
    transformCollegeData,
    transformUniversityData,
    transformCourseData,
    parseSpecializations,
    parseSemesters,
    parseBenefits,
    parseCareerOpportunities
};

// Run if called directly
if (require.main === module) {
    main();
}