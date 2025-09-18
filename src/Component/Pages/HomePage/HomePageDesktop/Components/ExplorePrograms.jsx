import React, {useRef, useState, useEffect} from "react";
import { ImageIcon } from "lucide-react";
import GridComponent from "@/GlobalComponent/GridComponent";
import { ExploreProgramsData } from '@/Data Model/Homepage/ExploreProgramsData';
import {usePageContext} from "@/GlobalComponent/PageContext"; // Import the data
import Link from "next/link";

const ExplorePrograms = () => {
    const [activeTab, setActiveTab] = useState("PG");

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(151);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const containerRef = useRef(null);
    const cardsPerView = 4;
    const cardGap = 24;
    // const defaultUniversitiy = "manipal_university";
    const defaultUniversitiy = "noida_international_university";

    // setSelectedCourse

    const { setCurrentPage, setSelectedCourse } = usePageContext();

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
            image: program.image,
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

    // Function to check scroll position and update arrow states
    const checkScrollPosition = () => {
        const maxIndex = programs.length - cardsPerView;
        setCanScrollLeft(currentIndex > 0);
        setCanScrollRight(currentIndex < maxIndex);
    };

    // Update card width based on container size
    useEffect(() => {
        const updateCardWidth = () => {
            if (containerRef.current) {
                const totalGap = (cardsPerView - 1) * cardGap;
                const containerWidth = containerRef.current.offsetWidth;
                const newCardWidth = (containerWidth - totalGap) / cardsPerView;
                setCardWidth(newCardWidth);
            }
        };

        const observer = new ResizeObserver(updateCardWidth);
        if (containerRef.current) observer.observe(containerRef.current);
        updateCardWidth();

        return () => observer.disconnect();
    }, []);

    // Update arrow states when current index or tab changes
    useEffect(() => {
        checkScrollPosition();
    }, [currentIndex, programs.length]);

    // Reset scroll position when tab changes
    useEffect(() => {
        setCurrentIndex(0);
        setCanScrollLeft(false);
        setCanScrollRight(programs.length > cardsPerView);
    }, [activeTab, programs.length]);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        const maxIndex = programs.length - cardsPerView;
        if (currentIndex < maxIndex) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const courseMap = {
        "Master of Business Administration (MBA)" : "online_mba",
        "Master of Computer Applications (MCA)" : "online_mca"
    }

    return (
        <section className="px-[56px] py-[32px] bg-background">
            <div className="">
                <div className="">
                    <GridComponent gridStart={0} gridEnd={6}>
                        <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-normal mb-4">
                            Explore our Courses
                        </div>
                    </GridComponent>

                    <GridComponent gridStart={0} gridEnd={6}>
                        <div className="text-[20px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-none">
                            Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                        </div>
                    </GridComponent >

                    <div className="flex bg-white border-b border-[#B2B2B2] mb-[64px]">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={` p-4 gap-[10px] text-sm font-medium font-[Outfit] transition-colors ${
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
                    <div className="overflow-hidden" ref={containerRef}>
                        <div
                            className="flex gap-6 transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(${-1 * currentIndex * (cardWidth + cardGap)}px)`
                            }}
                        >
                            {programs.map((program) => (
                                <div 
                                    key={program.id} 
                                    className="group hover:bg-[#CDCDCD] bg-program-card border border-border rounded-[14px] shadow-sm border-[#CDCDCD] flex-shrink-0"
                                    style={{ width: `${cardWidth}px` }}
                                >
                                <div className="p-0">
                                    <div className="bg-program-image pt-4 px-4  h-[110px] flex items-center justify-center overflow-hidden">
                                        {program.image ? (
                                            <img
                                                src={`https://edukyu.com/${program.image}`}
                                                alt={`${name} logo`}
                                                className="w-full h-full object-cover rounded-[14px]"
                                            />
                                        ) : (
                                            <ImageIcon size={48} className="text-secondary opacity-60" />
                                        )}
                                    </div>

                                    <div className="py-[16px] px-[16px]">

                                        <h3 className="text-[#024B53] font-[Outfit] text-[20px] font-medium leading-tight min-h-[2.5em]">
                                            {program.title}
                                        </h3>



                                            <div className="inline-flex items-center gap-[8px] pt-[22px] leading-0">
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


                                            <div className="inline-flex items-center pt-4 gap-[8px]">
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
                                      <Link href={`/${defaultUniversitiy}/${courseMap[program.title]}`} className="w-[calc(100%-40px)]">
                                       <button
                                            className="flex items-center  justify-center border w-full py-[12px]  text-[#6A6A69] font-[Outfit] text-[14px] font-medium rounded-[12px] transition-colors group-hover:bg-[#024B53] group-hover:text-white  group-hover:border-[#CDCDCD] border-[#6A6A69)] hover:cursor-pointer"
                                            onClick={() => {
                                              console.log(program.title)
                                            }}
                                        >
                                            Explore More
                                        </button>
                                      </Link>
                                      
                                        {/* <button
                                            className="flex items-center  justify-center border w-full py-[12px] mx-5 text-[#6A6A69] font-[Outfit] text-[14px] font-medium rounded-md transition-colors group-hover:bg-[#024B53] group-hover:text-white group-hover:border-[#CDCDCD] border-[#6A6A69)]"
                                            onClick={() => {
                                                setSelectedCourse("online_mba");
                                                setCurrentPage('course');
                                            }}
                                        >
                                            Explore More
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-between mt-[32px]">
                    <button
                        onClick={handlePrev}
                        disabled={!canScrollLeft}
                        className={`bg-white z-10 p-4 hover:shadow-md rounded transition-opacity ${
                            !canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
                        }`}
                        aria-label="Previous"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clipPath="url(#clip0_228_602)">
                                <path d="M26.6667 14.6667H10.44L17.8933 7.21337L16 5.33337L5.33334 16L16 26.6667L17.88 24.7867L10.44 17.3334H26.6667V14.6667Z" fill={!canScrollLeft ? "#D1D5DB" : "#024B53"} />
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
                        disabled={!canScrollRight}
                        className={`bg-white z-10 p-4 hover:shadow-md rounded transition-opacity ${
                            !canScrollRight ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
                        }`}
                        aria-label="Next"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M5.33329 17.3333L21.56 17.3333L14.1066 24.7866L16 26.6666L26.6666 16L16 5.33329L14.12 7.21329L21.56 14.6666L5.33329 14.6666L5.33329 17.3333Z" fill={!canScrollRight ? "#D1D5DB" : "#024B53"} />
                        </svg>
                    </button>

                </div>

            </div>
        </section>
    );
};

export default ExplorePrograms;