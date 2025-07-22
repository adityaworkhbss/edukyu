import React, { useState } from 'react';

export const OurProudGraduate = () => {
    const [currentSlide, setCurrentSlide] = useState(4); // Middle slide is active

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="mt-12">
            <h2 className="text-xl text-[#181D27] font-semibold">
                Our Proud Graduates
            </h2>
            <p className="text-[#535862] text-base font-normal mt-2">
                Lorem Ipsum is placeholder text used in the graphic, print.
            </p>

            <div className="flex justify-center mt-8">
                <div className="bg-[rgba(191,191,191,1)] flex w-40 h-40 flex-col items-center justify-center px-8 rounded-lg">
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/87bc899d21fa31f245da727ff2fad947b67be0b1?placeholderIfAbsent=true"
                        alt="Play testimonial video"
                        className="aspect-[1] object-contain w-16"
                    />
                </div>
            </div>

            <div className="flex items-center gap-5 justify-center mt-8">
                <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/cb566cefe3bef8d73858d99e9935714a816058c9?placeholderIfAbsent=true"
                    alt="Company logo 1"
                    className="aspect-[1.67] object-contain w-[100px] self-stretch shrink-0 my-auto rounded-lg"
                />
                <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/240d50995c84023d12224701e4f45826e8997a94?placeholderIfAbsent=true"
                    alt="Company logo 2"
                    className="aspect-[5.78] object-contain w-[81px] self-stretch shrink-0 my-auto"
                />
                <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/d32c032e1f931c57a6f06a72789b7e0d1144af7d?placeholderIfAbsent=true"
                    alt="Company logo 3"
                    className="aspect-[1.67] object-contain w-[100px] self-stretch shrink-0 my-auto rounded-lg"
                />
            </div>

            <div className="mt-6">
                <h3 className="text-black text-base font-medium">Pooja Sarkar</h3>
                <blockquote className="text-[rgba(112,112,112,1)] text-sm font-normal mt-3">
                    "EduKyu's personalized guidance, in-depth program comparisons,
                    and expert career counseling were invaluable. They didn't just tell
                    me about the programs; they understood my aspirations, my strengths,
                    and my weaknesses, and then matched me with the perfect program.
                    They will not only help you find the right program, but they will
                    equip you with the tools and confidence to transform your career."
                </blockquote>
            </div>

            <div className="flex items-center gap-2 mt-[15px]">
                <button aria-label="Previous testimonial">
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/0ac7fddba7acd132978a6c2ccd068cf08f48940c?placeholderIfAbsent=true"
                        alt=""
                        className="aspect-[1] object-contain w-[26px] self-stretch shrink-0 my-auto"
                    />
                </button>
                <button aria-label="Next testimonial">
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/f00247e37dbc3f16be800768c05cacee1a2bfa8d?placeholderIfAbsent=true"
                        alt=""
                        className="aspect-[1] object-contain w-[26px] self-stretch shrink-0 my-auto"
                    />
                </button>
            </div>

            <div className="mt-[38px] flex justify-center items-center gap-2 relative">
                {[...Array(9)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`rounded-full transition-all ${
                            index === currentSlide
                                ? 'w-8 h-8 bg-[#5C5C5C]'
                                : 'w-7 h-7 bg-[#9B9B9B] blur-[2px] opacity-70'
                        }`}
                    />
                ))}
            </div>

        </section>
    );
};
