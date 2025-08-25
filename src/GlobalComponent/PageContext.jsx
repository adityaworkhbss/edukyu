'use client';
import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('home'); // 'home', 'blog', 'compare', etc.
    const [selectedCollege, setSelectedCollege] = useState(null);

    // Global blog viewer modal state
    const [isBlogViewerOpen, setIsBlogViewerOpen] = useState(false);
    const [blogViewerBlogId, setBlogViewerBlogId] = useState(null);
    const [isBlogViewerLoading, setIsBlogViewerLoading] = useState(false);

    const openBlogViewer = (blogId) => {
        setBlogViewerBlogId(blogId);
        setIsBlogViewerLoading(true);
        setIsBlogViewerOpen(true);
    };

    const closeBlogViewer = () => {
        setIsBlogViewerOpen(false);
        setBlogViewerBlogId(null);
        setIsBlogViewerLoading(false);
    };

    return (
        <PageContext.Provider value={{
            currentPage,
            setCurrentPage,
            selectedCollege,
            setSelectedCollege,
            isBlogViewerOpen,
            blogViewerBlogId,
            isBlogViewerLoading,
            setIsBlogViewerLoading,
            openBlogViewer,
            closeBlogViewer
        }}>
            {children}
        </PageContext.Provider>
    );
};

export const usePageContext = () => useContext(PageContext);
