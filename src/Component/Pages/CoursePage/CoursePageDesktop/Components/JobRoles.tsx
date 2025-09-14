import React, { useState, useRef, useEffect } from "react";

interface JobRolesProps {
  course?: any;
}

const JobRoles: React.FC<JobRolesProps> = ({ course }) => {
  const [activeTab, setActiveTab] = useState<'jobRoles' | 'industries'>('jobRoles');
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const jobBtnRef = useRef<HTMLButtonElement | null>(null);
  const indBtnRef = useRef<HTMLButtonElement | null>(null);

  const [underlineStyle, setUnderlineStyle] = useState<{ left: string; width: string }>({
    left: '0px',
    width: '0px',
  });

  useEffect(() => {
    function updateUnderline() {
      const activeBtn = activeTab === 'jobRoles' ? jobBtnRef.current : indBtnRef.current;
      const container = tabsContainerRef.current;
      if (!activeBtn || !container) return;

      const btnRect = activeBtn.getBoundingClientRect();
      const contRect = container.getBoundingClientRect();

      const left = Math.round(btnRect.left - contRect.left) + 'px';
      const width = Math.round(btnRect.width) + 'px';
      setUnderlineStyle({ left, width });
    }

    updateUnderline();
    window.addEventListener('resize', updateUnderline);
    return () => window.removeEventListener('resize', updateUnderline);
  }, [activeTab]);

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

  // Split job roles into columns for display
  const getJobRoleColumns = () => {
    const columns: string[][] = [[], [], [], []];
    jobRoles.forEach((role: string, index: number) => {
      columns[index % 4].push(role);
    });
    return columns;
  };

  // Split industries into columns for display
  const getIndustryColumns = () => {
    const columns: string[][] = [[], [], [], []];
    industries.forEach((industry: string, index: number) => {
      columns[index % 4].push(industry);
    });
    return columns;
  };

  const jobRoleColumns = getJobRoleColumns();
  const industryColumns = getIndustryColumns();
  const activeData = activeTab === 'jobRoles' ? jobRoleColumns : industryColumns;
  return (
    <div
      className="relative w-full bg-cover bg-[50%_50%] "
      style={{ height: 'auto' }}
      data-model-id="483:1620"
    >
      <div className="w-[65%] pt-[64px] font-semibold text-[#024B53] text-[48px] tracking-[0] leading-[normal]">
        Job roles &amp; Industries
      </div>

      <p className="w-[65%] mt-[16px] font-normal text-[#515150] text-xl tracking-[0] leading-[normal]">
        Explore diverse career opportunities and industries where you can apply your skills and build a successful career.
      </p>

      <div className="relative w-[97%] mt-[24px] rounded-lg overflow-hidden border border-solid border-[#bebebe] pb-8"
           style={{ minHeight: '236px' }}>
        
        {/* Tabs at the top */}
        <div ref={tabsContainerRef} className="relative w-[97%] h-10 mt-5 ml-5">
          <div className="inline-flex items-center relative">
            <div className="inline-flex items-center gap-5 px-6 py-4 relative flex-[0_0_auto]">
              <button
                onClick={() => setActiveTab('jobRoles')}
                ref={jobBtnRef}
                className={`relative w-fit pb-3 font-semibold text-xl tracking-[0] leading-[normal] whitespace-nowrap transition-all duration-200 hover:bg-gray-50 ${
                  activeTab === 'jobRoles' ? 'text-[#024B53] border-b-2 border-teal-600' : 'text-slate-600'
                }`}
              >
                Job Roles
              </button>
            </div>

            <div className="inline-flex items-center gap-2.5 px-2.5 py-4 relative flex-[0_0_auto]">
              <button
                ref={indBtnRef}
                onClick={() => setActiveTab('industries')}
                className={`relative w-fit pb-3 font-normal text-xl tracking-[0] leading-[normal] whitespace-nowrap transition-all duration-200 hover:bg-gray-50 ${
                  activeTab === 'industries' ? 'text-[#024B53] font-semibold border-b-2 border-teal-600' : 'text-slate-600'
                }`}
              >
                Industries
              </button>
            </div>
          </div>
        </div>
        
        {/* Content area with proper grid layout */}
        <div className="mt-8 px-5">
          <div className="grid grid-cols-4 gap-6">
            {activeData.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col" style={{ gap: '6px' }}>
                {column.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="transition-colors hover:bg-gray-50 flex items-center justify-start text-left"
                    style={{ padding: '8px' }}
                  >
                    <div className="font-normal text-[#333] text-xl tracking-[0] leading-[normal]">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobRoles;