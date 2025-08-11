import React, { useState, useEffect } from "react";
import { ImageIcon } from "lucide-react";
import GridComponent from "@/GlobalComponent/GridComponent";

const Courses = ({ college }) => {
    const [activeTab, setActiveTab] = useState("PG");

    const courses = college?.university_info?.courses || [];

    // Group courses by type
    const groupedCourses = courses.reduce((acc, course) => {
        if (!acc[course.type]) acc[course.type] = [];
        acc[course.type].push(course);
        return acc;
    }, {});

    // Build tabs dynamically based on available types
    const availableTypes = Object.keys(groupedCourses);

    const allTabs = [
        { id: "PG", label: "Post Graduate (PG)" },
        { id: "UG", label: "UnderGraduate (UG)" },
        { id: "Diploma/Certificate", label: "Diploma/Certificate" },
    ];

    // Filter tabs to only those types present
    const tabs = allTabs.filter((tab) => availableTypes.includes(tab.id));

    // If current activeTab no longer exists (e.g., no DC courses), reset it to first tab
    useEffect(() => {
        if (!availableTypes.includes(activeTab)) {
            setActiveTab(tabs[0]?.id || "PG");
        }
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
    return (
        <section className="pt-[64px] bg-background">
            <div>
                <GridComponent gridStart={0} gridEnd={7}>
                    <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4">
                        Explore our Courses
                    </div>
                </GridComponent>

                <GridComponent gridStart={0} gridEnd={7}>
                    <div className="text-[20px] pt-[16px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-[30px]">
                        Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                    </div>
                </GridComponent>

                <div className="flex bg-white border-b border-[#B2B2B2] mb-[84px]">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-4 gap-[10px] text-sm font-medium font-[Outfit] transition-colors ${
                                activeTab === tab.id
                                    ? "bg-white text-slate-800 border-b-2 border-teal-600"
                                    : "text-slate-600"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="relative">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {programs.map((program) => (
                            <div
                                key={program.id}
                                className="bg-program-card border border-border rounded-[22px] shadow-sm"
                            >
                                <div className="p-0">
                                    <div className="bg-program-image rounded-t-lg h-[132px] flex items-center justify-center">
                                        {/* Show image from course */}
                                        {program.image ? (
                                            <img
                                                src={program.image}
                                                alt={program.title}
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
                                            {program.title}
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
                                                {program.description}
                                            </div>
                                        </div>

                                        <div className="inline-flex items-center gap-[8px] pt-[16px]">
                                            <div className="text-[#323232] pl-[5px] pr-[4px] font-[Outfit] text-[26px] font-medium leading-[21px]">
                                                ₹
                                            </div>

                                            <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none">
                                                {program.details}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-[10px] w-full pb-[16px]">
                                    <div className="flex justify-center">
                                        <button
                                            className="flex items-center justify-center border w-full mx-4 py-[12px] text-[#6A6A69] font-[Outfit] text-[14px] font-medium rounded-md transition-colors hover:bg-[#f3f3f3]"
                                            // Add your onClick or Link to course details here
                                        >
                                            Explore
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;
