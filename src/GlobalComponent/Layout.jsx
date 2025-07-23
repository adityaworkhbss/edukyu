// File: app/components/Layout.js
"use client";
import React from 'react';
import Parent from './Parent';
import TopNav from '@/Component/Navbar/TopNav';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { gridConfigs } from '@/libs/GridConfigs';
import Footer from '@/Component/Footer/Footer';
import HomePageDesktop from "@/Component/Pages/HomePage/HomePageDesktop/HomePageDesktop";
import HomePage from "@/Component/Pages/HomePage/HomePage";
import {BlogsMain} from "@/Component/Pages/BlogsPage/BlogsMain/BlogsMain";

const Layout = () => {
    const breakpoint = useBreakpoint();
    const config = gridConfigs[breakpoint];

    const marginClass = {
        mobile: 'ml-[20px] mr-[20px]',
        tablet: 'ml-[20px] mr-[20px]',
        laptop: 'ml-[56px] mr-[56px]',
        desktop: 'mx-auto',
    }[breakpoint];

    return (
        <div className="w-full">
            <TopNav />



            {/* Grid with z-axis overlap */}
            <div className="relative">
                {/*<div*/}
                {/*    className={`${marginClass} absolute inset-0 z-[10000000] pointer-events-none opacity-90`}*/}
                {/*>*/}
                {/*    <Parent*/}
                {/*        numGrids={config.numGrids}*/}
                {/*        gutter={config.gutter}*/}
                {/*        gridWidth={config.gridWidth}*/}
                {/*        gridHeight={config.gridHeight}*/}
                {/*        color="rgba(220, 100, 255, 0.2)"*/}
                {/*    />*/}
                {/*</div>*/}
                <HomePage/>

            </div>
            <Footer />
        </div>
    );
};

export default Layout;