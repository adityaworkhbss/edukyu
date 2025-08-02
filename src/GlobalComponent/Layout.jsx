// File: app/components/Layout.js
"use client";
import React from 'react';
import SinglePageNav from '@/Component/Navbar/SinglePageNav';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useHashNavigation } from '@/hooks/useNavigation';
import { gridConfigs } from '@/libs/GridConfigs';
import Footer from '@/Component/Footer/Footer';
import HomePage from "@/Component/Pages/HomePage/HomePage";
import BlogPageMain from "@/Component/Pages/BlogsPage/BlogPageMain";
import CompareCollege from "@/Component/Pages/CompareCollegePage/CompareCollege";
import NavigationDemo from "@/Component/Examples/NavigationDemo";

const Layout = () => {
    const breakpoint = useBreakpoint();
    const config = gridConfigs[breakpoint];
    
    // Enable URL hash navigation
    useHashNavigation();

    const marginClass = {
        mobile: 'ml-[20px] mr-[20px]',
        tablet: 'ml-[20px] mr-[20px]',
        laptop: 'ml-[56px] mr-[56px]',
        desktop: 'mx-auto',
    }[breakpoint];

    return (
        <div className="w-full">
            <SinglePageNav />

            {/* Home Section */}
            <section id="home" className="min-h-screen relative overflow-hidden">
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
                    
                    {/* Navigation Demo Section */}
                    <div className="py-16 px-4">
                        <NavigationDemo />
                    </div>
                </div>
                
                {/* Section Divider */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
            </section>

            {/* Blogs Section */}
            <section id="blogs" className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-20 relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16 animate-fade-in">
                        <div className="inline-flex items-center justify-center p-2 bg-[#024B53]/10 rounded-full mb-4">
                            <span className="text-3xl">📝</span>
                        </div>
                        <h2 className="text-5xl font-bold text-[#024B53] mb-6 tracking-tight">Latest Blogs</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Stay updated with the latest insights, tips, and news about colleges, courses, and education.
                        </p>
                        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#024B53] to-[#025E68] mx-auto rounded-full"></div>
                    </div>
                    <div className="transform transition-all duration-700 hover:scale-105">
                        <BlogPageMain/>
                    </div>
                </div>
                
                {/* Background Decorations */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-[#024B53]/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#025E68]/5 rounded-full blur-xl"></div>
                
                {/* Section Divider */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* Compare Colleges Section */}
            <section id="compare" className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white py-20 relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16 animate-fade-in">
                        <div className="inline-flex items-center justify-center p-2 bg-[#024B53]/10 rounded-full mb-4">
                            <span className="text-3xl">⚖️</span>
                        </div>
                        <h2 className="text-5xl font-bold text-[#024B53] mb-6 tracking-tight">Compare Colleges</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Make informed decisions by comparing colleges side by side. Find the perfect match for your academic goals.
                        </p>
                        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#024B53] to-[#025E68] mx-auto rounded-full"></div>
                    </div>
                    <div className="transform transition-all duration-700 hover:scale-105">
                        <CompareCollege/>
                    </div>
                </div>
                
                {/* Background Decorations */}
                <div className="absolute top-20 right-10 w-28 h-28 bg-[#024B53]/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 left-10 w-36 h-36 bg-[#025E68]/5 rounded-full blur-xl"></div>
            </section>

            <Footer />
        </div>
    );
};

export default Layout;