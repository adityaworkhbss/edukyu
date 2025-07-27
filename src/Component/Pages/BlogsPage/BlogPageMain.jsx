import { useState } from "react";
import BlogPage from "./BlogPage/BlogPage";
import {BlogsMain} from "@/Component/Pages/BlogsPage/BlogsMain/BlogsMain";

const BlogPageMain = () => {
    const [showBlogPage, setShowBlogPage] = useState(false);
    const [blogId, setBlogId] = useState(null);

    const handleOpenBlog = (id) => {
        setBlogId(id);
        console.log(id);
        setShowBlogPage(true);
    };

    return (
        <>
            {showBlogPage && blogId !== null ? (
                <BlogPage blogId={blogId} />
            ) : (
                <BlogsMain onReadMore={handleOpenBlog} />
            )}
        </>
    );
};

export default BlogPageMain;
