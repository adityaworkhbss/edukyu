import React from "react";
import Image from "next/image";
import collegeImg1 from "@/../public/Resources/Images/mainpage_cc_img1.jpg";
import collegeImg2 from "@/../public/Resources/Images/mainpage_cc_img2.jpg";
import logoImg from "@/../public/Resources/Images/collegeMunchLogo.png";
import GridComponent from "@/GlobalComponent/GridComponent"; // Replace with real path

const CollegeMunchBanner = () => {
    return (
        <div className="group w-full inline-flex items-center gap-6 rounded-[52px] bg-[#679EA440] mt-8 px-[40px] py-[48px] overflow-hidden">
            {/* Left Section */}
            <div className="flex flex-col z-10 w-[50%]">
                <div className="w-[189px] h-[72px] flex-shrink-0 rounded-[8px] inline-flex items-center justify-center">
                    <Image src={logoImg} alt="College Manch Logo" width={160} height={40} className="object-contain"/>
                </div>

                    <div className="text-[36px] font-semibold text-[#024B53] font-[Outfit] w-[90%]">
                        Want to know in details about colleges?
                    </div>

               {/* <GridComponent gridStart={0} gridEnd={8}> */}
                    <div className="text-[#515150] font-[Outfit] text-[20px] font-normal pt-4 w-[90%]">
                        Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                    </div>
                {/* </GridComponent> */}





                <button
                    onClick={() => window.open("https://collegemanch.com/", "_blank")}

                    className=" w-1/2 items-center justify-center py-[12px] 
                       text-white text-[14px] font-medium font-[Outfit]
                       rounded-[12px] bg-[#9B9B9B] group-hover:bg-[#024B53] transition mt-6"
                >
                    Explore College Manch
                </button>

            </div>

            {/* Right Side Images */}
            <div className="flex gap-4 w-1/2 z-10 mt-[82px]">
                {/* <div
                    className="rounded-xl w-full h-auto object-cover"
                /> */}
                 <iframe style={{ borderRadius: "16px" }} width="427" height="247" src="https://www.youtube.com/embed/rSilj41d2ns?si=wq7p3xNezmIRcg8y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

        </div>
    );
};

export default CollegeMunchBanner;
