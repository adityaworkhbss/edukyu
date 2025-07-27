export interface BlogPost {
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    readMoreUrl: string;
    category: string;
    id?: string;
    publishedAt?: string;
    author?: string;
}

export interface BlogResponse {
    blogs: BlogPost[];
    total?: number;
    page?: number;
    limit?: number;
}

export interface BreadcrumbItem {
    label: string;
    href?: string;
}