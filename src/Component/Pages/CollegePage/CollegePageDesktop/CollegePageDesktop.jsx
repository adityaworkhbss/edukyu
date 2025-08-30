import React, { useEffect, useRef, useState } from "react";
import HeroPage from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/HeroPage";
import RankAndAccr from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/RankAndAccr";
import Courses from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/Courses";
import Specialization from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/Specialization";
import AdmissionProcess from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/AdmissionProcess";
import FeeTable from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/FeeTable";
import { BenefitsSection } from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/BenefitsSection";
import CompareCollegesCTA from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/CompareCollegeCTA";
import DegreeSection from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/DegreeSection";
import { ContactUsSection } from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/ContactUsSection";
import SidebarNavigation from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/SidebarNavigation";
import FaqsSection from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/FaqsSection";
import HiringPartnersSection from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/HiringPartnerSection";
import CollegeMunchSection from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/CollegeMunchBanner";

const CollegePageDesktop = ({ college, collegeSecondry }) => {
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
            const offsetTop = 0; // distance from top (like navbar height)

            if (containerRect.top < offsetTop && containerRect.bottom > sidebarHeight + offsetTop) {
                // Stick to top
                setSidebarStyle({
                    position: "fixed",
                    top: `${offsetTop}px`,
                    width: `${sidebar.offsetWidth}px`,
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
        <div>
            {/* Hero at top */}
            <div>
                <HeroPage college={college} />
            </div>

            {/* Sidebar + Main content */}
            <div className="px-[56px] max-w-full overflow-x-hidden mt-8 flex gap-4" ref={containerRef}>
                {/* Sidebar */}
                <div className="w-1/4 flex-shrink-0 relative">
                    <div ref={sidebarRef} style={sidebarStyle}>
                        <SidebarNavigation college={college} collegeSecondry={collegeSecondry} />
                    </div>
                </div>

                {/* Main content */}
                <div className="w-3/4 space-y-[64px] min-w-0 max-w-full">
                    {Array.isArray(college?.university_info?.accreditations) && college.university_info.accreditations.length > 0 && (
                        <div id="ranking">
                            <RankAndAccr college={college} />
                        </div>
                    )}

                    {Array.isArray(college?.university_info?.courses) && college.university_info.courses.length > 0 && (
                        <div id="courses">
                            <Courses college={college} />
                        </div>
                    )}

                    {collegeSecondry?.Specialisation && Object.keys(collegeSecondry.Specialisation).length > 0 && (
                        <div id="specialization">
                            <Specialization data={collegeSecondry} />
                        </div>
                    )}

                    {Array.isArray(college?.university_info?.admission_process) && college.university_info.admission_process.length > 0 && (
                        <div id="admission">
                            <AdmissionProcess college={college} />
                        </div>
                    )}

                    {(collegeSecondry && (collegeSecondry.Programs || collegeSecondry["Detail Fees"])) && (
                        <div id="fees">
                            <FeeTable collegeSecondry={collegeSecondry} />
                        </div>
                    )}

                    {((college?.university_info?.benefits && college.university_info.benefits.length > 0) || (college?.university_info?.placement && college.university_info.placement.benefits && college.university_info.placement.benefits.length > 0)) && (
                        <div id="benefits">
                            <BenefitsSection college={college} />
                        </div>
                    )}
                    <div className="pt-[79px]" id="compare">
                        <CompareCollegesCTA />
                    </div>
                    <div id="degree">
                        <DegreeSection college={college} />
                    </div>
                    <div id="hiring">
                        <HiringPartnersSection
                            logos={college?.university_info?.placement?.partners || []}
                            name={college?.university_info?.name || ""}
                        />
                    </div>
                    <div id="collegemunch">
                        <CollegeMunchSection />
                    </div>
                    
                    <div id="faq">
                        <FaqsSection faqs={college?.university_info?.faqs || []} />
                    </div>
                    <div id="contact">
                        <ContactUsSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegePageDesktop;