import BlogPage from "@/Component/Pages/BlogsPage/BlogPage/BlogPage";
import { BlogsMain } from "@/Component/Pages/BlogsPage/BlogsMain/BlogsMain";

export default function BlogDetailsPage({ params }) {
    let { category } = params;

    console.log(" caterogu :::::::::: ", category);

    if (!category) {
        category = "all";
    }

    return <BlogsMain category={category} />;
}
