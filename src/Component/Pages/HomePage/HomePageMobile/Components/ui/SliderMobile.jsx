import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// images live in public/Resources/Images/HomePageSliders
const sliderImages = [
    '/Resources/Images/HomePageSliders/1.png',
    '/Resources/Images/HomePageSliders/2.png',
    '/Resources/Images/HomePageSliders/3.png',
    '/Resources/Images/HomePageSliders/4.png',
    '/Resources/Images/HomePageSliders/5.jpg',
    '/Resources/Images/HomePageSliders/6.png',
    '/Resources/Images/HomePageSliders/7.jpg',
    '/Resources/Images/HomePageSliders/8.jpg',
    '/Resources/Images/HomePageSliders/9.jpg',
    '/Resources/Images/HomePageSliders/10.jpg',
    '/Resources/Images/HomePageSliders/11.png',
];

const SliderMobile = () => {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);
    const interactionRef = useRef(false);
    const touchStartX = useRef(null);
    const touchDeltaX = useRef(0);

    useEffect(() => {
        const startAuto = () => {
            if (intervalRef.current) return;
            intervalRef.current = setInterval(() => {
                setIndex((i) => (i + 1) % sliderImages.length);
            }, 3500);
        };

        const stopAuto = () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };

        if (!interactionRef.current) startAuto();
        return () => stopAuto();
    }, []);

    const pauseAuto = () => {
        interactionRef.current = true;
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const resumeAuto = (delay = 3000) => {
        interactionRef.current = false;
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setIndex((i) => (i + 1) % sliderImages.length);
        }, delay);
    };

    const goNext = () => {
        setIndex((i) => (i + 1) % sliderImages.length);
        pauseAuto();
    };

    const goPrev = () => {
        setIndex((i) => (i - 1 + sliderImages.length) % sliderImages.length);
        pauseAuto();
    };

    const onTouchStart = (e) => {
        pauseAuto();
        touchStartX.current = e.touches[0].clientX;
        touchDeltaX.current = 0;
    };

    const onTouchMove = (e) => {
        if (touchStartX.current == null) return;
        touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    };

    const onTouchEnd = () => {
        const delta = touchDeltaX.current;
        touchStartX.current = null;
        touchDeltaX.current = 0;
        const threshold = 40;
        if (delta > threshold) {
            goPrev();
        } else if (delta < -threshold) {
            goNext();
        }
        setTimeout(() => resumeAuto(3500), 1500);
    };

    const clipId = 'mobileClip_277_220';

    return (
        <div className="w-full flex justify-start z-20">
            {/* Inline SVG defs for clipPath */}
            <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden>
                <defs>
                    <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
                        <path d="M2 27.0243C2 12.0992 14.0992 0 29.0244 0H251.976C266.901 0 279 12.0992 279 27.0244V115.317C279 127.19 271.251 137.672 259.899 141.154L36.9482 209.531C19.5751 214.859 2 201.866 2 183.694V27.0243Z" />
                    </clipPath>
                </defs>
            </svg>

            <div
                className="relative shadow-lg"
                style={{ 
                    width: '277px', 
                    height: '220.249px',
                   
                    flexShrink: 0,
                    clipPath: `url(#${clipId})`
                }}
                onMouseEnter={pauseAuto}
                onMouseLeave={() => resumeAuto(3500)}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {sliderImages.map((src, i) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-600 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image
                            src={src}
                            alt={`Mobile slide ${i + 1}`}
                            fill
                            className="object-cover"
                            priority={i === 0} // Prioritize loading the first image
                            sizes="277px"
                        />
                    </div>
                ))}

                {/* small prev/next for mobile */}
                <button
                    aria-label="Previous slide"
                    onClick={goPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-colors"
                >
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1L1 5L5 9" stroke="#024B53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button
                    aria-label="Next slide"
                    onClick={goNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-colors"
                >
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L1 9" stroke="#024B53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                {/* Dots indicator for mobile */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 flex gap-1.5">
                    {sliderImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setIndex(i);
                                pauseAuto();
                                setTimeout(() => resumeAuto(3500), 2000);
                            }}
                            className={`w-2 h-2 rounded-full transition-colors ${
                                i === index ? 'bg-white' : 'bg-white/50'
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SliderMobile;
