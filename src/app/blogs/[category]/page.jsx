// app/blog/[blogId]/page.jsx

"use client";
import BlogPage from "@/Component/Pages/BlogsPage/BlogPage/BlogPage";
import {BlogsMain} from "@/Component/Pages/BlogsPage/BlogsMain/BlogsMain";

export default function BlogDetailsPage({ params }) {
    const { category } = params;

    return <BlogsMain category={category} />;
}
