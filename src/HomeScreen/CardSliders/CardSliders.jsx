
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
            next();
        }, 3000);

        return () => clearInterval(interval); // cleanup on unmount
    }, []);

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
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="px-2">
                        <InDemandCourseCard />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CardSlider;
