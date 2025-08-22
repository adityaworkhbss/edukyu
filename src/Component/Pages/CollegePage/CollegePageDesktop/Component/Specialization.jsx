import React, {useState, useEffect, useRef} from "react";
import { ImageIcon } from "lucide-react";
import GridComponent from "@/GlobalComponent/GridComponent";
import { ExploreProgramsData } from '@/Data Model/Homepage/ExploreProgramsData';

const Specialization = ({data}) => {
    // Create tab mapping from string
    const tabMapping = Object.entries(data?.Specialisation || {})
        .reduce((acc, [name, value]) => {
            acc[name] = name; // key = value
            return acc;
        }, {});

    // Tabs array from mapping keys
    const tabs = Object.keys(tabMapping).map(name => ({
        id: name,
        label: name
    }));

    const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");
    const [scrollPosition, setScrollPosition] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const scrollContainerRef = useRef(null);

    // Check scroll availability
    const checkScrollAvailability = () => {
        const container = scrollContainerRef.current;
        if (!container) return;
        const { scrollLeft, scrollWidth, clientWidth } = container;
        setCanScrollLeft(scrollLeft > 4); // small threshold
        setCanScrollRight(scrollLeft < (scrollWidth - clientWidth - 4));
    };

    // Handle scroll events
    const handleScroll = (direction) => {
        const container = scrollContainerRef.current;
        if (!container) return;
        const scrollAmount = Math.max(240, Math.round(container.clientWidth * 0.6)); // at least 240px
        const newScrollLeft = direction === 'left'
            ? Math.max(0, container.scrollLeft - scrollAmount)
            : container.scrollLeft + scrollAmount;

        container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
        // Re-evaluate after the smooth scroll likely completes
        setTimeout(checkScrollAvailability, 350);
    };

    // Get programs for the active tab
    const getActivePrograms = () => {
        const activeData = data?.Specialisation?.[activeTab] || {};
        const detailFees = data?.["Detail Fees"] || {};
        const durationInfo = data?.Duration || "";
        
        return Object.entries(activeData).map(([name, details = {}], index) => {
            // Extract duration - prioritize specialization-specific duration, then general program duration
            let duration = "Duration not available";
            if (details.Duration) {
                duration = `Duration - ${details.Duration}`;
            } else if (durationInfo) {
                const durationPattern = new RegExp(`${activeTab}[^:]*:\\s*([^,]+)`, 'i');
                const match = durationInfo.match(durationPattern);
                if (match) {
                    duration = `Duration - ${match[1].trim()}`;
                }
            }
            
            // Extract fees - prioritize specialization-specific fees, then detail fees, then general fees
            let fees = "Fees not available";
            if (details.Fees) {
                fees = `Fees - ${details.Fees}`;
            } else if (detailFees) {
                // First try to find fees for the specific specialization
                const specializationKey = `${activeTab} (${name})`;
                if (detailFees[specializationKey]) {
                    fees = `Fees - ${detailFees[specializationKey]}`;
                }
                // If not found, try the general program fees
                else if (detailFees[activeTab]) {
                    fees = `Fees - ${detailFees[activeTab]}`;
                }
                // Try without the "Online" prefix
                else if (detailFees[activeTab.replace("Online ", "")]) {
                    fees = `Fees - ${detailFees[activeTab.replace("Online ", "")]}`;
                }
            }
            
            // Extract image from specialization details
            const image = details.image || null;
            
            return {
                id: index + 1,
                title: name || "Unknown Program",
                description: duration,
                details: fees,
                image: image
            };
        });
    };

    const programs = getActivePrograms();

    // Check scroll availability when programs change
    useEffect(() => {
        const t = setTimeout(checkScrollAvailability, 100);
        return () => clearTimeout(t);
    }, [programs, activeTab]);

    // Recompute on resize
    useEffect(() => {
        const onResize = () => checkScrollAvailability();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // Remove section completely if no specialization data
    if (!data?.Specialisation || tabs.length === 0) {
        return null;
    }

    return (
        <section className="bg-background pt-12 max-w-full overflow-hidden ml-0.5">
            <div className="max-w-full">
                <div className="max-w-full">
                    <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4 break-words w-full">
                        Specialization
                    </div>

                    <div className="text-[20px] pt-[16px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-[30px] break-words w-3/4">
                        Unlimited access to world class Specialization, hands-on projects, and job-ready certificate programs.
                    </div>

                    <div className="flex bg-white border-b border-[#B2B2B2] mb-[84px] overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-4 gap-[10px] text-[16px] font-medium font-[Outfit] transition-colors whitespace-nowrap flex-shrink-0 ${
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

                <div className="relative max-w-full">
                    <div 
                        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4" 
                        style={{ scrollBehavior: 'smooth' }}
                        onScroll={checkScrollAvailability}
                        ref={scrollContainerRef}
                        data-scroll-container
                    >
                        {programs.length > 0 ? (
                            programs.map((program) => (
                                <div
                                    key={program.id}
                                    className="bg-program-card border border-[#CDCDCD] border-border rounded-[22px] shadow-sm min-w-0 flex-shrink-0 flex flex-col"
                                    style={{ width: 'calc((100% - 48px) / 3.18)' }} // Shows 3.2 cards
                                >
                                
                                    <div className="flex flex-col flex-1">
                                        <div className="bg-program-image rounded-t-lg h-[96px] p-4 flex items-center justify-center">
                                            {/* Show image from specialization */}
                                            {program.image ? (
                                                <img
                                                    src={program.image}
                                                    alt={program.title}
                                                    className="rounded-[14px] h-full w-full object-cover"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling.style.display = 'flex';
                                                    }}
                                                />
                                            ) : (
                                                <ImageIcon
                                                    size={48}
                                                    className="text-secondary rounded-[14px] opacity-60 bg-cover"
                                                />
                                            )}
                                            <ImageIcon
                                                size={48}
                                                className="text-secondary rounded-[14px] opacity-60 bg-cover hidden"
                                            />
                                        </div>
                                        
                                        <div className="py-[16px] px-[16px] min-w-0 flex-1 flex flex-col">
                                            <h3 className="text-[#024B53] font-[Outfit] text-[20px] font-medium break-words min-h-[48px] flex items-start">
                                                {program.title}
                                            </h3>
                                            
                                            <div className="inline-flex items-center gap-[8px] pt-[22px] min-w-0">
                                                {/* Clock icon */}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    className="flex-shrink-0"
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

                                                <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none break-words min-w-0">
                                                    {program.description}
                                                </div>
                                            </div>

                                            <div className="inline-flex items-center gap-[8px] pt-[16px] min-w-0">
                                                <div className="text-[#323232] pl-[5px] pr-[4px] font-[Outfit] text-[26px] font-medium leading-[21px] flex-shrink-0">
                                                    ₹
                                                </div>

                                                <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none break-words min-w-0">
                                                    {program.details}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-[0px] w-full pb-[16px]">
                                        <div className="flex justify-center">
                                            <button
                                                className="flex items-center justify-center border w-full mx-4 py-[12px] text-[#6A6A69] font-[Outfit] text-[14px] font-medium rounded-md transition-colors hover:bg-[#f3f3f3]"
                                            >
                                                Explore
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-gray-500 py-8">
                                No content available to show.
                            </div>
                        )}
                    </div>

                    
                    {/* Navigation Arrows - Left and Right Edges */}
                    {programs.length > 3 && (
                        <div className="flex justify-between items-center mt-4 px-0">
                            <button 
                                className={`p-3 hover:bg-gray-100 rounded-full transition-all ${
                                    !canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-100'
                                }`}
                                onClick={() => handleScroll('left')}
                                disabled={!canScrollLeft}
                            >
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button 
                                className={`p-3 hover:bg-gray-100 rounded-full transition-all pr-[40px] ${
                                    !canScrollRight ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-100'
                                }`}
                                onClick={() => handleScroll('right')}
                                disabled={!canScrollRight}
                            >
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Specialization;