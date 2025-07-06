import React, { useState } from 'react';
import { universitiesData } from '../../../Data Model/UniversityData';

const CollegeCourseListComponentDesktop = ({ university }) => {
    const universityData = universitiesData[university] || {};

    const formattedPrograms = Object.keys(universityData).map(program => {
        const courseCount = Object.keys(universityData[program]).length;
        return courseCount > 0 ? `${program} (${courseCount} Courses)` : program;
    });

    const [selectedProgram, setSelectedProgram] = useState(formattedPrograms[0] || "");

    const getBaseProgramName = (formattedName) => {
        return formattedName.split(' (')[0];
    };

    const handleSelect = (name) => {
        setSelectedProgram(name);
    };

    const baseProgram = getBaseProgramName(selectedProgram);
    const courses = universityData[baseProgram] ? Object.keys(universityData[baseProgram]) : [];

    return (
        <div className="overflow-hidden h-[626px]">

            <div className="flex flex-col md:flex-row pt-[29px] border-gray-200">
                <h1 className="text-[18px] width-[288px] h-[23px] font-medium text-black leading-none font-[Outfit] mb-3 md:mb-0">
                    Courses {university} Provides
                </h1>

                <a
                    href="#"
                    className="text-[14px] h-[18px] pl-[23px] text-[#357E86] font-medium leading-none font-[Outfit] flex items-center gap-[8px] transition-colors duration-200 hover:text-[#2d6d74]"
                >
                    Explore College
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 shrink-0 aspect-square"
                        viewBox="0 0 16 16"
                        fill="none"
                    >
                        <g clipPath="url(#clip0_171_79)">
                            <path
                                d="M6.00033 3.33334V4.66667H10.3937L2.66699 12.3933L3.60699 13.3333L11.3337 5.60667V10H12.667V3.33334H6.00033Z"
                                fill="#357E86"
                            />
                        </g>
                    </svg>
                </a>
            </div>

            <div className="flex pt-[44px] gap-6 pb-[95px]">
                <div className="">
                    {formattedPrograms.map((program, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelect(program)}
                            className={`w-[189px] h-[36px] text-left text-[12px] pl-[12px] pt-[11px] pb-[10px] flex items-center border
                                ${selectedProgram === program
                                ? 'bg-[#025E68] text-white font-medium'
                                : 'bg-white border-[1px] border-[#B3CFD2] text-[#333]'
                            }
                                hover:bg-[#025E68]/90 hover:text-white transition-colors duration-200`}
                        >
                            {program}
                        </button>
                    ))}
                </div>

                {courses.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 pb-[111px] h-[36px]">
                        {courses.map((course, idx) => (
                            <div
                                key={idx}
                                className="w-[278px] h-[36px] px-[12px] py-[11px] overflow-hidden text-left  truncate line-clamp-1 text-[#786D6D] text-[12px] font-[400] font-[Outfit] not-italic leading-normal flex-shrink-0 border border-[#9F9F9F]/50 bg-white"

                            >
                                {course}
                            </div>

                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CollegeCourseListComponentDesktop;
