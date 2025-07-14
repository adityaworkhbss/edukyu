// components/Blog/BlogCard.js
import React from "react";

const BlogCard = ({ item }) => {
    return (
        <div className="h-[339px] text-left flex flex-col justify-between rounded-[12px] bg-white hover:bg-[rgba(179,207,210,0.5)] transition-all duration-200">
            <div className="w-full h-[150px] rounded-t-xl bg-gray-200" />
            <div className="text-[#383837] px-3 pt-5 font-outfit text-[16px] font-medium leading-normal line-clamp-2">
                {item.title}
            </div>
            <div className="text-[#515150] px-3 pt-[13px] font-outfit text-[12px] font-normal leading-normal line-clamp-4">
                {item.description}
            </div>
            <div className="text-[#515150] px-3 pt-[37px] pb-4 font-outfit text-[12px] font-normal leading-normal">
                Published on {item.date} | {item.readTime}
            </div>
        </div>
    );
};

export default BlogCard;