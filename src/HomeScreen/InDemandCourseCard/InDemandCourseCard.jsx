import React from "react";

const InDemandCourseCard = () => {
    return (
        <div className="w-[240px] h-[422px] border border-purple-300 rounded-lg overflow-hidden shadow-md">
            {/* Image Section */}
            <div className="relative">
                <img
                    // src=
                    alt="Course"
                    className="w-full h-40 object-cover"
                />
                <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold text-white px-2 py-1 rounded">
          AI & ML
        </span>
            </div>

            {/* Content */}
            <div className="p-4 text-sm text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Human Resource Management
                </h3>

                <div className="text-gray-600 space-y-2">
                    <div className="flex items-center gap-2">
                        <span>⏱️</span>
                        <span>Duration:</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span>✅</span>
                        <span>Approved:</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span>💻</span>
                        <span>Mode:</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span>💳</span>
                        <span>Payment:</span>
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
