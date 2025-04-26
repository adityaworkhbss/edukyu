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
        <div className="w-full flex flex-col items-center py-10 bg-white">
            <div className="flex justify-center items-center gap-8 relative w-[1032px] h-[252px]">
                <picture>
                    <source media="(max-width: 768px)" srcSet={imageUrlMobile} />
                    <img src={imageUrlDesktop} alt={`${name} profile`} />
                </picture>
            </div>

            <div className="py-1 px-4 bg-amber-300">
                <p className="font-bold text-[#025E68]">{hikeText}</p>
            </div>

            <div className="w-[80%] mt-20 border rounded-xl p-6">
                <h3 className="absolute left-1/2 -mt-[40px] transform -translate-x-1/2 text-center bg-[#ffffff] text-[#025E68] text-xl font-medium">
                    {name}
                </h3>

                <p className="text-center text-[#025E68] text-[12px] font-normal mt-4">
                    {testimonial}
                </p>

                <div className="flex justify-end mt-4">
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-6 h-6 text-blue-600" />
                    </a>
                </div>
            </div>

            {/* CTA Button */}
            <button className="mt-10 bg-[#025E68] text-[#FFD23F] font-semibold px-6 py-3 rounded">
                Talk To Expert Counsellor
            </button>
        </div>
    );
};

export default CareerTransitionCard;
