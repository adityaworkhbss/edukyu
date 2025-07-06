import React from 'react';
import { CourseData } from "../../../Data Model/CourseData";

const CoursesComponentMobile = ({ onClose, program }) => {
    const subCourses = CourseData[program] || {};
    const courseNames = Object.keys(subCourses);

    const courseTypeFullForms = {
        "MBA": "Master of Business Administration",
        "MA": "Master of Arts",
        "MSC": "Master of Science",
        "MCA": "Master of Computer Applications",
        "MCOM": "Master of Commerce",
        "Bcom": "Bachelor of Commerce",
        "BBA": "Bachelor of Business Administration",
        "BSC": "Bachelor of Science",
        "BA": "Bachelor of Arts",
        "BCA": "Bachelor of Computer Applications"
    };


    const courseCount = courseNames.length;

    const heading = courseCount > 0 ? `${program} (${courseCount} Courses)` : program;

    const getBaseProgramName = (heading) => heading.split(' (')[0];

    const baseProgram = getBaseProgramName(heading);

    const selectedCourseTypeFullForm = courseTypeFullForms[baseProgram] || baseProgram;

    return (
        <div className="fixed h-full top-0 left-0 w-full bg-white shadow-lg z-50 px-5 flex flex-col overflow-y-auto">

            <div className="flex h-[58px] pt-6">
                <div onClick={onClose} className="cursor-pointer pt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15.4102 7.41L10.8302 12L15.4102 16.59L14.0002 18L8.00016 12L14.0002 6L15.4102 7.41Z" fill="#515150"/>
                    </svg>
                </div>

                <div className="text-[#515150] pl-2 font-outfit text-[20px] font-medium not-italic leading-normal">
                    {selectedCourseTypeFullForm}
                </div>
            </div>

            <div className="text-[#383837] pt-10 font-outfit text-[18px] font-medium not-italic leading-[20px]">
                Explore the courses that D.Y. Patil University provides
            </div>

            <div className="flex gap-1 pt-4">
                <div className="text-[#024B53] font-outfit text-[14px] font-medium not-italic leading-normal">
                    Explore Course
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_43_3690)">
                        <path d="M6.00033 3.33331V4.66665H10.3937L2.66699 12.3933L3.60699 13.3333L11.3337 5.60665V9.99998H12.667V3.33331H6.00033Z" fill="#024B53"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_43_3690">
                            <rect width="16" height="16" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <div className="text-[#024B53] pt-[40px] font-outfit text-[18px] font-medium not-italic leading-normal">
                {heading}
            </div>


            <div className="pt-5 flex flex-col gap-2 pb-6">
                {courseCount === 0 && (
                    <div className="text-[#777777] font-outfit text-[14px]">
                        No courses available.
                    </div>
                )}
                {courseNames.map((courseName, idx) => (
                    <div key={idx} className="flex justify-between items-center space-y-5 text-[#2B2B2A] font-outfit text-[14px] font-normal leading-normal">
                        <div>{courseName}</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_43_3694)">
                                <path
                                    d="M8.00033 2.66669L7.06033 3.60669L10.7803 7.33335H2.66699V8.66669H10.7803L7.06033 12.3934L8.00033 13.3334L13.3337 8.00002L8.00033 2.66669Z"
                                    fill="#515150"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_43_3694">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default CoursesComponentMobile;
