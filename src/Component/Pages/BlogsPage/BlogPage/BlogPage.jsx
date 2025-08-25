"use client";

import { useEffect, useState } from "react";
import BlogContent from "@/Component/Pages/BlogsPage/BlogPage/Components/BlogContents";
import BlogRecommendations from "@/Component/Pages/BlogsPage/BlogPage/Components/BlogRecommendations";
import BlogCards from "@/Component/Pages/BlogsPage/BlogPage/Components/BlogCards";
import { BlogService } from "@/Services/blogService";
import BlogsByCategories from "@/Component/Pages/BlogsPage/BlogPage/Components/BlogsByCategories";

const BlogPage = ({ blogId, onLoaded }) => {
    const [data, setData] = useState({
        userid: "",
        category: "",
        descs: "",
        metatitle: "",
        imageurl: "",
        timestamp: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            const blogData = await BlogService.getInstance().fetchFullBlogPage(blogId);
            setData(blogData);
            if (typeof onLoaded === 'function') {
                onLoaded();
            }
        };
        fetchData();
    }, [blogId, onLoaded]);

    return (
        <div className="px-[56px] py-[64px] space-y-10 bg-gray-50">
            <div className="flex flex-col lg:flex-row ">
                <div className="lg:w-2/3 pr-4">
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

                {/* Right Column - Sidebar */}
                <div className="lg:w-1/3 space-y-6">
                    <section>
                        <BlogRecommendations category={data.category} />
                    </section>

                    <section>
                        <BlogsByCategories />
                    </section>
                </div>
            </div>

            {/* Full Width Section Below - More Blog Posts */}
            <div className="w-full">
                <section>
                    <BlogCards />
                </section>
            </div>
        </div>
    );
};

export default BlogPage;