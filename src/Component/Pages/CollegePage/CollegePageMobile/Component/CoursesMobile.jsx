import React, { useState, useEffect, useRef } from "react";
import { ImageIcon } from "lucide-react";
import GridContainer from "@/GlobalComponent/GridContainer";

const CoursesMobile = ({ college }) => {
    const [activeTab, setActiveTab] = useState("PG");
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    const courses = college?.university_info?.courses || [];

    console.log(college);


    // Group courses by type
    const groupedCourses = courses.reduce((acc, course) => {
        if (!acc[course.type]) acc[course.type] = [];
        acc[course.type].push(course);
        return acc;
    }, {});

    // Build tabs dynamically based on available types
    const availableTypes = Object.keys(groupedCourses);

    const allTabs = [
        { id: "PG", label: "PG" },
        { id: "UG", label: "UG" },
        { id: "Diploma/Certificate", label: "Diploma" },
    ];

    // Filter tabs to only those types present
    const tabs = allTabs.filter((tab) => availableTypes.includes(tab.id));

    // If current activeTab no longer exists, reset it to first tab
    useEffect(() => {
        if (!availableTypes.includes(activeTab)) {
            setActiveTab(tabs[0]?.id || "PG");
        }
        setCurrentIndex(0); // Reset to first item when changing tabs
    }, [availableTypes, activeTab, tabs]);

    // Get active programs for the current tab
    const getActivePrograms = () => {
        const activeData = groupedCourses[activeTab] || [];
        return activeData.map((program, index) => ({
            id: index + 1,
            title: program.name,
            description: `Duration - ${program.duration}`,
            details: `Fees - ${program.fees}`,
            image: program.image,
        }));
    };

    const programs = getActivePrograms();

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % programs.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length);
    };

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <GridContainer>
            <section className="pt-[40px] bg-background">
                <div className="text-[#024B53] font-[Outfit] text-[28px] font-semibold leading-none">
                    Explore our Courses
                </div>
                <div className="text-[14px] pt-[12px] pb-[24px] font-normal text-[#535862] font-[Outfit] leading-[20px]">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </div>

                <div className="flex bg-white border-b border-[#B2B2B2] mb-[24px]">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => handleTabChange(tab.id)}
                            className={`px-4 py-3 gap-[8px] text-sm font-medium font-[Outfit] transition-colors ${
                                activeTab === tab.id
                                    ? "bg-white text-slate-800 border-b-2 border-teal-600"
                                    : "text-slate-600"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {programs.length > 0 && (
                    <div className="relative">
                        <article className="border overflow-hidden rounded-[22px] border-border shadow-sm">
                            <div className="p-0">
                                <div className="bg-program-image rounded-t-lg h-[132px] flex items-center justify-center">
                                    {programs[currentIndex]?.image ? (
                                        <img
                                            src={programs[currentIndex]?.image}
                                            alt={programs[currentIndex]?.title}
                                            className="rounded-t-lg h-full w-full object-cover"
                                        />
                                    ) : (
                                        <ImageIcon
                                            size={48}
                                            className="text-secondary rounded-t-lg opacity-60 bg-cover"
                                        />
                                    )}
                                </div>
                                <div className="py-[16px] px-[16px]">
                                    <h3 className="text-[#024B53] font-[Outfit] text-[20px] font-medium leading-none">
                                        {programs[currentIndex]?.title}
                                    </h3>
                                    <div className="inline-flex items-center gap-[8px] pt-[22px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <g clipPath="url(#clip0_236_281)">
                                                <path
                                                    d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"
                                                    fill="#383837"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_236_281">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none">
                                            {programs[currentIndex]?.description}
                                        </div>
                                    </div>

                                    <div className="inline-flex items-center gap-[8px] pt-[16px]">
                                        <div className="text-[#323232] pl-[5px] pr-[4px] font-[Outfit] text-[26px] font-medium leading-[21px]">
                                            ₹
                                        </div>

                                        <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none">
                                            {programs[currentIndex]?.details}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-[10px] w-full pb-[16px]">
                                <div className="flex justify-center">
                                    <button
                                        className="flex items-center justify-center border px-[90px] py-[12px] text-[#6A6A69] font-[Outfit] text-[14px] font-medium rounded-md transition-colors hover:bg-[#f3f3f3]"
                                    >
                                        Explore
                                    </button>
                                </div>
                            </div>
                        </article>

                        {programs.length > 1 && (
                            <div className="flex justify-between mt-6 pb-6">
                                <button
                                    onClick={handlePrev}
                                    className="bg-white z-10 p-3 hover:shadow-md rounded-full"
                                    aria-label="Previous"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="#9B9B9B"/>
                                    </svg>
                                </button>

                                <button
                                    onClick={handleNext}
                                    className="bg-white z-10 p-3 hover:shadow-md rounded-full"
                                    aria-label="Next"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="#024B53"/>
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </section>
        </GridContainer>
    );
};

export default CoursesMobile;