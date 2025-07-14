// components/Blog/BlogComponentDesktop.js
"use client";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import BlogCard from "./BlogCard";

const BlogComponentDesktop = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const blogItems = Array(4).fill({
        title: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum",
        description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum",
        date: "January 1, 2024",
        readTime: "08 min read",
    });

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
    };

    return (
        <div className="px-14 bg-white rounded-b-xl pt-[44px] pb-[24px]">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch} />

            <div className="pt-16">
                <div className="text-[22px] pb-6 text-left font-medium text-[#383837] font-outfit">
                    Our top blogs, fresh out of minds...
                </div>
                <div className="inline-flex gap-[24px]">
                    {blogItems.map((item, index) => (
                        <BlogCard key={index} item={item} />
                    ))}
                </div>
                <div className="flex justify-end mt-10">
                    <button className="inline-flex items-center justify-center gap-[10px] px-[16px] py-[12px] bg-[#024B53] text-white text-[14px] font-outfit font-medium leading-normal rounded-[8px]">
                        Check all Blogs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogComponentDesktop;
