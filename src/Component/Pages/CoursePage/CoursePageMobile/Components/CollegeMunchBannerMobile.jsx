import React from "react";
import Image from "next/image";
import collegeImg1 from "@/../public/Resources/Images/mainpage_cc_img1.jpg";
import collegeImg2 from "@/../public/Resources/Images/mainpage_cc_img2.jpg";
import logoImg from "@/../public/Resources/Images/collegeMunchLogo.png";

const CollegeMunchBanner = () => {
    return (
        <div className="relative w-full rounded-[32px] bg-[rgba(103,158,164,0.25)] px-5 my-8 pb-6 flex flex-col ">
            {/* Logo */}
            <div className="mb-[-5]">
                <Image
                    src={logoImg}
                    alt="College Manch Logo"
                    width={160}
                    height={40}
                    className="object-contain"
                />
            </div>

            {/* Title */}
            <h2 className="text-center text-[#024B53] font-[Outfit] text-[28px] font-semibold mb-3">
                Want to know in detail about colleges?
            </h2>

            {/* Button */}
            <button
                onClick={() => window.open("https://collegemanch.com/", "_blank")}
                className="rounded-[12px] bg-[#024B53] text-white font-[Outfit] text-[14px] font-medium px-4 py-3 mb-6 hover:bg-[#00313f] transition"
            >
                Explore College Manch
            </button>

            {/* Images */}
            <div className="w-full rounded-[12px] h-[171px] bg-gray-600">

            </div>
        </div>
    );
};

export default CollegeMunchBanner;
