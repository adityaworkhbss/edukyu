import React from "react";
import { FaLinkedin } from "react-icons/fa";

const CareerTransitionCard = ({
                                  imageUrlDesktop,
                                  imageUrlMobile,
                                  hikeText,
                                  name,
                                  testimonial,
                                  linkedinUrl
                              }) => {
    return (
        <div className="w-full flex flex-col items-center py-10 bg-white px-4">
            {/* Image Section */}
            <div className="flex justify-center items-center gap-8 relative w-full max-w-[1032px] h-auto">
                <picture>
                    <source media="(max-width: 768px)" srcSet={imageUrlMobile} />
                    <img
                        src={imageUrlDesktop}
                        alt={`${name} profile`}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </picture>
            </div>

            {/* Hike Section */}
            <div className="py-1 px-4 bg-amber-300 mt-4 hidden md:block">
                <p className="font-bold text-[#025E68] text-sm md:text-base">{hikeText}</p>
            </div>

            {/* Testimonial Box */}
            <div className="w-full max-w-[800px] mt-16 border rounded-xl p-6 relative bg-white shadow-md">
                <h3 className="absolute left-1/2 -top-5 transform -translate-x-1/2 bg-white text-[#025E68] text-lg md:text-xl font-medium px-2">
                    {name}
                </h3>

                <p className="text-center text-[#025E68] text-sm md:text-base font-normal mt-8 leading-relaxed">
                    {testimonial}
                </p>

                <div className="flex justify-end mt-4">
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-6 h-6 text-blue-600" />
                    </a>
                </div>
            </div>

            {/* CTA Button */}
            <button className="mt-10 bg-[#025E68] text-[#FFD23F] font-semibold px-6 py-3 rounded text-sm md:text-base">
                Talk To Expert Counsellor
            </button>
        </div>
    );
};

export default CareerTransitionCard;

