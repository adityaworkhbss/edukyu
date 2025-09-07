import React, { useRef, useState } from 'react';
import { ImageIcon } from "lucide-react";
import GridContainer from "@/GlobalComponent/GridContainer";
import { ExploreProgramsData } from "@/Data Model/Homepage/ExploreProgramsData";
import Link from "next/link";

export const ExploreProgramsMobile = () => {
    const [activeTab, setActiveTab] = useState("PG");
    const containerRef = useRef(null);

    const getActivePrograms = () => {
        const tabMapping = {
            "PG": "PG Programs",
            "UG": "UG Programs",
            "DC": "Diploma/Certificate"
        };
        const activeData = ExploreProgramsData[tabMapping[activeTab]] || [];
        return activeData.map((program, index) => ({
            id: index + 1,
            title: program.name,
            image: program.image,
            description: `Duration - ${program.duration}`,
            details: `Starting @${program.startingFee} per day`
        }));
    };

    const programs = getActivePrograms();

    const tabs = [
        { id: "PG", label: "PG" },
        { id: "UG", label: "UG" },
        { id: "DC", label: "Diploma/Certificate" }
    ];

    const handleNext = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 320 + 17, behavior: 'smooth' });
        }
    };

    const handlePrev = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -(320 + 17), behavior: 'smooth' });
        }
    };

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        if (containerRef.current) {
            containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    };

    return (
            <section className="mt-[32px]">
                <div className="text-[#024B53] font-[Outfit] text-[28px] font-semibold leading-none">
                    Explore our Courses
                </div>
                <div className="text-[#515150] font-[Outfit] text-[14px] font-normal leading-none pt-3 pb-[32px]">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </div>

                {/* Tabs */}
                <div className="flex w-full text-sm text-[#383837] font-normal border-b border-[#E0E0E0]">
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

                <div
                    ref={containerRef}
                    className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide mt-8 pb-[32px]"
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    {programs.map((program, index) => (
                        <article
                            key={program.id}
                            className="w-full flex-shrink-0 border overflow-hidden rounded-xl border-solid border-[#CDCDCD] scroll-snap-align-start flex flex-col"
                        >
                            <div className="flex w-full rounded-[30px]  p-[24px]">
                                <div className="bg-program-image rounded-lg h-[132px] w-full flex items-center overflow-hidden">
                                    {program.image ? (
                                        <img
                                            src={`https://edukyu.com/${program.image}`}
                                            alt={`${program.name} logo`}
                                            className="w-full h-full object-cover rounded-[12px]"
                                        />
                                    ) : (
                                        <ImageIcon size={48} className="text-secondary opacity-60 mx-auto" />
                                    )}
                                </div>

                            </div>
                            <div className="w-full px-4 pb-4 flex flex-col flex-1">
                                {/* Title section - fixed height */}
                                <div className="text-[#024B53] font-[Outfit] text-[24px] font-medium leading-none mb-[26px]">
                                    {program.title}
                                </div>

                                {/* Content section - grows to fill space */}
                                <div className="flex flex-col justify-between flex-1">
                                    <div className="flex flex-col w-full text-sm text-[#515150] font-normal gap-4">
                                        <div className="inline-flex gap-2 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                                <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="#383837"/>
                                            </svg>
                                            <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none">
                                                {program.description}
                                            </div>
                                        </div>
                                        <div className="inline-flex gap-2 items-center">
                                            <div className="pl-[5px] text-[#323232] font-[Outfit] text-[26px] font-medium leading-[21px]">₹</div>
                                            <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none">
                                                {program.details}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Button section - always at bottom */}
                                    <div className="flex w-full gap-2.5 text-sm font-normal pt-[42px]">
                                        <Link href={`/manipal_university/online_mba`} className="flex-1">
                                            <button className="justify-center items-center border flex gap-2.5 overflow-hidden text-[#9B9B9B] whitespace-nowrap w-full p-3 rounded-lg border-solid border-[#9B9B9B] transition-colors">
                                                <div className="text-[#9B9B9B] self-stretch my-auto">Explore</div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Navigation Buttons */}
                {programs.length > 1 && (
                    <div className="flex justify-between pb-[32px]">
                        <button onClick={handlePrev} className="bg-white z-10 p-[4.5] hover:shadow-md rounded" aria-label="Previous">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
                                <path d="M26.6667 14.6667H10.44L17.8933 7.21337L16 5.33337L5.33334 16L16 26.6667L17.88 24.7867L10.44 17.3334H26.6667V14.6667Z" fill="#9B9B9B"/>
                            </svg>
                        </button>
                        <button onClick={handleNext} className="bg-white z-10 p-[4.5] hover:shadow-md rounded" aria-label="Next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
                                <path d="M5.33329 17.3333L21.56 17.3333L14.1066 24.7866L16 26.6666L26.6666 16L16 5.33329L14.12 7.21329L21.56 14.6666L5.33329 14.6666L5.33329 17.3333Z" fill="#024B53"/>
                            </svg>
                        </button>
                    </div>
                )}
            </section>
    );
};
