"use client";
import BlogPage from "@/Component/Pages/BlogsPage/BlogPage/BlogPage";
import TopNav from "@/Component/Navbar/TopNav";
import Footer from "@/Component/Footer/Footer";

export default function BlogDetailsPage({ params }) {
    const { blogId } = params;

    return (
        <>
            <TopNav />
            <BlogPage blogId={Number(blogId)} />
            <Footer />
        </>
    );
}
