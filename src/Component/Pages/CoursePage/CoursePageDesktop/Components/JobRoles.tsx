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
      className="relative w-[1014px] h-[514px]  bg-cover bg-[50%_50%]"
      data-model-id="483:1620"
    >
      <div className="absolute w-[615px] top-[63px] font-semibold text-[#024B53] text-[48px] tracking-[0] leading-[normal]">
        Job roles &amp; Industries
      </div>

      <p className="absolute w-[615px] top-[139px] font-normal text-[#515150] text-xl tracking-[0] leading-[normal]">
        Explore diverse career opportunities and industries where you can apply your skills and build a successful career.
      </p>

      <div className="absolute w-[97%] h-[236px] top-[214px] bg-white rounded-lg overflow-hidden border border-solid border-[#bebebe]">
        {/* Dynamic content columns */}
        {activeData.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className={`flex flex-col w-[182px] items-start gap-1.5 absolute top-[84px] ${columnIndex === 0 ? 'left-5' :
                columnIndex === 1 ? 'left-[226px]' :
                  columnIndex === 2 ? 'left-[432px]' :
                    'left-[686px]'
              }`}
          >
            {column.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center gap-2.5 px-2.5 py-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-normal text-[#333] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  {item}
                </div>
              </div>
            ))}
          </div>
        ))}

        <div ref={tabsContainerRef} className="absolute w-[97%] h-10 top-5 left-5">
          <div className="inline-flex items-center absolute top-0 left-0">
            <div className="inline-flex items-center gap-5 px-6 py-2 relative flex-[0_0_auto]">
              <button
                onClick={() => setActiveTab('jobRoles')}
                ref={jobBtnRef}
                className={`relative w-fit mt-[-1.00px] font-semibold text-xl tracking-[0] leading-[normal] whitespace-nowrap ${activeTab === 'jobRoles' ? 'text-[#024B53]' : 'text-slate-600'
                  }`}
              >
                Job Roles
              </button>
            </div>

            <div className="inline-flex items-center gap-2.5 px-2.5 py-2 relative flex-[0_0_auto]">
              <button
                ref={indBtnRef}
                onClick={() => setActiveTab('industries')}
                className={`relative w-fit mt-[-1.00px] font-normal text-xl tracking-[0] leading-[normal] whitespace-nowrap ${activeTab === 'industries' ? 'text-[#024B53] font-semibold' : 'text-slate-600'
                  }`}
              >
                Industries
              </button>
            </div>
          </div>

          {/* base faint line */}
          <div className="absolute left-0 top-[38px] h-[2px] bg-slate-200 w-full" />

          {/* active underline positioned based on measured button */}
          <div
            className="absolute top-[38px] h-[3px] bg-[#024B53] transition-all duration-200"
            style={{ left: underlineStyle.left, width: underlineStyle.width }}
          />
        </div>
      </div>
    </div>
  );
};

export default JobRoles;