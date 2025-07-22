import React, { useState, useRef, useEffect } from 'react';

export const PartnerUniversities = () => {
    const universities = [
        {
            id: '1',
            name: 'NMIMS University Online',
            logoUrl: 'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/3de6fd537dfc78c50ec6e38316307cf4eed9dcb5?placeholderIfAbsent=true',
            certificationIcons: [
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/ed35af773b72aabdc8d32ac0fa11bf667f8df011?placeholderIfAbsent=true',
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/8819d1debcdd8a0ae99518de71beffebf5bf37dd?placeholderIfAbsent=true',
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/0c3659de9792dd06ae7668c12052ce22c4b7376a?placeholderIfAbsent=true'
            ]
        },
        {
            id: '2',
            name: 'Manipal University',
            logoUrl: 'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/6c375961fb9b1383a2448b142b57bb6ca3688052?placeholderIfAbsent=true',
            certificationIcons: [
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/ed35af773b72aabdc8d32ac0fa11bf667f8df011?placeholderIfAbsent=true',
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/8819d1debcdd8a0ae99518de71beffebf5bf37dd?placeholderIfAbsent=true',
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/0c3659de9792dd06ae7668c12052ce22c4b7376a?placeholderIfAbsent=true'
            ],
            hasGrayBackground: false
        },
        {
            id: '3',
            name: 'Amity University',
            logoUrl: 'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/fff7f8aeb18003c84f4dc4a353e59aa47a2329b2?placeholderIfAbsent=true',
            certificationIcons: [
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/ed35af773b72aabdc8d32ac0fa11bf667f8df011?placeholderIfAbsent=true',
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/8819d1debcdd8a0ae99518de71beffebf5bf37dd?placeholderIfAbsent=true',
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/ef1f9ee410e3e448afcaed0c0e5b3b9b3ac24a0f?placeholderIfAbsent=true'
            ]
        },
        {
            id: '4',
            name: 'Lovely Professional University',
            logoUrl: 'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/4d9ba1ee5ba0f00d4d60f2abbc619f0fa78f58e7?placeholderIfAbsent=true',
            certificationIcons: [
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/ed35af773b72aabdc8d32ac0fa11bf667f8df011?placeholderIfAbsent=true',
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/8819d1debcdd8a0ae99518de71beffebf5bf37dd?placeholderIfAbsent=true',
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/ef1f9ee410e3e448afcaed0c0e5b3b9b3ac24a0f?placeholderIfAbsent=true'
            ],
            hasGrayBackground: false
        },
        {
            id: '5',
            name: 'Jain University',
            logoUrl: 'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/78c01a94d8c820be8997691c0baed221cf33a3e5?placeholderIfAbsent=true',
            certificationIcons: [
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/ed35af773b72aabdc8d32ac0fa11bf667f8df011?placeholderIfAbsent=true',
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/8819d1debcdd8a0ae99518de71beffebf5bf37dd?placeholderIfAbsent=true',
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/ef1f9ee410e3e448afcaed0c0e5b3b9b3ac24a0f?placeholderIfAbsent=true'
            ]
        },
        {
            id: '6',
            name: 'Shoolini University',
            logoUrl: 'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/e67135e1f2c84781c109e732228c17338f223c58?placeholderIfAbsent=true',
            certificationIcons: [
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/ed35af773b72aabdc8d32ac0fa11bf667f8df011?placeholderIfAbsent=true',
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/8819d1debcdd8a0ae99518de71beffebf5bf37dd?placeholderIfAbsent=true',
                'https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/ef1f9ee410e3e448afcaed0c0e5b3b9b3ac24a0f?placeholderIfAbsent=true'
            ]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(151);
    const containerRef = useRef(null);
    const cardsPerView = 6;
    const cardGap = 24;

    useEffect(() => {
        const updateCardWidth = () => {
            if (containerRef.current) {
                const totalGap = (cardsPerView - 1) * cardGap;
                const containerWidth = containerRef.current.offsetWidth;
                const newCardWidth = (containerWidth - totalGap) / cardsPerView;
                setCardWidth(newCardWidth);
            }
        };

        const observer = new ResizeObserver(updateCardWidth);
        if (containerRef.current) observer.observe(containerRef.current);
        updateCardWidth();

        return () => observer.disconnect();
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            (prev - 1 + universities.length) % universities.length
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            (prev + 1) % universities.length
        );
    };

    const totalTranslateX = -1 * currentIndex * (cardWidth + cardGap);

    return (
        <section className="px-[56px] py-10 relative" aria-labelledby="partner-universities-heading">
            <h2
                id="partner-universities-heading"
                className="text-[32px] leading-[48px] font-semibold text-black font-[Outfit] tracking-[1px] mb-4"
            >
                Partner Universities
            </h2>
            <p className="text-[24px] font-medium text-[#9B9B9B] font-[Outfit] leading-normal mb-8">
                Lorem Ipsum is placeholder text used in the graphic, print.
            </p>

            <div className="relative">
                {/* Arrows */}
                <button
                    onClick={handlePrev}
                    className="absolute top-[60px] left-0 -ml-4 -translate-y-1/2 bg-white z-10 rounded-full shadow p-2 hover:shadow-md"
                    aria-label="Previous"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12.6669 7.33332H5.22028L8.47361 4.07998C8.73361 3.81998 8.73361 3.39332 8.47361 3.13332C8.41193 3.07151 8.33867 3.02248 8.25803 2.98903C8.17738 2.95557 8.09092 2.93835 8.00361 2.93835C7.9163 2.93835 7.82984 2.95557 7.74919 2.98903C7.66854 3.02248 7.59528 3.07151 7.53361 3.13332L3.14028 7.52665C3.07847 7.58833 3.02944 7.66159 2.99599 7.74223C2.96253 7.82288 2.94531 7.90934 2.94531 7.99665C2.94531 8.08396 2.96253 8.17042 2.99599 8.25107C3.02944 8.33172 3.07847 8.40497 3.14028 8.46665L7.53361 12.86C7.59533 12.9217 7.6686 12.9707 7.74925 13.0041C7.82989 13.0375 7.91632 13.0547 8.00361 13.0547C8.0909 13.0547 8.17733 13.0375 8.25797 13.0041C8.33861 12.9707 8.41189 12.9217 8.47361 12.86C8.53533 12.7983 8.58429 12.725 8.61769 12.6443C8.6511 12.5637 8.66829 12.4773 8.66829 12.39C8.66829 12.3027 8.6511 12.2163 8.61769 12.1356C8.58429 12.055 8.53533 11.9817 8.47361 11.92L5.22028 8.66665H12.6669C13.0336 8.66665 13.3336 8.36665 13.3336 7.99998C13.3336 7.63332 13.0336 7.33332 12.6669 7.33332Z" fill="#6A6A69"/>
                    </svg>
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-[60px] right-0 -mr-4 -translate-y-1/2 bg-white z-10 rounded-full shadow p-2 hover:shadow-md"
                    aria-label="Next"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3.33306 8.66668H10.7797L7.52639 11.92C7.26639 12.18 7.26639 12.6067 7.52639 12.8667C7.58807 12.9285 7.66133 12.9775 7.74197 13.011C7.82262 13.0444 7.90908 13.0616 7.99639 13.0616C8.0837 13.0616 8.17016 13.0444 8.25081 13.011C8.33146 12.9775 8.40472 12.9285 8.46639 12.8667L12.8597 8.47335C12.9215 8.41167 12.9706 8.33841 13.004 8.25777C13.0375 8.17712 13.0547 8.09066 13.0547 8.00335C13.0547 7.91604 13.0375 7.82958 13.004 7.74893C12.9706 7.66828 12.9215 7.59503 12.8597 7.53335L8.46639 3.14002C8.40467 3.07829 8.3314 3.02934 8.25075 2.99593C8.17011 2.96253 8.08368 2.94534 7.99639 2.94534C7.9091 2.94534 7.82267 2.96253 7.74203 2.99593C7.66139 3.02934 7.58811 3.07829 7.52639 3.14002C7.46467 3.20174 7.41571 3.27501 7.38231 3.35565C7.3489 3.4363 7.33171 3.52273 7.33171 3.61002C7.33171 3.6973 7.3489 3.78374 7.38231 3.86438C7.41571 3.94502 7.46467 4.0183 7.52639 4.08002L10.7797 7.33335L3.33306 7.33335C2.96639 7.33335 2.66639 7.63335 2.66639 8.00002C2.66639 8.36668 2.96639 8.66668 3.33306 8.66668Z" fill="#6A6A69"/>
                    </svg>
                </button>

                <div className="overflow-hidden" ref={containerRef}>
                    <div
                        className="flex gap-6 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(${totalTranslateX}px)`
                        }}
                    >
                        {universities.concat(universities).map((univ, idx) => (
                            <div
                                key={`${univ.id}-${idx}`}
                                className="flex-shrink-0 bg-white pb-[16px] rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
                                style={{ width: `${cardWidth}px` }}
                            >
                                {/* Logo Area */}
                                <div className={`pt-[8.5px] pb-[8.5px] pl-[14.047px] pr-[14.048px] h-[80px] flex items-center justify-center ${univ.hasGrayBackground ? 'bg-gray-300' : 'bg-white'}`}>
                                    <img src={univ.logoUrl} alt={univ.name} className="cover" />
                                </div>

                                {/* Name + Icons */}
                                <div className="px-3 mt-2 flex flex-col justify-between flex-grow">
                                    <p className="text-[16px] font-[Outfit] font-normal leading-normal text-[#011C1F]">
                                        {univ.name}
                                    </p>


                                    {/* Always render icon row with fixed height for alignment */}
                                    <div className="flex gap-1 mt-2 min-h-[24px] items-start">
                                        {univ.certificationIcons.map((icon, i) => (
                                            <img
                                                key={i}
                                                src={icon}
                                                alt={`Cert ${i}`}
                                                className="w-6 h-6 rounded object-contain hover:scale-105 transition-transform"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
