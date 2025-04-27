import React, { useRef, useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import UniversityCard from "../Cards/UniversityCard/UniversityCard";

const CardSlider = ({ cardComponent: CardComponent, cardData = [] }) => {
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
        carouselRef.current?.next();
    };

    const prev = () => {
        carouselRef.current?.prev();
    };

    const throttleClick = (action) => {
        if (isThrottled) return;
        action();
        setIsThrottled(true);
        setTimeout(() => setIsThrottled(false), 600);
    };

    return (
        <div className="relative w-full flex items-center justify-center my-8">
            {/* Buttons - outside the overflow-hidden area */}
            {!isMobile && (
                <button
                    onClick={() => throttleClick(prev)}
                    disabled={isThrottled}
                    className={`absolute left-[-64px] top-1/2 transform -translate-y-1/2 text-[32px] ${
                        CardComponent === UniversityCard ? "text-white" : "text-black"
                    } p-2 z-20 transition-all duration-200 ${isThrottled ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <LeftOutlined />
                </button>

            )}

            {/* Carousel inside a clipped container */}
            <div className="relative max-w-[1280px] w-full overflow-hidden">
                <Carousel
                    autoplay
                    ref={carouselRef}
                    infinite
                    dots={false}
                    arrows={false}
                    slidesToShow={4}
                    slidesToScroll={1}
                    swipe
                    responsive={[
                        {
                            breakpoint: 1200,
                            settings: { slidesToShow: 4 }
                        },
                        {
                            breakpoint: 1024,
                            settings: { slidesToShow: 3 }
                        },
                        {
                            breakpoint: 768,
                            settings: { slidesToShow: 2 }
                        },
                        {
                            breakpoint: 480,
                            settings: { slidesToShow: 1 }
                        },
                    ]}
                >
                    {cardData.map((data, index) => (
                        <div key={index} className="px-4">
                            <CardComponent {...data} />
                        </div>
                    ))}
                </Carousel>
            </div>

            {!isMobile && (
                <button
                    onClick={() => throttleClick(next)}
                    disabled={isThrottled}
                    className={`absolute right-[-64px] top-1/2 transform -translate-y-1/2 text-[32px] ${
                        CardComponent === UniversityCard ? "text-white" : "text-black"
                    } p-2 z-20 transition-all duration-200 ${isThrottled ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <RightOutlined />
                </button>

            )}
        </div>
    );
};

export default CardSlider;
