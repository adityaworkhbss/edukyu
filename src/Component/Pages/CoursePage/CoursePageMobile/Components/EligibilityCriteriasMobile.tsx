import React, { useState } from "react";

interface EligibilityCriteriaProps {
  course?: any;
}

const EligibilityCriteria: React.FC<EligibilityCriteriaProps> = ({ course }) => {
  // Extract course data safely - handle both direct and nested structures
  let courseData: any = {};
  
  if (course) {
    // Check if course has direct properties
    if (course.eligibility) {
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

  const eligibility = courseData?.eligibility;
  const domesticData = eligibility?.domestic;
  const internationalData = eligibility?.international;

  // Set initial tab based on available data
  const getInitialTab = (): 'domestic' | 'international' => {
    if (domesticData) return 'domestic';
    if (internationalData) return 'international';
    return 'domestic';
  };

  const [activeTab, setActiveTab] = useState<'domestic' | 'international'>(getInitialTab());

  // Hide component if no eligibility data
  if (!eligibility || (!domesticData && !internationalData)) {
    return null;
  }

  const activeData = activeTab === 'domestic' ? domesticData : internationalData;
  return (
    <div
      className="relative w-full bg-white px-4 py-8"
      data-model-id="483:1517"
    >
      <div className="w-full font-semibold text-[#024B53] text-[28px] md:text-[48px] tracking-[0] leading-[32px] md:leading-[normal] mb-4">
        Eligibility &amp; Criteria
      </div>

      <p className="w-full font-normal text-[#515150] text-[14px] md:text-xl tracking-[0] leading-[20px] md:leading-[normal] mb-8">
        Review the eligibility requirements and criteria for admission to ensure you meet the necessary qualifications for enrollment.
      </p>

      {/* Tab Navigation */}
      <div className="w-full border-b border-[#b2b2b2] mb-8">
        <div className="flex gap-4">
          {domesticData && (
            <button 
              className={`px-4 py-3 font-semibold text-[14px] md:text-base tracking-[0] leading-5 whitespace-nowrap transition-all duration-200 hover:bg-gray-50 border-b-2 ${
                activeTab === 'domestic' 
                  ? 'text-[#024B53] border-[#024B53]' 
                  : 'text-slate-600 border-transparent'
              }`}
              onClick={() => setActiveTab('domestic')}
            >
              Domestic
            </button>
          )}

          {internationalData && (
            <button 
              className={`px-4 py-3 font-semibold text-[14px] md:text-base tracking-[0] leading-5 whitespace-nowrap transition-all duration-200 hover:bg-gray-50 border-b-2 ${
                activeTab === 'international' 
                  ? 'text-[#024B53] border-[#024B53]' 
                  : 'text-slate-600 border-transparent'
              }`}
              onClick={() => setActiveTab('international')}
            >
              International
            </button>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full space-y-6">
        {/* Educational Qualification */}
        {activeData?.educationalQualification && (
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <img
              className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"
              alt="Educational qualification"
              src="https://c.animaapp.com/LrMXonO9/img/whocanapply--educational.svg"
            />
            <div className="flex-1">
              <div className="font-semibold text-[#2B2B2A] text-[14px] md:text-lg tracking-[0] leading-[normal] mb-2">
                Educational qualification
              </div>
              <p className="font-normal text-[#383837] text-[12px] md:text-base tracking-[0] leading-[normal]">
                {activeData.educationalQualification}
              </p>
            </div>
          </div>
        )}

        {/* Grades */}
        {activeData?.grades && (
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <img
              className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"
              alt="Grades"
              src="https://c.animaapp.com/LrMXonO9/img/whocanapply--marks.svg"
            />
            <div className="flex-1">
              <div className="font-semibold text-[#2B2B2A] text-[14px] md:text-lg tracking-[0] leading-[normal] mb-2">
                Grades
              </div>
              <p className="font-normal text-[#383837] text-[12px] md:text-base tracking-[0] leading-[normal]">
                {activeData.grades}
              </p>
            </div>
          </div>
        )}

        {/* Aptitude Test */}
        {activeData?.aptitudeTest && (
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <img
              className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"
              alt="Aptitude test"
              src="https://c.animaapp.com/LrMXonO9/img/apptitude.svg"
            />
            <div className="flex-1">
              <div className="font-semibold text-[#2B2B2A] text-[14px] md:text-lg tracking-[0] leading-[normal] mb-2">
                Aptitude test
              </div>
              <p className="font-normal text-[#383837] text-[12px] md:text-base tracking-[0] leading-[normal]">
                {activeData.aptitudeTest}
              </p>
            </div>
          </div>
        )}

        {/* Work Experience or Other Requirements */}
        {(activeData?.workExperience || activeData?.otherRequirements) && (
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <img
              className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"
              alt="Additional requirements"
              src="https://c.animaapp.com/LrMXonO9/img/business-center.svg"
            />
            <div className="flex-1">
              <div className="font-semibold text-[#2B2B2A] text-[14px] md:text-lg tracking-[0] leading-[normal] mb-2">
                {activeData.workExperience ? 'Work Experience' : 'Other Requirements'}
              </div>
              <div className="font-normal text-[#383837] text-[12px] md:text-base tracking-[0] leading-[normal]">
                {activeData.workExperience || activeData.otherRequirements}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default EligibilityCriteria;