import React from "react";
import { FaCoins } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";

export default function UniversityCard() {
    return (
        <div className="w-[240px] h-[440px] bg-white border border-[#025E68] rounded-2xl shadow-md relative font-sans overflow-hidden">
            {/* University Image */}
            <div className="w-full p-[10px] h-[144px] relative">
                <img
                    src="https://edukyu.com/new-ed/assets/cxp-assets/imgs/collage/vivekanand.jpg"
                    alt="Amity University"
                    className= "w-full h-full object-cover transition-all duration-300 group-hover:rounded-t-2xl"
                />
                {/* Logo overlay */}
                <div className="absolute top-4 right-2 w-[73px] h-[35px] bg-white shadow-sm flex justify-center">
                    <img src="https://edukyu.com//new-ed/assets/cxp-assets/imgs/collage/logo/amity-logo.png" alt="Logo"/>
                </div>
            </div>

            <div className="px-3 text-left pt-1">
                {/* Since */}
                <p className="text-[8px] text-[#333] mt-1">Since 2005</p>

                {/* Title */}
                <h3 className="text-[16px] font-semibold text-[#333] mt-1">
                    Amity University
                </h3>

                {/* Detail Items */}
                <div className="mt-3 space-y-3 text-[#424242] text-[12px]">
                    <div className="flex items-start gap-2">
                        <FaCoins className="w-[14px] h-[14px] mt-[2px]" />
                        {/*<FaCoins />*/}
                        <span>Course Offered: Online Masters/ Bachelors</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <IoSchoolSharp  className="w-[14px] h-[14px] mt-[2px]" />
                        <span>Accreditation: UGC-entitled degree programme</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <FaChartLine className="w-[14px] h-[14px] mt-[2px]" />
                        <span>Ranking: NIRF 35, A+ grade NAAC accredited</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <FaCreditCard className="w-[14px] h-[14px] mt-[2px]" />
                        <span>Fee Starting at Rs 7,458/ Month</span>
                    </div>
                </div>
            </div>

            {/* Know More Button */}
            <div className="absolute bottom-0 w-full bg-[#D9D7D7] py-3 text-center rounded-b-2xl">
                <button className="text-[#025E68] text-[12px] font-semibold">
                    Know More
                </button>
            </div>
        </div>
    );
}
