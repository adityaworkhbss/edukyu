import React, { useState } from "react";

interface ToolsCertificateProps {
  course?: any;
}

const ToolsCertificate: React.FC<ToolsCertificateProps> = ({ course }) => {
  // Extract course data safely - handle both direct and nested structures
  let courseData: any = {};
  
  if (course) {
    // Check if course has direct properties
    if (course.additionalTools) {
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

  const additionalTools = courseData?.additionalTools;
  const categories = additionalTools?.categories || [];

  // Set initial active tab to first available category
  const [activeTab, setActiveTab] = useState<number>(0);

  // Hide component if no additional tools data
  if (!additionalTools || categories.length === 0) {
    return null;
  }

  const activeCategory = categories[activeTab];
  return (
      <div
          className="relative w-full bg-cover bg-[50%_50%]"
          style={{ height: 'auto' }}
          data-model-id="483:1602"
      >
        <div className="w-[65%] font-semibold text-[#024B53] text-[48px] tracking-[0] leading-[normal] pt-[64px]">
          {additionalTools.title || "Additional Tool & Certificates"}
        </div>

        <p className="w-[65%] mt-[16px] font-normal text-[#515150] text-xl tracking-[0] leading-[normal] mb-[24px]">
          {additionalTools.description || "Unlimited access to world class courses, hands-on projects, and job-ready certificate programs."}
        </p>

        <div className="relative w-[97%] h-11 border-b [border-bottom-style:solid] border-[#b2b2b2] mb-[64px]">
          {categories.map((category: any, index: number) => (
            <div 
              key={index}
              className={`inline-flex items-center justify-center gap-2.5 px-6 py-3 absolute top-0 cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
                activeTab === index ? 'border-b-2 [border-bottom-style:solid] border-teal-600' : ''
              }`}
              style={{ 
                left: index === 0 ? '0px' : 
                      index === 1 ? '300px' : 
                      index === 2 ? '600px' : 
                      '900px'
              }}
              onClick={() => setActiveTab(index)}
            >
              <div className={`relative w-fit mt-[-2.00px] font-semibold text-base tracking-[0] leading-5 whitespace-nowrap transition-colors duration-200 ${
                activeTab === index ? 'text-[#024B53]' : 'text-slate-600'
              }`}>
                {category.name}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic content based on active category */}
        <div className="w-full flex flex-wrap gap-4">
          {activeCategory?.items && activeCategory.items.map((item: string, index: number) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-lg px-4 py-3 h-[52px] w-fit"
            >
              <span className="text-sm font-medium text-gray-700 text-center leading-tight whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
  );
};

export default ToolsCertificate;
