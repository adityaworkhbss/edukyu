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
        minHeight: '810px',
        height: 'auto'
      }}
      data-model-id="483:1517"
    >
      <div className="absolute w-[65%] top-[63px] font-semibold text-[#024B53] text-[48px] tracking-[0] leading-[normal]">
        Eligibility &amp; Criteria
      </div>

      <p className="absolute w-[65%] mt-[150px] font-normal text-[#515150] text-xl tracking-[0] leading-[normal]">
        Review the eligibility requirements and criteria for admission to ensure you meet the necessary qualifications for enrollment.
      </p>

      <div className="absolute w-full h-11 top-[214px] border-b [border-bottom-style:solid] border-[#b2b2b2]">
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

            <div className="absolute w-full top-[322px] left-6" style={{ minHeight: '424px' }}>
        {/* Educational Qualification */}
        {activeData?.educationalQualification && (
          <div className="absolute w-full h-[75px] top-0 left-0">
            <img
              className="absolute w-10 h-10 top-0 left-0 aspect-[1]"
              alt="Educational qualification"
              src="https://c.animaapp.com/LrMXonO9/img/whocanapply--educational.svg"
            />

            <p className="absolute w-[90%] top-[35px] left-16 font-normal text-[#383837] text-base tracking-[0] leading-[normal]">
              {activeData.educationalQualification}
            </p>

            <div className="absolute w-[90%] top-0 left-16 font-semibold text-[#2B2B2A] tracking-[0] leading-[normal]">
              Educational qualification
            </div>
          </div>
        )}

        {/* Grades */}
        {activeData?.grades && (
          <div className="absolute w-[938px] h-[55px] top-[123px] left-0">
            <img
              className="absolute w-10 h-10 top-0 left-0 aspect-[1]"
              alt="Grades"
              src="https://c.animaapp.com/LrMXonO9/img/whocanapply--marks.svg"
            />

            <p className="absolute w-[90%] top-[35px] left-16 font-normal text-[#383837] text-base tracking-[0] leading-[normal]">
              {activeData.grades}
            </p>

            <div className="absolute w-[90%] top-0 left-16 font-semibold text-[#2B2B2A] text-lg tracking-[0] leading-[normal]">
              Grades
            </div>
          </div>
        )}

        {/* Aptitude Test */}
        {activeData?.aptitudeTest && (
          <div className="absolute w-[938px] h-[95px] top-[226px] left-0">
            <img
              className="absolute w-10 h-10 top-0 left-0 aspect-[1]"
              alt="Aptitude test"
              src="https://c.animaapp.com/LrMXonO9/img/apptitude.svg"
            />

            <p className="absolute w-[90%] top-[35px] left-16 font-normal text-[#383837] text-base tracking-[0] leading-[normal]">
              {activeData.aptitudeTest}
            </p>

            <div className="absolute w-[90%] top-0 left-16 font-semibold text-[#2B2B2A] text-lg tracking-[0] leading-[normal]">
              Aptitude test
            </div>
          </div>
        )}

        {/* Work Experience or Other Requirements */}
        {(activeData?.workExperience || activeData?.otherRequirements) && (
          <div className="absolute w-[938px] h-[55px] top-[369px] left-0">
            <img
              className="absolute w-10 h-10 top-0 left-0 aspect-[1]"
              alt="Additional requirements"
              src="https://c.animaapp.com/LrMXonO9/img/business-center.svg"
            />

            <div className="absolute w-[90%] top-[35px] left-16 font-normal text-[#383837] text-base tracking-[0] leading-[normal]">
              {activeData.workExperience || activeData.otherRequirements}
            </div>

            <div className="absolute w-[90%] top-0 left-16 font-semibold text-[#2B2B2A] text-lg tracking-[0] leading-[normal]">
              {activeData.workExperience ? 'Work Experience' : 'Other Requirements'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
