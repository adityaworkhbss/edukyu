const fs = require('fs');

console.log('🔄 Course Field Extraction and Injection Script');
console.log('==============================================\n');

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
    fs.writeFileSync('/workspaces/edukyu/src/Data Model/CoursePage/CoursePageData_final.jsx.backup.courses_field', courseDataContent);
    console.log('✅ Backup created\n');

    // Extract course field data from all universities
    console.log('🔍 Extracting "course" field data from all universities...');
    const coursesByUniversity = {};

    collegeData.forEach((universityData, index) => {
        Object.keys(universityData).forEach(universityKey => {
            const university = universityData[universityKey];
            const mappedKey = universityMapping[universityKey];

            if (!mappedKey) {
                console.log(`   ⚠️  No mapping found for: ${universityKey}`);
                return;
            }

            console.log(`   🎓 Processing: ${universityKey} → ${mappedKey}`);

            if (!coursesByUniversity[mappedKey]) {
                coursesByUniversity[mappedKey] = [];
            }

            if (university.university_info) {
                Object.keys(university.university_info).forEach(sectionKey => {
                    const section = university.university_info[sectionKey];

                    // Look for "course" field in each section
                    if (section.course && section.course.description) {
                        console.log(`      📚 Found course field in section: ${sectionKey}`);
                        console.log(`      📝 Sample content: ${section.course.description.substring(0, 100)}...`);

                        const parsedCourses = parseCoursesFromDescription(section.course.description, universityKey);
                        console.log(`      ✅ Parsed ${parsedCourses.length} courses from this section`);

                        parsedCourses.forEach(course => {
                            coursesByUniversity[mappedKey].push({
                                ...course,
                                sourceSection: sectionKey,
                                sourceUniversity: universityKey
                            });
                        });
                    }
                });
            }
        });
    });

    // Remove duplicates and display summary
    console.log('\n🛠️  Processing and deduplicating courses...');
    Object.keys(coursesByUniversity).forEach(universityKey => {
        const uniqueCourses = removeDuplicateCourses(coursesByUniversity[universityKey]);
        coursesByUniversity[universityKey] = uniqueCourses;

        console.log(`📋 ${universityKey}: ${uniqueCourses.length} unique courses`);
        uniqueCourses.forEach(course => {
            console.log(`   • ${course.name} (${course.duration}) - ₹${formatNumber(course.originalFees)} ${course.discountedFees ? '→ ₹' + formatNumber(course.discountedFees) : ''}`);
        });
    });

    // Inject courses field into universities
    console.log('\n🔄 Injecting courses field into universities...\n');
    let modifiedContent = courseDataContent;
    let totalInjections = 0;

    Object.keys(coursesByUniversity).forEach(universityKey => {
        const courses = coursesByUniversity[universityKey];
        if (courses.length === 0) {
            console.log(`🎯 ${universityKey}: No courses to inject\n`);
            return;
        }

        console.log(`🎯 Processing ${universityKey} (${courses.length} courses):`);

        // Find the university structure
        const universityPattern = new RegExp(`("${universityKey}":\\s*{)([\\s\\S]*?)(}\\s*(?:,\\s*"|\\s*}\\s*$))`, 'g');
        const match = universityPattern.exec(modifiedContent);

        if (match) {
            console.log(`   ✅ Found ${universityKey} structure`);

            // Check if courses field already exists
            const coursesFieldPattern = new RegExp(`"courses":`);
            if (coursesFieldPattern.test(match[2])) {
                console.log(`   ⚠️  courses field already exists, replacing...`);
                // Remove existing courses field
                const withoutCourses = match[2].replace(/"courses":\s*\[[^\]]*\],?\s*/g, '');
                match[2] = withoutCourses;
            }

            // Generate courses array
            const coursesArray = generateCoursesArray(courses);

            // Add courses field to university content
            const beforeUniversity = modifiedContent.substring(0, match.index);
            const universityHeader = match[1];
            let universityContent = match[2].trim();
            const afterUniversity = match[3] + modifiedContent.substring(match.index + match[0].length);

            // Add comma if needed
            if (universityContent.length > 0 && !universityContent.endsWith(',')) {
                universityContent += ',';
            }

            universityContent += `\n        "courses": ${coursesArray}`;

            modifiedContent = beforeUniversity + universityHeader + universityContent + afterUniversity;
            totalInjections++;
            console.log(`   ✅ Injected courses field with ${courses.length} courses`);
        } else {
            console.log(`   ❌ Could not find university structure for ${universityKey}`);
        }

        console.log(''); // Empty line for readability
    });

    // Save the result
    if (totalInjections > 0) {
        console.log('💾 Saving modified CoursePageData...');
        fs.writeFileSync('/workspaces/edukyu/src/Data Model/CoursePage/CoursePageData_final.jsx', modifiedContent);
        console.log(`✅ Successfully injected courses field into ${totalInjections} universities!\n`);
    } else {
        console.log('⚠️  No courses fields were injected.\n');
    }

    // Final summary
    console.log('📊 FINAL SUMMARY:');
    console.log('=================');
    console.log(`🏛️  Universities found in data: ${Object.keys(coursesByUniversity).length}`);
    console.log(`📚 Total courses extracted: ${Object.values(coursesByUniversity).reduce((sum, courses) => sum + courses.length, 0)}`);
    console.log(`🎯 Successful injections: ${totalInjections}`);
    console.log(`💾 Backup location: CoursePageData_final.jsx.backup.courses_field`);

    // Detailed breakdown
    console.log('\n🏛️  DETAILED BREAKDOWN:');
    console.log('=====================');
    Object.keys(coursesByUniversity).forEach(universityKey => {
        const courses = coursesByUniversity[universityKey];
        console.log(`\n${universityKey}:`);
        courses.forEach(course => {
            console.log(`   • ${course.name} (${course.type}) - ${course.duration} - ₹${formatNumber(course.originalFees)} ${course.discountedFees ? '(Discounted: ₹' + formatNumber(course.discountedFees) + ')' : ''}`);
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

// Parse courses from description text
function parseCoursesFromDescription(description, universityKey) {
    const courses = [];
    const lines = description.split('\n');
    let currentCourse = null;

    console.log(`      🔍 Parsing format for ${universityKey}...`);

    lines.forEach((line, index) => {
        line = line.trim();

        // Match course entries - multiple formats
        const courseMatch = line.match(/^\d+\.\s*(.+?)$/);
        if (courseMatch) {
            // Save previous course if valid
            if (currentCourse && isValidCourse(currentCourse)) {
                courses.push(currentCourse);
            }

            currentCourse = {
                name: courseMatch[1].trim(),
                duration: '',
                originalFees: '',
                discountedFees: '',
                type: ''
            };

            console.log(`         📖 Found course: ${currentCourse.name}`);
        }

        if (!currentCourse) return;

        // Match duration - multiple formats
        const durationMatches = [
            line.match(/Duration\s*[-–]\s*(.+)/i),
            line.match(/Duration\s*:\s*(.+)/i),
            line.match(/Duration\s+(.+)/i)
        ];

        const durationMatch = durationMatches.find(match => match);
        if (durationMatch && currentCourse) {
            currentCourse.duration = durationMatch[1].trim();
            console.log(`         ⏱️  Duration: ${currentCourse.duration}`);
        }

        // Match fees - NIU format (with discounted price)
        const niuFeesMatch = line.match(/Online\s+.+?:\s*Rs\s*([\d,]+)\s*-\s*Discounted\s+price:\s*Rs\s*([\d,]+)/i);
        if (niuFeesMatch && currentCourse) {
            currentCourse.originalFees = niuFeesMatch[1].replace(/,/g, '');
            currentCourse.discountedFees = niuFeesMatch[2].replace(/,/g, '');
            console.log(`         💰 NIU Fees: ₹${currentCourse.originalFees} → ₹${currentCourse.discountedFees}`);
        }

        // Match fees - Amity format (simple Rs format)
        const amityFeesMatch = line.match(/Rs\s*[-–]?\s*([\d,]+)/i);
        if (amityFeesMatch && currentCourse && !currentCourse.originalFees) {
            currentCourse.originalFees = amityFeesMatch[1].replace(/,/g, '');
            currentCourse.discountedFees = ''; // No discounted price in Amity format
            console.log(`         💰 Amity Fees: ₹${currentCourse.originalFees}`);
        }

        // Determine course type
        if (currentCourse && currentCourse.name) {
            if (currentCourse.name.includes('MBA') || currentCourse.name.includes('MCA') ||
                currentCourse.name.includes('M.Sc') || currentCourse.name.includes('MA') ||
                currentCourse.name.includes('MCom') || currentCourse.name.includes('MSc')) {
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
    if (currentCourse && isValidCourse(currentCourse)) {
        courses.push(currentCourse);
    }

    console.log(`      ✅ Successfully parsed ${courses.length} valid courses`);
    return courses;
}

// Validate if a course has required fields
function isValidCourse(course) {
    return course.name && course.duration && course.originalFees;
}

// Helper functions
function removeDuplicateCourses(courses) {
    const seen = new Set();
    return courses.filter(course => {
        const key = `${course.name}_${course.duration}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}

function generateCoursesArray(courses) {
    const coursesArray = courses.map(course => {
        const displayFees = course.discountedFees || course.originalFees;

        return {
            name: course.name,
            duration: course.duration,
            type: course.type,
            fees: {
                original: course.originalFees ? `₹${formatNumber(course.originalFees)}` : '',
                discounted: course.discountedFees ? `₹${formatNumber(course.discountedFees)}` : '',
                display: `₹${formatNumber(displayFees)}`
            },
            sourceSection: course.sourceSection
        };
    });

    return JSON.stringify(coursesArray, null, 8);
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

console.log('\n🎯 Course field extraction and injection completed!');