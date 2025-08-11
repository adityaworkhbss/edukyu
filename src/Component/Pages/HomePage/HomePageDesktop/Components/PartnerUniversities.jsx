import React, { useState, useRef, useEffect } from 'react';
import GridContainer from "@/GlobalComponent/GridContainer";
import GridComponent from "@/GlobalComponent/GridComponent";
import { PartnerUniversitiesData } from '@/Data Model/Homepage/PartnerUniversitiesData';
import {ImageIcon} from "lucide-react";

export const PartnerUniversities = () => {
    const universities = PartnerUniversitiesData.universities.map((univ, index) => {
        console.log(univ);
        return {
            id: String(index + 1),
            name: univ.name,
            logoUrl: univ.image,
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


    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(151);
    const containerRef = useRef(null);
    const cardsPerView = 4;
    const cardGap = 24;

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

    const totalTranslateX = -1 * currentIndex * (cardWidth + cardGap);

    return (
        <section className="px-[56px] py-[64px] mt-[64px] relative" aria-labelledby="partner-universities-heading">

            <GridComponent gridStart={0} gridEnd={6}>
                <h2
                    id="partner-universities-heading"
                    className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4"
                >
                    Explore our Partner Universities
                </h2>
            </GridComponent>
            <GridComponent gridStart={0} gridEnd={6}>
                <p className="text-[#515150] font-[Outfit] text-[20px]  font-normal leading-none mb-10">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </p>
            </GridComponent>


            <div className="relative">
                <div className="overflow-hidden" ref={containerRef}>
                    <div
                        className="flex gap-6 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(${totalTranslateX}px)`
                        }}
                    >
                        {universities.concat(universities).map((univ, idx) => (

                            <div
                                key={`${univ.id}-${idx}`}
                                className="flex-shrink-0 bg-white p-4 pb-[16px] rounded-[22px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
                                style={{ width: `${cardWidth}px` }}
                            >
                                {/* Logo Area */}
                                <div className={` h-[96px] flex items-center justify-center ${univ.hasGrayBackground ? 'bg-gray-300' : 'bg-white'}`}>
                                    {univ.logoUrl ? (
                                        <img
                                            // `https://edukyu.com/public/${univ.image}`
                                            src={`https://edukyu.com/${univ.logoUrl}`}
                                            alt={univ.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <ImageIcon size={48} className="text-secondary opacity-60" />
                                    )}
                                </div>

                                {/* Name + Icons */}
                                <div className=" mt-4 gap-[16px] flex flex-col justify-between flex-grow">
                                    <div className="text-[#024B53] font-[Outfit] text-[20px] font-medium leading-none pb-[46px]">
                                        {univ.name}
                                    </div>

                                    <div className="inline-flex gap-[8px] align-center">
                                        <div>
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
                                        </div>
                                        <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none">
                                            {univ.courses}
                                        </div>

                                    </div>

                                    <div className="inline-flex gap-[12px]">
                                        <div className="pl-[5px] text-[#323232] font-[Outfit] text-[26px] font-medium leading-[21px]">₹</div>
                                        <div className="text-[#383837] font-[Outfit] text-[16px] font-medium leading-none">{univ.price}</div>
                                    </div>

                                    <div className="flex justify-between">
                                        <div className="flex gap-1 mt-2 min-h-[24px] items-start">
                                            {univ.certificationIcons.map((icon, i) => (
                                                <div key={i} className="flex w-[36px] h-[36px] p-[3px] justify-center items-center flex-shrink-0 aspect-[1/1]">
                                                    <img
                                                        src={icon}
                                                        alt={`Cert ${i}`}
                                                        className="w-[30px] h-[30px] flex-shrink-0 aspect-[1/1] object-contain rounded hover:scale-105 transition-transform"
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-[8px]">
                                            <button className="flex w-[32px] h-[32px] p-2 justify-center items-center flex-shrink-0 bg-[#024B53] rounded">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                >
                                                    <g clipPath="url(#clip0_228_674)">
                                                        <path
                                                            d="M8.00002 2.66663L7.06002 3.60663L10.78 7.33329H2.66669V8.66663H10.78L7.06002 12.3933L8.00002 13.3333L13.3334 7.99996L8.00002 2.66663Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_228_674">
                                                            <rect width="16" height="16" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </button>
                                        </div>
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

            </div>
        </section>

    );
};