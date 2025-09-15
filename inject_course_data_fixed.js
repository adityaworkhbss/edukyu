const fs = require('fs');
const path = require('path');

// Configuration
const collegeDataPath = '/workspaces/edukyu/src/Data Model/college_data_output.json';
const courseDataPath = '/workspaces/edukyu/src/Data Model/CoursePage/CoursePageData_final.jsx';
const backupPath = '/workspaces/edukyu/src/Data Model/CoursePage/CoursePageData_final.jsx.backup.courses2';

console.log('🔧 Course Data Injection Fix Script');
console.log('==================================\n');

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
    // Read both files
    console.log('📖 Reading source files...');
    const collegeData = JSON.parse(fs.readFileSync(collegeDataPath, 'utf8'));
    const courseDataContent = fs.readFileSync(courseDataPath, 'utf8');

    // Create backup
    console.log('💾 Creating backup of CoursePageData_final.jsx...');
    fs.writeFileSync(backupPath, courseDataContent);
    console.log(`✅ Backup created at: ${backupPath}\n`);

    // Extract course information from college data
    console.log('🔍 Extracting course information...');
    const extractedCourses = [];

    collegeData.forEach((universityData, index) => {
        Object.keys(universityData).forEach(universityKey => {
            const university = universityData[universityKey];
            const mappedKey = universityMapping[universityKey];

            if (!mappedKey) {
                console.log(`   ⚠️  No mapping found for: ${universityKey}`);
                return;
            }

            // Look for course information in the university data
            if (university.university_info) {
                Object.keys(university.university_info).forEach(sectionKey => {
                    const section = university.university_info[sectionKey];

                    // Check if this section has course data
                    if (section.course && section.course.description) {
                        console.log(`   🎓 Found courses in: ${universityKey} (→ ${mappedKey}) -> ${sectionKey}`);

                        const courseInfo = {
                            originalKey: universityKey,
                            universityKey: mappedKey,
                            sectionKey: sectionKey,
                            courseDescription: section.course.description,
                            parsedCourses: parseCourseDescription(section.course.description)
                        };

                        extractedCourses.push(courseInfo);
                    }
                });
            }
        });
    });

    console.log(`\\n📊 Extracted courses from ${extractedCourses.length} university sections\\n`);

    // Group courses by university
    console.log('🛠️  Grouping courses by university...');
    const coursesByUniversity = {};

    extractedCourses.forEach(courseInfo => {
        if (courseInfo.parsedCourses.length > 0) {
            if (!coursesByUniversity[courseInfo.universityKey]) {
                coursesByUniversity[courseInfo.universityKey] = [];
            }

            courseInfo.parsedCourses.forEach(course => {
                coursesByUniversity[courseInfo.universityKey].push({
                    ...course,
                    sourceSection: courseInfo.sectionKey
                });
            });
        }
    });

    // Remove duplicates and display
    Object.keys(coursesByUniversity).forEach(universityKey => {
        console.log(`\\n📋 ${universityKey}:`);
        const uniqueCourses = removeDuplicateCourses(coursesByUniversity[universityKey]);
        console.log(`   📚 ${uniqueCourses.length} unique courses found`);

        uniqueCourses.forEach(course => {
            console.log(`      • ${course.name} (${course.duration}) - ₹${course.originalFees} → ₹${course.discountedFees}`);
        });

        coursesByUniversity[universityKey] = uniqueCourses;
    });

    // Process each university separately to inject courses properly
    console.log('\\n🔄 Injecting course data into universities...');
    let modifiedContent = courseDataContent;
    let totalInjections = 0;

    Object.keys(coursesByUniversity).forEach(universityKey => {
        const courses = coursesByUniversity[universityKey];
        console.log(`\\n🎯 Processing ${universityKey} (${courses.length} courses):`);

        // Find the university object in the CoursePageData
        const universityRegex = new RegExp(
            `"${universityKey}":\\s*{([\\s\\S]*?)}\\s*(?=,\\s*"[^"]+"|\\s*}\\s*$)`,
            'g'
        );

        const universityMatch = universityRegex.exec(modifiedContent);
        if (universityMatch) {
            console.log(`   ✅ Found ${universityKey} structure`);

            let universityContent = universityMatch[1];

            courses.forEach(course => {
                const courseKey = generateCourseKey(course.name);
                const normalizedKey = `online_${courseKey}`;

                // Check if this course already exists
                const existingCoursePattern = new RegExp(`"${normalizedKey}":`);
                if (!existingCoursePattern.test(universityContent)) {
                    const courseStructure = generateCourseStructure(course, courseKey);

                    // Add course to university content
                    universityContent = universityContent.trim();
                    if (universityContent.endsWith(',')) {
                        universityContent = universityContent.slice(0, -1);
                    }

                    universityContent += `,${courseStructure}`;
                    totalInjections++;
                    console.log(`      ✅ Added ${course.name}`);
                } else {
                    console.log(`      ⚠️  ${course.name} already exists`);
                }
            });

            // Replace the university content in the modified content
            const newUniversityBlock = `"${universityKey}": {${universityContent}}`;
            modifiedContent = modifiedContent.replace(universityMatch[0], newUniversityBlock);

        } else {
            console.log(`   ❌ Could not find ${universityKey} structure`);
        }
    });

    // Save the modified content
    if (totalInjections > 0) {
        console.log('\\n💾 Saving modified CoursePageData...');
        fs.writeFileSync(courseDataPath, modifiedContent);
        console.log(`✅ Successfully injected ${totalInjections} courses across ${Object.keys(coursesByUniversity).length} universities!`);
    } else {
        console.log('\\n⚠️  No new courses were injected.');
    }

    // Generate summary report
    console.log('\\n📊 INJECTION SUMMARY:');
    console.log('====================');
    console.log(`📚 Total courses extracted: ${Object.values(coursesByUniversity).reduce((sum, courses) => sum + courses.length, 0)}`);
    console.log(`🎯 Successful injections: ${totalInjections}`);
    console.log(`🏛️  Universities processed: ${Object.keys(coursesByUniversity).length}`);
    console.log(`💾 Backup location: ${backupPath}`);

    // Display university breakdown
    console.log('\\n🏛️  UNIVERSITY BREAKDOWN:');
    console.log('========================');
    Object.keys(coursesByUniversity).forEach(universityKey => {
        const courses = coursesByUniversity[universityKey];
        console.log(`${universityKey}: ${courses.length} courses`);
        courses.forEach(course => {
            console.log(`   • ${course.name} (${course.type}) - ${course.duration}`);
        });
    });

} catch (error) {
    console.error('❌ ERROR:', error.message);
    console.log('\\n🔄 If needed, restore from backup:');
    console.log(`   cp "${backupPath}" "${courseDataPath}"`);
}

