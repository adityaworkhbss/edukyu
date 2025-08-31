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
      className="relative w-full px-4 py-8"
      data-model-id="483:1998"
    >
      <header className="mb-3">
        <h1 className="text-[#024B53] text-[28px] font-[Outfit] font-[600] tracking-[0] leading-[normal]">
          Semester
        </h1>
      </header>

      <section className="mb-6">
        <p className="[font-family:'Outfit',Helvetica] font-normal text-[#515150] text-[14px] md:text-xl tracking-[0] leading-[20px] md:leading-[normal]">
          Explore our comprehensive curriculum designed to equip you with essential skills and knowledge across multiple semesters.
        </p>
      </section>

      <section className="w-full space-y-4">
        {semesters.map((semester: any, index: number) => (
          <div key={semester.number} className="w-full">
            <div
              className={`w-full h-12 bg-[#effdfe] rounded-xl overflow-hidden cursor-pointer hover:bg-[#e0f9fa] transition-colors duration-200 flex items-center justify-between px-6`}
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
              <div className="[font-family:'Outfit',Helvetica] font-normal text-[#202020] text-[14px] md:text-base tracking-[0] leading-[normal]">
                Semester {semester.number}
              </div>

              <svg
                className={`w-6 h-6 transition-transform duration-200 ${
                  expandedSemester === semester.number ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Expanded Content */}
            {expandedSemester === semester.number && (
              <div className="w-full bg-white border border-[#e0e0e0] rounded-xl p-4 md:p-6 shadow-lg mt-2">
                {semester.description && (
                  <p className="[font-family:'Outfit',Helvetica] font-normal text-[#515150] text-[12px] md:text-sm mb-4 leading-relaxed">
                    {semester.description}
                  </p>
                )}
                
                {semester.courses && semester.courses.length > 0 && (
                  <div>
                    <h4 className="[font-family:'Outfit',Helvetica] font-semibold text-[#024B53] text-[14px] md:text-sm mb-3">
                      Courses:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {semester.courses.map((course: string, courseIndex: number) => (
                        <li 
                          key={courseIndex}
                          className="[font-family:'Outfit',Helvetica] font-normal text-[#333] text-[12px] md:text-sm flex items-center"
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
          </div>
        ))}
      </section>
    </main>
  );
};
