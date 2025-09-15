const fs = require('fs');
const path = require('path');

/**
 * Enhanced script to properly add accreditations with images to CoursePageData
 * This handles the ranking_accreditations_common_for_all_niu_course_and_specialization section
 */

// Default accreditation names and descriptions based on common patterns
const DEFAULT_ACCREDITATIONS = [
    {
        name: "NAAC A+ Accredited University",
        description: "NAAC A+ Accredited with Excellence in Education"
    },
    {
        name: "UGC Entitled",
        description: "UGC Entitled Online Degrees Equivalent to Campus Degree"
    },
    {
        name: "AICTE Approved",
        description: "AICTE Approved Programs"
    },
    {
        name: "NIRF Ranking",
        description: "Ranked Among Top Universities in India"
    },
    {
        name: "QS World University Rankings",
        description: "Recognized in International Rankings"
    },
    {
        name: "Industry Recognition",
        description: "Recognized by Leading Industry Bodies"
    },
    {
        name: "Academic Excellence",
        description: "Commitment to Academic Excellence and Quality Education"
    },
    {
        name: "Global Recognition",
        description: "Globally Recognized Programs and Degrees"
    },
    {
        name: "Quality Assurance",
        description: "Quality Assured Education and Training"
    },
    {
        name: "Professional Accreditation",
        description: "Professional Body Accreditation and Recognition"
    },
    {
        name: "Educational Excellence",
        description: "Excellence in Higher Education and Research"
    }
];

function addAccreditationsToData(existingDataPath, originalDataPath, outputPath) {
    try {
        // Read existing enhanced data
        const existingContent = fs.readFileSync(existingDataPath, 'utf8');
        const existingData = eval(existingContent.replace('export const CoursePageData = ', '').replace(/;$/, ''));

        // Read original scraped data for accreditation images
        const originalData = JSON.parse(fs.readFileSync(originalDataPath, 'utf8'));

        console.log('Adding accreditations to enhanced data...');

        // Process each university in the existing data
        existingData.forEach(universityData => {
            const universityKey = Object.keys(universityData)[0];
            const universityObj = universityData[universityKey];

            console.log(`Processing university: ${universityKey}`);

            // Find corresponding university in original data
            const originalUniv = findUniversityInOriginalData(originalData, universityKey);
            if (!originalUniv) {
                console.log(`No original data found for ${universityKey}`);
                return;
            }

            // Get accreditation images from original data
            const accreditationImages = extractAccreditationImages(originalUniv);

            if (accreditationImages.length > 0) {
                console.log(`Found ${accreditationImages.length} accreditation images for ${universityKey}`);

                // Add accreditations to each course in the university
                Object.keys(universityObj).forEach(courseKey => {
                    const courseData = universityObj[courseKey];

                    // Create accreditations array with images
                    const accreditations = createAccreditationsArray(accreditationImages);

                    // Add accreditations to the course data
                    courseData.accreditations = accreditations;

                    console.log(`Added ${accreditations.length} accreditations to ${universityKey}.${courseKey}`);
                });
            } else {
                console.log(`No accreditation images found for ${universityKey}`);
            }
        });

        // Write the enhanced data back to file
        const outputContent = `export const CoursePageData = ${JSON.stringify(existingData, null, 4)};`;
        fs.writeFileSync(outputPath, outputContent);

        console.log(`\n✅ Successfully enhanced data with accreditations!`);
        console.log(`📄 Output written to: ${outputPath}`);

        // Generate statistics
        generateAccreditationStats(existingData);

    } catch (error) {
        console.error('❌ Error enhancing data with accreditations:', error);
    }
}

function findUniversityInOriginalData(originalData, universityKey) {
    // Mapping from transformed names back to original keys
    const reverseMapping = {
        'noida_international_university': '1.NIU',
        'amity_university': '2 . AMITY UNIVERSITY',
        'nmims_university': '3.  NMIMS', // Note the extra space
        'lpu_university': '4. LPU',
        'dpu_university': '5. DPU',
        'jain_university': '6. JAIN',
        'uttaranchal_university': '7. UTTARANCHAL UNIVERSITY'
    };

    const originalKey = reverseMapping[universityKey];
    if (!originalKey) {
        console.log(`No reverse mapping found for: ${universityKey}`);
        return null;
    }

    // Find the university object in original data
    const univEntry = originalData.find(entry => entry[originalKey]);
    if (univEntry) {
        console.log(`Found original data for ${universityKey} with key: ${originalKey}`);
        return univEntry[originalKey];
    } else {
        console.log(`No data found for key: ${originalKey}`);
        return null;
    }
}

