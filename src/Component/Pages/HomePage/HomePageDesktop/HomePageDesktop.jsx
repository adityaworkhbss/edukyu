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
import HelpSection from "@/Component/Pages/HomePage/HomePageDesktop/Components/HelpSection";

const HomePageDesktop = () => {
    return (
        <div className="overflow-x-hidden">
            <HeroSection />
            <PartnerUniversities />
            <ExplorePrograms />
            <OurProudGraduates />
<<<<<<< HEAD
=======
            {/*<HelpSection />*/}
>>>>>>> 4e3476753d903645d4988d4826504e37bebd6bdd

            {/*<HelpMeChoose />*/}
            <div className="px-[56px]  py-[64px]">
                <CompareCollegesCTA/>
            </div>

            <AcademicConverter />
<<<<<<< HEAD
            {/*<OurStudentPlaced />*/}

            <div className="px-[56px]  py-[64px]">
                {/*<CollegeMunchBanner />*/}
=======

            <div className="pl-[56px]">
>>>>>>> 4e3476753d903645d4988d4826504e37bebd6bdd
                <OurStudentPlaced />
            </div>

            <StatsSection />
<<<<<<< HEAD
            <HelpSection />
=======

            <HelpSection />

>>>>>>> 4e3476753d903645d4988d4826504e37bebd6bdd

            <div className="px-[56px]  py-[64px]">
                <CollegeMunchBanner />
            </div>
<<<<<<< HEAD
            {/*<ContactSection />*/}
=======

            {/*<ContactSection />*/}


>>>>>>> 4e3476753d903645d4988d4826504e37bebd6bdd
            <BlogSection />
        </div>
    );
};

export default HomePageDesktop;
