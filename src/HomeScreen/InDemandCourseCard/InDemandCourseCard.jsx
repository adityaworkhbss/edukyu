import React from "react";

const InDemandCourseCard = ({
                                imgSrc,
                                tag = "AI & ML",
                                title,
                                duration,
                                approved,
                                mode,
                                payment
                            }) => {
    return (
        <div className="w-[240px] h-[422px] border border-purple-300 rounded-lg overflow-hidden shadow-md">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={imgSrc}
                    alt={title}
                    className="w-full h-40 object-cover"
                />
                <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold text-white px-2 py-1 rounded">
          {tag}
        </span>
            </div>

            {/* Content */}
            <div className="p-4 text-sm text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {title}
                </h3>

                <div className="text-gray-600 space-y-2">
                    <div className="flex items-center gap-2">
                        <span>⏱️</span>
                        <span>Duration: {duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span>✅</span>
                        <span>Approved: {approved}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span>💻</span>
                        <span>Mode: {mode}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span>💳</span>
                        <span>Payment: {payment}</span>
                    </div>
                </div>
            </div>

            {/* Button */}
            <div className="p-4 pt-0">
                <button className="w-full bg-teal-700 hover:bg-teal-800 text-white py-2 rounded">
                    View Program
                </button>
            </div>
        </div>
    );
};

export default InDemandCourseCard;
