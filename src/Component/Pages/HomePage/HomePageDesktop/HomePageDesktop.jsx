import HeroSection from "@/Component/Pages/HomePage/HomePageDesktop/Components/HeroSection";
import {
    PartnerUniversities
} from "@/Component/Pages/HomePage/HomePageDesktop/Components/PartnerUniversities";
import ExplorePrograms from "@/Component/Pages/HomePage/HomePageDesktop/Components/ExplorePrograms";
import OurProudGraduates from "@/Component/Pages/HomePage/HomePageDesktop/Components/OurProudGraduate";
import HelpMeChoose from "@/Component/Pages/HomePage/HomePageDesktop/Components/HelpMeChoose";
import ContentShowcase from "@/Component/Pages/HomePage/HomePageDesktop/Components/ContentShowcase";
import OurStudentPlaced from "@/Component/Pages/HomePage/HomePageDesktop/Components/OurStudentPlaced";
import StatsSection from "@/Component/Pages/HomePage/HomePageDesktop/Components/StatsSection";
import ContactSection from "@/Component/Pages/HomePage/HomePageDesktop/Components/ContactSectiom";
import BlogSection from "@/Component/Pages/HomePage/HomePageDesktop/Components/BlogsSection";
import {AcademicConverter} from "@/Component/Pages/HomePage/HomePageDesktop/Components/AcademicConverter";
import CompareCollegesCTA from "@/Component/Pages/HomePage/HomePageDesktop/Components/CompareCollegeCTA";
import CollegeMunchBanner from "@/Component/Pages/HomePage/HomePageDesktop/Components/CollegeMunchBanner";

const HomePageDesktop = () => {
    return (
        <div className="overflow-x-hidden">
            <HeroSection />
            <PartnerUniversities />
            <ExplorePrograms />
            <OurProudGraduates />
            <HelpMeChoose />
            <div className="px-[56px]  py-[64px]">
                <CompareCollegesCTA/>
            </div>

            <AcademicConverter />
            <OurStudentPlaced />

            <div className="px-[56px]  py-[64px]">
                <CollegeMunchBanner />
            </div>

            <StatsSection />
            <ContactSection />
            <BlogSection />
        </div>
    );
};

export default HomePageDesktop;
