import { useRef, useState, useEffect } from "react";
import HeroPage from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/HeroPage";
import RankAndAccr from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/RankAndAccr";
import Courses from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/Courses";
import Specialization from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/Specialization";
import { Semester } from "./Components/Semester";
import OurFaculty from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/MeetOurFaculty";
import { EligibilityCriteria } from "./Components/EligibilityCriterias";
import { EligibilityCriteriaImage } from "./Components/EligibilityCriteria2";
import AdmissionProcess from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/AdmissionProcess";
import FeeTable from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/FeeTable";
import Benefits, { BenefitsSection } from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/BenefitsSection";
import CompareCollegesCTA from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/CompareCollegeCTA";
import DegreeSection from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/DegreeSection";
import ToolsCertificate from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/ToolsCertificate";
import JobRoles from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/JobRoles";
import ContactForm, {
    ContactUsSection
} from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/ContactUsSection";
import SidebarNavigation from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/SidebarNavigation";
import CollegeMunchBanner from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/CourseMunchBanner";
import GridComponent from "@/GlobalComponent/GridComponent";
import collegePageMobile from "@/Component/Pages/CollegePage/CollegePageMobile/CollegePageMobile";
import FaqsSection from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/FaqsSection";
import HiringPartnersSection from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/HiringPartnerSection";

const CollegePageDesktop = ({ course, courseSecondry }) => {
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
                <HeroPage course={course} />
            </div>

            {/* Sidebar + Main content */}
            <div className="px-[56px] max-w-full mt-8 flex gap-6" ref={containerRef}>
                {/* Sidebar */}
                <div className="w-[calc((25%_-_16px))] flex-shrink-0 relative">
                    <div ref={sidebarRef} style={sidebarStyle}>
                        <SidebarNavigation course={course} />
                    </div>
                </div>

                {/* Main content */}
                <div className="w-[calc((75%_+_16px))] space-y-[32px] min-w-0 max-w-full">
                    <div id="ranking">
                        <RankAndAccr course={course} />
                    </div>
                    <div id="courses">
                        <Courses course={course} />
                    </div>
                    
                    {/* <div id="specialization">
                        <Specialization course={course} />
                    </div> */}
                    <div id="benefits">
                        <BenefitsSection course={course} />
                    </div>
                    <div id="semester">
                        <Semester course={course} />
                    </div>
                    <div id="ourfaculty">
                        <OurFaculty />
                    </div>
                    <div id="eligibilitycriteria">
                        <EligibilityCriteria course={course} />
                    </div>
                    <div id="eligibilitycriteriaimage">
                        <EligibilityCriteriaImage course={course} />
                    </div>

                    <div id="admission">
                        <AdmissionProcess course={course} />
                    </div>
                    {/* <div id="fees">
                        <FeeTable collegeSecondry={collegeSecondry} />
                    </div> */}

                    <div className="pt-[32px]" id="compare">
                        <CompareCollegesCTA />
                    </div>
                    <div id="degree">
                        <DegreeSection course={course} />
                    </div>

                    <div id="tools">
                        <ToolsCertificate course={course} />
                    </div>
                    <div id="jobroles">
                        <JobRoles course={course} />
                    </div>
                    <div>
                        <HiringPartnersSection />
                    </div>
                    <div>
                        <CollegeMunchBanner />
                    </div>
                    <div>
                        <FaqsSection course={course} />
                    </div>

                    {/* <div id="hiring">
                        <HiringPartnersSection
                            logos={college?.university_info?.placement?.partners || []}
                            name={college?.university_info?.name || ""}
                        />
                    </div>
                    <div id="faq">
                        <FaqsSection faqs={college?.university_info?.faqs || []} />
                    </div> */}
                    <div id="contact">
                        <ContactUsSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegePageDesktop;