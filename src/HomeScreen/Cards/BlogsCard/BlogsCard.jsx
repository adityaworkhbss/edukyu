import React from "react";


const BlogsCard = ({
                                 imgSrc,
                                 title,
                                 details,
                             }) => {
    return (
        <div className="w-full max-w-xs border-[#025E68] h-full min-w-[220px] min-h-[380px] border-[1px] rounded-xl shadow-md flex flex-col p-[20px] my-5">

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

                <h3 className="text-lg text-[18px] text-left font-semibold mb-3 leading-snug line-clamp-2">
                    {title}
                </h3>

                <div className="text-gray-700 text-[12px] space-y-3">
                    <div>
                        {details.length > 150 ? `${details.slice(0, 150)}...` : details}
                    </div>
                </div>

            </div>

            <div className="absolute pt-[340px] pl-[50px]">
                <button className="w-[145px] h-[45px] bg-teal-700 hover:bg-teal-800 text-white size-3 font-medium px-4 py-2">
                    View Program
                </button>
            </div>
        </div>


    );
};

export default BlogsCard;
