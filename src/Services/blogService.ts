const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export class BlogService {
    private static instance: BlogService;

    public static getInstance(): BlogService {
        if (!BlogService.instance) {
            BlogService.instance = new BlogService();
        }
        return BlogService.instance;
    }

    async fetchBlogs(page = 1, limit = 8) {
        const response = await fetch(`${API_BASE_URL}/api/blog?page=${page}&limit=${limit}/`);
        if (!response.ok) {
            throw new Error("Failed to fetch blogs");
        }
        return await response.json();
    }

    async fetchFullBlogPage(blogId: number) {
        console.log(`Fetching blog page ${blogId}`);
        const response = await fetch(`${API_BASE_URL}/api/blogpage?blogId=${blogId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch blog detail");
        }
        const blog = await response.json();
        return {
            userid: blog.userid,
            category: blog.category,
            descs: blog.descs,
            metatitle: blog.metatitle,
            imageurl: blog.imageurl,
            timestamp: blog.timestamp,
        };
    }

    /**
     * Fetch blogs by category
     * @param page - Current page number
     * @param limit - Number of blogs per page
     * @param category - Category name (e.g. "Online MBA", "Business")
     */
    async fetchCategoryBlogs(page = 1, limit = 8, category: string) {
        const encodedCategory = encodeURIComponent(category); // handle spaces like "Online MBA"
        const url = `${API_BASE_URL}/api/blogbycategory?page=${page}&limit=${limit}&category=${encodedCategory}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch blogs by category");
        }
        return await response.json();
    }
}
