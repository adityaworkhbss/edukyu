"use client";
import React, { useRef } from "react";
import Image from "next/image";
import GridComponent from "@/GlobalComponent/GridComponent";
import { CoursePageData } from "@/Data Model/CoursePage/CoursePageData"; // use CoursePageData faculty

const OurFacultyMobile = () => {
    // Grab faculty from course data and split into groups of 2 so each mobile page
    // shows two vertically stacked cards (one column, two rows)
    const faculty = CoursePageData?.[0]?.online_mba?.faculty || [];
    const groupedCompanies = [];
    for (let i = 0; i < faculty.length; i += 2) {
        groupedCompanies.push(faculty.slice(i, i + 2));
    }
    const containerRef = useRef(null);

    const scrollByWidth = (dir = 1) => {
        const el = containerRef.current;
        if (!el) return;
        const amount = el.clientWidth * dir; // scroll by visible width
        // smooth scroll; if at end, wrap to start
        if (dir > 0 && el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) {
            el.scrollTo({ left: 0, behavior: 'smooth' });
        } else if (dir < 0 && el.scrollLeft <= 0) {
            el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
        } else {
            el.scrollBy({ left: amount, behavior: 'smooth' });
        }
    };

    const getInitials = (name = '') => {
        const parts = name.split(' ').filter(Boolean);
        if (!parts.length) return '';
        return (parts[0][0] || '') + (parts[1] ? parts[1][0] : '');
    };

    return (
        <section className="pb-10 w-full">
            <GridComponent gridStart={0} gridEnd={6}>
                <h2 className="text-[48px] font-semibold text-[#024B53] font-[Outfit] leading-normal w-full">
                    Meet Your Faculty
                </h2>
                {/* <p className="text-[20px] pt-4 mb-[64px] font-normal text-[#515150] font-[Outfit] leading-normal">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </p> */}
            </GridComponent>



            <div className="relative">
                <div ref={containerRef} className="flex overflow-x-auto space-x-6 snap-x snap-mandatory no-scrollbar mb-[32px] mt-[64px]" tabIndex={0}>
                    {groupedCompanies.map((group, groupIndex) => (
                        <div
                            key={groupIndex}
                            className="flex-shrink-0 w-full max-w-full grid grid-cols-1 gap-6 snap-start"
                        >
                            {group.map((alumni, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-4 p-4 bg-white rounded-[16px] w-full"
                                >
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 relative rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center bg-[#F3F3F3] text-[#024B53] font-semibold">
                                        {alumni.image ? (
                                            <Image

                                                src={`https://edukyu.com/${logo.image}`}
                                                alt={alumni.name}
                                                width={80}
                                                height={80}
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-lg">
                                                {getInitials(alumni.name)}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-[18px] font-semibold text-[#024B53] truncate">
                                            {alumni.name}
                                        </h3>
                                        <p className="text-sm text-[#515150] mt-1 truncate">{alumni.position}</p>
                                        <p className="text-[13px] text-[#6B6B6B] mt-1 truncate">{alumni.qualifications}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons (below the carousel) */}
                <div className="flex justify-between mt-4">
                    <button
                        onClick={() => scrollByWidth(-1)}
                        className="bg-white z-10 p-3 hover:shadow-md rounded"
                        aria-label="Previous faculty"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="none">
                            <path d="M26.6667 14.6667H10.44L17.8933 7.21337L16 5.33337L5.33334 16L16 26.6667L17.88 24.7867L10.44 17.3334H26.6667V14.6667Z" fill="#9B9B9B" />
                        </svg>
                    </button>

                    <button
                        onClick={() => scrollByWidth(1)}
                        className="bg-white z-10 p-3 hover:shadow-md rounded"
                        aria-label="Next faculty"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="none">
                            <path d="M5.33329 17.3333L21.56 17.3333L14.1066 24.7866L16 26.6666L26.6666 16L16 5.33329L14.12 7.21329L21.56 14.6666L5.33329 14.6666L5.33329 17.3333Z" fill="#024B53" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurFacultyMobile;