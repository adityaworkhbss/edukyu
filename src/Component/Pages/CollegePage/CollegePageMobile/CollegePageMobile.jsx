import HeroPage from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/HeroPage";
import SidebarNavigation from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/SidebarNavigation";
import RankAndAccr from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/RankAndAccr";
import Courses from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/Courses";
import Specialization from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/Specialization";
import AdmissionProcess from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/AdmissionProcess";
import FeeTable from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/FeeTable";
import {BenefitsSection} from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/BenefitsSection";
import CompareCollegesCTA from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/CompareCollegeCTA";
import DegreeSection from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/DegreeSection";
import CollegeMunchBanner from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/CollegeMunchBanner";
import HiringPartnersSection from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/HiringPartnerSection";
import {ContactUsSection} from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/ContactUsSection";
import {CoursesMobile} from "@/Component/Pages/CollegePage/CollegePageMobile/Component/CoursesMobile";
import {SpecializationMobile} from "@/Component/Pages/CollegePage/CollegePageMobile/Component/SpecializationMobile";
import CompareCollegesCTAMobile
    from "@/Component/Pages/CollegePage/CollegePageMobile/Component/CompareCollegeCTAMobile";
import HeroPageMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/HeroPageMobile";
import RankAndAccrMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/RankAndAccrMobile";
import AdmissionProcessMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/AdmissionProcessMobile";
import FeeTableMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/FeeTableMobile";
import DegreeSectionMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/DegreeSectionMobile";
import HiringPartnersSectionMobile
    from "@/Component/Pages/CollegePage/CollegePageMobile/Component/HiringPartnerSectionMobile";

const CollegePageMobile = () => {
    return (
        <div className="w-full">
            <HeroPageMobile/>


            <div className="inline-flex gap-6">
                {/*<div className="w-1/4">*/}
                {/*    <SidebarNavigation/>*/}
                {/*</div>*/}

                <div className="pl-[20px] pr-[20px]">
                    <RankAndAccrMobile/>
                    <CoursesMobile/>
                    <SpecializationMobile/>
                    <AdmissionProcessMobile/>
                    <FeeTableMobile/>
                    {/*<BenefitsSectionMobile/>*/}
                    <CompareCollegesCTAMobile/>
                    <DegreeSectionMobile/>
                    {/*<CollegeMunchBannerMobile/>*/}
                    <HiringPartnersSectionMobile/>
                    {/*<ContactUsSectionMobile/>*/}
                </div>
            </div>

        </div>
    );
};

export default CollegePageMobile;
