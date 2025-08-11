import React from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import CollegePageMobile from "@/Component/Pages/CollegePage/CollegePageMobile/CollegePageMobile";
import CollegePageDesktop from "@/Component/Pages/CollegePage/CollegePageDesktop/CollegePageDesktop";

import {CollegePageSecondryData} from "@/Data Model/CollegePage/CollegePageSecondryData";
import {CollegePageData} from "@/Data Model/CollegePage/CollegePageData"

const CollegePage = () => {
    const breakpoint = useBreakpoint();

    return (
        <>
            {breakpoint === 'mobile' || breakpoint === 'tablet' ? (
                <CollegePageMobile college={CollegePageData[0].NMIMS} collegeSecondry={CollegePageSecondryData[0].NMIMS} />
            ) : (
                <CollegePageDesktop college={CollegePageData[0].NMIMS} collegeSecondry={CollegePageSecondryData[0].NMIMS}/>
            )}
        </>
    );
};

export default CollegePage;
