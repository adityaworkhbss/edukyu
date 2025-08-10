import HeroPage from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/HeroPage";
import RankAndAccr from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/RankAndAccr";
import Courses from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/Courses";
import Specialization from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/Specialization";
import AdmissionProcess from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/AdmissionProcess";
import FeeTable from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/FeeTable";
import Benefits, {BenefitsSection} from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/BenefitsSection";
import CompareCollegesCTA from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/CompareCollegeCTA";
import DegreeSection from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/DegreeSection";
import HiringPartnersSection from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/HiringPartnerSection";
import ContactForm, {
    ContactUsSection
} from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/ContactUsSection";
import SidebarNavigation from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/SidebarNavigation";
import CollegeMunchBanner from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/CollegeMunchBanner";
import GridComponent from "@/GlobalComponent/GridComponent";
import collegePageMobile from "@/Component/Pages/CollegePage/CollegePageMobile/CollegePageMobile";

const CollegePageDesktop = ({college, collegeSecondry}) => {

    return (
        <div className="px-[56px] py-[64px]">
            <HeroPage college={college} />


            <div className="inline-flex gap-6">
                <div className="w-1/4">
                    <SidebarNavigation/>
                </div>

                <div className="w-3/4  space-y-[64px]">
                    <RankAndAccr college={college} />
                    <Courses college={{college}}/>
                    <Specialization data={collegeSecondry}/>
                    <AdmissionProcess college={college}/>
                    <FeeTable collegeSecondry = {collegeSecondry}/>
                    <BenefitsSection college={college}/>
                    <CompareCollegesCTA/>
                    <DegreeSection  college={college}/>
                    <CollegeMunchBanner/>
                    <HiringPartnersSection/>
                    <ContactUsSection/>
                </div>
            </div>

        </div>
    );
};

export default CollegePageDesktop;
