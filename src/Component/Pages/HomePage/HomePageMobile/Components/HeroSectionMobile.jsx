import React from "react";
import Image from "next/image";
import banner_hero_image from "@/../public/Resources/Images/banner_hero_image.png";
import banner_image from "@/../public/Resources/Images/banner_image.png";

const HeroSectionMobile = () => {
    return (
        <section className="relative pt-[32px] mt-[12px] px-[20px] overflow-hidden text-left">

            {/* Background SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 498" fill="none" className="absolute top-0 left-0 z-0">
                <path d="M0 30C0 13.4314 13.4315 0 30 0H330C346.569 0 360 13.4315 360 30V392.545C360 406.326 350.612 418.334 337.238 421.659L37.238 496.242C18.3131 500.947 0 486.629 0 467.128V30Z" fill="#024B53" />
            </svg>

            <div className="text-white font-[Outfit] text-[28px] font-semibold leading-none relative z-10 ">
                Let’s Help Navigate Your <br /> Career & Expand <br /> Your Skillset
            </div>

            <div className="text-white font-[Outfit] text-[14px] font-normal leading-none mt-3 relative z-10">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-[32px] z-10 relative">
                <button className="bg-white text-[#024B53] rounded-[12px] px-6 py-2 font-medium text-sm">
                    Apply Now
                </button>
                {/*<button className="border border-white text-white rounded-[12px] px-6 py-2 font-medium text-sm hover:bg-white hover:text-[#024B53] transition">*/}
                {/*    Explore More*/}
                {/*</button>*/}
            </div>

            {/* Images Layered */}
            <div className="relative w-full h-[280px] mt-8">
                <Image
                    src={banner_image}
                    alt="City Background"
                    fill
                    className="absolute object-contain z-10 scale-[1.25]"
                />
                <Image
                    src={banner_hero_image}
                    alt="Students"
                    fill
                    className="relative object-contain z-20 scale-[1.25]"
                />
            </div>
        </section>
    );
};

export default HeroSectionMobile;
