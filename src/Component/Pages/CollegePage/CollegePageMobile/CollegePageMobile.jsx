import React, { useEffect, useRef, useState } from "react";
import { SpecializationMobile } from "@/Component/Pages/CollegePage/CollegePageMobile/Component/SpecializationMobile";
import CompareCollegesCTAMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/CompareCollegeCTAMobile";
import HeroPageMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/HeroPageMobile";
import RankAndAccrMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/RankAndAccrMobile";
import AdmissionProcessMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/AdmissionProcessMobile";
import FeeTableMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/FeeTableMobile";
import DegreeSectionMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/DegreeSectionMobile";
import { BenefitsSectionMobile } from "@/Component/Pages/CollegePage/CollegePageMobile/Component/BenefitsSectionMobile";
import { ContactUsSectionMobile } from "@/Component/Pages/CollegePage/CollegePageMobile/Component/ContactUsSectionMobile";
import {
    SidebarNavigationMobile,
} from "@/Component/Pages/CollegePage/CollegePageMobile/Component/SidebarNavigationMobile";
import CoursesMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/CoursesMobile";
import FaqsSectionMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/FaqsSectionMobile";
import HiringPartnersSectionMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/HiringPartnerSectionMobile";
import CollegeMunchBanner from "@/Component/Pages/CollegePage/CollegePageMobile/Component/CollegeMunchBannerMobile";

const CollegePageMobile = ({ college, collegeSecondry }) => {
    const sidebarRef = useRef(null);
    const containerRef = useRef(null);
    const [sidebarStyle, setSidebarStyle] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            if (!sidebarRef.current || !containerRef.current) return;

            const sidebar = sidebarRef.current;
            const container = containerRef.current;

            const sidebarHeight = sidebar.offsetHeight;
            const containerRect = container.getBoundingClientRect();
            const offsetTop = 0; // adjust based on mobile navbar height

            if (containerRect.top < offsetTop && containerRect.bottom > sidebarHeight + offsetTop) {
                // Stick to top
                setSidebarStyle({
                    position: "fixed",
                    top: `${offsetTop}px`,
                    left: `${containerRect.left}px`,
                    width: `${containerRect.width}px`,
                    zIndex: 50,
                    background: "white",
                });
            } else if (containerRect.bottom <= sidebarHeight + offsetTop) {
                // Stick to bottom of container
                setSidebarStyle({
                    position: "absolute",
                    bottom: "0",
                    top: "auto",
                    width: "100%",
                });
            } else {
                // Normal flow
                setSidebarStyle({
                    position: "static",
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full">
            {/* Hero always at top */}
            <HeroPageMobile college={college} />

            <div className="pl-[20px] pr-[20px]" ref={containerRef}>
                {/* Sidebar with JS sticky logic */}
                <div ref={sidebarRef} style={sidebarStyle}>
                    <SidebarNavigationMobile />
                </div>

                <div id="ranking">
                    <RankAndAccrMobile college={college} />
                </div>
                <div id="courses">
                    <CoursesMobile college={college} />
                </div>
                {/* <div id="specialization">
                    <SpecializationMobile data={collegeSecondry}/>
                </div> */}
                <div id="admission">
                    <AdmissionProcessMobile college={college} />
                </div>
                <div id="fees">
                    <FeeTableMobile collegeSecondry={collegeSecondry} />
                </div>
                <div id="benefits">
                    <BenefitsSectionMobile college={college} />
                </div>
                <div id="compare">
                    <CompareCollegesCTAMobile />
                </div>
                <div id="degree">
                    <DegreeSectionMobile college={college} />
                </div>
                <div id="hiring">
                    <HiringPartnersSectionMobile college={college} />
                </div>
                <div id="collegemunch">
                    <CollegeMunchBanner />
                </div>
                <div id="faq">
                    <FaqsSectionMobile faqs={college?.university_info?.faqs || []} />
                </div>
                <div id="contact">
                    <ContactUsSectionMobile />
                </div>
            </div>
        </div>
    );
};

export default CollegePageMobile;
