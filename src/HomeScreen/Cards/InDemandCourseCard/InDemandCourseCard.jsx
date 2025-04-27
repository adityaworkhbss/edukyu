import React from "react";
import { IoIosTime } from "react-icons/io";
import { IoSchoolSharp } from "react-icons/io5";
import { MdOutlineLaptopMac } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";

const InDemandCourseCard = ({
                                imgSrc,
                                title,
                                duration,
                                approved,
                                mode,
                                payment,
                            }) => {
    return (
        <div className="w-full max-w-xs border-[#025E68] h-full min-w-[210px] min-h-[420px] border-[1px] rounded-xl shadow-md flex flex-col p-[20px] my-5">

            <div className="w-[60px] h-[22px] text-[12px] fixed bg-[#025E68] mt-[10px] text-[#FFD23F] font-medium">
                AI & ML
            </div>

            {/* Top (image and details) */}
            <div className="flex-grow">
                <div className="w-full h-40 bg-gray-100 overflow-hidden mb-4">
                    {imgSrc ? (
                        <img
                            src={imgSrc}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">
                            Image Not Available
                        </div>
                    )}
                </div>

                <h3 className="text-lg text-left font-semibold text-teal-800 mb-3 min-h-[3.5rem] leading-snug">
                    {title}
                </h3>

                <div className="text-gray-700 text-sm space-y-3">
                    <div className="flex items-start gap-2">
                        <IoIosTime className="mt-0.5" />
                        <span>Duration: {duration}</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <IoSchoolSharp className="mt-0.5" />
                        <span>Approved: {approved}</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <MdOutlineLaptopMac className="mt-0.5" />
                        <span>Mode: {mode}</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <FaRegCreditCard className="mt-0.5" />
                        <span>Payment: {payment}</span>
                    </div>
                </div>
            </div>

            {/* Bottom (button) */}
            <div className="absolute pt-[380px] pl-[50px]">
                <button className="w-[145px] h-[45px] bg-teal-700 hover:bg-teal-800 text-white size-3 font-medium px-4 py-2">
                    View Program
                </button>
            </div>
        </div>


    );
};

export default InDemandCourseCard;
