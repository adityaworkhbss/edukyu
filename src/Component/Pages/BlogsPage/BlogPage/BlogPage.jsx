"use client";

import { useEffect, useState } from "react";
import BlogHeader from "@/Component/Pages/BlogsPage/BlogPage/Components/BlogHeader";
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
        title: "",
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

    // format date function
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

    // share logic
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    const shareText = data.metatitle;

    const handleShare = (platform) => {
        let url = "";
        switch (platform) {
            case "facebook":
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                )}`;
                break;
            case "twitter":
                url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    shareText
                )}&url=${encodeURIComponent(shareUrl)}`;
                break;
            case "linkedin":
                url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    shareUrl
                )}`;
                break;
        }
        window.open(url, "_blank", "width=600,height=400");
    };

    return (
        <div >
            {/*<div className="px-4 md:px-0">
          <BackButton label="Back to previous" />
      </div>*/}

            {/* Blog Header */}
            <BlogHeader
                imageurl={data.imageurl}
                metatitle={data.metatitle}
                title={data.title}
                authorName={data.userid}
                category={data.category}
                timestamp={data.timestamp}
                formatDate={formatDate}
                handleShare={handleShare}
            />

            <div className="px-[56px]">
                <div className="flex flex-col lg:flex-row col-span-12 gap-x-6 mt-12">
                    <div className="col-span-8">
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
                    <div className="col-end-4">
                        <section>
                            <BlogRecommendations category={data.category} />
                        </section>

                        <section>
                            <BlogsByCategories />
                        </section>
                    </div>
                </div>

                {/* Full Width Section Below - More Blog Posts */}
                <div className="w-full py-12">
                    <section>
                        <BlogCards />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
