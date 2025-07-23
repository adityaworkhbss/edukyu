import {useRef, useState} from "react";
import { ImageIcon } from "lucide-react";

const ExplorePrograms = () => {
    const [activeTab, setActiveTab] = useState("PG");

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(151);
    const containerRef = useRef(null);
    const cardsPerView = 6;
    const cardGap = 24;

    const programs = Array.from({ length: 4 }, (_, i) => ({
        id: i + 1,
        title: "Master of Business Administration",
        description: "Duration - 2 Year",
        details: "Starting @120/-per day"
    }));

    const tabs = [
        { id: "PG", label: "PG" },
        { id: "UG", label: "UG" },
        { id: "DC", label: "Diploma/Certificate" }
    ];

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            (prev - 1 + universities.length) % universities.length
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            (prev + 1) % universities.length
        );
    };

    return (
        <section className="px-[56px] PY-[64px] bg-background">
            <div className="">
                <div className="">
                    <div className="text-[32px] font-semibold text-black font-[Outfit] leading-normal">
                        Explore Programs
                    </div>

                    <div className="text-[24px] pt-[20px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-[30px]">
                        Lorem Epsum
                    </div>

                    <div className="flex gap-0 bg-[#CDCDCD] w-fit mb-[40px]">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex w-[182px] px-[20px] py-[12px] justify-center items-center gap-[10px] text-[16px] font-semibold font-[Outfit] leading-normal transition-colors
        ${
                                    activeTab === tab.id
                                        ? "bg-[#357E86] text-white"
                                        : "bg-[#CDCDCD] text-[#383837] border-r border-[#9B9B9B] hover:text-black"
                                }
        ${
                                    index === 0
                                        ? "rounded-l-md"
                                        : index === tabs.length - 1
                                            ? "rounded-r-md"
                                            : ""
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>


                </div>

                <div className="relative">
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-0 -ml-4 -translate-y-1/2 bg-white z-10 rounded-full shadow p-2 hover:shadow-md"
                        aria-label="Previous"
                    >
                        {/* Left Arrow SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12.6669 7.33332H5.22028L8.47361 4.07998C8.73361 3.81998 8.73361 3.39332 8.47361 3.13332C8.41193 3.07151 8.33867 3.02248 8.25803 2.98903C8.17738 2.95557 8.09092 2.93835 8.00361 2.93835C7.9163 2.93835 7.82984 2.95557 7.74919 2.98903C7.66854 3.02248 7.59528 3.07151 7.53361 3.13332L3.14028 7.52665C3.07847 7.58833 3.02944 7.66159 2.99599 7.74223C2.96253 7.82288 2.94531 7.90934 2.94531 7.99665C2.94531 8.08396 2.96253 8.17042 2.99599 8.25107C3.02944 8.33172 3.07847 8.40497 3.14028 8.46665L7.53361 12.86C7.59533 12.9217 7.6686 12.9707 7.74925 13.0041C7.82989 13.0375 7.91632 13.0547 8.00361 13.0547C8.0909 13.0547 8.17733 13.0375 8.25797 13.0041C8.33861 12.9707 8.41189 12.9217 8.47361 12.86C8.53533 12.7983 8.58429 12.725 8.61769 12.6443C8.6511 12.5637 8.66829 12.4773 8.66829 12.39C8.66829 12.3027 8.6511 12.2163 8.61769 12.1356C8.58429 12.055 8.53533 11.9817 8.47361 11.92L5.22028 8.66665H12.6669C13.0336 8.66665 13.3336 8.36665 13.3336 7.99998C13.3336 7.63332 13.0336 7.33332 12.6669 7.33332Z" fill="#6A6A69" />
                        </svg>
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-0 -mr-4 -translate-y-1/2 bg-white z-10 rounded-full shadow p-2 hover:shadow-md"
                        aria-label="Next"
                    >
                        {/* Right Arrow SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3.33306 8.66668H10.7797L7.52639 11.92C7.26639 12.18 7.26639 12.6067 7.52639 12.8667C7.58807 12.9285 7.66133 12.9775 7.74197 13.011C7.82262 13.0444 7.90908 13.0616 7.99639 13.0616C8.0837 13.0616 8.17016 13.0444 8.25081 13.011C8.33146 12.9775 8.40472 12.9285 8.46639 12.8667L12.8597 8.47335C12.9215 8.41167 12.9706 8.33841 13.004 8.25777C13.0375 8.17712 13.0547 8.09066 13.0547 8.00335C13.0547 7.91604 13.0375 7.82958 13.004 7.74893C12.9706 7.66828 12.9215 7.59503 12.8597 7.53335L8.46639 3.14002C8.40467 3.07829 8.3314 3.02934 8.25075 2.99593C8.17011 2.96253 8.08368 2.94534 7.99639 2.94534C7.9091 2.94534 7.82267 2.96253 7.74203 2.99593C7.66139 3.02934 7.58811 3.07829 7.52639 3.14002C7.46467 3.20174 7.41571 3.27501 7.38231 3.35565C7.3489 3.4363 7.33171 3.52273 7.33171 3.61002C7.33171 3.6973 7.3489 3.78374 7.38231 3.86438C7.41571 3.94502 7.46467 4.0183 7.52639 4.08002L10.7797 7.33335L3.33306 7.33335C2.96639 7.33335 2.66639 7.63335 2.66639 8.00002C2.66639 8.36668 2.96639 8.66668 3.33306 8.66668Z" fill="#6A6A69" />
                        </svg>
                    </button>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {programs.map((program) => (
                            <div key={program.id} className="bg-program-card border border-border rounded-lg shadow-sm">
                                <div className="p-0">
                                    <div className="bg-program-image rounded-t-lg  h-[132px] flex items-center  justify-center">
                                        <ImageIcon size={48} className="text-secondary rounded-t-lg opacity-60 bg-cover" />
                                    </div>
                                    <div className="py-[16px] px-[16px]">
                                        <h3 className="font-bold text-xl text-foreground mb-[12px]">
                                            {program.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-[12px]">
                                            {program.description}
                                        </p>
                                        <p className="text-muted-foreground text-sm">
                                            {program.details}
                                        </p>
                                    </div>
                                </div>

                                <div className="inline-flex gap-[10px]">
                                    <div className="p-[12px] pt-0 flex items-center">
                                        <button className="w-full text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-md font-medium transition-colors">
                                            Explore
                                        </button>
                                    </div>
                                    <div className="p-[12px] pt-0 flex items-center">
                                        <button className="w-full bg-[#679EA4] text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-md font-medium transition-colors">
                                            View Program
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

export default ExplorePrograms;