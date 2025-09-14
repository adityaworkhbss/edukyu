import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

   const imageCollegeMap = {
        "/Resources/Images/HomePageSliders/1.png": 'Noida-International-University',
        "/Resources/Images/HomePageSliders/2.png": 'Manipal-University-Jaipur',
        "/Resources/Images/HomePageSliders/3.png": 'Amity-University',
        "/Resources/Images/HomePageSliders/4.png": 'D.Y.-Patil-Vidyapeeth',
        "/Resources/Images/HomePageSliders/5.jpg": 'Shoolini-University',
        "/Resources/Images/HomePageSliders/6.png": 'Uttaranchal-University',
        "/Resources/Images/HomePageSliders/7.jpg": 'Lovely-Professional-University',
        "/Resources/Images/HomePageSliders/8.jpg": 'NMIMS-University-Online',
        "/Resources/Images/HomePageSliders/9.jpg": 'Jain-University',
        "/Resources/Images/HomePageSliders/10.jpg": 'Vivekanand-Global-University',
        "/Resources/Images/HomePageSliders/11.png": 'Sikkim-Manipal-University'
    }

    // Function to check scroll position and update arrow states
    const checkScrollPosition = () => {
        setCanScrollLeft(index > 0);
        setCanScrollRight(index < sliderImages.length - 1);
    };

    // Update arrow states when index changes
    useEffect(() => {
        checkScrollPosition();
    }, [index]);


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
        if (index < sliderImages.length - 1) {
            setIndex((i) => i + 1);
            pauseAuto();
        }
    };

    const goPrev = () => {
        if (index > 0) {
            setIndex((i) => i - 1);
            pauseAuto();
        }
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
                className="relative shadow-lg group"
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
                        className={`absolute inset-0 transition-opacity duration-700 
        ${i === index ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    >
                        <Link href={`/online-mba-programs/top-distance-mba-colleges/${encodeURIComponent(imageCollegeMap[src])}`}>
                            <Image
                                src={src}
                                alt={`Slide ${i + 1}`}
                                fill
                                className="object-cover"
                                priority={i === 0}
                                sizes="(max-width: 768px) 100vw, 615px"
                            />
                        </Link>
                    </div>


                    // <div
                    //     key={src}
                    //     className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                    // >
                    //     <Image
                    //         src={src}
                    //         alt={`Slide ${i + 1}`}
                    //         fill
                    //         className="object-cover"
                    //         priority={i === 0} // Prioritize loading the first image
                    //         sizes="(max-width: 768px) 100vw, 615px"
                    //     />
                    // </div>
                ))}

                {/* Prev / Next buttons - only show on hover and when navigation is possible */}
                {canScrollLeft && (
                    <button
                        aria-label="Previous slide"
                        onClick={goPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 hover:bg-gray-50 rounded p-4 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clipPath="url(#clip0_228_602)">
                                <path d="M26.6667 14.6667H10.44L17.8933 7.21337L16 5.33337L5.33334 16L16 26.6667L17.88 24.7867L10.44 17.3334H26.6667V14.6667Z" fill="#024B53" />
                            </g>
                            <defs>
                                <clipPath id="clip0_228_602">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                )}
                
                {canScrollRight && (
                    <button
                        aria-label="Next slide"
                        onClick={goNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-40  hover:bg-gray-50 rounded p-4 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M5.33329 17.3333L21.56 17.3333L14.1066 24.7866L16 26.6666L26.6666 16L16 5.33329L14.12 7.21329L21.56 14.6666L5.33329 14.6666L5.33329 17.3333Z" fill="#024B53" />
                        </svg>
                    </button>
                )}

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
                            className={`w-3 h-3 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-white/50'
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
