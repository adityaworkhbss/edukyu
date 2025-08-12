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
                        id: blog.blogId
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
            .filter(([_, val]) =>
                val.title.toLowerCase().includes(value.toLowerCase())
            )
            .map(([key, val]) => ({ key, title: val.title, id: val.id }));

        setFilteredSuggestions(suggestions);
    };


    const handleSuggestionClick = (id) => {
        setFilteredSuggestions([]);
        router.push(`/blog/page/${id}`, undefined, { shallow: true });

    };

    const handleCheckAllBlogs = () => {

    }

    return (
        <div className="px-14 bg-white rounded-b-xl pt-[44px] pb-[24px]">
            <div className="relative">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleInputChange}
                        placeholder="Search blog topics..."
                        className="w-full px-4 py-3 border-b border-gray-300 "
                    />
                </form>

                {searchQuery.length > 0 && filteredSuggestions.length > 0 && (
                    <ul className="absolute z-10 w-full bg-white shadow-lg rounded-lg mt-1 max-h-60 overflow-y-auto">
                        {filteredSuggestions.map((item, idx) => (
                            <li
                                key={idx}
                                onClick={() => handleSuggestionClick(item.id)}
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
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
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
