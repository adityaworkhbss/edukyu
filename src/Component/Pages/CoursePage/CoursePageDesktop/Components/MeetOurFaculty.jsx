"use client";
import React, { useRef } from "react";
import Image from "next/image";
import GridComponent from "@/GlobalComponent/GridComponent";
import { CoursePageData } from "@/Data Model/CoursePage/CoursePageData"; // use CoursePageData faculty

const OurFaculty = () => {
    // Grab faculty from course data and split into groups of 4 for swipe "pages"
    // CoursePageData is an array where each item is an object keyed by university (e.g. { manipal_university: { online_mba: { ... } } })
    // The previous direct access `CoursePageData[0].online_mba` is incorrect because the university key sits one level deeper.
    const faculty = (() => {
        if (!Array.isArray(CoursePageData)) return [];
        for (const uniObj of CoursePageData) {
            if (!uniObj || typeof uniObj !== 'object') continue;
            for (const uniKey of Object.keys(uniObj)) {
                const online = uniObj[uniKey]?.online_mba;
                if (online && Array.isArray(online.faculty)) return online.faculty;
            }
        }
        return [];
    })();
    const groupedCompanies = [];
    for (let i = 0; i < faculty.length; i += 4) {
        groupedCompanies.push(faculty.slice(i, i + 4));
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
        <section className="py-16 w-full">
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
                            className="flex-shrink-0 w-full max-w-[420px] grid grid-cols-2 gap-6 snap-start"
                        >
                            {group.map((alumni, idx) => (
                                <div
                                    key={idx}
                                    className="aspect-square rounded-[16px] overflow-hidden relative bg-[#D9D9D9] group"
                                >
                                    {alumni.image ? (
                                        <Image
                                            src={`https://edukyu.com${alumni.image}`}
                                            alt={alumni.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            unoptimized
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-2xl text-[#024B53] font-semibold bg-[#F3F3F3]">
                                            {getInitials(alumni.name)}
                                        </div>
                                    )}

                                    <div
                                        className="absolute bottom-0 left-0 right-0 text-center bg-gradient-to-t from-black/80 to-transparent backdrop-blur-md py-2 hidden group-hover:block transition-transform duration-300"
                                    >
                                        <div className="text-white text-[18px] font-[Outfit] font-semibold leading-normal">
                                            {alumni.name}
                                        </div>
                                        {alumni.position && (
                                            <div className="text-white/80 text-[16px] font-[Outfit] font-normal leading-normal">
                                                {alumni.position}
                                            </div>
                                        )}
                                        {alumni.qualifications && (
                                            <div className="text-white/80 text-[16px] font-[Outfit] font-normal leading-normal">
                                                {alumni.qualifications}
                                            </div>
                                        )}
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

export default OurFaculty;