const fs = require('fs');
const path = require('path');

/**
 * Image Path Enhancement Script
 * 
 * This script takes the existing transformed CoursePageData and adds image paths
 * from college_data_output.json without modifying the existing structure.
 * It maps images to appropriate sections like accreditations, faculty, etc.
 */

// University name mapping from college_data_output.json to CoursePageData structure
const universityMapping = {
    '1.NIU': 'noida_international_university',
    '2 . AMITY UNIVERSITY': 'amity_university',
    '3.  NMIMS': 'nmims_university',
    '4. LPU': 'lpu_university',
    '5.DPU': 'dpu_university',
    '6. JAIN UNIVERSITY': 'jain_university',
    '7. UTTRANCHAL UNIVERSITY': 'uttaranchal_university'
};

/**
 * Extract all image arrays from college_data_output.json with their paths
 */
function extractImageMappings(collegeData) {
    const imageMappings = {};

    Object.keys(collegeData).forEach(universityKey => {
        const mappedUniversityKey = universityMapping[universityKey];
        if (!mappedUniversityKey) return;

        if (!imageMappings[mappedUniversityKey]) {
            imageMappings[mappedUniversityKey] = {};
        }

        // Find all image arrays in the university data
        const imageArrays = findImageArrays(collegeData[universityKey], '');
        imageArrays.forEach(imageArray => {
            const { path: imagePath, images, courseType, imageType } = imageArray;

            if (!imageMappings[mappedUniversityKey][courseType]) {
                imageMappings[mappedUniversityKey][courseType] = {};
            }

            imageMappings[mappedUniversityKey][courseType][imageType] = images.map(img =>
                img.startsWith('/') ? img : `/Resources/Images/${img}`
            );
        });
    });

    return imageMappings;
}

/**
 * Recursively find all image arrays in the data structure
 */
function findImageArrays(obj, currentPath) {
    const imageArrays = [];

    if (typeof obj === 'object' && obj !== null) {
        Object.keys(obj).forEach(key => {
            const newPath = currentPath ? `${currentPath}.${key}` : key;

            if (key === 'images' && Array.isArray(obj[key])) {
                // Determine course type and image type from path
                const pathParts = currentPath.split('.');
                const courseType = determineCourseType(pathParts);
                const imageType = determineImageType(pathParts);

                imageArrays.push({
                    path: newPath,
                    images: obj[key],
                    courseType,
                    imageType
                });
            } else if (typeof obj[key] === 'object') {
                imageArrays.push(...findImageArrays(obj[key], newPath));
            }
        });
    }

    return imageArrays;
}

/**
 * Determine course type from path parts
 */
function determineCourseType(pathParts) {
    for (const part of pathParts) {
        if (part.includes('_about_mba') || part === 'about_mba') return 'online_mba';
        if (part.includes('_about_mca') || part === 'about_mca') return 'online_mca';
        if (part.includes('_about_mcom') || part === 'about_mcom') return 'online_mcom';
        if (part.includes('_about_bba') || part === 'about_bba') return 'online_bba';
        if (part.includes('_about_bca') || part === 'about_bca') return 'online_bca';
        if (part.includes('_about_bcom') || part === 'about_bcom') return 'online_bcom';
        if (part.includes('_about_ma') || part === 'about_ma') return 'online_ma';
        if (part.includes('_about_msc') || part === 'about_msc') return 'online_msc';
        if (part.includes('_about_ba') || part === 'about_ba') return 'online_ba';
    }

    // If no specific course found, check if it's a general university section
    if (pathParts.some(part => part === 'about' || part === 'university_info')) {
        return 'university_general';
    }

    return 'unknown';
}

/**
 * Determine image type from path parts
 */
function determineImageType(pathParts) {
    for (const part of pathParts) {
        if (part.includes('ranking_accreditations') || part.includes('accreditation')) return 'accreditations';
        if (part.includes('faculty')) return 'faculty';
        if (part.includes('hiring_partner')) return 'hiring_partners';
        if (part.includes('additional_tools') || part.includes('certifications')) return 'additional_tools';
        if (part.includes('degree')) return 'degree';
        if (part.includes('faq') || part.includes('f_q')) return 'faq';
    }
    return 'general';
}

/**
 * Add images to the existing CoursePageData structure
 */
function addImagesToExistingData(existingData, imageMappings) {
    // Deep clone to avoid modifying original
    const enhancedData = JSON.parse(JSON.stringify(existingData));

    enhancedData.forEach(universityItem => {
        const universityKey = Object.keys(universityItem)[0];
        const universityData = universityItem[universityKey];

        if (!imageMappings[universityKey]) return;

        Object.keys(universityData).forEach(courseKey => {
            const courseData = universityData[courseKey];
            const courseImages = imageMappings[universityKey][courseKey] || {};
            const universityGeneralImages = imageMappings[universityKey]['university_general'] || {};

            // Add accreditation images
            if (courseData.accreditations && (courseImages.accreditations || universityGeneralImages.accreditations)) {
                const accreditationImages = courseImages.accreditations || universityGeneralImages.accreditations || [];
                courseData.accreditations.forEach((accreditation, index) => {
                    if (accreditationImages[index]) {
                        accreditation.icon = accreditationImages[index];
                    }
                });
            }

            // Add page logo from degree images  
            if (courseData.page && courseImages.degree && courseImages.degree.length > 0) {
                courseData.page.logo = courseImages.degree[0];
            }

            // Add faculty images
            if (courseImages.faculty) {
                if (!courseData.faculty) {
                    courseData.faculty = [];
                }

                // If faculty array exists but is empty, or if we have more images than faculty members
                const facultyImagesCount = courseImages.faculty.length;

                // Ensure we have enough faculty objects for all images
                while (courseData.faculty.length < facultyImagesCount) {
                    courseData.faculty.push({
                        name: `Faculty Member ${courseData.faculty.length + 1}`,
                        position: "Faculty Position",
                        qualifications: "Qualifications"
                    });
                }

                // Add images to faculty members
                courseData.faculty.forEach((facultyMember, index) => {
                    if (courseImages.faculty[index]) {
                        facultyMember.image = courseImages.faculty[index];
                    }
                });
            }

            // Add additional tools images (if the section exists)
            if (courseData.additionalTools && courseImages.additional_tools) {
                if (!courseData.additionalTools.images) {
                    courseData.additionalTools.images = [];
                }
                courseData.additionalTools.images = courseImages.additional_tools;
            }

            // Add hiring partner images as a new section
            if (courseImages.hiring_partners) {
                if (!courseData.hiringPartners) {
                    courseData.hiringPartners = [];
                }
                courseData.hiringPartners = courseImages.hiring_partners.map((imagePath, index) => ({
                    name: `Partner ${index + 1}`,
                    logo: imagePath
                }));
            }

            // Add FAQ images if FAQ section exists
            if (courseData.faqs && courseImages.faq) {
                if (!courseData.faqImages) {
                    courseData.faqImages = [];
                }
                courseData.faqImages = courseImages.faq;
            }
        });
    });

    return enhancedData;
}

/**
 * Enhance existing CoursePageData with images from CoursePageData copy
 */
function enhanceWithExistingImages(data) {
    // This function can be used to merge with existing CoursePageData copy.jsx
    // For now, we'll preserve the existing structure and just add new images
    return data;
}

/**
 * Main function to enhance CoursePageData with images
 */
