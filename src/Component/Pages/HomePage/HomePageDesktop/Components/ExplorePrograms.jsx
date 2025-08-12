import React, {useRef, useState} from "react";
import { ImageIcon } from "lucide-react";
import GridComponent from "@/GlobalComponent/GridComponent";
import { ExploreProgramsData } from '@/Data Model/Homepage/ExploreProgramsData'; // Import the data

const ExplorePrograms = () => {
    const [activeTab, setActiveTab] = useState("PG");

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(151);
    const containerRef = useRef(null);
    const cardsPerView = 6;
    const cardGap = 24;

    // Transform external data to match component structure
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
            description: `Duration - ${program.duration}`,
            details: `Starting @${program.startingFee}per day`
        }));
    };

    const programs = getActivePrograms();

    const tabs = [
        { id: "PG", label: "Post Graduate (PG)" },
        { id: "UG", label: "UnderGraduate (UG)" },
        { id: "DC", label: "Diploma/Certificate" }
    ];

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            (prev - 1 + programs.length) % programs.length
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            (prev + 1) % programs.length
        );
    };

    return (
        <section className="px-[56px] py-[64px] bg-background">
            <div className="">
                <div className="">
                    <GridComponent gridStart={0} gridEnd={6}>
                        <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4">
                            Explore our Courses
                        </div>
                    </GridComponent>

                    <GridComponent gridStart={0} gridEnd={6}>
                        <div className="text-[20px] pt-[16px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-[30px]">
                            Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                        </div>
                    </GridComponent >

                    <div className="flex bg-white border-b border-[#B2B2B2] mb-[84px]">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={` py-4 gap-[10px] text-sm font-medium font-[Outfit] transition-colors ${
                                    activeTab === tab.id
                                        ? 'bg-white text-slate-800 border-b-2 border-teal-600'
                                        : 'text-slate-600'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                </div>

                <div className="relative">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {programs.map((program) => (
                            <div key={program.id} className="bg-program-card border border-border rounded-[22px] shadow-sm">
                                <div className="p-0">
                                    <div className="bg-program-image rounded-t-lg  h-[132px] flex items-center  justify-center">
                                        <ImageIcon size={48} className="text-secondary rounded-t-lg opacity-60 bg-cover" />
                                    </div>
                                    <div className="py-[16px] px-[16px]">
                                        <h3 className="text-[#024B53] font-[Outfit] text-[20px] font-medium leading-none">
                                            {program.title}
                                        </h3>
                                        <div className="inline-flex items-center gap-[8px] pt-[22px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <g clipPath="url(#clip0_236_281)">
                                                    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="#383837"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_236_281">
                                                        <rect width="24" height="24" fill="white"/>
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

                                <div className="pt-[10px] w-full pb-[16px] bottom-0">
                                    <div className="flex justify-center">
                                        <button
                                            className="flex items-center  justify-center border w-full py-[12px] mx-5 text-[#6A6A69] font-[Outfit] text-[14px] font-medium rounded-md transition-colors hover:bg-[#f3f3f3]"
                                        >
                                            Explore
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between mt-[32px] pb-[64px]">
                    <button
                        onClick={handlePrev}
                        className="bg-white z-10 p-4 hover:shadow-md rounded"
                        aria-label="Previous"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clipPath="url(#clip0_228_602)">
                                <path d="M26.6667 14.6667H10.44L17.8933 7.21337L16 5.33337L5.33334 16L16 26.6667L17.88 24.7867L10.44 17.3334H26.6667V14.6667Z" fill="#9B9B9B" />
                            </g>
                            <defs>
                                <clipPath id="clip0_228_602">
                                    <rect width="32" height="32" fill="white" />
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
                            <path d="M5.33329 17.3333L21.56 17.3333L14.1066 24.7866L16 26.6666L26.6666 16L16 5.33329L14.12 7.21329L21.56 14.6666L5.33329 14.6666L5.33329 17.3333Z" fill="#024B53" />
                        </svg>
                    </button>

                </div>

            </div>
        </section>
    );
};

export default ExplorePrograms;