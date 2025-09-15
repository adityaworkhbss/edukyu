const fs = require('fs');

console.log('🔧 Fixed Course Data Injection Script');
console.log('====================================\n');

// University key mapping from JSON to CoursePageData
const universityMapping = {
    '1.NIU': 'noida_international_university',
    '2 . AMITY UNIVERSITY': 'amity_university',
    '3.  NMIMS': 'nmims_university',
    '4. LPU': 'lpu_university',
    '5.DPU': 'dpu_university',
    '6. JAIN UNIVERSITY': 'jain_university',
    '7. UTTRANCHAL UNIVERSITY': 'uttaranchal_university'
};

try {
    // Read source files
    const collegeData = JSON.parse(fs.readFileSync('/workspaces/edukyu/src/Data Model/college_data_output.json', 'utf8'));
    const courseDataContent = fs.readFileSync('/workspaces/edukyu/src/Data Model/CoursePage/CoursePageData_final.jsx', 'utf8');

    // Create backup
    fs.writeFileSync('/workspaces/edukyu/src/Data Model/CoursePage/CoursePageData_final.jsx.backup.final', courseDataContent);
    console.log('✅ Backup created\n');

    // Extract course information
    const extractedCourses = [];

    collegeData.forEach((universityData) => {
        Object.keys(universityData).forEach(universityKey => {
            const university = universityData[universityKey];
            const mappedKey = universityMapping[universityKey];

            if (!mappedKey) return;

            if (university.university_info) {
                Object.keys(university.university_info).forEach(sectionKey => {
                    const section = university.university_info[sectionKey];

                    if (section.course && section.course.description) {
                        const courseInfo = {
                            universityKey: mappedKey,
                            sectionKey: sectionKey,
                            parsedCourses: parseCourseDescription(section.course.description)
                        };

                        if (courseInfo.parsedCourses.length > 0) {
                            extractedCourses.push(courseInfo);
                        }
                    }
                });
            }
        });
    });

    // Group courses by university
    const coursesByUniversity = {};

    extractedCourses.forEach(courseInfo => {
        if (!coursesByUniversity[courseInfo.universityKey]) {
            coursesByUniversity[courseInfo.universityKey] = [];
        }

        courseInfo.parsedCourses.forEach(course => {
            coursesByUniversity[courseInfo.universityKey].push(course);
        });
    });

    // Remove duplicates
    Object.keys(coursesByUniversity).forEach(universityKey => {
        coursesByUniversity[universityKey] = removeDuplicateCourses(coursesByUniversity[universityKey]);
        console.log(`📋 ${universityKey}: ${coursesByUniversity[universityKey].length} courses`);
    });

    // Inject courses for each university
    let modifiedContent = courseDataContent;
    let totalInjections = 0;

    Object.keys(coursesByUniversity).forEach(universityKey => {
        const courses = coursesByUniversity[universityKey];

        courses.forEach(course => {
            const courseKey = generateCourseKey(course.name);
            const normalizedKey = `online_${courseKey}`;

            // Check if course already exists
            const existingPattern = new RegExp(`"${normalizedKey}":\\s*{`);
            if (existingPattern.test(modifiedContent)) {
                console.log(`⚠️  ${course.name} already exists in ${universityKey}`);
                return;
            }

            // Find university block and inject course
            const universityPattern = new RegExp(
                `("${universityKey}":\\s*{)([\\s\\S]*?)(}\\s*(?:,\\s*"[^"]+"|\\s*}))`,
                'g'
            );

            const match = universityPattern.exec(modifiedContent);
            if (match) {
                const courseStructure = generateCourseStructure(course, courseKey);
                const before = match[1];
                const content = match[2];
                const after = match[3];

                // Add comma if needed and inject course
                const newContent = content.trim().endsWith(',') ? content : content + ',';
                const replacement = `${before}${newContent}${courseStructure}${after}`;

                modifiedContent = modifiedContent.replace(match[0], replacement);
                totalInjections++;
                console.log(`✅ Injected ${course.name} into ${universityKey}`);
            }
        });
    });

    // Save the result
    if (totalInjections > 0) {
        fs.writeFileSync('/workspaces/edukyu/src/Data Model/CoursePage/CoursePageData_final.jsx', modifiedContent);
        console.log(`\n✅ Successfully injected ${totalInjections} courses!`);
    }

    // Summary
    console.log('\n📊 SUMMARY:');
    console.log(`Universities processed: ${Object.keys(coursesByUniversity).length}`);
    console.log(`Total courses: ${Object.values(coursesByUniversity).reduce((sum, courses) => sum + courses.length, 0)}`);
    console.log(`Successful injections: ${totalInjections}`);

} catch (error) {
    console.error('❌ ERROR:', error.message);
}

