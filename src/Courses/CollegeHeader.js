import React, { useState } from 'react';
import CourseList from "./CourseList";

export default function CollegeHeader() {
    const [showCourses, setShowCourses] = useState(false);

    const handleToggle = () => {
        setShowCourses(prev => !prev);
    };

    return (
        <>
            {showCourses && (
                <div className="fixed inset-0 bg-black bg-opacity-30 z-40 backdrop-blur-sm" onClick={() => setShowCourses(false)}></div>
            )}

            {/* Main header container */}
            <div className={`w-full pl-14 pt-8 relative z-50 ${showCourses ? 'fixed top-0 left-0 right-0 bg-white ' : ''}`}>
                <div className="flex flex-wrap pb-[23px] items-center gap-[7px]">
                    {/* University link */}
                    <div className="flex items-center gap-2">
                        <span
                            onClick={handleToggle}
                            className="text-[#025E68] font-outfit text-base font-semibold h-auto w-auto cursor-pointer hover:text-[#014950]"
                        >
                            Explore D.Y. Patil University
                        </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            className="w-[16px] h-[16px] aspect-square fill-[#357E86]"
                        >
                            <g clipPath="url(#clip0_171_17)">
                                <path d="M10.6663 4L12.193 5.52667L8.93967 8.78L6.27301 6.11333L1.33301 11.06L2.27301 12L6.27301 8L8.93967 10.6667L13.1397 6.47333L14.6663 8V4H10.6663Z" />
                            </g>
                            <defs>
                                <clipPath id="clip0_171_17">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    {Array.from({ length: 4 }, (_, index) => (
                        <div
                            key={index}
                            className="inline-flex px-[10px] py-[12px] justify-center items-center gap-[12px] border border-black bg-white text-sm hover:bg-gray-50 cursor-pointer rounded-sm whitespace-nowrap"
                        >
                            College {index + 1}
                        </div>
                    ))}
                </div>

                <div className="w-full h-px bg-[#9B9B9B] mt-4"></div>

                {showCourses && (
                    <div className="">
                        <CourseList />
                    </div>
                )}
            </div>
        </>
    );
}
