"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Calendar, ImageIcon, User } from "lucide-react";
import {useRouter} from "next/navigation";

// const universities = [
//     { id: 1, title: "Designers are meant to be loved, not understood.", author: "John Doe", date: "July 29, 2022" },
//     { id: 2, title: "Innovation drives creativity in 2025.", author: "Jane Smith", date: "June 18, 2023" },
//     { id: 3, title: "The art of visual storytelling.", author: "Mark Lee", date: "Jan 8, 2024" },
//     { id: 4, title: "How to design for impact.", author: "Elisa Wang", date: "Feb 5, 2024" },
//     { id: 5, title: "Top UI/UX Trends of the Year.", author: "John Doe", date: "March 12, 2024" },
//     { id: 6, title: "Figma vs Adobe XD: A comparison.", author: "Jane Smith", date: "April 10, 2024" },
//     { id: 7, title: "Accessible design principles.", author: "Mark Lee", date: "May 3, 2024" },
// ];

export default function BlogCrouselMobile(
    {blogs},
) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(151);
    const containerRef = useRef(null);
    const cardsPerView = 1;
    const cardGap = 16;

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
        console.log(currentIndex);
        setCurrentIndex((prev) =>
            (prev - 1 + blogs.length) % blogs.length
        );
    };

    const handleNext = () => {
        console.log(currentIndex);
        setCurrentIndex((prev) =>
            (prev + 1) % blogs.length
        );
    };



    const router = useRouter();
    const handleReadMore = (blogId) => {
        router.push(`/blog/${blogId}`, undefined, { shallow: true });
    };

    const totalTranslateX = -1 * currentIndex * (cardWidth + cardGap);


    return (
        <div className="relative w-full pt-8">

            {/* Card Container */}
            <div
                ref={containerRef}
                className="overflow-hidden w-full"
            >
                <div
                    className="flex transition-transform duration-500 ease-in-out gap-6"
                    style={{ transform: `translateX(${totalTranslateX}px)` }}
                >
                    {blogs.map((univ, idx) => (
                        <div
                            key={univ.id}
                            className="bg-white rounded-lg overflow-hidden  flex-shrink-0"
                            style={{ width: `${cardWidth}px` }}
                        >
                            <div className="cover bg-gray-100 h-[214px] flex items-center justify-center rounded-[16px] border-b-[16px] border-white">
                                {univ.image ? (
                                    <img
                                        src={`https://edukyu.com/public/${univ.image}`}
                                        alt={univ.title}
                                        className="w-full h-auto"
                                    />
                                ) : (
                                    <ImageIcon size={48} className="text-secondary opacity-60" />
                                )}
                            </div>


                            <div className="py-4 text-left space-y-4">
                                {/* Meta Info */}
                                <div className="flex items-left text-[14px] leading-[14px] font-medium text-[#707070] tracking-[0.3px] font-outfit">
                                    <div className="flex items-center gap-4 pr-6">
                                        {/* SVG Icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20 23" fill="none">
                                            <path d="M10 11.4295C13.1562 11.4295 15.7143 8.87151 15.7143 5.71526C15.7143 2.55901 13.1562 0.000976562 10 0.000976562C6.84375 0.000976562 4.28571 2.55901 4.28571 5.71526C4.28571 8.87151 6.84375 11.4295 10 11.4295ZM14 12.8581H13.2545C12.2634 13.3135 11.1607 13.5724 10 13.5724C8.83928 13.5724 7.74107 13.3135 6.74554 12.8581H6C2.6875 12.8581 0 15.5456 0 18.8581V20.7153C0 21.8983 0.959821 22.8581 2.14286 22.8581H17.8571C19.0402 22.8581 20 21.8983 20 20.7153V18.8581C20 15.5456 17.3125 12.8581 14 12.8581Z" fill="#707070"/>
                                        </svg>
                                        <span className="text-[#707070] text-[14px] leading-[14px] font-medium tracking-[0.3px] font-outfit">
                                          8 Min
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20 23" fill="none">
                                            <path d="M6.60714 12.8571H4.82143C4.52679 12.8571 4.28571 12.6161 4.28571 12.3214V10.5357C4.28571 10.2411 4.52679 10 4.82143 10H6.60714C6.90179 10 7.14286 10.2411 7.14286 10.5357V12.3214C7.14286 12.6161 6.90179 12.8571 6.60714 12.8571ZM11.4286 12.3214V10.5357C11.4286 10.2411 11.1875 10 10.8929 10H9.10714C8.8125 10 8.57143 10.2411 8.57143 10.5357V12.3214C8.57143 12.6161 8.8125 12.8571 9.10714 12.8571H10.8929C11.1875 12.8571 11.4286 12.6161 11.4286 12.3214ZM15.7143 12.3214V10.5357C15.7143 10.2411 15.4732 10 15.1786 10H13.3929C13.0982 10 12.8571 10.2411 12.8571 10.5357V12.3214C12.8571 12.6161 13.0982 12.8571 13.3929 12.8571H15.1786C15.4732 12.8571 15.7143 12.6161 15.7143 12.3214ZM11.4286 16.6071V14.8214C11.4286 14.5268 11.1875 14.2857 10.8929 14.2857H9.10714C8.8125 14.2857 8.57143 14.5268 8.57143 14.8214V16.6071C8.57143 16.9018 8.8125 17.1429 9.10714 17.1429H10.8929C11.1875 17.1429 11.4286 16.9018 11.4286 16.6071ZM7.14286 16.6071V14.8214C7.14286 14.5268 6.90179 14.2857 6.60714 14.2857H4.82143C4.52679 14.2857 4.28571 14.5268 4.28571 14.8214V16.6071C4.28571 16.9018 4.52679 17.1429 4.82143 17.1429H6.60714C6.90179 17.1429 7.14286 16.9018 7.14286 16.6071ZM15.7143 16.6071V14.8214C15.7143 14.5268 15.4732 14.2857 15.1786 14.2857H13.3929C13.0982 14.2857 12.8571 14.5268 12.8571 14.8214V16.6071C12.8571 16.9018 13.0982 17.1429 13.3929 17.1429H15.1786C15.4732 17.1429 15.7143 16.9018 15.7143 16.6071ZM20 5V20.7143C20 21.8973 19.0402 22.8571 17.8571 22.8571H2.14286C0.959821 22.8571 0 21.8973 0 20.7143V5C0 3.81696 0.959821 2.85714 2.14286 2.85714H4.28571V0.535714C4.28571 0.241071 4.52679 0 4.82143 0H6.60714C6.90179 0 7.14286 0.241071 7.14286 0.535714V2.85714H12.8571V0.535714C12.8571 0.241071 13.0982 0 13.3929 0H15.1786C15.4732 0 15.7143 0.241071 15.7143 0.535714V2.85714H17.8571C19.0402 2.85714 20 3.81696 20 5ZM17.8571 20.4464V7.14286H2.14286V20.4464C2.14286 20.5937 2.26339 20.7143 2.41071 20.7143H17.5893C17.7366 20.7143 17.8571 20.5937 17.8571 20.4464Z" fill="#707070"/>
                                        </svg>
                                        <span>{new Date(univ.timeStamp).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric"
                                            })}</span>
                                    </div>
                                </div>


                                {/* Blog Title */}
                                <div className="text-[#121212] mb-[32px] mt-[23px] font-[Outfit] text-[20px] font-medium leading-none">
                                    {univ.title}
                                </div>


                                <button className="p-0 text-muted-foreground hover:text-foreground group inline-flex items-center gap-1 w-full"
                                        onClick={() => handleReadMore(univ.shortUrl)}>
                                    <span className="text-[#024B53] font-[Outfit] text-[14px] font-medium leading-[20px]">READ MORE</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_236_519)">
                                            <path d="M8 2.6665L7.06 3.6065L10.78 7.33317H2.66666V8.6665H10.78L7.06 12.3932L8 13.3332L13.3333 7.99984L8 2.6665Z" fill="#024B53"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_236_519">
                                                <rect width="16" height="16" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between mt-[32px] pb-[64px]">
                <button
                    onClick={handlePrev}
                    className="bg-white z-10 p-[4.5px] hover:shadow-md rounded"
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
                    className="bg-white z-10 p-[4.5px] hover:shadow-md rounded"
                    aria-label="Next"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M5.33329 17.3333L21.56 17.3333L14.1066 24.7866L16 26.6666L26.6666 16L16 5.33329L14.12 7.21329L21.56 14.6666L5.33329 14.6666L5.33329 17.3333Z" fill="#024B53" />
                    </svg>
                </button>

            </div>

        </div>
    );
}