// Helper function to parse course description text
function parseCourseDescription(description) {
    const courses = [];
    const lines = description.split('\\n');

    let currentCourse = null;

    lines.forEach(line => {
        line = line.trim();

        // Match course entries like "1. MBA" or "2. MCA"
        const courseMatch = line.match(/^\\d+\\.\\s*(.+?)$/);
        if (courseMatch) {
            if (currentCourse) {
                courses.push(currentCourse);
            }

            currentCourse = {
                name: courseMatch[1].trim(),
                duration: '',
                originalFees: '',
                discountedFees: '',
                type: '',
                specializations: []
            };
        }

        // Match duration
        const durationMatch = line.match(/Duration\\s*[-–]\\s*(.+)/i);
        if (durationMatch && currentCourse) {
            currentCourse.duration = durationMatch[1].trim();
        }

        // Match fees with prices
        const feesMatch = line.match(/Online\\s+.+?:\\s*Rs\\s*([\\d,]+)\\s*-\\s*Discounted\\s+price:\\s*Rs\\s*([\\d,]+)/i);
        if (feesMatch && currentCourse) {
            currentCourse.originalFees = feesMatch[1].replace(/,/g, '');
            currentCourse.discountedFees = feesMatch[2].replace(/,/g, '');
        }

        // Determine course type based on name
        if (currentCourse) {
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

    // Add the last course
    if (currentCourse) {
        courses.push(currentCourse);
    }

    return courses.filter(course => course.name && course.duration && course.originalFees);
}

// Helper function to remove duplicate courses
function removeDuplicateCourses(courses) {
    const seen = new Set();
    return courses.filter(course => {
        const key = `${course.name}_${course.duration}`;
        if (seen.has(key)) {
            return false;
        }
        seen.add(key);
        return true;
    });
}

// Helper function to generate course key
function generateCourseKey(courseName) {
    return courseName.toLowerCase()
        .replace(/\\s+/g, '_')
        .replace(/[()]/g, '')
        .replace(/&/g, 'and')
        .replace(/,/g, '')
        .replace(/\\./g, '')
        .replace(/__+/g, '_')
        .replace(/^_+|_+$/g, '');
}

// Helper function to generate course structure for injection
function generateCourseStructure(course, courseKey) {
    const normalizedKey = `online_${courseKey}`;

    return `
        "${normalizedKey}": {
            "page": {
                "title": "${course.name}",
                "university": "University Name",
                "description": "Comprehensive ${course.name} program designed to enhance your career prospects and provide industry-relevant skills.",
                "duration": {
                    "length": "${course.duration}",
                    "semesters": "${getDurationInSemesters(course.duration)}"
                },
                "fees": {
                    "total": "₹${formatNumber(course.originalFees)}",
                    "perSemester": "₹${formatNumber(Math.round(course.originalFees / getSemesterCount(course.duration)))}"
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
                    "educationalQualification": "${getEligibilityText(course.type)}"
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

// Helper functions
function getDurationInSemesters(duration) {
    const years = parseInt(duration.match(/\\d+/)?.[0] || '2');
    return `${years * 2} Semesters`;
}

function getSemesterCount(duration) {
    const years = parseInt(duration.match(/\\d+/)?.[0] || '2');
    return years * 2;
}

function formatNumber(num) {
    return num.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');
}

function getEligibilityText(type) {
    switch (type) {
        case 'PG':
            return 'Bachelor\'s degree in any discipline or equivalent qualification.';
        case 'UG':
            return '10+2 or equivalent qualification from recognized board.';
        default:
            return 'Minimum qualification as per course requirements.';
    }
}

console.log('\\n🎯 Course data injection fix completed!');