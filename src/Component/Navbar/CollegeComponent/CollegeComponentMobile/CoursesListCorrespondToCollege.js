"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const CoursesListCorrespondToCollege = ({ courseData, program, onNavbarClose }) => {
    const courseList = courseData[program] || {};
    const courseArray = Object.entries(courseList);

    const [openCourse, setOpenCourse] = useState(null);

    const toggleCourse = (courseName) => {
        setOpenCourse((prev) => (prev === courseName ? null : courseName));
    };

    const handleLinkClick = () => {
        // Close the navbar when a link is clicked
        if (onNavbarClose) {
            onNavbarClose();
        }
    };

    return (
        <div className="overflow-hidden">
            <div className="flex items-center gap-3 pt-5">
                <Link href={"/noida_international_university/online_mba"} onClick={handleLinkClick}>
                    <div className="text-[#024B53] font-outfit text-[14px] font-medium leading-[20px]">
                        See what {program} has to offer you
                    </div>
                </Link>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2.667L7.06 3.607 10.78 7.333H2.667v1.333h8.113L7.06 12.393 8 13.333 13.333 8 8 2.667Z" fill="#024B53" />
                </svg>
            </div>

            {courseArray.length > 0 && (
                <div className="flex flex-col pl-4 gap-5 pt-5 pb-5">
                    {courseArray.map(([courseName], idx) => (
                        <div
                            key={idx}
                            className="flex justify-between items-center text-[#2B2B2A] font-outfit text-[14px] cursor-pointer"
                            onClick={() => toggleCourse(courseName)}
                        >
                            <div>{courseName}</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M8 2.667L7.06 3.607 10.78 7.333H2.667v1.333h8.113L7.06 12.393 8 13.333 13.333 8 8 2.667Z"
                                    fill="#515150"
                                />
                            </svg>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CoursesListCorrespondToCollege;
