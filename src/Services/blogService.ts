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
        const response = await fetch(`${API_BASE_URL}/api/blog?page=${page}&limit=${limit}`);
        if (!response.ok) {
            throw new Error("Failed to fetch blogs");
        }
        console.log("reponse :: ", response);
        return await response.json();
    }

    async fetchFullBlogPage(blogId: number) {
        console.log(`Fetching blog page ${blogId}`);
        const response = await fetch(`${API_BASE_URL}/api/blogpage?blogId=${blogId}`);
        console.log("reponse :: ", response);
        if (!response.ok) {
            throw new Error("Failed to fetch blog detail");
        }
        const blog = await response.json();

        console.log("reponse :: ", blog.metatitle);

        return {
            userid: blog.userid,
            category: blog.category,
            descs: blog.descs,
            metatitle: blog.metatitle,
            imageurl: blog.imageurl,       // add logic later
            timestamp: blog.timestamp,
        };
    }
}
