// components/Blog/BlogComponentMobile.js
"use client";
import React, {useEffect, useState} from "react";
import SearchBar from "./SearchBar";
import {useRouter} from "next/navigation";
import {BlogService} from "@/Services/blogService";

const BlogComponentMobile = ({ onClose }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [blogs, setBlogs] = useState([]);

    const router = useRouter();

    const handleReadMore = (blogId) => {
        router.push(`/blog/page/${blogId}`, undefined, { shallow: true });
    };

    // const blogItems = Array(4).fill({
    //     title: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum",
    //     description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum",
    //     date: "January 1, 2024",
    //     readTime: "08 min read",
    // });

    const fetchTopNavBlogs = async () => {
        try {
            const blogService = BlogService.getInstance();
            const data = await blogService.fetchTopNavBlogs();

            console.log("data :::: " + data)

            setBlogs(data.blogs);
        } catch (err) {
            console.error("Error fetching blogs:", err);
        }
    };

    useEffect(() => {
        fetchTopNavBlogs();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
    };

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


    return (
        <div className="fixed h-full top-0 left-0 w-full bg-white shadow-lg z-50 flex flex-col overflow-y-auto">
            <div className="flex items-center h-[58px] px-5 pl-[20px] shrink-0">
                <div onClick={onClose} className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#2B2B2A" />
                    </svg>
                </div>
                <div className="flex flex-col w-full px-4 pb-4">
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch} />
                </div>
            </div>

            <div className="text-[22px] pb-6 text-left px-5 pt-5 font-medium text-[#383837] font-outfit leading-none">
                Our top blogs, fresh out of minds...
            </div>

            <div className="flex flex-col pt-6 gap-5 px-5">
                {blogs.map((item, index) => (
                    <div
                        key={index}
                        className="w-full h-[339px] rounded-[12px] border border-[#CDCDCD] bg-[rgba(255,255,255,0.80)] hover:bg-[rgba(179,207,210,0.5)] transition-all duration-200 flex flex-col justify-between"
                        onClick={handleReadMore(item.blogId)}
                    >

                        <img
                            src={`https://edukyu.com/public/${item.image}`}
                            alt={item.title || "Blog Image"}
                            className="w-full h-[150px] items-center rounded-t-xl object-cover"
                        />

                        <div className="text-[#383837] px-5 pt-5 font-outfit text-[16px] font-medium mb-2 leading-normal line-clamp-3">
                            {item.subtitle}
                        </div>
                        <div className="text-[#515150] px-5 font-outfit text-[12px] pt-3 font-normal leading-normal mb-4 line-clamp-5">
                            {item.metaDesc}
                        </div>
                        <div className="text-[#515150] px-5 text-[12px] pb-4 font-outfit pt-6 font-normal">
                            Published on {formatDate(item.timeStamp)} | 8 Min
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center py-6 px-5">
                <button className="inline-flex w-full items-center justify-center gap-[10px] px-[16px] py-[12px] bg-[#024B53] text-white text-[14px] font-outfit font-medium leading-normal rounded-[8px]">
                    Check all Blogs
                </button>
            </div>
        </div>
    );
};

export default BlogComponentMobile;
