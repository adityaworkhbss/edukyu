"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import GridComponent from "@/GlobalComponent/GridComponent";
import { CoursePageData } from "@/Data Model/CoursePage/CoursePageData"; // use CoursePageData faculty

const OurFacultyMobile = () => {
    const [selectedFaculty, setSelectedFaculty] = useState(null);
    
    // Grab faculty from course data and split into groups of 2 for mobile grid (same as StudentPlacement)
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
    
    // Add fallback faculty data for testing if no data is found
    const fallbackFaculty = [
        { name: "Dr. John Smith", position: "Professor", image: null },
        { name: "Dr. Jane Doe", position: "Associate Professor", image: null },
        { name: "Dr. Mike Johnson", position: "Assistant Professor", image: null },
        { name: "Dr. Sarah Wilson", position: "Lecturer", image: null }
    ];
    
    const finalFaculty = faculty.length > 0 ? faculty : fallbackFaculty;
    console.log('Faculty data:', finalFaculty); // Debug log
    
    // Break faculty data into groups of 2 for each swipe "page" (same as StudentPlacement)
    const groupedCompanies = [];
    for (let i = 0; i < finalFaculty.length; i += 2) {
        groupedCompanies.push(finalFaculty.slice(i, i + 2));
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
        <section className="pb-8 w-full">
            <GridComponent gridStart={0} gridEnd={6}>
                <h2 className="text-[24px] font-semibold text-[#024B53] font-[Outfit] leading-normal w-full mt-8">
                    Meet Your Faculty
                </h2>
                {/* <p className="text-[20px] pt-4 mb-[64px] font-normal text-[#515150] font-[Outfit] leading-normal">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </p> */}
            </GridComponent>



            <div className="relative">
                <div ref={containerRef} className="flex overflow-x-auto mt-[32px] space-x-4 no-scrollbar snap-x snap-mandatory" tabIndex={0}>
                    {groupedCompanies.map((group, groupIndex) => (
                        <div
                            key={groupIndex}
                            className="flex-shrink-0 w-full snap-start grid grid-cols-2 gap-4"
                        >
                            {group.map((alumni, idx) => (
                                <div
                                    key={idx}
                                    className="relative aspect-square bg-[#D9D9D9] rounded-[12px] overflow-hidden group cursor-pointer"
                                    onClick={() => setSelectedFaculty(alumni)}
                                >
                                    {alumni.image ? (
                                        <Image
                                            src={`https://edukyu.com/${alumni.image}`}
                                            alt={alumni.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            unoptimized
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-lg text-[#024B53] font-semibold bg-[#F3F3F3]">
                                            {getInitials(alumni.name)}
                                        </div>
                                    )}
                                    {alumni.name && (
                                        <div className="absolute bottom-0 left-0 right-0 text-center bg-gradient-to-t from-black/80 to-transparent py-2">
                                            <div className="text-white text-[14px] font-[Outfit] font-semibold">
                                                {alumni.name}
                                            </div>
                                            {alumni.position && (
                                                <div className="text-white/80 text-[12px] font-[Outfit]">
                                                    {alumni.position}
                                                </div>
                                            )}
                                        </div>
                                    )}
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

            {/* Faculty Detail Modal */}
            {selectedFaculty && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-[20px] p-6 max-w-sm w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-[20px] font-semibold text-[#024B53]">Faculty Details</h3>
                            <button 
                                onClick={() => setSelectedFaculty(null)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        
                        <div className="flex flex-col items-center text-center">
                            <div className="w-32 h-40 relative rounded-[12px] overflow-hidden flex items-center justify-center bg-[#F3F3F3] text-[#024B53] font-semibold mb-4">
                                {selectedFaculty.image ? (
                                    <Image
                                        src={`https://edukyu.com/${selectedFaculty.image}`}
                                        alt={selectedFaculty.name}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-xl">
                                        {getInitials(selectedFaculty.name)}
                                    </div>
                                )}
                            </div>
                            
                            <h4 className="text-[18px] font-semibold text-[#024B53] mb-2">
                                {selectedFaculty.name}
                            </h4>
                            
                            {selectedFaculty.position && (
                                <p className="text-[16px] text-[#515150] mb-2">
                                    {selectedFaculty.position}
                                </p>
                            )}
                            
                            {selectedFaculty.qualifications && (
                                <p className="text-[14px] text-[#6B6B6B] mb-4">
                                    {selectedFaculty.qualifications}
                                </p>
                            )}
                            
                            {selectedFaculty.bio && (
                                <div className="text-left w-full">
                                    <h5 className="text-[16px] font-semibold text-[#024B53] mb-2">Biography</h5>
                                    <p className="text-[14px] text-[#515150] leading-relaxed">
                                        {selectedFaculty.bio}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default OurFacultyMobile;