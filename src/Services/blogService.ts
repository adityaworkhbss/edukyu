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
        return await response.json();
    }
}
