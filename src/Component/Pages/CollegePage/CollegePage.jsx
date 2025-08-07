import React from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import CollegePageMobile from "@/Component/Pages/CollegePage/CollegePageMobile/CollegePageMobile";
import CollegePageDesktop from "@/Component/Pages/CollegePage/CollegePageDesktop/CollegePageDesktop";

const CollegePage = () => {
    const breakpoint = useBreakpoint();

    return (
        <>
            {breakpoint === 'mobile' || breakpoint === 'tablet' ? (
                <CollegePageMobile />
            ) : (
                <CollegePageDesktop />
            )}
        </>
    );
};

export default CollegePage;
