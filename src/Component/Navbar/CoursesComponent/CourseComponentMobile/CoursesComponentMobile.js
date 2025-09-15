'use client';

import React from 'react';
import { CourseData } from '@/Data Model/CourseData';
import Link from 'next/link';

const CoursesComponentMobile = ({ onClose, program, onNavbarClose }) => {
    const subCourses = CourseData[program] || {};
    const courseNames = Object.keys(subCourses);

    const courseTypeFullForms = {
        MBA: "Master of Business Administration",
        MA: "Master of Arts",
        MSC: "Master of Science",
        MCA: "Master of Computer Applications",
        MCOM: "Master of Commerce",
        Bcom: "Bachelor of Commerce",
        BBA: "Bachelor of Business Administration",
        BSC: "Bachelor of Science",
        BA: "Bachelor of Arts",
        BCA: "Bachelor of Computer Applications",
    };

    const handleLinkClick = () => {
        // Close the navbar when a link is clicked
        if (onNavbarClose) {
            onNavbarClose();
        }
    };

    const courseCount = courseNames.length;
    const heading = courseCount > 0 ? `${program} (${courseCount} Courses)` : program;
    const baseProgram = heading.split(' (')[0];
    const selectedCourseTypeFullForm = courseTypeFullForms[baseProgram] || baseProgram;

    return (
        <div className="fixed h-full top-0 left-0 w-full bg-white shadow-lg z-50 px-5 flex flex-col overflow-y-auto">
            <div className="flex h-[58px] pt-6">
                <div onClick={onClose} className="cursor-pointer pt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path d="M15.41 7.41L10.83 12L15.41 16.59L14 18L8 12L14 6L15.41 7.41Z" fill="#515150" />
                    </svg>
                </div>
                <div className="text-[#515150] pl-2 font-outfit text-[20px] font-medium leading-normal">
                    {selectedCourseTypeFullForm}
                </div>
            </div>

            <div className="text-[#383837] pt-10 font-outfit text-[18px] font-medium leading-[20px]">
                Explore the courses that D.Y. Patil University provides
            </div>

            <div className="flex gap-1 pt-4">
                <Link href={"/noida_international_university/online_mba"} className="flex gap-1" onClick={handleLinkClick}>
                <div className="text-[#024B53] font-outfit text-[14px] font-medium">
                    Explore Course
                </div></Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path d="M6 3.33V4.67H10.39L2.667 12.39L3.607 13.33L11.334 5.607V10H12.667V3.333H6Z" fill="#024B53" />
                </svg>
            </div>

            <div className="text-[#024B53] pt-10 font-outfit text-[18px] font-medium leading-normal">
                {heading}
            </div>

            <div className="pt-5 flex flex-col gap-2 pb-6">
                {courseCount === 0 ? (
                    <div className="text-[#777777] font-outfit text-[14px]">No courses available.</div>
                ) : (
                    courseNames.map((courseName, idx) => (
                        <div
                            key={idx}
                            className="flex justify-between items-center text-[#2B2B2A] font-outfit text-[14px] font-normal leading-normal"
                        >
                            <div>{courseName}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path
                                    d="M8 2.667L7.06 3.607L10.78 7.333H2.667v1.334H10.78L7.06 12.393 8 13.333 13.334 8 8 2.667Z"
                                    fill="#515150"
                                />
                            </svg>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CoursesComponentMobile;
