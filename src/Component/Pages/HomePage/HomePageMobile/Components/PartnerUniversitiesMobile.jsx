import React, { useRef } from 'react';
import {PartnerUniversitiesData} from "@/Data Model/Homepage/PartnerUniversitiesData";
import {usePageContext} from "@/GlobalComponent/PageContext";
import Link from "next/link";

const UniversityCard = ({ name, logoSrc, certificationIcons }) => {
    return (
        <article
            className="w-[290px] h-[400px] md:w-full pb-4 px-[24px] rounded-[30px] border border-[#CDCDCD] bg-white flex flex-col"
            aria-label={`University card for ${name}`}
        >
            <div className="bg-white flex max-w-full flex-col overflow-hidden items-stretch justify-center py-[9px] rounded-lg">
                <img
                    src={`https://edukyu.com/${logoSrc}`}
                    alt={`${name} logo`}
                    className="object-contain w-full"
                />
            </div>
            <div className="w-full mt-2 flex-1 flex flex-col justify-between">
                <div>
                    <div className="text-[#024B53] font-[Outfit] text-[24px] font-medium leading-none">{name}</div>

                    <div className="inline-flex gap-[8px] align-center pt-[26px]">
                        <div className="inline-flex gap-[8px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_228_629)">
                                    <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM9 4H11V9L10 8.25L9 9V4ZM18 20H6V4H7V13L10 10.75L13 13V4H18V20Z" fill="#383837"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_228_629">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none">
                                20+ Courses
                            </div>
                        </div>
                    </div>

                    <div className="inline-flex gap-[12px] items-center mt-2">
                        <div className="pl-[5px] text-[#323232] font-[Outfit] text-[26px] font-medium leading-[21px]">₹</div>
                        <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none">
                            Course Starting @ Rs 8,790/-
                        </div>
                    </div>
                </div>

                <div className="flex w-full items-center gap-2 self-stretch">
                    {certificationIcons.map((iconSrc, index) => (
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
        </article>
    );
};

export const PartnerUniversitiesMobile = () => {
    const containerRef = useRef(null);

    const { setCurrentPage, setSelectedCollege } = usePageContext();

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

    const universities = PartnerUniversitiesData.universities.map((univ, index) => {
        return {
            id: String(index + 1),
            code: univ.code,
            name: univ.name,
            logoSrc: univ.image,
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
                className="flex overflow-x-auto snap-x snap-mandatory gap-[17px] scroll-smooth w-full no-scrollbar"
            >
                {universities.map((uni, index) => (
                    <Link 
                        key={index} 
                        href={`/online-mba-programs/top-distance-mba-colleges/${encodeURIComponent((uni.name).trim().replace(/\s+/g, '-'))}`}
                        className="flex-shrink-0 snap-center"
                    >
                        <UniversityCard
                            name={uni.name}
                            logoSrc={uni.logoSrc}
                            certificationIcons={uni.certificationIcons}
                        />
                    </Link>
                ))}
            </div>

            <div className="flex justify-between mt-[32px] pb-[36.5px]">
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
    );
};