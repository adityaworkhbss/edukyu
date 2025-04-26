import React, { useRef, useEffect, useState } from 'react';
import {Carousel} from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import PrimaryDiscoverCourseCard from "../Cards/DiscoverCourseCard/PrimaryDiscoverCourseCard";
import BlogsCard from "../Cards/BlogsCard/BlogsCard";
import CareerTransitionCard from "../CareerTransitionCard/CareerTransitionCard";
import {BlogsCardData} from "../Data Modals/BlogsCardData";
import {PrimaryDiscoverCourseCardData} from "../Data Modals/PrimaryDiscoverCourseCardData";
import {InDemandCourseCardData} from "../Data Modals/InDemandCourseCardData";

const CardSlider = () => {
    const carouselRef = useRef(null);
    const [isThrottled, setIsThrottled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const next = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const prev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };



    const throttleClick = (action, resetTimer = true) => {
        if (isThrottled) return;
        action();
        setIsThrottled(true);
        setTimeout(() => {
            setIsThrottled(false);
        }, 600);
    };


    const CareerTransitionCardData = [

    ];

    const DiscoverCourseCardData = [

    ];

    const UniversityCardData = [

    ];

    return (
        <div className="flex items-center justify-between w-[95%]">
            {!isMobile && (
                <>
                    <button
                        onClick={() => throttleClick(prev)}
                        disabled={isThrottled}
                        className={`text-[32px]  z-10  text-black p-2 transition-all duration-200 ${isThrottled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <LeftOutlined />
                    </button>
                </>
            )}
            <div className="w-[95%] px-2">


                <Carousel
                    autoplay
                    ref={carouselRef}
                    infinite
                    dots={false}
                    arrows={false}
                    slidesToShow={4}
                    slidesToScroll={1}
                    swipe={true}
                    responsive={[
                        {
                            breakpoint: 1200, // Large screens (desktop)
                            settings: {
                                slidesToShow: 4, // 4 slides on large screens
                                swipe: true,
                            },
                        },
                        {
                            breakpoint: 1024, // Medium screens (tablet)
                            settings: {
                                slidesToShow: 3, // 3 slides on medium screens
                                swipe: true,
                            },
                        },
                        {
                            breakpoint: 768, // Small screens (tablet to mobile)
                            settings: {
                                slidesToShow: 2, // 2 slides on small screens
                                swipe: true,
                            },
                        },
                        {
                            breakpoint: 480, // Extra small screens (mobile)
                            settings: {
                                slidesToShow: 1, // 1 slide on mobile
                                swipe: true,
                            },
                        },
                    ]}
                >
                    {/*{BlogsCardData.map((data, i) => (*/}
                    {/*    <div key={i} className="px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-stretch">*/}
                    {/*        <BlogsCard {...data} />*/}
                    {/*    </div>*/}
                    {/*))}*/}
                    <CareerTransitionCard/>
                    <CareerTransitionCard/>
                    <CareerTransitionCard/>
                </Carousel>
            </div>

            {!isMobile && (
                <>
                    <button
                        onClick={() => throttleClick(next)}
                        disabled={isThrottled}
                        className={`text-[32px] h-[32px] w-[32px] z-10  text-black p-2  transition-all duration-200 ${isThrottled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <RightOutlined />
                    </button>
                </>
            )}


        </div>
    );
};

export default CardSlider;


