import React, { useState } from 'react';
import { CourseData } from "../../../Data Model/CourseData";
import CoursesComponentMobile from './CoursesComponentMobile';

const CourseComponentMobileDropDown = () => {
    const [openProgram, setOpenProgram] = useState(null);

    const formattedPrograms = Object.keys(CourseData).map(program => {
        const subCourses = CourseData[program];
        const courseCount = Object.keys(subCourses).length;

        return courseCount > 0 ? `${program} (${courseCount} Courses)` : program;
    });

    // Extract program base name from formatted string "MBA (12 Courses)" => "MBA"
    const getBaseProgramName = (formattedName) => formattedName.split(' (')[0];

    const handleToggle = (program) => {
        setOpenProgram(prev => (prev === program ? null : program));
    };

    return (
        <div className="w-full bg-[#FFF] pl-4">
            <div>
                <div className="flex flex-col text-left gap-y-5 text-[#2B2B2A] font-outfit text-[14px] font-normal not-italic leading-normal">
                    {formattedPrograms.map((program, index) => {
                        const baseProgram = getBaseProgramName(program);
                        const isOpen = openProgram === baseProgram;

                        return (
                            <div key={index} className="flex flex-col">
                                <div className="flex justify-between gap-2 cursor-pointer bg-transparent border-0 p-0 text-left items-center">
                                    <div>{program}</div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        onClick={() => handleToggle(baseProgram)}
                                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <g clipPath="url(#clip0_43_3653)">
                                            <path
                                                d="M8.00033 2.66669L7.06033 3.60669L10.7803 7.33335H2.66699V8.66669H10.7803L7.06033 12.3934L8.00033 13.3334L13.3337 8.00002L8.00033 2.66669Z"
                                                fill="#515150"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_43_3653">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                {isOpen && <CoursesComponentMobile onClose={() => setOpenProgram(null)} program={baseProgram} />}

                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CourseComponentMobileDropDown;
