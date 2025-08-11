import React from "react";
import Image from "next/image";
import collegeImg1 from "@/../public/Resources/Images/mainpage_cc_img1.jpg";
import collegeImg2 from "@/../public/Resources/Images/mainpage_cc_img2.jpg";
import logoImg from "@/../public/Resources/Images/collegeMunchLogo.png";
import GridComponent from "@/GlobalComponent/GridComponent"; // Replace with real path

const CollegeMunchBanner = () => {
    return (
        <div className="relative w-full inline-flex items-center rounded-[52px] bg-[#679EA440] px-[40px] py-[45px] overflow-hidden">
            {/* Left Section */}
            <div className="flex flex-col z-10 w-[2/3]">
                <div className="w-[189px] h-[72px] flex-shrink-0 rounded-[8px] inline-flex items-center justify-center">
                    <Image src={logoImg} alt="College Manch Logo" width={160} height={40} className="object-contain"/>
                </div>

                    <div className="text-[36px] font-semibold text-[#024B53] font-[Outfit]">
                        Want to know in details about colleges?
                    </div>

                    <button
                        className=" w-1/2 items-center justify-center py-[12px]
                       text-white text-[14px] font-medium font-[Outfit]
                       rounded-[12px] bg-[#024B53] hover:bg-[#00313f] transition mt-4"
                    >
                        Explore College Manch
                    </button>

            </div>

            {/* Right Side Images */}
            <div className="absolute right-[40px] flex gap-4 z-10">
                <Image
                    src={collegeImg1}
                    alt="College Image 1"
                    width={189}
                    height={300}
                    className="rounded-xl aspect-[2/2.5]"
                />
                <Image
                    src={collegeImg2}
                    alt="College Image 2"
                    width={189}
                    height={212}
                    className="rounded-xl "
                />
            </div>

        </div>
    );
};

export default CollegeMunchBanner;