// Helper functions
function parseCourseDescription(description) {
    const courses = [];
    const lines = description.split('\n');
    let currentCourse = null;

    lines.forEach(line => {
        line = line.trim();

        // Match course entries
        const courseMatch = line.match(/^\d+\.\s*(.+?)$/);
        if (courseMatch) {
            if (currentCourse && currentCourse.name && currentCourse.duration && currentCourse.originalFees) {
                courses.push(currentCourse);
            }

            currentCourse = {
                name: courseMatch[1].trim(),
                duration: '',
                originalFees: '',
                discountedFees: '',
                type: ''
            };
        }

        // Match duration
        const durationMatch = line.match(/Duration\s*[-–]\s*(.+)/i);
        if (durationMatch && currentCourse) {
            currentCourse.duration = durationMatch[1].trim();
        }

        // Match fees
        const feesMatch = line.match(/Online\s+.+?:\s*Rs\s*([\d,]+)\s*-\s*Discounted\s+price:\s*Rs\s*([\d,]+)/i);
        if (feesMatch && currentCourse) {
            currentCourse.originalFees = feesMatch[1].replace(/,/g, '');
            currentCourse.discountedFees = feesMatch[2].replace(/,/g, '');
        }

        // Determine course type
        if (currentCourse && currentCourse.name) {
            if (currentCourse.name.includes('MBA') || currentCourse.name.includes('MCA') ||
                currentCourse.name.includes('M.Sc') || currentCourse.name.includes('MA') ||
                currentCourse.name.includes('MCom')) {
                currentCourse.type = 'PG';
            } else if (currentCourse.name.includes('BBA') || currentCourse.name.includes('BCA') ||
                currentCourse.name.includes('B.Com') || currentCourse.name.includes('BA')) {
                currentCourse.type = 'UG';
            } else {
                currentCourse.type = 'Diploma/Certificate';
            }
        }
    });

    // Add last course
    if (currentCourse && currentCourse.name && currentCourse.duration && currentCourse.originalFees) {
        courses.push(currentCourse);
    }

    return courses;
}

function removeDuplicateCourses(courses) {
    const seen = new Set();
    return courses.filter(course => {
        const key = `${course.name}_${course.duration}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}

function generateCourseKey(courseName) {
    return courseName.toLowerCase()
        .replace(/\s+/g, '_')
        .replace(/[()]/g, '')
        .replace(/&/g, 'and')
        .replace(/,/g, '')
        .replace(/\./g, '')
        .replace(/__+/g, '_')
        .replace(/^_+|_+$/g, '');
}

function generateCourseStructure(course, courseKey) {
    const normalizedKey = `online_${courseKey}`;
    const years = parseInt(course.duration.match(/\d+/)?.[0] || '2');
    const semesters = years * 2;
    const semesterFee = Math.round(course.originalFees / semesters);

    const eligibility = course.type === 'PG'
        ? "Bachelor's degree in any discipline or equivalent qualification."
        : "10+2 or equivalent qualification from recognized board.";

    return `
        "${normalizedKey}": {
            "page": {
                "title": "${course.name}",
                "university": "University Name",
                "description": "Comprehensive ${course.name} program designed to enhance your career prospects and provide industry-relevant skills.",
                "duration": {
                    "length": "${course.duration}",
                    "semesters": "${semesters} Semesters"
                },
                "fees": {
                    "total": "₹${formatNumber(course.originalFees)}",
                    "perSemester": "₹${formatNumber(semesterFee)}"
                }
            },
            "specializations": [],
            "programBenefits": [
                {
                    "title": "Industry-Relevant Curriculum",
                    "description": "Learn from a program designed with current industry requirements and market trends."
                },
                {
                    "title": "Expert Faculty",
                    "description": "Learn from experienced academicians and industry professionals with real-world expertise."
                },
                {
                    "title": "Flexible Learning",
                    "description": "Study at your own pace with online accessibility and comprehensive learning resources."
                },
                {
                    "title": "Recognized Degree",
                    "description": "Earn a degree with the same recognition and value as traditional on-campus programs."
                }
            ],
            "curriculum": {
                "duration": "${course.duration}",
                "semesters": []
            },
            "eligibility": {
                "domestic": {
                    "educationalQualification": "${eligibility}"
                }
            },
            "admissionProcess": [
                {
                    "step": 1,
                    "title": "Register & Submit Your Documents",
                    "description": "Provide your educational and professional details, pay the registration fee and upload your documents."
                },
                {
                    "step": 2,
                    "title": "Verification & Fee Payment",
                    "description": "The university will verify your documents and eligibility. Once verified, pay your admission fee."
                },
                {
                    "step": 3,
                    "title": "Start Learning",
                    "description": "Begin your learning experience with instant access to the Learning Management System (LMS)."
                }
            ],
            "careerOpportunities": {
                "jobRoles": [],
                "industries": []
            },
            "faqs": [],
            "accreditations": []
        }`;
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

console.log('🎯 Course injection completed!');