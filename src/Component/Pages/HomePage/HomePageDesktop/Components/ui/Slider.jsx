import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// images are in public/Resources/Images/HomePageSliders
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

const Slider = () => {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);
    const interactionRef = useRef(false);
    const touchStartX = useRef(null);
    const touchDeltaX = useRef(0);

    // create a map of sliderImages and there respective college name
    // on change of slider send college name to Hero Section

    useEffect(() => {
        const startAuto = () => {
            if (intervalRef.current) return;
            intervalRef.current = setInterval(() => {
                setIndex((i) => (i + 1) % sliderImages.length);
            }, 4000);
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
        // resume after short delay
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

    // touch handlers for swipe
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
        const threshold = 50; // px
        if (delta > threshold) {
            goPrev();
        } else if (delta < -threshold) {
            goNext();
        }
        // resume auto after short delay
        setTimeout(() => resumeAuto(4000), 2000);
    };

    const clipId = 'heroClip_615_489';

    return (
        <div className="w-full flex justify-center">
            {/* Inline SVG defs for clipPath */}
            <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden>
                <defs>
                    <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
                        <path d="M4 60C4 26.8629 30.8629 0 64 0H559C592.137 0 619 26.8629 619 60V256.029C619 282.389 601.795 305.662 576.593 313.392L81.5926 465.203C43.0205 477.033 4 448.186 4 407.84V60Z" />
                    </clipPath>
                </defs>
            </svg>

            <div
                className="relative shadow-lg"
                style={{ 
                    width: '100%', 
                    maxWidth: '615px', 
                    height: '489px',
                    clipPath: `url(#${clipId})`
                }}
                onMouseEnter={pauseAuto}
                onMouseLeave={() => resumeAuto(4000)}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {sliderImages.map((src, i) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image
                            src={src}
                            alt={`Slide ${i + 1}`}
                            fill
                            className="object-cover"
                            priority={i === 0} // Prioritize loading the first image
                            sizes="(max-width: 768px) 100vw, 615px"
                        />
                    </div>
                ))}

                {/* Prev / Next buttons */}
                <button
                    aria-label="Previous slide"
                    onClick={goPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/80 hover:bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors"
                >
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 1L1 7L7 13" stroke="#024B53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button
                    aria-label="Next slide"
                    onClick={goNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/80 hover:bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors"
                >
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L1 13" stroke="#024B53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex gap-2">
                    {sliderImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setIndex(i);
                                pauseAuto();
                                setTimeout(() => resumeAuto(4000), 3000);
                            }}
                            className={`w-3 h-3 rounded-full transition-colors ${
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

export default Slider;
