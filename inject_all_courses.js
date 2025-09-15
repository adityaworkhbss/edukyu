const fs = require('fs');

console.log('🚀 Complete Course Data Injection Script');
console.log('========================================\n');

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
    console.log('📖 Reading source files...');
    const collegeData = JSON.parse(fs.readFileSync('/workspaces/edukyu/src/Data Model/college_data_output.json', 'utf8'));
    const courseDataContent = fs.readFileSync('/workspaces/edukyu/src/Data Model/CoursePage/CoursePageData_final.jsx', 'utf8');

    // Create backup
    console.log('💾 Creating backup...');
    fs.writeFileSync('/workspaces/edukyu/src/Data Model/CoursePage/CoursePageData_final.jsx.backup.complete', courseDataContent);
    console.log('✅ Backup created\n');

    // Extract ALL course information
    console.log('🔍 Extracting course information from all universities...');
    const allCoursesByUniversity = {};

    collegeData.forEach((universityData, index) => {
        Object.keys(universityData).forEach(universityKey => {
            const university = universityData[universityKey];
            const mappedKey = universityMapping[universityKey];

            if (!mappedKey) {
                console.log(`   ⚠️  No mapping found for: ${universityKey}`);
                return;
            }

            console.log(`   🎓 Processing: ${universityKey} → ${mappedKey}`);

            if (!allCoursesByUniversity[mappedKey]) {
                allCoursesByUniversity[mappedKey] = [];
            }

            if (university.university_info) {
                Object.keys(university.university_info).forEach(sectionKey => {
                    const section = university.university_info[sectionKey];

                    if (section.course && section.course.description) {
                        console.log(`      📚 Found courses in section: ${sectionKey}`);
                        const parsedCourses = parseCourseDescription(section.course.description);

                        parsedCourses.forEach(course => {
                            allCoursesByUniversity[mappedKey].push({
                                ...course,
                                sourceSection: sectionKey
                            });
                        });
                    }
                });
            }
        });
    });

    // Remove duplicates and display summary
    console.log('\n🛠️  Processing and deduplicating courses...');
    Object.keys(allCoursesByUniversity).forEach(universityKey => {
        const uniqueCourses = removeDuplicateCourses(allCoursesByUniversity[universityKey]);
        allCoursesByUniversity[universityKey] = uniqueCourses;

        console.log(`📋 ${universityKey}: ${uniqueCourses.length} unique courses`);
        uniqueCourses.forEach(course => {
            console.log(`   • ${course.name} (${course.duration}) - ₹${formatNumber(course.originalFees)}`);
        });
    });

    // Check which universities exist in CoursePageData
    console.log('\n🔍 Checking which universities exist in CoursePageData...');
    const existingUniversities = [];
    Object.keys(allCoursesByUniversity).forEach(universityKey => {
        const universityPattern = new RegExp(`"${universityKey}":\\s*{`);
        if (universityPattern.test(courseDataContent)) {
            existingUniversities.push(universityKey);
            console.log(`   ✅ Found: ${universityKey}`);
        } else {
            console.log(`   ❌ Not found: ${universityKey}`);
        }
    });

    // Inject courses into existing universities
    console.log(`\n🔄 Injecting courses into ${existingUniversities.length} universities...\n`);
    let modifiedContent = courseDataContent;
    let totalInjections = 0;

    existingUniversities.forEach(universityKey => {
        const courses = allCoursesByUniversity[universityKey];
        console.log(`🎯 Processing ${universityKey} (${courses.length} courses):`);

        courses.forEach(course => {
            const courseKey = generateCourseKey(course.name);
            const normalizedKey = `online_${courseKey}`;

            // Check if course already exists
            const existingPattern = new RegExp(`"${normalizedKey}":\\s*{`);
            if (existingPattern.test(modifiedContent)) {
                console.log(`   ⚠️  ${course.name} already exists`);
                return;
            }

            // Find the university structure and inject the course
            // Use a more specific pattern to match the university block
            const universityStartPattern = new RegExp(`"${universityKey}":\\s*{`);
            const startMatch = universityStartPattern.exec(modifiedContent);

            if (startMatch) {
                // Find the end of this university block by counting braces
                let depth = 0;
                let endIndex = startMatch.index + startMatch[0].length;

                for (let i = endIndex; i < modifiedContent.length; i++) {
                    if (modifiedContent[i] === '{') depth++;
                    if (modifiedContent[i] === '}') {
                        if (depth === 0) {
                            endIndex = i;
                            break;
                        }
                        depth--;
                    }
                }

                // Extract the university content
                const beforeUniversity = modifiedContent.substring(0, startMatch.index);
                const universityHeader = modifiedContent.substring(startMatch.index, startMatch.index + startMatch[0].length);
                const universityContent = modifiedContent.substring(startMatch.index + startMatch[0].length, endIndex);
                const afterUniversity = modifiedContent.substring(endIndex);

                // Generate course structure and inject
                const courseStructure = generateCourseStructure(course, courseKey);

                // Add comma if needed
                const trimmedContent = universityContent.trim();
                const needsComma = trimmedContent.length > 0 && !trimmedContent.endsWith(',');
                const separator = needsComma ? ',' : '';

                const newUniversityContent = universityContent + separator + courseStructure;
                modifiedContent = beforeUniversity + universityHeader + newUniversityContent + afterUniversity;

                totalInjections++;
                console.log(`   ✅ Injected: ${course.name}`);
            } else {
                console.log(`   ❌ Could not find university structure for ${universityKey}`);
            }
        });

        console.log(''); // Empty line for readability
    });

    // Save the result
    if (totalInjections > 0) {
        console.log('💾 Saving modified CoursePageData...');
        fs.writeFileSync('/workspaces/edukyu/src/Data Model/CoursePage/CoursePageData_final.jsx', modifiedContent);
        console.log(`✅ Successfully injected ${totalInjections} courses!\n`);
    } else {
        console.log('⚠️  No new courses were injected.\n');
    }

    // Final summary
    console.log('📊 FINAL SUMMARY:');
    console.log('=================');
    console.log(`🏛️  Universities found in data: ${Object.keys(allCoursesByUniversity).length}`);
    console.log(`🏛️  Universities existing in CoursePageData: ${existingUniversities.length}`);
    console.log(`📚 Total courses extracted: ${Object.values(allCoursesByUniversity).reduce((sum, courses) => sum + courses.length, 0)}`);
    console.log(`🎯 Successful injections: ${totalInjections}`);
    console.log(`💾 Backup location: CoursePageData_final.jsx.backup.complete`);

    // Detailed breakdown
    console.log('\n🏛️  DETAILED BREAKDOWN:');
    console.log('=====================');
    existingUniversities.forEach(universityKey => {
        const courses = allCoursesByUniversity[universityKey];
        console.log(`\n${universityKey}:`);
        courses.forEach(course => {
            console.log(`   • ${course.name} (${course.type}) - ${course.duration} - ₹${formatNumber(course.originalFees)}`);
        });
    });

    // Validation
    console.log('\n🔍 VALIDATION:');
    console.log('=============');
    try {
        // Basic syntax check
        const testContent = modifiedContent.replace('export const CoursePageData =', 'const testData =');
        eval(testContent);
        console.log('✅ Modified file syntax is valid');
    } catch (error) {
        console.log('❌ Syntax error detected:', error.message);
    }

} catch (error) {
    console.error('❌ ERROR:', error.message);
    console.error(error.stack);
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

console.log('\n🎯 Complete course injection finished!');