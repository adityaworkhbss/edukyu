// components/Blog/BlogCard.js
import React from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";

const BlogCard = ({ item }) => {

    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
            });
        } catch {
            return dateString;
        }
    };

    const router = useRouter();

    const handleReadMore = (blogId) => {
        router.push(`/blog/page/${blogId}`, undefined, { shallow: true });
    };

    return (
        <div className="h-[339px] flex flex-col rounded-[12px] bg-white hover:bg-[rgba(179,207,210,0.5)] transition-all duration-200"
             onClick={handleReadMore(item.blogId)}
        >
            <div className="relative w-full h-[150px] mb-5 rounded-t-xl overflow-hidden">
                <img
                    src={`https://edukyu.com/public/${item.image}`}
                    alt={item.title || "Blog Image"}
                    className="w-full h-[150px] items-center rounded-t-xl object-cover"
                />

            </div>
            <div className="text-[#383837] px-3  font-outfit text-[16px] font-medium leading-normal line-clamp-3">
                {item.subtitle}
            </div>
            <div className="text-[#515150] px-3 pt-[13px] font-outfit text-[12px] font-normal leading-normal line-clamp-5">
                {item.metaDesc}
            </div>
            <div className="text-[#515150] px-3 pt-[37px] pb-4 font-outfit text-[12px] font-normal leading-normal">
                Published on {formatDate(item.timeStamp)} | 8 Min
            </div>
        </div>
    );
};

export default BlogCard;