
import React, { useRef, useEffect } from 'react';
import { Carousel } from 'antd';
import InDemandCourseCard from "../InDemandCourseCard/InDemandCourseCard";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const CardSlider = () => {
    const carouselRef = useRef(null);

    const next = () => {
        carouselRef.current?.next();
    };

    const prev = () => {
        carouselRef.current?.prev();
    };

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            prev();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Sample dynamic data
    const cardsData = [
        {
            imgSrc: "https://source.unsplash.com/400x300/?ai",
            title: "Artificial Intelligence",
            duration: "6 months",
            approved: "AICTE Approved",
            mode: "Online",
            payment: "EMI Available",
        },
        {
            imgSrc: "https://source.unsplash.com/400x300/?ml",
            title: "Machine Learning",
            duration: "3 months",
            approved: "UGC Approved",
            mode: "Offline",
            payment: "One-Time Payment",
        },
        {
            imgSrc: "https://source.unsplash.com/400x300/?hr",
            title: "Human Resource Management",
            duration: "4 months",
            approved: "NAAC A+",
            mode: "Hybrid",
            payment: "EMI Available",
        },
        {
            imgSrc: "https://source.unsplash.com/400x300/?cloud",
            title: "Cloud Computing",
            duration: "5 months",
            approved: "AICTE Approved",
            mode: "Online",
            payment: "Subscription",
        },
        {
            imgSrc: "https://source.unsplash.com/400x300/?datascience",
            title: "Data Science",
            duration: "12 weeks",
            approved: "UGC Certified",
            mode: "Online",
            payment: "One-Time",
        },
        {
            imgSrc: "https://source.unsplash.com/400x300/?design",
            title: "UI/UX Design",
            duration: "8 weeks",
            approved: "NASSCOM Certified",
            mode: "Offline",
            payment: "Monthly Installments",
        },
        {
            imgSrc: "https://source.unsplash.com/400x300/?robotics",
            title: "Robotics Engineering",
            duration: "6 months",
            approved: "ISO Certified",
            mode: "Offline",
            payment: "One-Time",
        },
        {
            imgSrc: "https://source.unsplash.com/400x300/?analytics",
            title: "Business Analytics",
            duration: "10 weeks",
            approved: "AICTE Approved",
            mode: "Hybrid",
            payment: "EMI Available",
        }
    ];

    return (
        <div className="relative">
            {/* Custom Arrows */}
            <button
                onClick={prev}
                className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100"
            >
                <LeftOutlined />
            </button>
            <button
                onClick={next}
                className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100"
            >
                <RightOutlined />
            </button>

            {/* Carousel */}
            <Carousel
                ref={carouselRef}
                slidesToShow={3.5}
                slidesToScroll={1}
                infinite
                dots={false}
                arrows={false}
                responsive={[
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ]}
            >
                {cardsData.map((data, i) => (
                    <div key={i} className="px-2">
                        <InDemandCourseCard {...data} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CardSlider;

