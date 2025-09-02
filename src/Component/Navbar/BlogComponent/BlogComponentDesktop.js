// components/Blog/BlogComponentDesktop.js
"use client";
import React, {useEffect, useState} from "react";
import SearchBar from "./SearchBar";
import BlogCard from "./BlogCard";
import {BlogService} from "@/Services/blogService";
import {useRouter} from "next/navigation";
import Layout from "@/GlobalComponent/Layout";
import {usePageContext} from "@/GlobalComponent/PageContext";

const BlogComponentDesktop = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [blogs, setBlogs] = useState([]);
    const [searchMetaMap, setSearchMetaMap] = useState(new Map());
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const { setCurrentPage } = usePageContext();

    const router = useRouter();

    const fetchTopNavBlogs = async () => {
        try {
            const blogService = BlogService.getInstance();
            const data = await blogService.fetchTopNavBlogs();
            const searchData = await blogService.fetchBlogsSearchKeys();

            setBlogs(data.blogs);

            const newMap = new Map();

            searchData.blogs.forEach((blog) => {
                if (blog.metaKey && blog.subtitle && blog.blogId) {
                    newMap.set(blog.metaKey, {
                        title: blog.subtitle,
                        id: blog.blogId,
                        shortUrl: blog.shortUrl,
                    });
                }
            });

            setSearchMetaMap(newMap);
            console.log("Meta Map:", searchMetaMap);
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
        // You can navigate or filter here based on searchQuery
    };

    // const handleInputChange = (e) => {
    //     const value = e.target.value;
    //     setSearchQuery(value);
    //
    //     // Filter map values for suggestions
    //     const suggestions = Array.from(searchMetaMap.entries())
    //         .filter(([key, title]) =>
    //             title.toLowerCase().includes(value)
    //         )
    //         .map(([key, title]) => ({ key, title }));
    //
    //     setFilteredSuggestions(suggestions);
    // };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);

        const suggestions = Array.from(searchMetaMap.entries())
            .filter(([_, val]) => {
                const match = val.title.toLowerCase().includes(value.toLowerCase());
                return match;
            })
            .map(([key, val]) => {
                return { key, title: val.title, id: val.id, shortUrl: val.shortUrl };
            });

        setFilteredSuggestions(suggestions);
    };


    const handleSuggestionClick = (id) => {
        setFilteredSuggestions([]);
        router.push(`/blog/${id}`, undefined, { shallow: true });

    };

    const handleCheckAllBlogs = () => {

    }

    return (
        <div className="px-14 bg-white rounded-b-xl pt-[44px] pb-[24px]">
            <div className="relative ">
                <form
                    onSubmit={handleSearch}
                    className="flex items-center justify-between border-b border-gray-300 w-full"
                >
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleInputChange}
                        placeholder="Search blog topics..."
                        className="w-full px-4 py-3 outline-none"
                    />

                    <button type="submit" className="h-8 w-8 rounded bg-[#024B53] white pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_43_3437)">
                                <path d="M10.3333 9.33333H9.80667L9.62 9.15333C10.2733 8.39333 10.6667 7.40667 10.6667 6.33333C10.6667 3.94 8.72667 2 6.33333 2C3.94 2 2 3.94 2 6.33333C2 8.72667 3.94 10.6667 6.33333 10.6667C7.40667 10.6667 8.39333 10.2733 9.15333 9.62L9.33333 9.80667V10.3333L12.6667 13.66L13.66 12.6667L10.3333 9.33333ZM6.33333 9.33333C4.67333 9.33333 3.33333 7.99333 3.33333 6.33333C3.33333 4.67333 4.67333 3.33333 6.33333 3.33333C7.99333 3.33333 9.33333 4.67333 9.33333 6.33333C9.33333 7.99333 7.99333 9.33333 6.33333 9.33333Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_43_3437">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </form>


                {searchQuery.length > 0 && filteredSuggestions.length > 0 && (
                    <ul className="absolute z-10 w-full bg-white shadow-lg rounded-lg mt-1 max-h-60 overflow-y-auto">
                        {filteredSuggestions.map((item, idx) => (
                            <li
                                key={idx}
                                onClick={() => handleSuggestionClick(item.shortUrl)}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="pt-16">
                <div className="text-[22px] pb-6 text-left font-medium text-[#383837] font-outfit">
                    Our top blogs, fresh out of minds...
                </div>
                <div className="inline-flex gap-[24px]">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                        {blogs.map((item, index) => (
                            <BlogCard key={index} item={item} />
                        ))}
                    </div>


                </div>
                <div className="flex justify-end mt-10">
                    <button className="inline-flex items-center justify-center gap-[10px] px-[16px] py-[12px] bg-[#024B53] text-white text-[14px] font-outfit font-medium leading-normal rounded-[8px]"
                            onClick={() => setCurrentPage('blog')}
                    >
                        Check all Blogs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogComponentDesktop;
