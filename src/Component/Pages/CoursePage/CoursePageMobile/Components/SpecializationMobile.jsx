import React, { useRef, useState } from 'react';
import { ImageIcon } from "lucide-react";

const SpecializationMobile = ({ course }) => {
    // Extract course data safely - handle both direct and nested structures
    let courseData = {};
    
    if (course) {
        // Check if course has direct properties
        if (course.specializations) {
            courseData = course;
        } 
        // Check if course has nested structure like CoursePageData
        else {
            const firstKey = Object.keys(course)[0];
            if (firstKey && course[firstKey]) {
                courseData = course[firstKey];
            }
        }
    }

    const specializations = courseData?.specializations || [];

    // Hide component if no specializations data
    if (!specializations || specializations.length === 0) {
        return null;
    }

    // Create a single tab since we're displaying all specializations together
    const tabs = [{ id: "all", label: "All Specializations" }];
    const [activeTab, setActiveTab] = useState("all");
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    const getActivePrograms = () => {
        return specializations.map((spec, index) => ({
            id: index + 1,
            title: spec.name || "Unknown Specialization",
            description: "Duration - 24 months", // Default duration
            details: "Fees - Contact for details", // Default fees
            image: spec.icon || null
        }));
    };



    const programs = getActivePrograms();


    const handleNext = () => {
        setCurrentIndex(prev => (prev + 1) % programs.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prev => (prev - 1 + programs.length) % programs.length);
    };

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setCurrentIndex(0);
    };

    return (
            <section className="py-8">
                <div className="text-[#024B53] font-[Outfit] text-[28px] font-semibold leading-none mb-3">
                    Specializations
                </div>
                <div className="text-[#515150] font-[Outfit] text-[14px] font-normal leading-none pt-3 pb-[32px]">
                    Choose from {specializations.length} industry-focused specializations designed to match your career goals and interests.
                </div>

                {/* Dynamic Tabs */}
                <div className="flex bg-white border-b border-[#B2B2B2] leading-[20px] mb-[32px] overflow-x-auto no-scrollbar whitespace-nowrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => handleTabChange(tab.id)}
                            className={`flex items-center gap-2.5 justify-center px-5 py-3 ${
                                activeTab === tab.id
                                    ? 'border-b-[2px] border-b-[rgba(53,126,134,1)] text-[rgba(53,126,134,1)] font-medium'
                                    : 'text-[#383837]'
                            }`}
                        >
                            <div className="my-auto">{tab.label}</div>
                        </button>
                    ))}
                </div>


                {programs.length > 0 ? (
                    <article className="border overflow-hidden mt-8 rounded-xl border-solid border-[#CDCDCD]">
                        <div className="flex w-full rounded-[14px] p-[24px]">
                            <div className="bg-program-image rounded-lg h-[132px] w-full flex items-center justify-center">
                                {programs[currentIndex]?.image ? (
                                    <img
                                        src={programs[currentIndex].image}
                                        alt={programs[currentIndex].title}
                                        className="rounded-[14px] h-full w-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                ) : (
                                    <ImageIcon size={48} className="text-secondary opacity-60" />
                                )}
                                <ImageIcon size={48} className="text-secondary opacity-60 hidden" />
                            </div>
                        </div>
                        <div className="w-full p-4">
                            <div className="w-full">
                                <div className="text-[#024B53] font-[Outfit] text-[24px] font-medium leading-none">
                                    {programs[currentIndex]?.title}
                                </div>
                                <div className="flex flex-col w-full text-sm text-[#515150] font-normal gap-4 pt-[26px]">
                                    <div className="inline-flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clipPath="url(#clip0_252_772)">
                                                <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="#383837"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_252_772">
                                                    <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none">
                                            {programs[currentIndex]?.description}
                                        </div>
                                    </div>

                                    <div className="inline-flex gap-2 items-center">
                                        <div className="pl-[5px] text-[#323232] font-[Outfit] text-[26px] font-medium leading-[21px]">₹</div>
                                        <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none">
                                            {programs[currentIndex]?.details}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full gap-2.5 text-sm font-normal pt-[42px]">
                                <button className="justify-center items-center border flex gap-2.5 overflow-hidden text-[#9B9B9B] whitespace-nowrap flex-1 shrink basis-[0%] p-3 rounded-lg border-solid border-[#9B9B9B] hover:bg-gray-50 transition-colors">
                                    <div className="text-[#9B9B9B] self-stretch my-auto">Explore</div>
                                </button>
                            </div>
                        </div>
                    </article>
                ) : (
                    <div className="text-center text-gray-500 py-8">
                        No content available to show.
                    </div>
                )}

                {/* Carousel Navigation */}
                {programs.length > 1 && (
                    <div className="flex justify-between mt-[32px] pb-[32px]">
                        <button
                            onClick={handlePrev}
                            className="bg-white z-10 p-4 hover:shadow-md rounded"
                            aria-label="Previous"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <g clipPath="url(#clip0_228_602)">
                                    <path d="M26.6667 14.6667H10.44L17.8933 7.21337L16 5.33337L5.33334 16L16 26.6667L17.88 24.7867L10.44 17.3334H26.6667V14.6667Z" fill="#9B9B9B"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_228_602">
                                        <rect width="32" height="32" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>

                        <button
                            onClick={handleNext}
                            className="bg-white z-10 p-4 hover:shadow-md rounded"
                            aria-label="Next"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M5.33329 17.3333L21.56 17.3333L14.1066 24.7866L16 26.6666L26.6666 16L16 5.33329L14.12 7.21329L21.56 14.6666L5.33329 14.6666L5.33329 17.3333Z" fill="#024B53"/>
                            </svg>
                        </button>
                    </div>
                )}
            </section>
    );
};

export default SpecializationMobile;