const fs = require('fs');
const path = require('path');

// Read the CoursePageData_final.jsx file
const courseDataPath = '/workspaces/edukyu/src/Data Model/CoursePage/CoursePageData_final.jsx';
const imageDirectoryPath = '/workspaces/edukyu/public/Resources/Images/output_images';

console.log('🔍 Image Path Validation Script');
console.log('================================\n');

try {
    // Read the course data file
    const courseDataContent = fs.readFileSync(courseDataPath, 'utf8');

    // Get all existing image files
    const existingFiles = fs.readdirSync(imageDirectoryPath);
    console.log(`📁 Found ${existingFiles.length} files in output_images directory\n`);

    // Extract all image paths from the course data
    const imagePathRegex = /["']\/Resources\/Images\/output_images\/([^"']+)["']/g;
    const imagePaths = [];
    let match;

    while ((match = imagePathRegex.exec(courseDataContent)) !== null) {
        imagePaths.push(match[1]); // Get the filename part
    }

    console.log(`🖼️  Found ${imagePaths.length} image references in CoursePageData_final.jsx\n`);

    // Check each image path
    const missingFiles = [];
    const correctFiles = [];
    const suggestedFixes = [];

    imagePaths.forEach(imagePath => {
        if (existingFiles.includes(imagePath)) {
            correctFiles.push(imagePath);
        } else {
            missingFiles.push(imagePath);

            // Try to find similar files (fuzzy matching)
            const possibleMatches = existingFiles.filter(file => {
                // Check if it's a similar NIU file with different naming
                if (imagePath.includes('niu_university_info') && file.includes('niu')) {
                    const originalParts = imagePath.split('_');
                    const fileParts = file.split('_');

                    // Check if it's the same type of image (accreditations, hiring_partner, etc.)
                    if (imagePath.includes('accreditations') && file.includes('accreditations')) {
                        // Extract the number at the end
                        const originalNum = imagePath.match(/_(\d+)\.png$/);
                        const fileNum = file.match(/_(\d+)\.png$/);

                        if (originalNum && fileNum && originalNum[1] === fileNum[1]) {
                            return true;
                        }
                    }

                    if (imagePath.includes('hiring_partner') && file.includes('hiring_partner')) {
                        const originalNum = imagePath.match(/_(\d+)\.png$/);
                        const fileNum = file.match(/_(\d+)\.png$/);

                        if (originalNum && fileNum && originalNum[1] === fileNum[1]) {
                            return true;
                        }
                    }
                }

                return false;
            });

            if (possibleMatches.length > 0) {
                suggestedFixes.push({
                    original: imagePath,
                    suggested: possibleMatches[0]
                });
            }
        }
    });

    // Report results
    console.log('📊 VALIDATION RESULTS');
    console.log('=====================\n');

    console.log(`✅ Correct paths: ${correctFiles.length}`);
    console.log(`❌ Missing files: ${missingFiles.length}`);
    console.log(`🔧 Suggested fixes: ${suggestedFixes.length}\n`);

    if (missingFiles.length > 0) {
        console.log('❌ MISSING FILES:');
        console.log('=================');
        missingFiles.forEach(file => {
            console.log(`   - ${file}`);
        });
        console.log('\n');
    }

    if (suggestedFixes.length > 0) {
        console.log('🔧 SUGGESTED FIXES:');
        console.log('==================');
        suggestedFixes.forEach(fix => {
            console.log(`   ❌ ${fix.original}`);
            console.log(`   ✅ ${fix.suggested}`);
            console.log(`   ---`);
        });
        console.log('\n');
    }

    // Check for specific issue mentioned by user
    console.log('🎯 SPECIFIC ISSUE CHECK:');
    console.log('========================');
    const specificIssue = 'niu_university_info_about_ranking_accreditations_common_for_all_niu_course_and_specialization_5.png';
    const expectedCorrect = 'niu_about_ranking_accreditations_common_for_all_niu_course_and_specialization_5.png';

    if (imagePaths.includes(specificIssue)) {
        console.log(`❌ Found problematic path: ${specificIssue}`);
        if (existingFiles.includes(expectedCorrect)) {
            console.log(`✅ Correct file exists: ${expectedCorrect}`);
            console.log(`🔧 This path needs to be updated in the data file`);
        }
    }

    // Generate detailed report
    console.log('\n📋 DETAILED ANALYSIS:');
    console.log('=====================');

    // Analyze NIU files specifically
    const niuReferencedFiles = imagePaths.filter(path => path.includes('niu_university_info'));
    const niuExistingFiles = existingFiles.filter(file => file.includes('niu'));

    console.log(`\n🏢 NIU University Files:`);
    console.log(`   Referenced: ${niuReferencedFiles.length}`);
    console.log(`   Available: ${niuExistingFiles.length}`);

    const niuMismatches = niuReferencedFiles.filter(ref => !existingFiles.includes(ref));
    if (niuMismatches.length > 0) {
        console.log(`\n   ❌ NIU Mismatches: ${niuMismatches.length}`);
        niuMismatches.forEach(mismatch => {
            // Try to find the correct version
            const correctVersion = existingFiles.find(file => {
                if (file.includes('niu') && file.includes('accreditations')) {
                    const mismatchNum = mismatch.match(/_(\d+)\.png$/);
                    const fileNum = file.match(/_(\d+)\.png$/);
                    return mismatchNum && fileNum && mismatchNum[1] === fileNum[1];
                }
                return false;
            });

            console.log(`      ${mismatch} → ${correctVersion || 'NOT FOUND'}`);
        });
    }

} catch (error) {
    console.error('❌ Error:', error.message);
}