function enhanceDataWithImages(existingDataPath, collegeDataPath, outputPath) {
    try {
        console.log('🖼️  Starting image enhancement process...');

        // Read existing transformed data
        console.log('📖 Reading existing CoursePageData...');
        let existingContent;
        try {
            existingContent = fs.readFileSync(existingDataPath, 'utf8');
        } catch (error) {
            console.log('⚠️  Existing CoursePageData not found, using original structure...');
            existingContent = fs.readFileSync(path.join(__dirname, '../Data Model/CoursePage/CoursePageData copy.jsx'), 'utf8');
        }

        const existingDataMatch = existingContent.match(/export const CoursePageData = (.*);/s);
        if (!existingDataMatch) {
            throw new Error('Could not parse existing CoursePageData structure');
        }

        const existingData = JSON.parse(existingDataMatch[1]);

        // Read college data with images
        console.log('📖 Reading college data with images...');
        const collegeData = JSON.parse(fs.readFileSync(collegeDataPath, 'utf8'));

        // Extract image mappings
        console.log('🔍 Extracting image mappings...');
        const imageMappings = extractImageMappings(collegeData[0]);

        console.log('📊 Image mapping summary:');
        Object.keys(imageMappings).forEach(uni => {
            const courses = Object.keys(imageMappings[uni]);
            console.log(`   ${uni}: ${courses.length} courses with images`);
            courses.forEach(course => {
                const imageTypes = Object.keys(imageMappings[uni][course]);
                console.log(`     - ${course}: ${imageTypes.join(', ')}`);
            });
        });

        // Add images to existing data
        console.log('🖼️  Adding images to existing structure...');
        const enhancedData = addImagesToExistingData(existingData, imageMappings);

        // Create output content
        const outputContent = `export const CoursePageData = ${JSON.stringify(enhancedData, null, 4)};`;

        // Write enhanced data
        console.log('💾 Writing enhanced data...');
        const outputDir = path.dirname(outputPath);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        fs.writeFileSync(outputPath, outputContent, 'utf8');

        console.log('✅ Image enhancement completed successfully!');
        console.log(`📁 Enhanced data saved to: ${outputPath}`);

        return enhancedData;

    } catch (error) {
        console.error('❌ Error during image enhancement:', error.message);
        throw error;
    }
}

/**
 * CLI interface
 */
function main() {
    const args = process.argv.slice(2);

    if (args.includes('--help') || args.includes('-h')) {
        console.log(`
🖼️  Image Enhancement Script

Usage: node imageEnhancer.js [existing-data] [college-data] [output-file]

Arguments:
  existing-data  Path to existing CoursePageData file (default: CoursePageData_transformed.jsx)
  college-data   Path to college_data_output.json (default: college_data_output.json)  
  output-file    Path for enhanced output (default: CoursePageData_enhanced.jsx)

Examples:
  node imageEnhancer.js
  node imageEnhancer.js CoursePageData.jsx college_data_output.json CoursePageData_with_images.jsx

Features:
  ✅ Preserves existing data structure
  ✅ Adds accreditation images
  ✅ Adds faculty images  
  ✅ Adds university logos
  ✅ Adds hiring partner images
  ✅ Adds additional tool images
  ✅ Maps images based on content context
`);
        return;
    }

    // Default paths
    const defaultExistingPath = path.join(__dirname, '../Data Model/CoursePage/CoursePageData_transformed.jsx');
    const defaultCollegePath = path.join(__dirname, '../Data Model/college_data_output.json');
    const defaultOutputPath = path.join(__dirname, '../Data Model/CoursePage/CoursePageData_enhanced.jsx');

    const existingDataPath = args[0] ? path.resolve(args[0]) : defaultExistingPath;
    const collegeDataPath = args[1] ? path.resolve(args[1]) : defaultCollegePath;
    const outputPath = args[2] ? path.resolve(args[2]) : defaultOutputPath;

    console.log('🖼️  Image Enhancement Configuration:');
    console.log(`📂 Existing data: ${existingDataPath}`);
    console.log(`📂 College data:  ${collegeDataPath}`);
    console.log(`📁 Output:        ${outputPath}`);
    console.log('');

    enhanceDataWithImages(existingDataPath, collegeDataPath, outputPath);
}

// Export functions for testing
module.exports = {
    enhanceDataWithImages,
    extractImageMappings,
    addImagesToExistingData,
    findImageArrays,
    determineCourseType,
    determineImageType
};

// Run if called directly
if (require.main === module) {
    main();
}