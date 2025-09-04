// src/components/BlogRecommendations.jsx
'use client';

import React, { useEffect, useState } from 'react';
import { BlogService } from "@/Services/blogService";
import {FeatureBlogCard} from "@/Component/Pages/BlogsPage/BlogPage/Components/ui/FeatureBlogCard";
import RecommendedBlogCard from "@/Component/Pages/BlogsPage/BlogPage/Components/ui/RecommendedBlogCard";

const BlogRecommendations = ({ category }) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const itemsPerPage = 3;

    const fetchCategoryBlogs = async (category) => {
        setLoading(true);
        setError(null);
        try {
            const blogService = BlogService.getInstance();
            const data = await blogService.fetchCategoryBlogs(1, itemsPerPage, category);

            setBlogs(data.blogs);
        } catch (err) {
            console.error("Error fetching blogs:", err);
            setError("Failed to load blogs.");
        } finally {
            setLoading(false);
        }
    };

    console.log(blogs.length);

    useEffect(() => {
        if (category) {
            fetchCategoryBlogs(category);
        }
    }, [category]);


    return (
        <section className="mt-10">
            <div className="mb-4">
                <img
                    src="https://edukyu.com/assets/img/cxp/blog/eligible-img.png"
                    alt="Category Banner"
                    className="w-full object-cover shadow-md rounded-[60px]"
                    loading="lazy"
                />
            </div>
            <div className="text-2xl pt-[46px] font-semibold mb-4">Blog Related to Category</div>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && blogs.length === 0 && <p>No blogs found for this category.</p>}
            <ul className="space-y-3">
                {blogs.slice(0, 3).map((blog, index) => {
                    return (
                        <RecommendedBlogCard
                            key={blog.blogId}
                            title={blog.title}
                            blogId={blog.blogId}
                            shortUrl={blog.shortUrl}
                            imgUrl={blog.image}
                        />
                    );
                })}
            </ul>

        </section>
    );
};

export default BlogRecommendations;
