import React, { useState } from "react";

interface JobRolesProps {
  course?: any;
}

const JobRoles: React.FC<JobRolesProps> = ({ course }) => {
  const [activeTab, setActiveTab] = useState<'jobRoles' | 'industries'>('jobRoles');

  // Extract course data safely - handle both direct and nested structures
  let courseData: any = {};
  
  if (course) {
    // Check if course has direct properties
    if (course.careerOpportunities) {
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

  const careerOpportunities = courseData?.careerOpportunities;
  const jobRoles = careerOpportunities?.jobRoles || [];
  const industries = careerOpportunities?.industries || [];

  // Hide component if no career opportunities data
  if (!careerOpportunities || (jobRoles.length === 0 && industries.length === 0)) {
    return null;
  }
  return (
    <div
      className="relative w-full min-h-[400px] bg-cover bg-[50%_50%] px-4 py-8"
      data-model-id="483:1620"
    >
      <div className="w-full font-semibold text-[#024B53] text-[28px] md:text-[48px] tracking-[0] leading-[32px] md:leading-[normal] mb-3">
        Job roles &amp; Industries
      </div>

      <p className="w-full font-normal text-[#515150] text-[14px] md:text-xl tracking-[0] leading-[20px] md:leading-[normal] mb-8">
        Explore diverse career opportunities and industries where you can apply your skills and build a successful career.
      </p>

      <div className="w-full min-h-[300px] rounded-lg border border-solid border-[#bebebe] overflow-hidden">
        {/* Tab Headers */}
        <div className="w-full p-4 border-b border-gray-200">
          <div className="flex items-center gap-8 relative">
            <button
              onClick={() => setActiveTab('jobRoles')}
              className={`relative pb-2 font-semibold text-[16px] md:text-xl tracking-[0] leading-[normal] whitespace-nowrap transition-colors duration-200 ${
                activeTab === 'jobRoles' ? 'text-[#024B53] border-b-2 border-[#024B53]' : 'text-slate-600'
              }`}
            >
              Job Roles
            </button>

            <button
              onClick={() => setActiveTab('industries')}
              className={`relative pb-2 font-semibold text-[16px] md:text-xl tracking-[0] leading-[normal] whitespace-nowrap transition-colors duration-200 ${
                activeTab === 'industries' ? 'text-[#024B53] border-b-2 border-[#024B53]' : 'text-slate-600'
              }`}
            >
              Industries
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {/* Two column layout */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {(activeTab === 'jobRoles' ? jobRoles : industries).map((item: string, index: number) => (
              <div 
                key={index}
                className="flex items-center py-3 border-b border-gray-100 last:border-b-0"
              >
                <div className="font-normal text-[#333] text-[14px] tracking-[0] leading-[normal]">
                  {item}
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {(activeTab === 'jobRoles' ? jobRoles : industries).length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p className="text-[14px] md:text-[16px]">
                No {activeTab === 'jobRoles' ? 'job roles' : 'industries'} available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobRoles;
