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
          className="relative w-full min-h-[400px] bg-cover bg-[50%_50%] px-4 py-8"
          data-model-id="483:1602"
      >
        <div className="w-full font-semibold text-[#024B53] text-[28px] md:text-[48px] tracking-[0] leading-[32px] md:leading-[normal] mb-4">
          {additionalTools.title || "Additional Tool & Certificates"}
        </div>

        <p className="w-full font-normal text-[#515150] text-[14px] md:text-xl tracking-[0] leading-[20px] md:leading-[normal] mb-8">
          {additionalTools.description || "Unlimited access to world class courses, hands-on projects, and job-ready certificate programs."}
        </p>

        {/* Mobile-friendly tabs - scrollable horizontal */}
        <div className="w-full overflow-x-auto mb-6">
          <div className="flex min-w-max border-b border-[#b2b2b2] relative">
            {categories.map((category: any, index: number) => (
              <div 
                key={index}
                className={`flex items-center justify-center px-4 py-3 cursor-pointer transition-all duration-200 hover:bg-gray-50 whitespace-nowrap ${
                  activeTab === index ? 'border-b-2 border-teal-600' : ''
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className={`font-semibold text-[14px] md:text-base tracking-[0] leading-5 transition-colors duration-200 ${
                  activeTab === index ? 'text-[#024B53]' : 'text-slate-600'
                }`}>
                  {category.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile-responsive grid for items */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {activeCategory?.items && activeCategory.items.map((item: string, index: number) => (
            <div
              key={index}
              className="flex items-center justify-center bg-gray-100 border border-gray-200 rounded-lg px-3 py-3 min-h-[52px] text-center"
            >
              <span className="text-[12px] md:text-sm font-medium text-gray-700 leading-tight break-words">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
  );
};

export default ToolsCertificate;
