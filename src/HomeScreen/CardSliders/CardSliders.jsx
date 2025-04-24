import React, { useRef, useEffect, useState } from 'react';
import { Carousel } from 'antd';
import InDemandCourseCard from "../InDemandCourseCard/InDemandCourseCard";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const CardSlider = () => {
    const carouselRef = useRef(null);
    const autoSlideInterval = useRef(null);
    const [isThrottled, setIsThrottled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect if the client is on mobile
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

    const startAutoSlide = () => {
        if (autoSlideInterval.current) {
            clearInterval(autoSlideInterval.current);
        }
        autoSlideInterval.current = setInterval(() => {
            throttleClick(next, false); // Don't reset timer again from inside
        }, 3000);
    };

    const throttleClick = (action, resetTimer = true) => {
        if (isThrottled) return;
        action();
        setIsThrottled(true);
        if (resetTimer) {
            startAutoSlide(); // Restart timer when clicked
        }
        setTimeout(() => {
            setIsThrottled(false);
        }, 600);
    };

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(autoSlideInterval.current);
    }, []);

    const cardsData = [
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "Artificial Intelligence",
            duration: "6 months",
            approved: "AICTE Approved",
            mode: "Online",
            payment: "EMI Available",
        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "Machine Learning",
            duration: "3 months",
            approved: "UGC Approved",
            mode: "Offline",
            payment: "One-Time Payment",
        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "Human Resource Management",
            duration: "4 months",
            approved: "NAAC A+",
            mode: "Hybrid",
            payment: "EMI Available",
        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "Cloud Computing",
            duration: "5 months",
            approved: "AICTE Approved",
            mode: "Online",
            payment: "Subscription",
        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "Data Science",
            duration: "12 weeks",
            approved: "UGC Certified",
            mode: "Online",
            payment: "One-Time",
        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "UI/UX Design",
            duration: "8 weeks",
            approved: "NASSCOM Certified",
            mode: "Offline",
            payment: "Monthly Installments",
        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "Robotics Engineering",
            duration: "6 months",
            approved: "ISO Certified",
            mode: "Offline",
            payment: "One-Time",
        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "Business Analytics",
            duration: "10 weeks",
            approved: "AICTE Approved",
            mode: "Hybrid",
            payment: "EMI Available",
        }
    ];

    return (
        <div className="relative">
            {!isMobile && (
                <>
                    <button
                        onClick={() => throttleClick(prev)}
                        disabled={isThrottled}
                        className={`absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-200 ${isThrottled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <LeftOutlined />
                    </button>
                    <button
                        onClick={() => throttleClick(next)}
                        disabled={isThrottled}
                        className={`absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-200 ${isThrottled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <RightOutlined />
                    </button>
                </>
            )}

            <Carousel
                ref={carouselRef}
                infinite
                dots={false}
                arrows={false}
                slidesToShow={4}
                slidesToScroll={1}
                swipe={true}
                responsive={[
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            swipe: true,
                        },
                    },
                ]}
            >
                {cardsData.map((data, i) => (
                    <div key={i} className="px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-stretch">
                        <InDemandCourseCard {...data} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CardSlider;
