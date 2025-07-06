import React, { useState } from 'react';
import { universitiesData } from '../../../Data Model/UniversityData';
import CollegeCourseListComponentDesktop from "./CollegeCourseListComponentDesktop";

export default function CollegeHeaderComponentDesktop() {
    const [showCourses] = useState(true);
    const [trendingCollege] = useState("DPU");

    const [selectedUniversity, setSelectedUniversity] = useState(trendingCollege);

    const handleToggle = (university) => () => {

        if(selectedUniversity === null){
            setSelectedUniversity(university);
            // setShowCourses(prev => !prev);
        }

        if(selectedUniversity !== university) {
            setSelectedUniversity(university);
        } else {
            // setShowCourses(prev => !prev);
        }

    };

    return (
        <>
            <div className={`font-outfit w-full pl-14 pt-8 relative z-50 bg-white ${showCourses ? 'fixed top-0 left-0 right-0 ' : ''}`}>
                <div className="flex flex-wrap pb-[23px] items-center gap-[7px]">
                    <div className="flex items-center gap-0.5">
                        <span
                            onClick={() => setSelectedUniversity(trendingCollege)}
                            className="text-[#025E68] font-outfit text-base font-semibold h-auto w-auto cursor-pointer hover:text-[#014950]"
                        >
                            Explore {trendingCollege}
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            className="w-[16px] h-[16px] aspect-square fill-[#357E86]"
                        >
                            <g clipPath="url(#clip0_171_17)">
                                <path d="M10.6663 4L12.193 5.52667L8.93967 8.78L6.27301 6.11333L1.33301 11.06L2.27301 12L6.27301 8L8.93967 10.6667L13.1397 6.47333L14.6663 8V4H10.6663Z" />
                            </g>
                        </svg>
                    </div>
                    {Object.keys(universitiesData).map((university, index) => (
                        <div
                            key={index}
                            className="inline-flex px-[10px] py-[12px] justify-center items-center gap-[12px] border border-black bg-white text-sm hover:bg-gray-50 cursor-pointer rounded-sm whitespace-nowrap"
                            onClick={handleToggle(university)}
                        >
                            {university}
                        </div>
                    ))}
                </div>
                <div className="w-full h-px bg-[#9B9B9B] mt-4 pr-[56px]"></div>
                {showCourses && (
                    <div className="font-outfit">
                        <CollegeCourseListComponentDesktop university={selectedUniversity} />
                    </div>
                )}
            </div>
        </>
    );
}