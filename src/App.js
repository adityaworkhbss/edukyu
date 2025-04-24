import React from "react";
import { FaLinkedin } from "react-icons/fa";

const CareerTransitionCard = () => {
    return (
        <div className="w-full flex flex-col items-center py-10 bg-white">
            {/* Top Section */}
            <div className="flex justify-center items-center gap-8 relative w-[1032px] h-[252px]">
                <img
                    src="https://edukyu.com/new-ed/assets/cxp-assets/imgs/test/AKRITI-GUPTA-test.png"
                />
            </div>
            <div className="py-1 px-4 bg-amber-300">
                <p className= "font-bold text-[#025E68]">65% Hike</p>
            </div>
            {/* Testimonial Section */}
            <div className="w-[80%] mt-20 border rounded-xl p-6">
                <h3 className="absolute left-1/2 -mt-[40px] transform -translate-x-1/2 text-center bg-[#ffffff] text-[#025E68] text-xl font-medium">
                    Nilutpal Goswami
                </h3>

                <p className="text-center text-[#025E68] text-[12px] font-normal mt-4">
                    "Balancing my career and family responsibilities, I sought an online MBA program that prioritized
                    flexibility. EduKyu’s comprehensive
                    platform proved invaluable in comparing programs based on scheduling options, learning pace, and
                    online delivery formats. Their
                    counsellor empowered me to identify the perfect program that seamlessly integrates with my busy
                    schedule while delivering a
                    rigorous and high-quality education. I express my gratitude to the EduKyu team for their role in
                    this critical decision."
                </p>
                <div className="flex justify-end mt-4">
                    <FaLinkedin className="w-6 h-6 text-blue-600"/>
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
