import HeroPage from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/HeroPage";
import RankAndAccr from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/RankAndAccr";
import Courses from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/Courses";
import Specialization from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/Specialization";
import AdmissionProcess from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/AdmissionProcess";
import FeeTable from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/FeeTable";
import Benefits from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/Benefits";
import CompareCollegesCTA from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/CompareCollegeCTA";
import DegreeSection from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/DegreeSection";
import HiringPartnersSection from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/HiringPartnerSection";
import ContactForm from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/ContactForm";

const CollegePageDesktop = () => {
    return (
        <div className="">
            <HeroPage/>
            <RankAndAccr/>
            <Courses/>
            <Specialization/>
            <AdmissionProcess/>
            <FeeTable/>
            <Benefits/>
            <CompareCollegesCTA/>
            <DegreeSection/>
            <CollegeMunchBanner/>
            <HiringPartnersSection/>
            <ContactForm/>
        </div>
    );
};

export default CollegePageDesktop;
