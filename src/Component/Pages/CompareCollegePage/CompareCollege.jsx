import { useBreakpoint } from '@/hooks/useBreakpoint';
import CompareCollegeDesktop from '@/Component/Pages/CompareCollegePage/CompareCollegePageDesktop/CompareCollegeDesktop';
import CompareCollegeMobile from '@/Component/Pages/CompareCollegePage/CompareCollegePageMobile/CompareCollegeMobile';
import React from "react";

const CompareCollege = () => {
    const breakpoint = useBreakpoint();

    return (
        <>
            {breakpoint === 'mobile' || breakpoint === 'tablet' ? (
                <CompareCollegeMobile />
            ) : (
                <CompareCollegeDesktop />
            )}
        </>
    )

};

export default CompareCollege;

