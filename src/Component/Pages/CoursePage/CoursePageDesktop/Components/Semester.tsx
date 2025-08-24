import React, { useState } from "react";

export const Semester: React.FC = () => {
  const [expandedSemester, setExpandedSemester] = useState<number | null>(null);

  const semesterData = [
    { id: 1, name: "Semester 1" },
    { id: 2, name: "Semester 2" },
    { id: 3, name: "Semester 3" },
    { id: 4, name: "Semester 4" },
  ];

  const handleSemesterClick = (semesterId: number) => {
    setExpandedSemester(expandedSemester === semesterId ? null : semesterId);
  };

  return (
    <main
      className="relative w-[1014px] h-[506px] bg-white"
      data-model-id="483:1998"
    >
      <header className="absolute w-[615px] top-[63px] left-6">
        <h1 className="[font-family:'Outfit',Helvetica] font-semibold text-colourprimary-coloursegyptian-enamel-lift-500 text-5xl tracking-[0] leading-[normal]">
          Semester
        </h1>
      </header>

      <section className="absolute w-[615px] top-[139px] left-6">
        <p className="[font-family:'Outfit',Helvetica] font-normal text-colourbackground-coloursblack-300 text-xl tracking-[0] leading-[normal]">
          Unlimited access to world class courses, hands-on projects, and
          job-ready certificate programs.
        </p>
      </section>

      <section className="absolute w-[934px] h-[228px] top-[214px] left-6">
        {semesterData.map((semester, index) => (
          <div
            key={semester.id}
            className={`absolute w-[934px] h-12 left-0 bg-[#effdfe] rounded-xl overflow-hidden cursor-pointer hover:bg-[#e0f9fa] transition-colors duration-200`}
            style={{ top: `${index * 60}px` }}
            onClick={() => handleSemesterClick(semester.id)}
            role="button"
            tabIndex={0}
            aria-expanded={expandedSemester === semester.id}
            aria-label={`Toggle ${semester.name} details`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleSemesterClick(semester.id);
              }
            }}
          >
            <div className="absolute top-[13px] left-6 [font-family:'Outfit',Helvetica] font-normal text-[#202020] text-base tracking-[0] leading-[normal]">
              {semester.name}
            </div>

            <img
              className="absolute w-6 h-6 top-3 left-[886px] aspect-[1] transition-transform duration-200"
              style={{
                transform:
                  expandedSemester === semester.id
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
              }}
              alt={`${expandedSemester === semester.id ? "Collapse" : "Expand"} ${semester.name}`}
              src={
                semester.id === 1
                  ? "https://c.animaapp.com/gyQQKQRj/img/dropdown-icon.svg"
                  : semester.id === 2
                    ? "https://c.animaapp.com/gyQQKQRj/img/dropdown-icon-1.svg"
                    : semester.id === 3
                      ? "https://c.animaapp.com/gyQQKQRj/img/dropdown-icon-2.svg"
                      : "https://c.animaapp.com/gyQQKQRj/img/dropdown-icon-3.svg"
              }
            />
          </div>
        ))}
      </section>
    </main>
  );
};
