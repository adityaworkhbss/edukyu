import React, { useRef } from 'react';
import { PartnerUniversitiesData } from "@/Data Model/Homepage/PartnerUniversitiesData";
import CollegePageData from "@/Data Model/CollegePage/CollegePageData";
import { usePageContext } from "@/GlobalComponent/PageContext";
import Link from "next/link";
import { get } from 'http';

// const UniversityCard = ({ name, logoSrc, certificationIcons }) => {
//     return (
//         <article
//             className="w-full flex-shrink-0 border overflow-hidden rounded-xl border-solid border-[#CDCDCD] scroll-snap-align-start flex flex-col"
//             aria-label={`University card for ${name}`}
//         >
//             <div className="p-6">
//                 <div className="bg-program-image rounded-lg h-[132px] w-full flex items-center justify-center overflow-hidden">
//                     <img
//                         src={`https://edukyu.com/${logoSrc}`}
//                         alt={`${name} logo`}
//                         className="w-full h-full object-cover"
//                     />
//                 </div>
//             </div>
//             <div className="w-full p-6 pt-0 flex flex-col flex-1">
//                 {/* Title section - reserve space for up to 2 lines */}
//                 <div className="text-[#024B53] font-[Outfit] text-[24px] font-medium leading-[28px] min-h-[56px] mb-[26px] whitespace-normal break-words">
//                     {name}
//                 </div>

//                 {/* Content section - grows to fill space */}
//                 <div className="flex flex-col justify-between flex-1">
//                     <div className="flex flex-col w-full text-sm text-[#515150] font-normal gap-4">
//                         <div className="inline-flex gap-2 items-center">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                                 <g clipPath="url(#clip0_228_629)">
//                                     <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM9 4H11V9L10 8.25L9 9V4ZM18 20H6V4H7V13L10 10.75L13 13V4H18V20Z" fill="#383837" />
//                                 </g>
//                                 <defs>
//                                     <clipPath id="clip0_228_629">
//                                         <rect width="24" height="24" fill="white" />
//                                     </clipPath>
//                                 </defs>
//                             </svg>
//                             <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none">
//                                 20+ Courses
//                             </div>
//                         </div>
//                         <div className="inline-flex gap-2 items-center">
//                             <div className="pl-[5px] text-[#323232] font-[Outfit] text-[26px] font-medium leading-[21px]">₹</div>
//                             <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none">
//                                 Course Starting @ Rs 8,790/-
//                             </div>
//                         </div>
//                     </div>

//                     {/* Certification icons section - always at bottom */}
//                     <div className="flex w-full items-center gap-2 self-stretch pt-[42px]">
//                         {certificationIcons.map((iconSrc, index) => (
//                             <div
//                                 key={index}
//                                 className="flex w-10 h-10 p-[8px_2.508px_7.333px_2.508px] justify-center items-center bg-white rounded"
//                             >
//                                 <img
//                                     src={iconSrc}
//                                     alt="Certification icon"
//                                     className="w-[40px] h-[40px] shrink-0 object-contain aspect-[1.62]"
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </article>
//     );
// };

