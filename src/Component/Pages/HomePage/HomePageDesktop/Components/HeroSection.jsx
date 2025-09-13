import React, { useState, useEffect } from "react";
import Image from "next/image";
import Form from "@/Component/Form/Form";
import Slider from "./ui/Slider";

import banner_hero_image from "@/../public/Resources/Images/banner_hero_image.png";
import banner_image from "@/../public/Resources/Images/banner_image.png";

const HeroSection = () => {
    const [showForm, setShowForm] = useState(false);
    const [showSlider, setShowSlider] = useState(false);

    useEffect(() => {
        // Change showSlider to true after 5 seconds
        const timer = setTimeout(() => {
            setShowSlider(true);
        }, 5000);

        return () => clearTimeout(timer); // cleanup on unmount
    }, []);

    return (
        <>
            <section className="relative pl-1 overflow-hidden">
                {/* Background SVG */}
                <svg
                    className="absolute inset-0 z-0 w-full pb-[64px] h-[700px] overflow-hidden"
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
                <div className="relative z-10 grid grid-cols-12 items-center px-12 gap-x-6">
                    {/* Left Text Block */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-6 z-40 -pr-3 grid grid-cols-12">
                        {showSlider ? (
                            <>
                                <h1 className="col-span-12 text-white font-[Outfit] text-[52px] font-semibold leading-[1.2]">
                                    Lets Help Navigate Your Career & Expand Your Skillset testing
                                </h1>

                                <div className="col-span-12 md:col-span-10 lg:col-span-10">
                                    <p className="text-white font-[Outfit] text-[20px] font-normal mt-6">
                                        Unlimited access to world class courses, hands-on projects, and
                                        job-ready certificate programs. testing
                                    </p>
                                </div>

                                <div className="col-span-12 flex gap-4 pt-12">
                                    <button
                                        onClick={() => setShowForm(true)}
                                        className="bg-white text-[#024B53] border border-white rounded-[12px] px-6 py-2 font-medium text-base hover:bg-white/90 transition-colors"
                                    >
                                        Apply Now testing
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h1 className="col-span-12 text-white font-[Outfit] text-[52px] font-semibold leading-[1.2]">
                                    Lets Help Navigate Your Career & Expand Your Skillset
                                </h1>

                                <div className="col-span-12 md:col-span-10 lg:col-span-10">
                                    <p className="text-white font-[Outfit] text-[20px] font-normal mt-6">
                                        Unlimited access to world class courses, hands-on projects, and
                                        job-ready certificate programs.
                                    </p>
                                </div>

                                <div className="col-span-12 flex gap-4 pt-12">
                                    <button
                                        onClick={() => setShowForm(true)}
                                        className="bg-white text-[#024B53] border border-white rounded-[12px] px-6 py-2 font-medium text-base hover:bg-white/90 transition-colors"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </>
                        )}
                    </div>


                    {/* Right Image Block: slider spanning grid 7..12 */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-6 relative w-full mt-40">
                        {showSlider ? (
                            <Slider />
                        ) : (
                            <div className="col-span-12 md:col-span-6 lg:col-span-6 relative w-full h-[500px] ">
                                <Image
                                    src={banner_hero_image}
                                    alt="banner_hero_image"
                                    fill
                                    className="object-contain z-20 -ml-28 mt-10 relative scale-[1] transform origin-center"
                                />
                                {/* Background Image */}
                                <Image
                                    src={banner_image.src}
                                    alt="banner_image"
                                    fill
                                    className="absolute object-contain -ml-30 w-full z-10 mt-8 scale-[2]"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {showForm && <Form onClose={() => setShowForm(false)} />}
        </>
    );
};

export default HeroSection;
