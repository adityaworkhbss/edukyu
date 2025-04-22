// import React from "react";
//
// const ProgramCard = () => {
//     return (
//         <div className="w-[240px] h-[422px] bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
//             <div>
//                 <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-semibold px-2 py-1 rounded w-fit mb-2">
//                     AI & ML
//                 </div>
//
//                 <img
//                     src="/path/to/image.png" // Replace with actual image path
//                     alt="Woman on laptop"
//                     className="w-full h-36 object-cover rounded-md mb-4"
//                 />
//
//                 <h2 className="text-md font-semibold text-gray-800 mb-3">
//                     Human Resource Management
//                 </h2>
//
//                 <ul className="text-sm text-gray-600 space-y-2">
//                     <li>
//                         <span role="img" aria-label="duration">⏰</span> Duration: 2 year | 4 semester
//                     </li>
//                     <li>
//                         <span role="img" aria-label="approved">✅</span> Approved: UGC-entitled degree programme
//                     </li>
//                     <li>
//                         <span role="img" aria-label="mode">💻</span> Mode: Online (Live/Recorded Lectures)
//                     </li>
//                     <li>
//                         <span role="img" aria-label="payment">💳</span> Payment: EMI options available
//                     </li>
//                 </ul>
//             </div>
//
//             <button className="mt-4 bg-teal-600 text-white text-sm font-medium py-2 rounded-md hover:bg-teal-700 transition-all">
//                 View Program
//             </button>
//         </div>
//     );
// };
//
// export default ProgramCard;


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
