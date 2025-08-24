import BlogCarousel from "@/Component/Pages/HomePage/HomePageDesktop/Components/ui/BlogCarousel";
import GridComponent from "@/GlobalComponent/GridComponent";
import React, {useEffect, useState} from "react";
import {BlogService} from "@/Services/blogService";
import {FeatureBlogCard} from "@/Component/Pages/BlogsPage/BlogPage/Components/ui/FeatureBlogCard";

const BlogSection = () => {

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
            console.log(data.blogs);
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
        <section className="py-16 px-[56px] bg-background">
            <div className="">
                <div className="mb-[64px]">

                    <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none pb-[16px]">
                        Our Blogs
                    </div>


                    <GridComponent gridStart={0} gridEnd={6}>
                        <div className="text-[#515150] font-[Outfit] text-[20px] font-normal leading-none">
                            Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                        </div>

                    </GridComponent>


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
                    <div className="">
                        {/*{blogs.map((blog) => (*/}
                        {/*    <BlogCarousel*/}
                        {/*        blog*/}
                        {/*    />*/}
                        {/*))}*/}
                        <BlogCarousel blogs={blogs} />
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-600">No blogs found</p>
                    </div>
                )}

                {/*<BlogCarousel/>*/}
            </div>
        </section>
    );
};

export default BlogSection;