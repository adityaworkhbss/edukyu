'use client';
import React, { useEffect } from 'react';
import { usePageContext } from '@/GlobalComponent/PageContext';
import BlogPage from '@/Component/Pages/BlogsPage/BlogPage/BlogPage';

const Backdrop = ({ onClick }) => (
    <div
        onClick={onClick}
        className="fixed inset-0 bg-black/50 z-40"
        aria-hidden="true"
    />
);

const LoaderOverlay = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white/60 z-50">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-[#357E86]" />
    </div>
);

const BlogViewerModal = () => {
    const {
        isBlogViewerOpen,
        blogViewerBlogId,
        isBlogViewerLoading,
        setIsBlogViewerLoading,
        closeBlogViewer
    } = usePageContext();

    useEffect(() => {
        if (!isBlogViewerOpen) return;
        // Prevent body scroll while modal is open
        const { overflow } = document.body.style;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = overflow;
        };
    }, [isBlogViewerOpen]);

    if (!isBlogViewerOpen) return null;

    return (
        <div className="fixed inset-0 z-50">
            <Backdrop onClick={closeBlogViewer} />
            <div className="fixed inset-4 md:inset-10 lg:inset-16 bg-white rounded-lg shadow-xl z-50 overflow-hidden flex flex-col">
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <h2 className="text-lg font-semibold">Blog</h2>
                    <button
                        onClick={closeBlogViewer}
                        className="rounded p-2 hover:bg-gray-100"
                        aria-label="Close blog viewer"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div className="relative flex-1 overflow-auto">
                    {isBlogViewerLoading && <LoaderOverlay />}
                    {blogViewerBlogId != null && (
                        <BlogPage
                            blogId={Number(blogViewerBlogId)}
                            onLoaded={() => setIsBlogViewerLoading(false)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogViewerModal;

