'use client';

import React, { useState } from 'react';
import { CourseData } from '@/Data Model/CourseData';
import CoursesComponentMobile from './CoursesComponentMobile';

const CourseComponentMobileDropDown = ({ onNavbarClose }) => {
    const [openProgram, setOpenProgram] = useState(null);

    const formattedPrograms = Object.keys(CourseData).map(program => {
        const subCourses = CourseData[program];
        const courseCount = Object.keys(subCourses).length;
        return courseCount > 0 ? `${program} (${courseCount} Courses)` : program;
    });

    const getBaseProgramName = (formattedName) => formattedName.split(' (')[0];

    const handleToggle = (program) => {
        setOpenProgram(prev => (prev === program ? null : program));
    };

    return (
        <div className="w-full bg-[#FFF] pl-4">
            <div className="flex flex-col text-left gap-y-5 text-[#2B2B2A] font-outfit text-[14px] font-normal not-italic leading-normal">
                {formattedPrograms.map((program, index) => {
                    const baseProgram = getBaseProgramName(program);
                    const isOpen = openProgram === baseProgram;

                    return (
                        <div key={index} className="flex flex-col">
                            <div className="flex justify-between gap-2 items-center cursor-pointer">
                                <div>{program}</div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    onClick={() => handleToggle(baseProgram)}
                                    className={`transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`}
                                >
                                    <path
                                        d="M11.06 10.2733L8 7.21998L4.94 10.2733L4 9.33331L8 5.33332L12 9.33332L11.06 10.2733Z"
                                        fill="#024B53"
                                    />
                                </svg>
                            </div>

                            {isOpen && (
                                <CoursesComponentMobile
                                    onClose={() => setOpenProgram(null)}
                                    program={baseProgram}
                                    onNavbarClose={onNavbarClose}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CourseComponentMobileDropDown;
