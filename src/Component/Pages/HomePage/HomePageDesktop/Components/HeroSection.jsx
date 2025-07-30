import React from "react";
import banner_hero_image from "@/../public/Resources/Images/banner_hero_image.png";
import banner_image from "@/../public/Resources/Images/banner_image.png";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative pb-[64px]">
            {/* Background SVG */}
            <svg
                className="absolute inset-0 z-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1366 687"
                preserveAspectRatio="none"
            >
                <path
                    d="M0 60C0 26.8629 26.8629 0 60 0H1306C1339.14 0 1366 26.8629 1366 60V380.699C1366 409.35 1345.74 434.004 1317.63 439.56L71.6342 685.841C34.5442 693.172 0 664.787 0 626.98V60Z"
                    fill="#024B53"
                />
            </svg>

            {/* Main content container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-[130px] grid grid-cols-12 items-center">
                {/* Left Text Block */}
                <div className="col-span-12 md:col-span-6 lg:col-span-6 z-40">
                    <h1 className="text-white font-[Outfit] text-[52px] font-semibold leading-[1.2]">
                        Lets Help Navigate Your Career & Expand Your Skillset
                    </h1>
                    <p className="text-white font-[Outfit] text-[20px] font-normal mt-6">
                        Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                    </p>
                    <div className="flex gap-4 pt-10">
                        <button className="bg-white text-[#024B53] border border-white rounded-[12px] px-6 py-2 font-medium text-base hover:bg-white/90 transition-colors">
                            Apply Now
                        </button>
                        <button className="bg-transparent text-white border border-white rounded-[12px] px-6 py-2 font-medium text-base hover:bg-white hover:text-[#024B53] transition-colors">
                            Explore More
                        </button>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6 lg:col-span-6 relative w-full h-[500px] mt-10 md:mt-0">
                    {/* Main Hero Image - slightly scaled up */}
                    <Image
                        src={banner_hero_image}
                        alt="banner_hero_image"
                        fill
                        className="object-contain z-20 relative scale-[1.75] transform origin-center"
                    />
                    {/* Background Image behind */}
                    <Image
                        src={banner_image}
                        alt="banner_image"
                        fill
                        className="absolute object-contain z-10 scale-[1.75]"
                    />
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
