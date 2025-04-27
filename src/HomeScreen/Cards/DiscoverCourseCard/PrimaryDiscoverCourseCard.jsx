import React from "react";

const PrimaryDiscoverCourseCard = ({
                                imgSrc,
                                title,
                                duration = "2 Years",
                            }) => {
    return (
        <div className="w-full max-w-xs min-w-[220px] min-h-[320px] border border-gray-300 rounded-2xl shadow-md flex flex-col overflow-hidden">
            {/* Tag for duration */}
            <div className="absolute mt-[20px] ml-[11px] bg-[#025E68] text-[#FFFFFF] text-xs font-semibold px-2 border-[#FFFFFF] border-2 py-1 z-10">
                {duration}
            </div>

            {/* Top image */}
            <div className="w-full h-40 overflow-hidden p-[12px] relative">
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

            {/* Title */}
            <div className="p-4 flex-grow flex items-center justify-center text-center">
                <h3 className="text-[18px] font-medium text-gray-800 leading-tight">
                    {title}
                </h3>
            </div>

            {/* Bottom Explore Button */}
            <div className="bg-teal-800 text-white text-[16px] text-sm font-medium text-center h-[45px] py-2 cursor-pointer hover:bg-teal-900 transition">
                Explore
            </div>
        </div>
    );
};

export default PrimaryDiscoverCourseCard;
