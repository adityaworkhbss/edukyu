"use client";

import { useEffect, useState } from "react";
import BlogContent from "@/Component/Pages/BlogsPage/BlogPage/Components/BlogContents";
import BlogRecommendations from "@/Component/Pages/BlogsPage/BlogPage/Components/BlogRecommendations";
import BlogCards from "@/Component/Pages/BlogsPage/BlogPage/Components/BlogCards";
import { BlogService } from "@/Services/blogService";
import BlogsByCategories from "@/Component/Pages/BlogsPage/BlogPage/Components/BlogsByCategories";

const BlogPage = ({ blogId }) => {
    const [data, setData] = useState({
        userid: "",
        category: "",
        descs: "",
        metatitle: "",
        imageurl: "",
        timestamp: "",
    });
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let progressTimer;

        const fetchData = async () => {
            setLoading(true);
            setProgress(20); // start bar

            // Fake progress animation
            progressTimer = setInterval(() => {
                setProgress((p) => (p < 90 ? p + 10 : p));
            }, 200);

            try {
                const blogData = await BlogService.getInstance().fetchFullBlogPage(blogId);
                setData(blogData);
                setProgress(100); // complete
            } catch (error) {
                console.error(error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                    clearInterval(progressTimer);
                    setProgress(0); // reset
                }, 300); // small delay for smooth finish
            }
        };

        fetchData();
        return () => clearInterval(progressTimer);
    }, [blogId]);

    if (loading) {
        return (
            <div className="relative w-full">
                {/* Progress bar */}
                <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
                    <div
                        className="h-full bg-blue-500 transition-all duration-200"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Skeleton loader */}
                <div className="flex flex-col items-center justify-center h-[80vh] space-y-4">
                    <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-full h-64 bg-gray-200 rounded animate-pulse"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-5 mb-5 space-y-8 bg-gray-50 md:px-[56px] md:my-[64px] md:space-y-10">
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3">
                    <section>
                        <BlogContent
                            html={data.descs}
                            userid={data.userid}
                            category={data.category}
                            metatitle={data.metatitle}
                            imageurl={data.imageurl}
                            timestamp={data.timestamp}
                        />
                    </section>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3 space-y-6">
                    <section>
                        <BlogRecommendations category={data.category} />
                    </section>
                    <section>
                        <BlogsByCategories />
                    </section>
                </div>
            </div>

            {/* More Blog Posts */}
            <div className="w-full">
                <section>
                    <BlogCards />
                </section>
            </div>
        </div>
    );
};

export default BlogPage;
