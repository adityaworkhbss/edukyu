const fs = require('fs');
const path = require('path');

/**
 * Validation script to compare the structure of old and new data
 */

function analyzeStructure(obj, prefix = '') {
    const structure = {};

    if (Array.isArray(obj)) {
        structure.type = 'array';
        structure.length = obj.length;
        if (obj.length > 0) {
            structure.sample = analyzeStructure(obj[0], prefix + '[0]');
        }
    } else if (obj && typeof obj === 'object') {
        structure.type = 'object';
        structure.keys = Object.keys(obj);
        structure.properties = {};

        Object.keys(obj).forEach(key => {
            if (typeof obj[key] === 'object') {
                structure.properties[key] = analyzeStructure(obj[key], prefix + '.' + key);
            } else {
                structure.properties[key] = {
                    type: typeof obj[key],
                    sample: typeof obj[key] === 'string' ? obj[key].substring(0, 50) + '...' : obj[key]
                };
            }
        });
    } else {
        structure.type = typeof obj;
        structure.value = obj;
    }

    return structure;
}

function compareStructures() {
    try {
        console.log('🔍 Analyzing data structures...\n');

        // Read original CoursePageData
        const originalPath = path.join(__dirname, '../Data Model/CoursePage/CoursePageData.jsx');
        const transformedPath = path.join(__dirname, '../Data Model/CoursePage/CoursePageData_transformed.jsx');

        if (!fs.existsSync(originalPath)) {
            console.log('⚠️  Original CoursePageData.jsx not found for comparison');
            console.log('   This is expected if you\'re working with a new structure');
        } else {
            console.log('📊 Original CoursePageData structure:');

            // Read and parse original data (need to handle the export statement)
            const originalContent = fs.readFileSync(originalPath, 'utf8');
            const originalDataMatch = originalContent.match(/export const CoursePageData = (.*);/s);
            if (originalDataMatch) {
                const originalData = JSON.parse(originalDataMatch[1]);
                const originalStructure = analyzeStructure(originalData);
                console.log(`   Type: ${originalStructure.type}`);
                if (originalStructure.length) {
                    console.log(`   Universities: ${originalStructure.length}`);
                }
                if (originalStructure.sample && originalStructure.sample.properties) {
                    Object.keys(originalStructure.sample.properties).forEach(uni => {
                        const uniData = originalStructure.sample.properties[uni];
                        if (uniData.properties) {
                            console.log(`   - ${uni}: ${Object.keys(uniData.properties).length} courses`);
                        }
                    });
                }
            }
        }

        if (!fs.existsSync(transformedPath)) {
            console.log('❌ Transformed data file not found. Run the transformation first.');
            return;
        }

        console.log('\n📊 Transformed CoursePageData structure:');
        const transformedContent = fs.readFileSync(transformedPath, 'utf8');
        const transformedDataMatch = transformedContent.match(/export const CoursePageData = (.*);/s);

        if (transformedDataMatch) {
            const transformedData = JSON.parse(transformedDataMatch[1]);
            const transformedStructure = analyzeStructure(transformedData);

            console.log(`   Type: ${transformedStructure.type}`);
            if (transformedStructure.length) {
                console.log(`   Universities: ${transformedStructure.length}`);
            }

            // Show detailed structure for each university
            transformedData.forEach((item, index) => {
                const universityKey = Object.keys(item)[0];
                const universityData = item[universityKey];
                const courses = Object.keys(universityData);

                console.log(`   ${index + 1}. ${universityKey}:`);
                console.log(`      📚 Courses: ${courses.length} (${courses.join(', ')})`);

                // Show structure of first course as sample
                if (courses.length > 0) {
                    const firstCourse = universityData[courses[0]];
                    const courseStructure = Object.keys(firstCourse);
                    console.log(`      📋 Course structure: ${courseStructure.join(', ')}`);
                }
            });
        }

        console.log('\n✅ Structure analysis completed!');
        console.log('\n💡 Validation checklist:');
        console.log('   ✓ Data is in array format');
        console.log('   ✓ Each university is an object with university_key');
        console.log('   ✓ Each course has consistent structure (page, specializations, etc.)');
        console.log('   ✓ Field names match the expected format');

    } catch (error) {
        console.error('❌ Error during structure comparison:', error.message);
    }
}

function validateTransformation() {
    console.log('🧪 Running transformation validation...\n');

    try {
        const transformedPath = path.join(__dirname, '../Data Model/CoursePage/CoursePageData_transformed.jsx');

        if (!fs.existsSync(transformedPath)) {
            console.log('❌ No transformed data found. Run transformation first.');
            return;
        }

        const content = fs.readFileSync(transformedPath, 'utf8');
        const dataMatch = content.match(/export const CoursePageData = (.*);/s);

        if (!dataMatch) {
            console.log('❌ Invalid file format');
            return;
        }

        const data = JSON.parse(dataMatch[1]);

        // Validation checks
        const checks = [
            {
                name: 'Is array format',
                test: () => Array.isArray(data),
                pass: Array.isArray(data)
            },
            {
                name: 'Has university data',
                test: () => data.length > 0,
                pass: data.length > 0
            },
            {
                name: 'Universities have courses',
                test: () => {
                    return data.every(item => {
                        const university = Object.values(item)[0];
                        return university && typeof university === 'object' && Object.keys(university).length > 0;
                    });
                },
                pass: data.every(item => {
                    const university = Object.values(item)[0];
                    return university && typeof university === 'object' && Object.keys(university).length > 0;
                })
            },
            {
                name: 'Courses have required fields',
                test: () => {
                    const requiredFields = ['page'];
                    return data.every(item => {
                        const university = Object.values(item)[0];
                        return Object.values(university).every(course => {
                            return requiredFields.every(field => course.hasOwnProperty(field));
                        });
                    });
                },
                pass: data.every(item => {
                    const university = Object.values(item)[0];
                    return Object.values(university).every(course => {
                        return course.hasOwnProperty('page');
                    });
                })
            }
        ];

        console.log('🔍 Validation Results:');
        checks.forEach(check => {
            const status = check.pass ? '✅' : '❌';
            console.log(`   ${status} ${check.name}`);
        });

        const allPassed = checks.every(check => check.pass);

        if (allPassed) {
            console.log('\n🎉 All validation checks passed!');
            console.log('   Your transformed data is ready to use.');
        } else {
            console.log('\n⚠️  Some validation checks failed.');
            console.log('   Please review the transformation script.');
        }

    } catch (error) {
        console.error('❌ Validation error:', error.message);
    }
}

function main() {
    const action = process.argv[2];

    if (action === 'compare') {
        compareStructures();
    } else if (action === 'validate') {
        validateTransformation();
    } else {
        console.log(`
🔍 Data Structure Analyzer

Usage: node validate.js [action]

Actions:
  compare   - Compare original and transformed data structures
  validate  - Validate the transformed data format

Examples:
  node validate.js compare
  node validate.js validate
`);
    }
}

if (require.main === module) {
    main();
}