function extractAccreditationImages(universityData) {
    const images = [];

    // Helper function to recursively search for accreditation images
    function searchForAccreditationImages(obj, path = '') {
        if (!obj || typeof obj !== 'object') return;

        for (const [key, value] of Object.entries(obj)) {
            const currentPath = path ? `${path}.${key}` : key;

            // Look for any key containing "ranking" or "accreditation"
            if (key.includes('ranking_accreditations') || key.includes('accreditation')) {
                if (value && value.images && Array.isArray(value.images)) {
                    console.log(`Found accreditation images at: ${currentPath}`);
                    value.images.forEach(imagePath => {
                        images.push(`/Resources/Images/${imagePath}`);
                    });
                }
            }

            // Recursively search in nested objects
            if (typeof value === 'object' && value !== null) {
                searchForAccreditationImages(value, currentPath);
            }
        }
    }

    // Search the entire university data structure
    searchForAccreditationImages(universityData);

    return images;
}

function createAccreditationsArray(accreditationImages) {
    const accreditations = [];

    accreditationImages.forEach((imagePath, index) => {
        // Use default accreditation info, cycling through if we have more images than defaults
        const defaultAccreditation = DEFAULT_ACCREDITATIONS[index % DEFAULT_ACCREDITATIONS.length];

        accreditations.push({
            name: defaultAccreditation.name,
            icon: imagePath,
            description: defaultAccreditation.description
        });
    });

    return accreditations;
}

function generateAccreditationStats(data) {
    let totalAccreditations = 0;
    let universitiesWithAccreditations = 0;
    let coursesWithAccreditations = 0;

    console.log('\n📊 ACCREDITATION ENHANCEMENT STATISTICS');
    console.log('='.repeat(50));

    data.forEach(universityData => {
        const universityKey = Object.keys(universityData)[0];
        const universityObj = universityData[universityKey];

        let universityAccreditations = 0;
        let universityCourses = 0;

        Object.keys(universityObj).forEach(courseKey => {
            const courseData = universityObj[courseKey];
            universityCourses++;

            if (courseData.accreditations && courseData.accreditations.length > 0) {
                const accredCount = courseData.accreditations.length;
                universityAccreditations += accredCount;
                coursesWithAccreditations++;
            }
        });

        if (universityAccreditations > 0) {
            universitiesWithAccreditations++;
            console.log(`🏛️  ${universityKey}: ${universityAccreditations} accreditations across ${universityCourses} courses`);
        }

        totalAccreditations += universityAccreditations;
    });

    console.log('='.repeat(50));
    console.log(`📊 Total Universities: ${data.length}`);
    console.log(`🏛️  Universities with Accreditations: ${universitiesWithAccreditations}`);
    console.log(`🎓 Courses with Accreditations: ${coursesWithAccreditations}`);
    console.log(`🏆 Total Accreditations Added: ${totalAccreditations}`);
    console.log('='.repeat(50));
}

// CLI usage
if (require.main === module) {
    const existingDataPath = process.argv[2] || 'src/Data Model/CoursePage/CoursePageData_enhanced.jsx';
    const originalDataPath = process.argv[3] || 'src/Data Model/college_data_output.json';
    const outputPath = process.argv[4] || 'src/Data Model/CoursePage/CoursePageData_final.jsx';

    console.log('🏆 ACCREDITATION ENHANCEMENT SYSTEM');
    console.log('='.repeat(50));
    console.log(`📄 Reading existing data from: ${existingDataPath}`);
    console.log(`📄 Reading original data from: ${originalDataPath}`);
    console.log(`📄 Writing enhanced data to: ${outputPath}`);
    console.log('='.repeat(50));

    addAccreditationsToData(existingDataPath, originalDataPath, outputPath);
}

module.exports = {
    addAccreditationsToData,
    extractAccreditationImages,
    createAccreditationsArray
};