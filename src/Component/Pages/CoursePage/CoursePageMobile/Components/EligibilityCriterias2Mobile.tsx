import React, { useState } from "react";

interface EligibilityCriteriaProps {
  course?: any;
}

const EligibilityCriteriaImage: React.FC<EligibilityCriteriaProps> = ({ course }) => {
  // Extract course data safely - handle both direct and nested structures
  let courseData: any = {};
  
  if (course) {
    // Check if course has direct properties
    if (course.feeStructure) {
      courseData = course;
    } 
    // Check if course has nested structure like CoursePageData
    else {
      const firstKey = Object.keys(course)[0];
      if (firstKey && course[firstKey]) {
        courseData = course[firstKey];
      }
    }
  }

  const feeStructure = courseData?.feeStructure;
  const categories = feeStructure?.categories || [];
  const financialOptions = feeStructure?.financialOptions || [];

  // Set initial active tab to first available category
  const [activeTab, setActiveTab] = useState<number>(0);

  // Hide component if no fee structure data
  if (!feeStructure || categories.length === 0) {
    return null;
  }

  const activeCategory = categories[activeTab];
  
  return (
    <div className="w-full bg-white px-4 py-6" data-model-id="483:1562">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-[#024B53] text-2xl font-semibold mb-2">
          Eligibility & Criteria
        </h2>
        <p className="text-[#515150] text-sm leading-relaxed">
          Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex overflow-x-auto">
          {categories.map((category: any, index: number) => (
            <button
              key={index}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === index
                  ? 'text-[#024B53] border-[#024B53]'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Fee Cards - Stack vertically on mobile */}
      <div className="space-y-4 mb-6">
        {/* Full Course Fee Card */}
        {activeCategory?.fullCourseFee && (
          <div className="bg-[#679EA4] rounded-2xl p-6 text-center">
            <p className="text-gray-700 text-sm mb-2">
              Full Course Fee {categories.length > 2 ? '(Four Semesters)' : ''}
            </p>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {activeCategory.fullCourseFee}
            </div>
            <p className="text-gray-700 text-sm">
              Inclusive of all taxes
            </p>
          </div>
        )}

        {/* Per Semester Card */}
        {activeCategory?.perSemester && (
          <div className="bg-[#B3CFD2] rounded-2xl p-6 text-center">
            <p className="text-gray-700 text-sm mb-2">
              Each Semester
            </p>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {activeCategory.perSemester}
            </div>
            <p className="text-gray-700 text-sm">
              *Inclusive of all taxes
            </p>
          </div>
        )}

        {/* EMI Card */}
        {activeCategory?.emi && (
          <div className="bg-[#FFD23F] rounded-2xl p-6 text-center">
            <p className="text-gray-700 text-sm mb-2">
              EMI Starting
            </p>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {activeCategory.emi}
            </div>
            <p className="text-gray-700 text-sm">
              Terms & Conditions apply
            </p>
          </div>
        )}
      </div>

      {/* Note */}
      {activeCategory?.note && (
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-gray-600 text-sm">
            <span className="font-medium">Note - </span>
            {activeCategory.note}
          </p>
        </div>
      )}

      {/* Financial Options */}
      <div className="space-y-6">
        {financialOptions.map((option: any, index: number) => (
          <div key={index} className="flex items-start space-x-4">
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10">
              {index === 0 ? (
                // SVG for "Avail easy financing options"
                <svg 
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg" 
                  width="40" 
                  height="40" 
                  viewBox="0 0 46 50" 
                  fill="none"
                >
                  <g clipPath="url(#clip0_483_1593)">
                    <path d="M5.86801 49.9999C4.98083 49.9999 4.12985 49.6481 3.50167 49.0216C2.8735 48.3952 2.51939 47.5451 2.51701 46.6579V39.9729C2.51963 39.1477 2.83024 38.3532 3.38801 37.7449C2.83066 37.1365 2.52011 36.3421 2.51701 35.5169V28.8339C2.51913 27.9467 2.87315 27.0965 3.50138 26.47C4.12962 25.8434 4.98075 25.4917 5.86801 25.4919H9.44601C9.29838 24.9956 9.22195 24.4808 9.21901 23.9629V16.7439L1.70501 13.5729C1.19984 13.3608 0.768555 13.0042 0.465265 12.5479C0.161976 12.0916 0.000183105 11.5559 0.000183105 11.0079C0.000183105 10.46 0.161976 9.92432 0.465265 9.468C0.768555 9.01169 1.19984 8.65509 1.70501 8.44294L20.883 0.349943C21.4343 0.118642 22.0262 -0.000488281 22.624 -0.000488281C23.2219 -0.000488281 23.8137 0.118642 24.365 0.349943L43.542 8.44294C44.0472 8.65509 44.4785 9.01169 44.7818 9.468C45.085 9.92432 45.2468 10.46 45.2468 11.0079C45.2468 11.5559 45.085 12.0916 44.7818 12.5479C44.4785 13.0042 44.0472 13.3608 43.542 13.5729L40.5 14.8589V22.1479C40.5 22.4442 40.3823 22.7283 40.1729 22.9378C39.9634 23.1473 39.6793 23.2649 39.383 23.2649C39.0868 23.2649 38.8027 23.1473 38.5932 22.9378C38.3837 22.7283 38.266 22.4442 38.266 22.1479V15.7999L36.032 16.7429V23.9609C36.029 24.4788 35.9526 24.9936 35.805 25.4899H39.383C40.2703 25.4897 41.1214 25.8414 41.7496 26.468C42.3779 27.0945 42.7319 27.9447 42.734 28.8319V35.5149C42.731 36.3401 42.4204 37.1345 41.863 37.7429C42.4208 38.3512 42.7314 39.1457 42.734 39.9709V46.6559C42.7322 47.5442 42.3777 48.3953 41.7486 49.0223C41.1195 49.6494 40.2672 50.001 39.379 49.9999H5.86801Z" fill="#2B2B2A"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_483_1593">
                      <rect width="45.248" height="50" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                // SVG for "Get attractive scholarships"
                <svg 
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg" 
                  width="40" 
                  height="40" 
                  viewBox="0 0 51 50" 
                  fill="none"
                >
                  <g clipPath="url(#clip0_483_1599)">
                    <path d="M5.54368 50.0001C4.81604 50.0009 4.09539 49.8475 3.42291 49.5487C2.75044 49.2499 2.13933 48.8115 1.6245 48.2587C1.10967 47.7059 0.701212 47.0494 0.422472 46.3268C0.143733 45.6041 0.000174244 44.8296 0 44.0473L0 25.0001C0.000174244 24.2178 0.143733 23.4433 0.422472 22.7206C0.701212 21.998 1.10967 21.3415 1.6245 20.7887C2.13933 20.2359 2.75044 19.7975 3.42291 19.4987C4.09539 19.1999 4.81604 19.0465 5.54368 19.0473H6.71301C6.98844 16.4268 8.15184 14.0071 9.98112 12.2502C11.8104 10.4933 14.1774 9.5221 16.6304 9.5221C19.0833 9.5221 21.4504 10.4933 23.2796 12.2502C25.1089 14.0071 26.2723 16.4268 26.5477 19.0473H45.4563C46.184 19.0463 46.9047 19.1996 47.5773 19.4984C48.2498 19.7971 48.861 20.2354 49.3759 20.7883C49.8908 21.3412 50.2992 21.9977 50.5779 22.7204C50.8566 23.4431 51 24.2178 51 25.0001V44.0473C51 44.8296 50.8566 45.6043 50.5779 46.327C50.2992 47.0497 49.8908 47.7062 49.3759 48.2591C48.861 48.812 48.2498 49.2503 47.5773 49.549C46.9047 49.8478 46.184 50.0011 45.4563 50.0001H5.54368Z" fill="#343634"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_483_1599">
                      <rect width="51" height="50" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {option.description}
              </p>
              
              {index === 1 && (
                <div className="flex items-center mt-3">
                  <span className="text-black font-semibold text-sm mr-2">
                    Learn More
                  </span>
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12,5 19,12 12,19"></polyline>
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EligibilityCriteriaImage;
