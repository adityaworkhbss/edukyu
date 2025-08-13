'use client';
import React, { useEffect } from 'react';
import TopNav from '@/Component/Navbar/TopNav';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import Footer from '@/Component/Footer/Footer';
import HomePage from "@/Component/Pages/HomePage/HomePage";
import BlogPageMain from "@/Component/Pages/BlogsPage/BlogPageMain";
import CompareCollegePage from '@/Component/Pages/CompareCollegePage/CompareCollege';
import { usePageContext } from '@/GlobalComponent/PageContext';
import CollegePage from "@/Component/Pages/CollegePage/CollegePage";

const Layout = () => {
    const breakpoint = useBreakpoint();
    const { currentPage, setCurrentPage, selectedCollege } = usePageContext();

    // Push state into browser history when page changes
    useEffect(() => {
        if (currentPage) {
            window.history.pushState({ page: currentPage }, '', `#${currentPage}`);
        }
    }, [currentPage]);

    // Handle browser back/forward
    useEffect(() => {
        const handlePopState = (event) => {
            if (event.state?.page) {
                setCurrentPage(event.state.page);
            } else {
                // Fallback if state is missing
                const hashPage = window.location.hash.replace('#', '');
                if (hashPage) setCurrentPage(hashPage);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [setCurrentPage]);

    const renderPage = () => {
        switch (currentPage) {
            case 'home': return <HomePage />;
            case 'blog': return <BlogPageMain />;
            case 'compare': return <CompareCollegePage />;
            case 'college':
                if (!selectedCollege) {
                    return (
                        <div className="w-full p-8 text-center">
                            <h2 className="text-2xl font-semibold text-red-600 mb-4">
                                No College Selected
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Please select a college to view its details.
                            </p>
                            <button
                                onClick={() => setCurrentPage('home')}
                                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Return to Home
                            </button>
                        </div>
                    );
                }
                return <CollegePage collegeName={selectedCollege} />;
            default: return <HomePage />;
        }
    };

    return (
        <div className="w-full">
            <TopNav />
            <div className="relative">
                {renderPage()}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
