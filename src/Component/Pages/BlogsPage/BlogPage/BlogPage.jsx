"use client";

import { useEffect, useState } from "react";
import BlogContent from "@/Component/Pages/BlogsPage/BlogPage/Components/BlogContents";
import BlogRecommendations from "@/Component/Pages/BlogsPage/BlogPage/Components/BlogRecommendations";
import BlogCards from "@/Component/Pages/BlogsPage/BlogPage/Components/BlogCards";
import { BlogService } from "@/Services/blogService";
import BlogsByCategories from "@/Component/Pages/BlogsPage/BlogPage/Components/BlogsByCategories";
import BackButton from "@/GlobalComponent/BackButton";

const BlogPage = ({ blogId }) => {
    const [data, setData] = useState({
        userid: "",
        category: "",
        descs: "",
        metatitle: "",
        shortUrl: "",
        imageurl: "",
        timestamp: "",
    });


    useEffect(() => {
        const fetchData = async () => {
            const blogData = await BlogService.getInstance().fetchFullBlogPage(blogId);
            setData(blogData);
        };
        fetchData();
    }, [blogId]);

    return (
        <div className=" mt-5 mb-5 space-y-8 bg-gray-50 px-[56px]">
            <div className="px-4 md:px-0">
                <BackButton label="Back to previous" />
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3 pr-4 pl-4">
                    <section>
                        <BlogContent
                            html={data.descs}
                            userid={data.userid}
                            category={data.category}
                            metatitle={data.metatitle}
                            imageurl={data.imageurl}
                            shorturl={data.shorturl}
                            timestamp={data.timestamp}
                            shortUrl={data.shortUrl}
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