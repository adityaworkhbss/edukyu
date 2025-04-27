import React, { useRef, useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

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

    // Add some CSS for the card container
    const cardContainerStyle = {
        padding: '0px', // This creates the gap between cards
    };

    return (
        <div className="flex items-center justify-between mx-auto -ml-6">
            {!isMobile && (
                <button
                    onClick={() => throttleClick(prev)}
                    disabled={isThrottled}
                    className={`text-[32px] pr-[24px] z-10 text-black p-2 transition-all duration-200 ${isThrottled ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <LeftOutlined />
                </button>
            )}

            <div className="w-[95%]">
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
                            settings: {
                                slidesToShow: 4,
                                swipe: true
                            }
                        },
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                swipe: true
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                swipe: true
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                swipe: true
                            }
                        },
                    ]}
                >
                    {cardData.map((data, index) => (
                        <div key={index} style={cardContainerStyle}>
                            <CardComponent {...data} />
                        </div>
                    ))}
                </Carousel>
            </div>

            {!isMobile && (
                <button
                    onClick={() => throttleClick(next)}
                    disabled={isThrottled}
                    className={`text-[32px] pl-[24px] h-[32px] w-[32px] z-10 text-black p-2 transition-all duration-200 ${isThrottled ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <RightOutlined />
                </button>
            )}
        </div>
    );
};

export default CardSlider;