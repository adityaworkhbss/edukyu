"use client";
import {useRouter} from "next/navigation";
import React from "react";

const RecommendedBlogCard = ({ title, blogId, imgUrl }) => {

    const router = useRouter();

    const handleReadMore = () => {
        router.push(`/blog/page/${blogId}`, undefined, { shallow: true });
    };

    const handleImageError = (e) => {
        e.target.src = "https://edukyu.com/public/Blogs/eee.jpg";
    };

    return (
        <div className="overflow-hidden shadow-lg bg-white">
            {/* Image */}
            <img
                src={`https://edukyu.com/public/${imgUrl}`}
                alt={title}
                className="w-full object-cover"
                onError={handleImageError}
                loading="lazy"
            />

            {/* Title */}
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 leading-tight">
                    {title}
                </h2>
            </div>

            <button
                onClick={handleReadMore}
                className="text-primary font-medium p-4 text-sm hover:underline mt-auto"
            >
                Read More
            </button>
        </div>
    );
};

export default RecommendedBlogCard;
