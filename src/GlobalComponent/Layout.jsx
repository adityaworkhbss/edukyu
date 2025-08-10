'use client';
import React from 'react';
import TopNav from '@/Component/Navbar/TopNav';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { gridConfigs } from '@/libs/GridConfigs';
import Footer from '@/Component/Footer/Footer';
import HomePage from "@/Component/Pages/HomePage/HomePage";
import BlogPageMain from "@/Component/Pages/BlogsPage/BlogPageMain";
import CompareCollegePage from '@/Component/Pages/CompareCollegePage/CompareCollege';
import { usePageContext } from '@/GlobalComponent/PageContext';
import CollegePage from "@/Component/Pages/CollegePage/CollegePage";

const Layout = () => {
    const breakpoint = useBreakpoint();
    const config = gridConfigs[breakpoint];
    const { currentPage } = usePageContext();

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
            case 'blog': return <BlogPageMain />;
            case 'compare': return <CompareCollegePage />;
            default: return <HomePage />;
        }
    };

    return (
        <div className="w-full">
            <TopNav />
            <div className="relative">
                {/*{renderPage()}*/}

                <CollegePage/>
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
