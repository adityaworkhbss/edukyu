import React, { useRef, useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import PrimaryDiscoverCourseCard from "../Cards/DiscoverCourseCard/PrimaryDiscoverCourseCard";

const CardSlider = () => {
    const carouselRef = useRef(null);
    const autoSlideInterval = useRef(null);
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


    const InDemandCourseCardData = [
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

    const PrimaryDiscoverCourseCardData = [
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "Online Master’s of Business Administration (MBA)",
        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "Online Master’s of Business Administration (MBA)",
        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "Online Master’s of Business Administration (MBA)",

        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "Online Master’s of Business Administration (MBA)",

        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "Online Master’s of Business Administration (MBA)",

        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "Online Master’s of Business Administration (MBA)",

        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "Online Master’s of Business Administration (MBA)",

        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "Online Master’s of Business Administration (MBA)",

        }
    ];

    const BlogsCardData = [
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "What to Do After BCA? Top 10 Courses for a High-Paying Tech Career Options after BCA",
            details: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "What to Do After BCA? Top 10 Courses for a High-Paying Tech Career Options after BCA",
            details: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "What to Do After BCA? Top 10 Courses for a High-Paying Tech Career Options after BCA",
            details: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "What to Do After BCA? Top 10 Courses for a High-Paying Tech Career Options after BCA",
            details: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "What to Do After BCA? Top 10 Courses for a High-Paying Tech Career Options after BCA",
            details: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "What to Do After BCA? Top 10 Courses for a High-Paying Tech Career Options after BCA",
            details: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "What to Do After BCA? Top 10 Courses for a High-Paying Tech Career Options after BCA",
            details: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
        {
            imgSrc: "https://edukyu.com/new-ed/assets/cxp-assets/imgs/in-demand-courses/financial.png",
            title: "What to Do After BCA? Top 10 Courses for a High-Paying Tech Career Options after BCA",
            details: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        }
    ];

    return (
        <div className="relative">
            {!isMobile && (
                <>
                    <button
                        onClick={() => throttleClick(prev)}
                        disabled={isThrottled}
                        className={`absolute left-0 text-[32px] -translate-x-full top-1/2 transform -translate-y-1/2 z-10  text-black p-2  pr-[35px] transition-all duration-200 ${isThrottled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <LeftOutlined />
                    </button>

                    <button
                        onClick={() => throttleClick(next)}
                        disabled={isThrottled}
                        className={`absolute right-0 text-[32px] h-[32px] w-[32px] translate-x-full top-1/2 transform -translate-y-1/2 z-10  text-black p-2 pl-[35px]  transition-all duration-200 ${isThrottled ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                {PrimaryDiscoverCourseCardData.map((data, i) => (
                    <div key={i} className="px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-stretch">
                        <PrimaryDiscoverCourseCard {...data} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CardSlider;
