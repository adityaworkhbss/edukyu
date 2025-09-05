import React, {useState} from "react";
import Image from "next/image";
import banner_hero_image from "@/../public/Resources/Images/banner_hero_image.png";
import banner_image from "@/../public/Resources/Images/banner_image.png";
import Form from "@/Component/Form/Form";

const HeroSectionMobile = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <section className="relative pt-[32px] mb-14 mt-[12px] px-[20px] text-left overflow-hidden">

                {/* Background SVG */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 360 498"
                    preserveAspectRatio="none"
                    className="absolute inset-0 z-10 w-full h-full"
                    fill="none"
                >
                    <path
                        d="M0 30C0 13.4314 13.4315 0 30 0H330C346.569 0 360 13.4315 360 30V392.545C360 406.326 350.612 418.334 337.238 421.659L37.238 496.242C18.3131 500.947 0 486.629 0 467.128V30Z"
                        fill="#024B53"
                    />
                </svg>

                <div className="text-white font-[Outfit] text-[28px] font-semibold leading-none relative z-10 ">
                    Let’s Help Navigate Your <br /> Career & Expand <br /> Your Skillset
                </div>

                <div className="text-white font-[Outfit] text-[14px] font-normal leading-none mt-3 relative z-10">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-[32px] z-10 relative">
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-white text-[#024B53] rounded-[12px] px-6 py-2 font-medium text-sm">
                        Apply Now
                    </button>
                    {/*<button className="border border-white text-white rounded-[12px] px-6 py-2 font-medium text-sm hover:bg-white hover:text-[#024B53] transition">*/}
                    {/*    Explore More*/}
                    {/*</button>*/}
                </div>

                {/* Images Layered */}
                <div className="relative w-full h-[250px] mt-10 overflow-hidden">
                    <Image
                        src={banner_image}
                        alt="City Background"
                        fill
                        className="absolute object-contain z-10 scale-[1.5]"
                    />
                    <Image
                        src={banner_hero_image}
                        alt="Students"
                        fill
                        className="relative object-contain z-20 scale-[1]"
                    />
                </div>
            </section>

            {showForm && <Form onClose={() => setShowForm(false)} />}
        </>
    );
};

export default HeroSectionMobile;
