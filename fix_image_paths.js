const fs = require('fs');
const path = require('path');

// Configuration
const courseDataPath = '/workspaces/edukyu/src/Data Model/CoursePage/CoursePageData_final.jsx';
const imageDirectoryPath = '/workspaces/edukyu/public/Resources/Images/output_images';
const backupPath = '/workspaces/edukyu/src/Data Model/CoursePage/CoursePageData_final.jsx.backup';

console.log('🔧 Image Path Fixing Script');
console.log('===========================\n');

// Define all the path corrections needed based on the validation results
const pathCorrections = [
    // NIU University Info corrections
    {
        pattern: /niu_university_info_about_ranking_accreditations_common_for_all_niu_course_and_specialization_/g,
        replacement: 'niu_about_ranking_accreditations_common_for_all_niu_course_and_specialization_',
        description: 'NIU accreditation images'
    },
    {
        pattern: /niu_university_info_1_about_mba_hiring_partner_common_for_all_niu_data_/g,
        replacement: 'niu_about_1_about_mba_hiring_partner_common_for_all_niu_data_',
        description: 'NIU MBA hiring partner images'
    },
    {
        pattern: /niu_university_info_9_about_bcom_faq_/g,
        replacement: 'niu_about_9_about_bcom_faq_',
        description: 'NIU BCom FAQ images'
    },
    {
        pattern: /niu_university_info_1_about_mba_degree_/g,
        replacement: 'niu_about_1_about_mba_degree_',
        description: 'NIU MBA degree images'
    }
];

try {
    // Read the original file
    console.log('📖 Reading CoursePageData_final.jsx...');
    const originalContent = fs.readFileSync(courseDataPath, 'utf8');

    // Create backup
    console.log('💾 Creating backup...');
    fs.writeFileSync(backupPath, originalContent);
    console.log(`✅ Backup created at: ${backupPath}\n`);

    // Apply all corrections
    let correctedContent = originalContent;
    let totalReplacements = 0;

    console.log('🔄 Applying corrections:\n');

    pathCorrections.forEach((correction, index) => {
        const beforeCount = (correctedContent.match(correction.pattern) || []).length;
        correctedContent = correctedContent.replace(correction.pattern, correction.replacement);
        const afterCount = (correctedContent.match(correction.pattern) || []).length;
        const replacements = beforeCount - afterCount;

        console.log(`${index + 1}. ${correction.description}:`);
        console.log(`   📊 Replacements made: ${replacements}`);
        console.log(`   🔍 Pattern: ${correction.pattern.source}`);
        console.log(`   ✅ Replacement: ${correction.replacement}`);
        console.log('');

        totalReplacements += replacements;
    });

    // Write the corrected file
    console.log('💾 Saving corrected file...');
    fs.writeFileSync(courseDataPath, correctedContent);

    console.log('✅ CORRECTION COMPLETE!');
    console.log('======================');
    console.log(`📊 Total replacements made: ${totalReplacements}`);
    console.log(`📁 Original file backed up to: ${backupPath}`);
    console.log(`📁 Corrected file saved to: ${courseDataPath}`);

    // Verify corrections by checking if the files now exist
    console.log('\n🔍 VERIFICATION:');
    console.log('===============');

    const existingFiles = fs.readdirSync(imageDirectoryPath);
    const imagePathRegex = /["']\/Resources\/Images\/output_images\/([^"']+)["']/g;
    const imagePaths = [];
    let match;

    while ((match = imagePathRegex.exec(correctedContent)) !== null) {
        imagePaths.push(match[1]);
    }

    // Count how many paths now exist
    const existingPaths = imagePaths.filter(imagePath => existingFiles.includes(imagePath));
    const missingPaths = imagePaths.filter(imagePath => !existingFiles.includes(imagePath));

    console.log(`✅ Valid paths: ${existingPaths.length}`);
    console.log(`❌ Still missing: ${missingPaths.length}`);

    if (missingPaths.length > 0) {
        console.log('\n⚠️  REMAINING ISSUES:');
        console.log('===================');
        console.log('Some paths are still incorrect. First 10 examples:');
        missingPaths.slice(0, 10).forEach(path => {
            console.log(`   ❌ ${path}`);
        });

        if (missingPaths.length > 10) {
            console.log(`   ... and ${missingPaths.length - 10} more`);
        }
    }

    console.log('\n🎉 Script completed successfully!');
    console.log('\n📝 NEXT STEPS:');
    console.log('=============');
    console.log('1. Review the changes in your CoursePageData_final.jsx file');
    console.log('2. Test your application to ensure images load correctly');
    console.log('3. If there are issues, restore from backup and adjust the script');
    console.log('4. Run the validation script again to check remaining issues');

} catch (error) {
    console.error('❌ ERROR:', error.message);
    console.log('\n🔄 If the file was modified, you can restore from backup:');
    console.log(`   cp "${backupPath}" "${courseDataPath}"`);
}

// Additional utility function to show specific fixes for manual review
function showSpecificFixes() {
    console.log('\n📋 SPECIFIC FIXES APPLIED:');
    console.log('==========================');

    const specificExamples = [
        {
            before: 'niu_university_info_about_ranking_accreditations_common_for_all_niu_course_and_specialization_5.png',
            after: 'niu_about_ranking_accreditations_common_for_all_niu_course_and_specialization_5.png'
        },
        {
            before: 'niu_university_info_1_about_mba_hiring_partner_common_for_all_niu_data_1.png',
            after: 'niu_about_1_about_mba_hiring_partner_common_for_all_niu_data_1.png'
        },
        {
            before: 'niu_university_info_9_about_bcom_faq_1.png',
            after: 'niu_about_9_about_bcom_faq_1.png'
        }
    ];

    specificExamples.forEach((example, index) => {
        console.log(`${index + 1}. BEFORE: ${example.before}`);
        console.log(`   AFTER:  ${example.after}\n`);
    });
}

showSpecificFixes();