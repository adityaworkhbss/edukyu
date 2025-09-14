#!/usr/bin/env node

/**
 * Data Transformation Utility
 * 
 * This script transforms the new scraped college data format to match
 * the existing CoursePageData.jsx structure, allowing you to use new
 * data without changing existing component logic.
 * 
 * Usage:
 *   node transformData.js [input-file] [output-file]
 * 
 * Example:
 *   node transformData.js college_data_output.json CoursePageData_new.jsx
 */

const fs = require('fs');
const path = require('path');
const { transformCollegeData } = require('./dataTransformer');

function showUsage() {
    console.log(`
📚 College Data Transformer

Usage: node transformData.js [input-file] [output-file]

Arguments:
  input-file   Path to the new scraped data JSON file (default: college_data_output.json)
  output-file  Path for the transformed output file (default: CoursePageData_transformed.jsx)

Examples:
  node transformData.js
  node transformData.js my_data.json my_output.jsx
  node transformData.js ../Data\\ Model/college_data_output.json ../Data\\ Model/CoursePage/CoursePageData_new.jsx

Features:
  ✅ Converts new scraped data structure to old CoursePageData format
  ✅ Preserves all existing component compatibility
  ✅ Maps university names and course types automatically
  ✅ Transforms specializations, benefits, curriculum, and more
  ✅ Handles multiple universities and courses in single file
`);
}

function main() {
    const args = process.argv.slice(2);

    if (args.includes('--help') || args.includes('-h')) {
        showUsage();
        return;
    }

    // Default paths
    const defaultInputPath = path.join(__dirname, '../Data Model/college_data_output.json');
    const defaultOutputPath = path.join(__dirname, '../Data Model/CoursePage/CoursePageData_transformed.jsx');

    const inputPath = args[0] ? path.resolve(args[0]) : defaultInputPath;
    const outputPath = args[1] ? path.resolve(args[1]) : defaultOutputPath;

    try {
        console.log('🔄 Starting data transformation...');
        console.log(`📂 Input:  ${inputPath}`);
        console.log(`📁 Output: ${outputPath}`);

        // Check if input file exists
        if (!fs.existsSync(inputPath)) {
            console.error(`❌ Error: Input file not found: ${inputPath}`);
            console.log('\n💡 Available files in Data Model directory:');
            const dataModelDir = path.join(__dirname, '../Data Model');
            if (fs.existsSync(dataModelDir)) {
                const files = fs.readdirSync(dataModelDir);
                files.forEach(file => {
                    if (file.endsWith('.json')) {
                        console.log(`   📄 ${file}`);
                    }
                });
            }
            return;
        }

        // Read and parse input data
        console.log('📖 Reading input file...');
        const inputData = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

        // Transform the data
        console.log('⚙️  Transforming data structure...');
        const transformedData = transformCollegeData(inputData);

        // Ensure output directory exists
        const outputDir = path.dirname(outputPath);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Create the output content
        const outputContent = `export const CoursePageData = ${JSON.stringify(transformedData, null, 4)};`;

        // Write the output file
        console.log('💾 Writing output file...');
        fs.writeFileSync(outputPath, outputContent, 'utf8');

        // Success summary
        console.log('\n✅ Transformation completed successfully!');
        console.log(`📊 Transformed ${transformedData.length} universities:`);

        transformedData.forEach((item, index) => {
            const universityKey = Object.keys(item)[0];
            const courses = Object.keys(item[universityKey]);
            console.log(`   ${index + 1}. ${universityKey.replace(/_/g, ' ').toUpperCase()}`);
            console.log(`      📚 ${courses.length} courses: ${courses.join(', ')}`);
        });

        console.log(`\n📁 Output saved to: ${outputPath}`);
        console.log('\n🎯 Next steps:');
        console.log('   1. Review the transformed data in the output file');
        console.log('   2. Update your imports to use the new data file');
        console.log('   3. Test your components with the new data structure');

    } catch (error) {
        console.error('\n❌ Error during transformation:');
        console.error(`   ${error.message}`);

        if (error.message.includes('JSON')) {
            console.log('\n💡 Tips:');
            console.log('   - Check if the input file is valid JSON');
            console.log('   - Verify the file path is correct');
            console.log('   - Ensure the file is not corrupted');
        }
    }
}

if (require.main === module) {
    main();
}