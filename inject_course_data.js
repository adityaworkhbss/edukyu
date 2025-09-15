const fs = require('fs');
const path = require('path');

// Configuration
const collegeDataPath = '/workspaces/edukyu/src/Data Model/college_data_output.json';
const courseDataPath = '/workspaces/edukyu/src/Data Model/CoursePage/CoursePageData_final.jsx';
const backupPath = '/workspaces/edukyu/src/Data Model/CoursePage/CoursePageData_final.jsx.backup.courses';

console.log('🚀 Course Data Injection Script');
console.log('===============================\n');

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

            // Look for course information in the university data
            if (university.university_info) {
                Object.keys(university.university_info).forEach(sectionKey => {
                    const section = university.university_info[sectionKey];

                    // Check if this section has course data
                    if (section.course && section.course.description) {
                        console.log(`   🎓 Found courses in: ${universityKey} -> ${sectionKey}`);

                        const courseInfo = {
                            universityKey: universityKey,
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

    console.log(`\n📊 Extracted courses from ${extractedCourses.length} university sections\n`);

    // Parse course data content to understand structure
    console.log('🔧 Analyzing CoursePageData structure...');

    // Find university structures in the course data
    const universityMatches = extractedCourses.map(courseInfo => {
        // Try to find matching university in course data
        const universityPattern = new RegExp(`"${courseInfo.universityKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}":\\s*{`, 'g');
        const match = universityPattern.exec(courseDataContent);

        if (match) {
            console.log(`   ✅ Found ${courseInfo.universityKey} in CoursePageData`);
            return {
                ...courseInfo,
                foundInCourseData: true,
                matchIndex: match.index
            };
        } else {
            console.log(`   ❌ ${courseInfo.universityKey} not found in CoursePageData`);
            return {
                ...courseInfo,
                foundInCourseData: false
            };
        }
    });

    // Generate course injection code
    console.log('\n🛠️  Generating course structures...');

    universityMatches.forEach(courseInfo => {
        if (courseInfo.foundInCourseData && courseInfo.parsedCourses.length > 0) {
            console.log(`\n📋 ${courseInfo.universityKey}:`);
            console.log(`   📚 ${courseInfo.parsedCourses.length} courses found`);

            courseInfo.parsedCourses.forEach(course => {
                console.log(`      • ${course.name} (${course.duration}) - ₹${course.originalFees} → ₹${course.discountedFees}`);
            });
        }
    });

    // Inject course data into new university structures
    console.log('\n🔄 Injecting course data...');
    let modifiedContent = courseDataContent;
    let totalInjections = 0;

    universityMatches.forEach(courseInfo => {
        if (courseInfo.foundInCourseData && courseInfo.parsedCourses.length > 0) {

            // Generate course listings for each university
            courseInfo.parsedCourses.forEach(course => {
                const courseKey = course.name.toLowerCase()
                    .replace(/\s+/g, '_')
                    .replace(/[()]/g, '')
                    .replace(/&/g, 'and')
                    .replace(/,/g, '')
                    .replace(/__+/g, '_');

                const courseStructure = generateCourseStructure(course, courseKey);

                // Try to inject after existing courses in the university
                const universityPattern = new RegExp(
                    `("${courseInfo.universityKey}":\\s*{[^}]*)(})(\\s*,?)`,
                    'g'
                );

                const replacement = `$1,${courseStructure}$2$3`;

                if (universityPattern.test(modifiedContent)) {
                    modifiedContent = modifiedContent.replace(universityPattern, replacement);
                    totalInjections++;
                    console.log(`   ✅ Injected ${course.name} into ${courseInfo.universityKey}`);
                }
            });
        }
    });

    // Save the modified content
    if (totalInjections > 0) {
        console.log('\n💾 Saving modified CoursePageData...');
        fs.writeFileSync(courseDataPath, modifiedContent);
        console.log(`✅ Successfully injected ${totalInjections} courses!`);
    } else {
        console.log('\n⚠️  No courses were injected. Check the data structure.');
    }

    // Generate summary report
    console.log('\n📊 INJECTION SUMMARY:');
    console.log('====================');
    console.log(`📚 Total courses extracted: ${extractedCourses.reduce((sum, ci) => sum + ci.parsedCourses.length, 0)}`);
    console.log(`🎯 Successful injections: ${totalInjections}`);
    console.log(`🏛️  Universities processed: ${extractedCourses.length}`);
    console.log(`💾 Backup location: ${backupPath}`);

    // Validation
    console.log('\n🔍 VALIDATION:');
    console.log('=============');

    try {
        // Try to parse the modified content as JavaScript
        eval(`const testData = ${modifiedContent.replace('export const CoursePageData =', '')}`);
        console.log('✅ Modified file syntax is valid');
    } catch (error) {
        console.log('❌ Syntax error in modified file:', error.message);
        console.log('🔄 Restoring from backup...');
        fs.writeFileSync(courseDataPath, courseDataContent);
    }

} catch (error) {
    console.error('❌ ERROR:', error.message);
    console.log('\n🔄 If needed, restore from backup:');
    console.log(`   cp "${backupPath}" "${courseDataPath}"`);
}

// Helper function to parse course description text
function parseCourseDescription(description) {
    const courses = [];
    const lines = description.split('\n');

    let currentCourse = null;

    lines.forEach(line => {
        line = line.trim();

        // Match course entries like "1. MBA" or "2. MCA"
        const courseMatch = line.match(/^\d+\.\s*(.+?)$/);
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
        const durationMatch = line.match(/Duration\s*[-–]\s*(.+)/i);
        if (durationMatch && currentCourse) {
            currentCourse.duration = durationMatch[1].trim();
        }

        // Match fees with prices
        const feesMatch = line.match(/Online\s+.+?:\s*Rs\s*([\d,]+)\s*-\s*Discounted\s+price:\s*Rs\s*([\d,]+)/i);
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

    return courses.filter(course => course.name && course.duration);
}

// Helper function to generate course structure for injection
function generateCourseStructure(course, courseKey) {
    const normalizedKey = `online_${courseKey}`;

    return `
        "${normalizedKey}": {
            "page": {
                "title": "${course.name}",
                "university": "University Name",
                "description": "Comprehensive ${course.name} program designed to enhance your career prospects.",
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
                    "description": "Learn from a program designed with current industry requirements in mind."
                },
                {
                    "title": "Expert Faculty",
                    "description": "Learn from experienced academicians and industry professionals."
                },
                {
                    "title": "Flexible Learning",
                    "description": "Study at your own pace with online accessibility."
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
                    "description": "Provide your educational and professional details."
                },
                {
                    "step": 2,
                    "title": "Verification & Fee Payment",
                    "description": "Document verification and fee payment."
                },
                {
                    "step": 3,
                    "title": "Start Learning",
                    "description": "Begin your learning journey."
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
    const years = parseInt(duration.match(/\d+/)?.[0] || '2');
    return `${years * 2} Semesters`;
}

function getSemesterCount(duration) {
    const years = parseInt(duration.match(/\d+/)?.[0] || '2');
    return years * 2;
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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

console.log('\n🎯 Course extraction and injection completed!');
