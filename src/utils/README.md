# College Data Transformation System

This system transforms scraped college data from the new JSON format to match the existing `CoursePageData.jsx` structure, allowing you to use new data without changing your existing component logic.

## 📁 Files Overview

- **`dataTransformer.js`** - Core transformation logic
- **`transformData.js`** - CLI utility for running transformations
- **`validate.js`** - Validation and comparison tools
- **`CoursePageData_transformed.jsx`** - Output file with transformed data

## 🚀 Quick Start

### 1. Transform Your Data

```bash
# Basic transformation (uses default paths)
node src/utils/transformData.js

# Custom input/output files
node src/utils/transformData.js input_file.json output_file.jsx

# With specific paths
node src/utils/transformData.js "src/Data Model/college_data_output.json" "src/Data Model/CoursePage/CoursePageData_new.jsx"
```

### 2. Validate the Output

```bash
# Validate transformed data structure
node src/utils/validate.js validate

# Compare original vs transformed structures
node src/utils/validate.js compare
```

### 3. Use in Your Components

```javascript
// Replace your existing import
// import { CoursePageData } from '../Data Model/CoursePage/CoursePageData.jsx';

// With the new transformed data
import { CoursePageData } from '../Data Model/CoursePage/CoursePageData_transformed.jsx';

// Your existing component logic remains unchanged!
const MyComponent = () => {
    return CoursePageData.map(university => {
        // Same logic as before
    });
};
```

## 🔄 Data Transformation Process

### Input Structure (New)
```json
[
    {
        "niu": {
            "about": {
                "1_about_mba": {
                    "description": "...",
                    "mba_specialization": { "description": "..." },
                    "mba_benefits": { "description": "..." },
                    "semester": { "description": "..." }
                }
            }
        }
    }
]
```

### Output Structure (Old Compatible)
```javascript
[
    {
        "noida_international_university": {
            "online_mba": {
                "page": {
                    "title": "Master of Business Administration (Online MBA)",
                    "description": "...",
                    "fees": { "total": "₹88,500" }
                },
                "specializations": [
                    { "name": "Finance", "fees": "₹88,500" }
                ],
                "programBenefits": [
                    { "title": "...", "description": "..." }
                ],
                "curriculum": {
                    "semesters": [...]
                }
            }
        }
    }
]
```

## 🏗️ Transformation Features

### ✅ University Mapping
- `niu` → `noida_international_university`
- `2 . AMITY UNIVERSITY` → `amity_university`
- `3. NMIMS` → `nmims_university`
- `4. LPU` → `lpu_university`
- And more...

### ✅ Course Mapping
- `1_about_mba` → `online_mba`
- `2_about_mca` → `online_mca`
- `3_about_mcom` → `online_mcom`
- `7_about_bba` → `online_bba`
- And more...

### ✅ Data Structure Conversion
- **Specializations**: Parsed from text to structured array
- **Program Benefits**: Converted to title/description objects
- **Curriculum**: Semester-wise course breakdown
- **Career Opportunities**: Job roles and industries extraction
- **Admission Process**: Step-by-step process parsing

## 📊 Supported Data Fields

| New Field | Old Field | Description |
|-----------|-----------|-------------|
| `mba_specialization.description` | `specializations[]` | Course specializations |
| `mba_benefits.description` | `programBenefits[]` | Program benefits |
| `semester.description` | `curriculum.semesters[]` | Course curriculum |
| `eligibility_criteria.description` | `eligibility.domestic.educationalQualification` | Eligibility requirements |
| `admission_process_mba.description` | `admissionProcess[]` | Admission steps |
| `job_roles_industries_mba.description` | `careerOpportunities` | Career information |

## 🛠️ Customization

### Adding New Universities

Edit the `universityMapping` object in `dataTransformer.js`:

```javascript
const universityMapping = {
    'new_university_key': 'new_university_name',
    // ... existing mappings
};
```

### Adding New Courses

Edit the `courseMapping` object:

```javascript
const courseMapping = {
    'new_course_key': 'online_new_course',
    // ... existing mappings
};
```

### Custom Parsing Logic

Modify the parsing functions for specific data formats:

```javascript
function parseSpecializations(specializationText) {
    // Your custom parsing logic
}
```

## 🧪 Testing

### Validate Structure
```bash
node src/utils/validate.js validate
```

### Compare Structures
```bash
node src/utils/validate.js compare
```

### Manual Testing
1. Run transformation on sample data
2. Check output file structure
3. Test with your existing components
4. Verify data completeness

## 📋 Migration Checklist

- [ ] Run transformation on your scraped data
- [ ] Validate the output structure
- [ ] Update your component imports
- [ ] Test components with new data
- [ ] Verify all fields are populated correctly
- [ ] Check university and course mappings
- [ ] Validate specializations and benefits
- [ ] Test curriculum and admission process data

## 🔧 Troubleshooting

### Common Issues

**Missing Universities:**
- Add new university mappings to `universityMapping`
- Check source data keys for typos

**Incomplete Data:**
- Verify source data structure
- Check parsing functions for specific fields
- Add custom parsing logic if needed

**Structure Validation Fails:**
- Run `node validate.js validate` to see specific issues
- Check required fields in transformation logic
- Verify JSON syntax in output file

### Debug Mode

Add debug logging to transformation:

```javascript
// In dataTransformer.js
console.log('Processing university:', universityKey);
console.log('Course data:', courseData);
```

## 🎯 Next Steps

1. **Replace Existing Data**: Update your imports to use transformed data
2. **Test Components**: Verify all components work with new structure
3. **Add New Features**: Extend transformation for additional data fields
4. **Automate Pipeline**: Set up automatic transformation on data updates

## 📞 Support

If you encounter issues:
1. Check the validation output first
2. Review the transformation logs
3. Verify your source data structure matches expected format
4. Modify parsing functions for custom data formats

---

🎉 **You're all set!** Your new scraped data is now compatible with your existing component logic.