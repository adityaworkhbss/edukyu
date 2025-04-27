import React, { useRef, useEffect, useState } from 'react';
import {Carousel} from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CareerTransitionCard from "../Cards/CareerTransitionCard/CareerTransitionCard";
import { CareerTransitionCardData } from '../../Data Modals/CareerTransitionCardData';


const CareerTransitionCardSlider = () => {
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
                    slidesToShow={1}
                    slidesToScroll={1}
                    swipe={true}>
                    {CareerTransitionCardData.map((data, i) => (
                        <CareerTransitionCard {...data} />
                    ))}
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

export default CareerTransitionCardSlider;

