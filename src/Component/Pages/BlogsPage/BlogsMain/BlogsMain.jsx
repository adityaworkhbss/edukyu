import React, { useState } from "react";
import { BlogCard } from "./BlogCard";
import { Breadcrumb } from "./BreadCrumb";

const blogData = [
    {
        title: "Online MBA in Artificial Intelligence",
        subtitle: "2025 Career Guide",
        description:
            "The AI industry is expected to expand enormously, creating a demand for AI-aware business managers. Online courses in AI have experienced 50% year-to-year growth.",
        image:
            "https://edukyu.com/public/Best MBA colleges in india without CAT Feature Image  (2).jpg",
        category: "BLOG",
    },
    {
        title: "Why Choose an Online MSc in Mathematics?",
        subtitle: "Complete Guide 2025",
        description:
            "Online MSc in Mathematics is gaining popularity, especially among working professionals and students seeking flexible learning options. It offers Indian students the...",
        image:
            "https://edukyu.com/public/Best MBA colleges in india without CAT Feature Image  (2).jpg",
        category: "BLOG",
    },
    {
        title: "Best MBA Colleges in India Without CAT",
        subtitle: "Complete 2025 Guide",
        description:
            "Do you want to know the best MBA colleges in India without the CAT? Good news! Many top institutions provide MBA admission without a CAT score. XLRI Jamshedpur...",
        image:
            "https://edukyu.com/public/Best MBA colleges in india without CAT Feature Image  (2).jpg",
        category: "BLOG",
    },
    {
        title: "Top Online MSc in Data Science Programs",
        subtitle: "Industry Guide 2025",
        description:
            "Data Science has become one of the most sought-after fields in technology. Discover the best online MSc programs that can accelerate your career in this exciting domain.",
        image:
            "https://edukyu.com/public/Best MBA colleges in india without CAT Feature Image  (2).jpg",
        category: "BLOG",
    },
    {
        title: "Online B.Com for CA Students",
        subtitle: "Career Path 2025",
        description:
            "Pursuing B.Com alongside CA preparation provides a solid foundation. Learn about the best online B.Com programs designed specifically for aspiring chartered accountants.",
        image:
            "https://edukyu.com/public/Best MBA colleges in india without CAT Feature Image  (2).jpg",
        category: "BLOG",
    },
    {
        title: "Top BBA Specializations in 2025",
        subtitle: "Complete Career Guide",
        description:
            "Choose the right BBA specialization for your career goals. Explore emerging specializations in digital marketing, fintech, and international business management.",
        image:
            "https://edukyu.com/public/Best MBA colleges in india without CAT Feature Image  (2).jpg",
        category: "BLOG",
    },
    {
        title: "Online MBA in Artificial Intelligence",
        subtitle: "2025 Career Guide",
        description:
            "The AI industry is expected to expand enormously, creating a demand for AI-aware business managers. Online courses in AI have experienced 50% year-to-year growth.",
        image:
            "https://edukyu.com/public/Best MBA colleges in india without CAT Feature Image  (2).jpg",
        category: "BLOG",
    },
    {
        title: "Why Choose an Online MSc in Mathematics?",
        subtitle: "Complete Guide 2025",
        description:
            "Online MSc in Mathematics is gaining popularity, especially among working professionals and students seeking flexible learning options. It offers Indian students the...",
        image:
            "https://edukyu.com/public/Best MBA colleges in india without CAT Feature Image  (2).jpg",
        category: "BLOG",
    },
    {
        title: "Best MBA Colleges in India Without CAT",
        subtitle: "Complete 2025 Guide",
        description:
            "Do you want to know the best MBA colleges in India without the CAT? Good news! Many top institutions provide MBA admission without a CAT score. XLRI Jamshedpur...",
        image:
            "https://edukyu.com/public/Best MBA colleges in india without CAT Feature Image  (2).jpg",
        category: "BLOG",
    },
    {
        title: "Top Online MSc in Data Science Programs",
        subtitle: "Industry Guide 2025",
        description:
            "Data Science has become one of the most sought-after fields in technology. Discover the best online MSc programs that can accelerate your career in this exciting domain.",
        image:
            "https://edukyu.com/public/Best MBA colleges in india without CAT Feature Image  (2).jpg",
        category: "BLOG",
    },
    {
        title: "Online B.Com for CA Students",
        subtitle: "Career Path 2025",
        description:
            "Pursuing B.Com alongside CA preparation provides a solid foundation. Learn about the best online B.Com programs designed specifically for aspiring chartered accountants.",
        image:
            "https://edukyu.com/public/Best MBA colleges in india without CAT Feature Image  (2).jpg",
        category: "BLOG",
    },
    {
        title: "Top BBA Specializations in 2025",
        subtitle: "Complete Career Guide",
        description:
            "Choose the right BBA specialization for your career goals. Explore emerging specializations in digital marketing, fintech, and international business management.",
        image:
            "https://edukyu.com/public/Best MBA colleges in india without CAT Feature Image  (2).jpg",
        category: "BLOG",
    },
];

export const BlogsMain = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Blogs" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(blogData.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogs = blogData.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="py-[64px]">

            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-primary mb-4">Blogs On The Go</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-[56px]">
                {currentBlogs.map((blog, index) => (
                    <BlogCard
                        key={index}
                        title={blog.title}
                        subtitle={blog.subtitle}
                        description={blog.description}
                        image={blog.image}
                        category={blog.category}
                    />
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-12">
                    <button
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded border ${
                            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
                        }`}
                    >
                        Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-4 py-2 rounded border ${
                                currentPage === page
                                    ? "bg-primary text-white"
                                    : "hover:bg-gray-100"
                            }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() =>
                            currentPage < totalPages && handlePageChange(currentPage + 1)
                        }
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded border ${
                            currentPage === totalPages
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};
