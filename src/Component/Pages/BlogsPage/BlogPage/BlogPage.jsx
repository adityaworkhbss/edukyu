"use client";

import { useEffect, useState } from "react";
import BlogContent from "@/Component/Pages/BlogsPage/BlogPage/Components/BlogContents";
import BlogRecommendations from "@/Component/Pages/BlogsPage/BlogPage/Components/BlogRecommendations";
import BlogKeywords from "@/Component/Pages/BlogsPage/BlogPage/Components/BlogKeywords";
import BlogCards from "@/Component/Pages/BlogsPage/BlogPage/Components/BlogCards";
import { BlogService } from "@/Services/blogService";

const BlogPage = ({ blogId }) => {
    const [data, setData] = useState({
        content: "",
        recommendations: "",
        keywords: "",
        cards: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            const blogData = await BlogService.getInstance().fetchFullBlogPage(blogId);
            setData(blogData);
        };
        fetchData();
    }, [blogId]);

    return (
        <div className="px-6 md:px-20 py-10 space-y-10 bg-gray-50">
            <section>
                <h1 className="text-2xl font-bold mb-4">Blog Content</h1>
                <BlogContent html={data.content} />
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">Recommended Reads</h2>
                <BlogRecommendations html={data.recommendations} />
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">Keywords</h2>
                <BlogKeywords html={data.keywords} />
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-3">More Blog Posts</h2>
                <BlogCards blogs={data.cards} />
            </section>
        </div>
    );
};

export default BlogPage;
