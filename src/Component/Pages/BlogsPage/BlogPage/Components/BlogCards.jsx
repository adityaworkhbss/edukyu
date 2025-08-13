"use client";
import React, { useState, useEffect } from "react";
import { FeatureBlogCard } from "./ui/FeatureBlogCard";
import { BlogService } from "@/Services/blogService";

const BlogCards = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const itemsPerPage = 4;

    const fetchBlogs = async (page) => {
        setLoading(true);
        setError(null);
        try {
            const blogService = BlogService.getInstance();
            const data = await blogService.fetchBlogs(page, itemsPerPage);
            setBlogs(data.blogs);
        } catch (err) {
            console.error("Error fetching blogs:", err);
            setError("Failed to load blogs.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs(1);
    }, []);

    return (
        <div className="px-[20px]">
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                    Recent Blogs Featured
                </h1>
            </div>

            {loading ? (
                <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-4">Loading Blogs...</div>
                    <div className="spinner" />
                </div>
            ) : error ? (
                <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-4">Error Loading Blogs</div>
                    <p className="text-red-500">{error}</p>
                </div>
            ) : blogs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {blogs.map((blog) => (
                        <FeatureBlogCard
                            key={blog.blogId}
                            blogId={blog.blogId}
                            title={blog.title}
                            subtitle={blog.subtitle}
                            description={blog.description}
                            image={blog.image}
                            category={blog.category}
                            readMoreUrl={blog.readMoreUrl}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-600">No blogs found</p>
                </div>
            )}
        </div>
    );
};

export default BlogCards;
