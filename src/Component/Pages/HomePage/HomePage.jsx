import React from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import HomePageMobile from "@/Component/Pages/HomePage/HomePageMobile/HomePageMobile";
import HomePageDesktop from "@/Component/Pages/HomePage/HomePageDesktop/HomePageDesktop";
import Form from "@/Component/Form/Form";

const HomePage = () => {
    const breakpoint = useBreakpoint();

    return (
        <>
            {breakpoint === 'mobile' || breakpoint === 'tablet' ? (
                <HomePageMobile />
            ) : (
                <HomePageDesktop />
            )}
        </>
    );
};

export default HomePage;
