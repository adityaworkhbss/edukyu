// app/blog/[blogId]/page.jsx

"use client";
import BlogPage from "@/Component/Pages/BlogsPage/BlogPage/BlogPage";

export default function BlogDetailsPage({ params }) {
    const { blogId } = params;

    return <BlogPage blogId={Number(blogId)} />;
}
