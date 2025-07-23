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

const HomePageDesktop = () => {
    return (
        <div className="overflow-x-hidden">
            <HeroSection />
            <PartnerUniversities />
            <ExplorePrograms />
            <OurProudGraduates />
            <HelpMeChoose />
            <AcademicConverter />
            <OurStudentPlaced />
            <StatsSection />
            <ContactSection />
            <BlogSection />
        </div>
    );
};

export default HomePageDesktop;
