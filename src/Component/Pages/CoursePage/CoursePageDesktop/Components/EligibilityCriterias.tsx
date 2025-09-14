import React, { useState } from "react";

interface EligibilityCriteriaProps {
  course?: any;
}

export const EligibilityCriteria: React.FC<EligibilityCriteriaProps> = ({ course }) => {
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
      className="relative w-full"
      style={{ 
        height: 'auto'
      }}
      data-model-id="483:1517"
    >
      <div className="w-[calc(66.67%_-_12px)] font-semibold text-[#024B53] text-[48px] tracking-[0] leading-[normal]">
        Eligibility &amp; Criteria
      </div>

      <p className="w-[calc(66.67%_-_12px)] mt-[16px] font-normal text-[#515150] text-xl tracking-[0] leading-[normal] mb-[24px]">
        Review the eligibility requirements and criteria for admission to ensure you meet the necessary qualifications for enrollment.
      </p>

      <div className="relative w-full h-11 border-b [border-bottom-style:solid] border-[#b2b2b2] mb-[64px]">
        {domesticData && (
          <div className={`left-0 inline-flex items-center justify-center gap-2.5 px-6 py-3 absolute top-0 cursor-pointer transition-all duration-200 hover:bg-gray-50 ${activeTab === 'domestic' ? 'border-b-2 [border-bottom-style:solid] border-teal-600' : ''}`}
               onClick={() => setActiveTab('domestic')}>
            <div className={`relative w-fit mt-[-2.00px] font-semibold text-base tracking-[0] leading-5 whitespace-nowrap transition-colors duration-200 ${activeTab === 'domestic' ? 'text-[#024B53]' : 'text-slate-600'}`}>
              Domestic
            </div>
          </div>
        )}

        {internationalData && (
          <div className={`${domesticData ? 'left-[117px]' : 'left-0'} inline-flex items-center justify-center gap-2.5 px-6 py-3 absolute top-0 cursor-pointer transition-all duration-200 hover:bg-gray-50 ${activeTab === 'international' ? 'border-b-2 [border-bottom-style:solid] border-teal-600' : ''}`}
               onClick={() => setActiveTab('international')}>
            <div className={`relative w-fit mt-[-1.00px] font-normal text-base tracking-[0] leading-5 whitespace-nowrap transition-colors duration-200 ${activeTab === 'international' ? 'text-[#024B53] font-semibold' : 'text-slate-600'}`}>
              International
            </div>
          </div>
        )}
      </div>

      <div className="w-full pl-6" style={{ minHeight: 'auto' }}>
        {/* Educational Qualification */}
        {activeData?.educationalQualification && (
          <div className="w-full mb-12 flex">
            <img
              className="w-10 h-10 mr-4 flex-shrink-0"
              alt="Educational qualification"
              src="https://c.animaapp.com/LrMXonO9/img/whocanapply--educational.svg"
            />
            <div className="flex-1">
              <div className="font-semibold text-[#2B2B2A] text-lg tracking-[0] leading-[normal] mb-2">
                Educational qualification
              </div>
              <p className="font-normal text-[#383837] text-base tracking-[0] leading-[normal]">
                {activeData.educationalQualification}
              </p>
            </div>
          </div>
        )}

        {/* Grades */}
        {activeData?.grades && (
          <div className="w-full mb-12 flex">
            <img
              className="w-10 h-10 mr-4 flex-shrink-0"
              alt="Grades"
              src="https://c.animaapp.com/LrMXonO9/img/whocanapply--marks.svg"
            />
            <div className="flex-1">
              <div className="font-semibold text-[#2B2B2A] text-lg tracking-[0] leading-[normal] mb-2">
                Grades
              </div>
              <p className="font-normal text-[#383837] text-base tracking-[0] leading-[normal]">
                {activeData.grades}
              </p>
            </div>
          </div>
        )}

        {/* Aptitude Test */}
        {activeData?.aptitudeTest && (
          <div className="w-full mb-12 flex">
            <img
              className="w-10 h-10 mr-4 flex-shrink-0"
              alt="Aptitude test"
              src="https://c.animaapp.com/LrMXonO9/img/apptitude.svg"
            />
            <div className="flex-1">
              <div className="font-semibold text-[#2B2B2A] text-lg tracking-[0] leading-[normal] mb-2">
                Aptitude test
              </div>
              <p className="font-normal text-[#383837] text-base tracking-[0] leading-[normal]">
                {activeData.aptitudeTest}
              </p>
            </div>
          </div>
        )}

        {/* Work Experience or Other Requirements */}
        {(activeData?.workExperience || activeData?.otherRequirements) && (
          <div className="w-full mb-12 flex">
            <img
              className="w-10 h-10 mr-4 flex-shrink-0"
              alt="Additional requirements"
              src="https://c.animaapp.com/LrMXonO9/img/business-center.svg"
            />
            <div className="flex-1">
              <div className="font-semibold text-[#2B2B2A] text-lg tracking-[0] leading-[normal] mb-2">
                {activeData.workExperience ? 'Work Experience' : 'Other Requirements'}
              </div>
              <div className="font-normal text-[#383837] text-base tracking-[0] leading-[normal]">
                {activeData.workExperience || activeData.otherRequirements}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
