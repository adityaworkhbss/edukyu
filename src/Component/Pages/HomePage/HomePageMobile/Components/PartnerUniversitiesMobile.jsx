import React, { useRef } from 'react';

const UniversityCard = ({ name, logoSrc, certificationIcons }) => {
    return (
        <article
            className="w-[290px]  md:w-full pb-4 px-[24px] rounded-lg border border-[#CDCDCD] bg-white"
            aria-label={`University card for ${name}`}
        >
            <div className="bg-white flex max-w-full flex-col overflow-hidden items-stretch justify-center py-[9px] rounded-lg">
                <img
                    src={logoSrc}
                    alt={`${name} logo`}
                    className="aspect-[2.42] object-contain w-full"
                />
            </div>
            <div className="w-full mt-2">
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
                            {/*{univ.courses}*/}
                            20+ Courses
                        </div>
                    </div>

                </div>

                <div className="inline-flex gap-[12px]  items-center">
                    <div className="pl-[5px] text-[#323232] font-[Outfit] text-[26px] font-medium leading-[21px]">₹</div>
                    <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none">
                        {/*{univ.price}*/}
                        Course Starting @ Rs 8,790/-
                    </div>
                </div>

                <div className="flex w-full items-center gap-2 self-stretch mt-[22px]">
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

    const certificationIcons = [
        "https://api.builder.io/api/v1/image/assets/TEMP/ed35af773b72aabdc8d32ac0fa11bf667f8df011?placeholderIfAbsent=true",
        "https://api.builder.io/api/v1/image/assets/TEMP/8819d1debcdd8a0ae99518de71beffebf5bf37dd?placeholderIfAbsent=true",
        "https://api.builder.io/api/v1/image/assets/TEMP/0c3659de9792dd06ae7668c12052ce22c4b7376a?placeholderIfAbsent=true",
    ];

    const universities = [
        {
            name: "NMIMS University Online",
            logoSrc: "https://api.builder.io/api/v1/image/assets/TEMP/72a709f08e75d04224982c33995f174fbb184de0?placeholderIfAbsent=true",
            certificationIcons,
        },
        {
            name: "Another University",
            logoSrc: "https://api.builder.io/api/v1/image/assets/TEMP/72a709f08e75d04224982c33995f174fbb184de0?placeholderIfAbsent=true",
            certificationIcons,
        },
        {
            name: "Another University",
            logoSrc: "https://api.builder.io/api/v1/image/assets/TEMP/72a709f08e75d04224982c33995f174fbb184de0?placeholderIfAbsent=true",
            certificationIcons,
        },
        {
            name: "Another University",
            logoSrc: "https://api.builder.io/api/v1/image/assets/TEMP/72a709f08e75d04224982c33995f174fbb184de0?placeholderIfAbsent=true",
            certificationIcons,
        },
    ];

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
                    <div key={index} className="flex-shrink-0 snap-center">
                        <UniversityCard
                            name={uni.name}
                            logoSrc={uni.logoSrc}
                            certificationIcons={uni.certificationIcons}
                        />
                    </div>
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