export const PartnerUniversitiesMobile = () => {
    const containerRef = useRef(null);

    const { setCurrentPage, setSelectedCollege } = usePageContext();

    // Function to get logo from CollegePageData
    const getCollegeLogo = (universityCode) => {
        const collegeData = CollegePageData[0][universityCode];
        console.log(collegeData.university_info.logo)
        return collegeData.university_info.logo;
    };

    const measureStep = () => {
        const container = containerRef.current;
        if (!container) return null;
        const first = container.querySelector('article');
        if (!first) return null;
        const cardRect = first.getBoundingClientRect();
        const style = window.getComputedStyle(container);
        // modern browsers support gap on flex containers
        const gap = parseFloat(style.gap) || parseFloat(style.columnGap) || 16;
        return { step: Math.round(cardRect.width + gap), cardWidth: Math.round(cardRect.width), gap };
    };

    const handleNext = () => {
        const container = containerRef.current;
        if (!container) return;
        const metrics = measureStep();
        if (!metrics) { container.scrollBy({ left: 336, behavior: 'smooth' }); return; }
        const { step } = metrics;
        const scrollLeft = Math.round(container.scrollLeft);
        const currentIndex = Math.round(scrollLeft / step);
        const nextIndex = Math.min(currentIndex + 1, universities.length - 1);
        const target = nextIndex * step;
        container.scrollTo({ left: target, behavior: 'smooth' });
    };

    const handlePrev = () => {
        const container = containerRef.current;
        if (!container) return;
        const metrics = measureStep();
        if (!metrics) { container.scrollBy({ left: -336, behavior: 'smooth' }); return; }
        const { step } = metrics;
        const scrollLeft = Math.round(container.scrollLeft);
        const currentIndex = Math.round(scrollLeft / step);
        const prevIndex = Math.max(currentIndex - 1, 0);
        const target = prevIndex * step;
        container.scrollTo({ left: target, behavior: 'smooth' });
    };

    const universities = PartnerUniversitiesData.universities.map((univ, index) => {
        return {
            id: String(index + 1),
            code: univ.code,
            name: univ.name,
            logoSrc: univ.image, // Use logo from CollegePageData
            courses: `${univ.coursesOffered.length}+ Courses`,
            price: `Course ${univ.fee}`,
            certificationIcons: [
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/ed35af773b72aabdc8d32ac0fa11bf667f8df011?placeholderIfAbsent=true',
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/8819d1debcdd8a0ae99518de71beffebf5bf37dd?placeholderIfAbsent=true',
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/0c3659de9792dd06ae7668c12052ce22c4b7376a?placeholderIfAbsent=true'
            ],
            hasGrayBackground: index % 2 === 1
        };
    });

    

    return (
        <section className="w-full flex flex-col">
            <h2 className="text-[#024B53] font-[Outfit] text-[28px] font-semibold leading-none">
                Explore our Partner Universities
            </h2>
            <p className="text-[#515150] font-[Outfit] text-[14px] font-normal leading-none pt-3 pb-[32px]">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </p>

            <div
                ref={containerRef}
                className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                {universities.map((uni, index) => (
                    <Link
                        key={index}
                        href={`/online-mba-programs/top-distance-mba-colleges/${encodeURIComponent((uni.name).trim().replace(/\s+/g, '-'))}`}
                        className="w-full flex-shrink-0"
                    >
                        <article className="w-full border overflow-hidden rounded-[30px] border-solid border-[#CDCDCD] scroll-snap-align-start flex flex-col hover:shadow-md transition-shadow duration-200">
                            <div className="p-6">
                                <div className="bg-program-image rounded-lg h-[132px] w-full flex items-center justify-center overflow-hidden">
                                    <img
                                        src={`https://edukyu.com/${uni.logoSrc}`}
                                        alt={`${uni.name} logo`}
                                        className="w-full h-full object-cover rounded-[14px]"
                                    />
                                </div>
                            </div>
                        <div className="w-full p-6 pt-0 flex flex-col flex-1">
                            {/* Title section - reserve space for up to 2 lines */}
                            <div className="text-[#024B53] font-[Outfit] text-[24px] font-medium leading-[28px] min-h-[60px] mb-[24px] whitespace-normal break-words">
                                {uni.name}
                            </div>

                            {/* Content section - grows to fill space */}
                            <div className="flex flex-col justify-between flex-1">
                                <div className="flex flex-col w-full text-sm text-[#515150] font-normal gap-4">
                                    <div className="inline-flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clipPath="url(#clip0_228_629)">
                                                <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM9 4H11V9L10 8.25L9 9V4ZM18 20H6V4H7V13L10 10.75L13 13V4H18V20Z" fill="#383837" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_228_629">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none">
                                            20+ Courses
                                        </div>
                                    </div>
                                    <div className="inline-flex gap-2 items-center">
                                        <div className="pl-[5px] text-[#323232] font-[Outfit] text-[26px] font-medium leading-[21px]">₹</div>
                                        <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none">
                                            Course Starting @ Rs 8,790/-
                                        </div>
                                    </div>
                                </div>

                                {/* Certification icons section - always at bottom */}
                                <div className="flex w-full items-center gap-2 self-stretch pt-[26px]">
                                    {uni.certificationIcons.map((iconSrc, index) => (
                                        <div
                                            key={index}
                                            className="flex w-10 h-10 p-[8px_2.508px_7.333px_2.508px] justify-center items-center bg-white rounded"
                                        >
                                            <img
                                                src={iconSrc}
                                                alt="Certification icon"
                                                className="w-[40px] h-[40px] shrink-0 object-contain aspect-[1.62]"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        </article>
                    </Link>
                ))}
            </div>

            {/* Navigation Buttons */}
            {universities.length > 1 && (
                <div className="flex justify-between mt-[36.5px] pb-[32px]">
                    <button
                        onClick={handlePrev}
                        className="bg-white z-10 p-[4.5] hover:shadow-md rounded"
                        aria-label="Previous"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
                            <path d="M26.6667 14.6667H10.44L17.8933 7.21337L16 5.33337L5.33334 16L16 26.6667L17.88 24.7867L10.44 17.3334H26.6667V14.6667Z" fill="#9B9B9B" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-white z-10 p-[4.5] hover:shadow-md rounded"
                        aria-label="Next"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
                            <path d="M5.33329 17.3333L21.56 17.3333L14.1066 24.7866L16 26.6666L26.6666 16L16 5.33329L14.12 7.21329L21.56 14.6666L5.33329 14.6666L5.33329 17.3333Z" fill="#024B53" />
                        </svg>
                    </button>
                </div>
            )}
        </section>
    );
};