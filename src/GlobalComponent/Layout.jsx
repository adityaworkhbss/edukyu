"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import TopNav from '@/Component/Navbar/TopNav';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { gridConfigs } from '@/libs/GridConfigs';
import Footer from '@/Component/Footer/Footer';
const HomePage = dynamic(() => import("@/Component/Pages/HomePage/HomePage"), { ssr: false });
const BlogPageMain = dynamic(() => import("@/Component/Pages/BlogsPage/BlogPageMain"), { ssr: false });
const CompareCollegePage = dynamic(() => import('@/Component/Pages/CompareCollegePage/CompareCollege'), { ssr: false });
import { usePageContext } from '@/GlobalComponent/PageContext';
const CollegePage = dynamic(() => import("@/Component/Pages/CollegePage/CollegePage"), { ssr: false });
import { DevEnvironment } from "@/DevEnvironment/DevEnviroment";
import Parent from "@/GlobalComponent/Parent";
const CoursePage = dynamic(() => import("@/Component/Pages/CoursePage/CoursePage"), { ssr: false });

const Layout = () => {
    const breakpoint = useBreakpoint();
    const { currentPage, setCurrentPage, selectedCollege, selectedCourse } = usePageContext();

    const config = gridConfigs[breakpoint];

    const marginClass = {
        mobile: 'ml-[20px] mr-[20px]',
        tablet: 'ml-[20px] mr-[20px]',
        laptop: 'ml-[56px] mr-[56px]',
        desktop: 'mx-auto',
    }[breakpoint];

    const renderPage = () => {
        switch (currentPage) {
            case 'home': return <HomePage />;
            case 'blog': return <BlogPageMain />;
            case 'compare-college': return <CompareCollegePage />;
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
            case 'course':
                if (!selectedCourse) {

                    console.log("selectedCourse", selectedCourse);

                    return (
                        <div className="w-full p-8 text-center">
                            <h2 className="text-2xl font-semibold text-red-600 mb-4">
                                No Course Selected
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Please select a Course to view its details.
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
                return <CoursePage collegeName={selectedCourse} />;
            default:
                return <HomePage />;
        }
    };

    // const config = gridConfigs[breakpoint] || gridConfigs.default;

    return (
        <div className="w-full font-[Outfit]">
            {/* <TopNav /> */}
            <div className="relative">
                {renderPage()}
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;