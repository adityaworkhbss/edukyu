// File: app/components/Layout.js
"use client";
import React from 'react';
import Parent from './Parent';
import TopNav from '@/Component/Navbar/TopNav';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { gridConfigs } from '@/libs/GridConfigs';
import Footer from '@/Component/Footer/Footer';

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
            <div className={`${marginClass}`}>
                <Parent
                    numGrids={config.numGrids}
                    gutter={config.gutter}
                    gridWidth={config.gridWidth}
                    gridHeight={config.gridHeight}
                    color="rgba(220, 100, 255, 0.2)"
                />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;