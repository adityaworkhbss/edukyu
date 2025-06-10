import React, { useState } from 'react';

const CourseList = () => {
    const data = {
        "MBA (11 Courses)": [
            "(BCM) Block Chain Management",
            "(BAM) Business Analytics Management",
            "(AIML) Artificial Intelligence and Machine Learning",
            "(FNT) FinTech Management",
            "(MM) Marketing Management",
            "(HRM) Human Resource Management",
            "(FM) Finance Management",
            "(ITM) Information Technology",
            "(PM) Project Management",
            "(OM) Operations Management",
            "(HCM) Hospital Administration and Health Care Management",
            "(IBM) International Business Management",
            "(SCM) Logistics, Materials and Supply Chain",
            "(DM) Digital Marketing Management",
            "(ABM) Agri Business Management"
        ],
        BBA: [],
        MCA: [],
        BCA: [],
        MA: [],
        BA: [],
        "M.Com": [],
        "B.Com": [],
        "M.Sc": [],
        "B.Sc": [],
    };

    const [selectedCourse, setSelectedCourse] = useState("MBA (11 Courses)");

    const handleSelect = (name) => {
        setSelectedCourse(name);
    };

    return (
        <div className="overflow-hidden">

            <div className="flex flex-col md:flex-row pt-[29px] border-gray-200">
                <h1 className="text-[18px] width-[288px] h-[23px] font-medium text-black leading-none font-[Outfit] mb-3 md:mb-0">
                    Course D.Y. Patil University Provides
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
                        <defs>
                            <clipPath id="clip0_171_79">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>

            </div>

            <div className="flex pt-[44px] gap-6">
                <div className="border-r border-gray-200">
                    {Object.keys(data).map((course, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelect(course)}
                            className={`w-[189px] h-[36px] text-left text-[12px] pl-[12px] pt-[11px] pb-[10px] flex items-center border
                                ${selectedCourse === course
                                ? 'bg-[#025E68] text-white font-medium'
                                : 'bg-white border-[1px] border-[#B3CFD2] text-[#333]'
                            }
                                hover:bg-[#025E68]/90 hover:text-white transition-colors duration-200`}
                        >
                            {course}
                        </button>
                    ))}
                </div>

                {data[selectedCourse].length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
                        {data[selectedCourse].map((subCourse, idx) => (
                            <div
                                key={idx}
                                className="inline-flex items-center px-[12px] pr-[42px] py-[11px] text-sm border border-[#9F9F9F] bg-white"
                            >
                                {subCourse}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseList;
