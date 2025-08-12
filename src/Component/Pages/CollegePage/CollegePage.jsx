import React from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import CollegePageMobile from "@/Component/Pages/CollegePage/CollegePageMobile/CollegePageMobile";
import CollegePageDesktop from "@/Component/Pages/CollegePage/CollegePageDesktop/CollegePageDesktop";

import {CollegePageSecondryData} from "@/Data Model/CollegePage/CollegePageSecondryData";
import {CollegePageData} from "@/Data Model/CollegePage/CollegePageData"

const CollegePage = ({collegeName}) => {
    const breakpoint = useBreakpoint();
    return (
        <>
            {breakpoint === 'mobile' || breakpoint === 'tablet' ? (
                <CollegePageMobile college={CollegePageData[0][collegeName]} collegeSecondry={CollegePageSecondryData[0][collegeName]} />
            ) : (
                <CollegePageDesktop college={CollegePageData[0][collegeName]} collegeSecondry={CollegePageSecondryData[0][collegeName]}/>
            )}
        </>
    );
};

export default CollegePage;
