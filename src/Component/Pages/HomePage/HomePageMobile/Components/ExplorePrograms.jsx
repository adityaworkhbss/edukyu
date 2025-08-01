import React, {useRef, useState} from 'react';
import GridContainer from "@/GlobalComponent/GridContainer";

export const ExplorePrograms = () => {
    const [selectedProgram, setSelectedProgram] = useState('PG');

    const handleProgramChange = (program) => {
        setSelectedProgram(program);
    };

    const programs = Array.from({ length: 8 }).map((_, i) => ({
        id: i + 1,
        title: 'Master of Business Administration',
        duration: 'Duration - 2 Year',
        price: 'Starting @120/-per day',
        image:
            'https://api.builder.io/api/v1/image/assets/TEMP/b65a88b4c2fc598d32a0488520aefcb330494ab6?placeholderIfAbsent=true'
    }));

    const containerRef = useRef(null);

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

    return (
        <GridContainer>
            <section className="mt-12">
                <div className="text-[#024B53] font-[Outfit] text-[28px] font-semibold leading-none">
                    Explore our Courses
                </div>
                <div className="text-[#515150] font-[Outfit] text-[14px] font-normal leading-none pt-3 pb-[32px]">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </div>

                <div className="flex w-full text-sm text-[#383837] font-normal mt-8 border-b border-[#E0E0E0]">
                    <button
                        onClick={() => handleProgramChange('PG')}
                        className={`flex items-center gap-2.5 justify-center px-5 py-3 ${
                            selectedProgram === 'PG'
                                ? 'border-b-[2px] border-b-[rgba(53,126,134,1)] text-[rgba(53,126,134,1)] font-medium'
                                : ' text-[#383837]'
                        }`}
                    >
                        <div className="my-auto">PG</div>
                    </button>

                    <button
                        onClick={() => handleProgramChange('UG')}
                        className={`flex items-center gap-2.5 justify-center px-5 py-3 border-solid ${
                            selectedProgram === 'UG'
                                ? 'border-b-[2px] border-b-[rgba(53,126,134,1)] text-[rgba(53,126,134,1)] font-medium'
                                : 'text-[#383837]'
                        }`}
                    >
                        <div className="my-auto">UG</div>
                    </button>

                    <button
                        onClick={() => handleProgramChange('Diploma')}
                        className={`flex items-center gap-2.5 justify-center px-5 py-3 ${
                            selectedProgram === 'Diploma'
                                ? 'border-b-[2px] border-b-[rgba(53,126,134,1)] text-[rgba(53,126,134,1)] font-medium'
                                : 'text-[#383837]'
                        }`}
                    >
                        <div className=" my-auto">Diploma/Certificate</div>
                    </button>
                </div>



                <article className="border overflow-hidden mt-8 rounded-xl border-solid border-[#CDCDCD]">
                    <div className="flex w-full rounded-[14px] g p-[24px]">
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/b65a88b4c2fc598d32a0488520aefcb330494ab6?placeholderIfAbsent=true"
                            alt="Master of Business Administration program"
                            className="aspect-[2.24] bg-cover"
                        />
                    </div>
                    <div className="w-full p-4">
                        <div className="w-full">
                            <div className="text-[#024B53] font-[Outfit]  text-[24px] font-medium leading-none">
                                Master of Business Administration
                            </div>
                            <div className="flex flex-col w-full text-sm text-[#515150] font-normal gap-4 pt-[26px]">
                                <div className="inline-flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_252_772)">
                                            <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="#383837"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_252_772">
                                                <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none">Duration - 2 Year</div>
                                </div>

                                <div className="inline-flex gap-2 items-center">
                                    <div className="pl-[5px] text-[#323232] font-[Outfit] text-[26px] font-medium leading-[21px]">₹</div>
                                    <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none">Starting @120/-per day</div>
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


            </section>
        </GridContainer>

    );
};
