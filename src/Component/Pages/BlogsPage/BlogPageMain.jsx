import { useState } from "react";
import BlogPage from "./BlogPage/BlogPage";
import {BlogsMain} from "@/Component/Pages/BlogsPage/BlogsMain/BlogsMain";

const BlogPageMain = () => {


    return (
        <>
            <BlogsMain category="all" />
        </>
    );
};

export default BlogPageMain;
