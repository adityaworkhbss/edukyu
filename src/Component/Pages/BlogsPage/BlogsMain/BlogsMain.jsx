'use client';

import React, { useState, useEffect } from "react";
import { BlogCard } from "./Component/BlogCard";
import { BlogService } from "@/Services/blogService";
import BackButton from "@/GlobalComponent/BackButton";

export const BlogsMain = ( { category }) => {

    console.log("catergory ::::::::::: ", category);

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 8;

    const fetchBlogs = async (page) => {
        setLoading(true);
        setError(null);
        try {
            const blogService = BlogService.getInstance();
            const data = await blogService.fetchBlogs(page, itemsPerPage);
            setBlogs(data.blogs);
            setCurrentPage(data.page);
            setTotalPages(Math.ceil(data.total / data.limit));
        } catch (err) {
            console.error("Error fetching blogs:", err);
            setError("Failed to load blogs.");
        } finally {
            setLoading(false);
        }
    };

    const fetchCategoryBlogs = async (page, category) => {
        setLoading(true);
        setError(null);
        try {
            const blogService = BlogService.getInstance();
            const data = await blogService.fetchCategoryBlogs(page, itemsPerPage, category);
            setBlogs(data.blogs);
            setCurrentPage(data.page);
            setTotalPages(Math.ceil(data.total / data.limit));
        } catch (err) {
            console.error("Error fetching blogs:", err);
            setError("Failed to load blogs.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(category === 'all') {
            fetchBlogs(currentPage);
        } else {
            fetchCategoryBlogs(currentPage, category);
        }

    }, [currentPage, category]);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="py-16 px-6 sm:px-14">
            <div className="mb-6">
                <BackButton label="Back to previous" />
            </div>
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                    Blogs On The Go
                </h1>
                <p className="text-lg text-gray-600">
                    Stay updated with the latest trends in education
                </p>
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
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {blogs.map((blog, index) => (
                            <BlogCard
                                key={index}
                                blogId={blog.blogId}
                                title={blog.title}
                                subtitle={blog.subtitle}
                                description={blog.description}
                                image={blog.image}
                                shortUrl={blog.shortUrl}
                                category={blog.category}
                                readMoreUrl={blog.readMoreUrl}
                            />
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded border transition ${
                                    currentPage === 1
                                        ? "opacity-50 cursor-not-allowed"
                                        : "hover:bg-gray-100"
                                }`}
                            >
                                Previous
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`px-4 py-2 rounded border transition ${
                                        currentPage === page
                                            ? "bg-primary text-white"
                                            : "hover:bg-gray-100"
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded border transition ${
                                    currentPage === totalPages
                                        ? "opacity-50 cursor-not-allowed"
                                        : "hover:bg-gray-100"
                                }`}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-600">No blogs found</p>
                </div>
            )}
        </div>
    );
};
