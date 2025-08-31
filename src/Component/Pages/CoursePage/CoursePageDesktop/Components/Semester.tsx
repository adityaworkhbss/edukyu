import React, { useState } from "react";

interface SemesterProps {
  course?: any;
}

export const Semester: React.FC<SemesterProps> = ({ course }) => {
  const [expandedSemester, setExpandedSemester] = useState<number | null>(null);

  // Extract course data safely - handle both direct and nested structures
  let courseData: any = {};
  
  if (course) {
    // Check if course has direct properties
    if (course.curriculum) {
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

  const curriculum = courseData?.curriculum;
  const semesters = curriculum?.semesters || [];

  // Hide component if no semester data
  if (!curriculum || semesters.length === 0) {
    return null;
  }

  const handleSemesterClick = (semesterId: number) => {
    setExpandedSemester(expandedSemester === semesterId ? null : semesterId);
  };

  return (
    <main
      className="relative w-full h-full"
      // style={{ 
      //   height: expandedSemester ? 'auto' : 'full',
      //   minHeight: '506px'
      // }}
      data-model-id="483:1998"
    >
      <header className="w-[65%] pt-16">
        <h1 className="[font-family:'Outfit',Helvetica] font-semibold text-[#024B53] text-5xl tracking-[0] leading-[normal]">
          Semester
        </h1>
      </header>

      <section className="w-[65%]">
        <p className="[font-family:'Outfit',Helvetica] font-normal text-[#515150] text-xl tracking-[0] leading-[normal] mb-[24px]">
          Explore our comprehensive curriculum designed to equip you with essential skills and knowledge across multiple semesters.
        </p>
      </section>

      <section className="w-[100%] relative" style={{ minHeight: '228px' }}>
        {semesters.map((semester: any, index: number) => (
          <React.Fragment key={semester.number}>
            <div
              className={`relative w-[97%] h-12 bg-[#effdfe] rounded-xl cursor-pointer hover:bg-[#e0f9fa] transition-colors duration-200`}
              style={{ 
                marginBottom: expandedSemester === semester.number ? '8px' : '8px' // Consistent 8px gap
              }}
              onClick={() => handleSemesterClick(semester.number)}
              role="button"
              tabIndex={0}
              aria-expanded={expandedSemester === semester.number}
              aria-label={`Toggle Semester ${semester.number} details`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSemesterClick(semester.number);
                }
              }}
            >
              <div className="absolute top-[13px] left-6 [font-family:'Outfit',Helvetica] font-normal text-[#202020] text-base tracking-[0] leading-[normal] z-10">
                Semester {semester.number}
              </div>

              <img
                className="absolute w-6 h-6 top-3 right-8 aspect-[1] transition-transform duration-200 z-10"
                style={{
                  transform:
                    expandedSemester === semester.number
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                }}
                alt={`${expandedSemester === semester.number ? "Collapse" : "Expand"} Semester ${semester.number}`}
                src={
                  semester.number === 1
                    ? "https://c.animaapp.com/gyQQKQRj/img/dropdown-icon.svg"
                    : semester.number === 2
                      ? "https://c.animaapp.com/gyQQKQRj/img/dropdown-icon-1.svg"
                      : semester.number === 3
                        ? "https://c.animaapp.com/gyQQKQRj/img/dropdown-icon-2.svg"
                        : "https://c.animaapp.com/gyQQKQRj/img/dropdown-icon-3.svg"
                }
              />
            </div>

            {/* Expanded Content - appears right below the clicked card */}
            {expandedSemester === semester.number && (
              <div
                className="relative w-[97%] bg-white border border-[#e0e0e0] rounded-xl p-6 shadow-lg mb-2"
              >
                {semester.description && (
                  <p className="[font-family:'Outfit',Helvetica] font-normal text-[#515150] text-sm mb-4 leading-relaxed">
                    {semester.description}
                  </p>
                )}
                
                {semester.courses && semester.courses.length > 0 && (
                  <div>
                    <h4 className="[font-family:'Outfit',Helvetica] font-semibold text-[#024B53] text-sm mb-3">
                      Courses:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {semester.courses.map((course: string, courseIndex: number) => (
                        <li 
                          key={courseIndex}
                          className="[font-family:'Outfit',Helvetica] font-normal text-[#333] text-sm flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-[#024B53] rounded-full mr-2 flex-shrink-0"></span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </section>
    </main>
  );
};
