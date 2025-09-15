"use client";

import React, { useState } from 'react';
import { universitiesData } from "@/Data Model/UniversityData";
import CoursesListCorrespondToCollege from "./CoursesListCorrespondToCollege";
import {usePageContext} from "@/GlobalComponent/PageContext";
import Link from "next/link";

const universityKeyMap = {
    'Amity University': 'Amity',
    'Dr. DY Patil University': 'DYP',
    'Jain University': 'Jain',
    'Lovely Professional University': 'LPU',
    'Manipal University': 'Manipal',
    'NMIMS University': 'NMIMS',
    'Shardha University': 'Shardha',
    'Shoolini University': 'Shoolini',
    'Uttaranchal University': 'UU',
    'Vivekanand Global University': 'VGU',
};

const universityKeyMap_Page = {
    'Amity University': 'Amity_University',
    'Dr. DY Patil University': 'DYP',
    'Jain University': 'Jain_University',
    'Lovely Professional University': 'Lovely_Professional_University',
    'Manipal University': 'Manipal_University',
    'NMIMS University': 'NMIMS',
    'Shardha University': 'Sikkim_Manipal_University',
    'Shoolini University': 'Shoolini_University',
    'Uttaranchal University': 'UU',
    'Vivekanand Global University': 'VGU',
};

const universityKeyMapCorrect = {
    "Amity":'Amity-University',
    "DYP":'D.Y.-Patil-Vidyapeeth',
    "Jain":'Jain-University',
    "LPU":'Lovely-Professional-University',
    "Manipal":'Manipal-University-Jaipur',
    "NMIMS":'NMIMS-University-Online',
    "Shardha":'Shardha-University',
    "Shoolini":'Shoolini-University',
    "UU":'Uttaranchal-University',
    "VGU":'Vivekanand-Global-University',
    "NIU":'Noida-International-University',
    "Sikkim_Manipal_University":'Sikkim-Manipal-University'
};

const CoursesComponentMobile = ({ onClose, college, onSidebarClose }) => {
    const [openProgram, setOpenProgram] = useState(null);
    const { setCurrentPage, setSelectedCollege } = usePageContext();
    const collegeKey = universityKeyMap[college];
    const courses = universitiesData[collegeKey] || {};

    const courseNames = Object.entries(courses).map(([program, courseList]) => {
        const courseCount = Object.keys(courseList).length;
        const heading = courseCount > 0 ? `${program} (${courseCount} Courses)` : program;
        return { heading, program };
    });

    const handleToggleProgram = (program) => {
        setOpenProgram(prev => prev === program ? null : program);
    };

    return (
        <div className="fixed h-full top-0 left-0 w-full bg-white shadow-lg z-50 px-5 flex flex-col overflow-y-auto">
            {/* Top bar with back */}
            <div className="flex h-[58px] pt-6">
                <div onClick={onClose} className="cursor-pointer pt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15.4102 7.41L10.8302 12L15.4102 16.59L14.0002 18L8.00016 12L14.0002 6L15.4102 7.41Z" fill="#515150" />
                    </svg>
                </div>
                <div className="text-[#515150] pl-2 font-outfit text-[20px] font-medium not-italic leading-normal">
                    {college}
                </div>
            </div>

            {/* Subtitle */}
            <div className="text-[#383837] pt-10 font-outfit text-[18px] font-medium not-italic leading-[20px]">
                Explore the courses that {college} provides
            </div>

            {/* Explore College Button */}
            <Link 
                href={`/online-mba-programs/top-distance-mba-colleges/${encodeURIComponent(universityKeyMapCorrect[collegeKey])}`}
                className="flex gap-1 pt-4"
                onClick={() => {
                    onClose(); // Close the college component
                    if (onSidebarClose) {
                        onSidebarClose(); // Close the entire mobile sidebar
                    }
                }}
            >
                <div className="text-[#024B53] font-outfit text-[14px] font-medium not-italic leading-normal">
                    Explore College
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_43_3690)">
                        <path d="M6.00033 3.33331V4.66665H10.3937L2.66699 12.3933L3.60699 13.3333L11.3337 5.60665V9.99998H12.667V3.33331H6.00033Z" fill="#024B53" />
                    </g>
                    <defs>
                        <clipPath id="clip0_43_3690">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </Link>

            {/* Course list */}
            <div className="pt-5 flex flex-col gap-5 pb-5">
                {courseNames.length === 0 ? (
                    <div className="text-[#777777] font-outfit text-[14px]">
                        No courses available.
                    </div>
                ) : (
                    courseNames.map(({ heading, program }, idx) => (
                        <div key={idx} className="flex flex-col gap-2">
                            <div
                                onClick={() => handleToggleProgram(program)}
                                className="flex justify-between items-center cursor-pointer"
                            >
                                <div
                                    className={`font-outfit text-[18px] font-medium not-italic leading-normal ${
                                        openProgram === program ? 'text-[#024B53]' : 'text-[#515150]'
                                    }`}
                                >
                                    {heading}
                                </div>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    className={`transition-transform duration-300 'rotate-180' ${
                                        openProgram === program ? '' : 'rotate-180'
                                    }`}
                                >
                                    <path
                                        d="M11.06 10.2733L8 7.21998L4.94 10.2733L4 9.33331L8 5.33332L12 9.33332L11.06 10.2733Z"
                                        fill="#024B53"
                                    />
                                </svg>
                            </div>



                            {openProgram === program && (
                                <CoursesListCorrespondToCollege
                                    program={program}
                                    courseData={courses}
                                    onNavbarClose={onSidebarClose}
                                />
                            )}

                            <div className= ' mt-3 bg-[#6A6A69] h-px w-auto'></div>
                        </div>


                    ))
                )}
            </div>
        </div>
    );
};

export default CoursesComponentMobile;
