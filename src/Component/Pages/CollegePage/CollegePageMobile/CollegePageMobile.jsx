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
import {BenefitsSectionMobile} from "@/Component/Pages/CollegePage/CollegePageMobile/Component/BenefitsSectionMobile";
import {ContactUsSectionMobile} from "@/Component/Pages/CollegePage/CollegePageMobile/Component/ContactUsSectionMobile";
import CollegeMunchBannerMobile
    from "@/Component/Pages/CollegePage/CollegePageMobile/Component/CollegeMunchBannerMobile";
import {
    SidebarNavigationMobile
} from "@/Component/Pages/CollegePage/CollegePageMobile/Component/SidebarNavigationMobile";

const CollegePageMobile = () => {
    return (
        <div className="w-full">
            <HeroPageMobile/>


            <div className="">
                <div className="pl-[20px] pr-[20px]">
                    <SidebarNavigationMobile/>
                    <RankAndAccrMobile/>
                    <CoursesMobile/>
                    <SpecializationMobile/>
                    <AdmissionProcessMobile/>
                    <FeeTableMobile/>
                    <BenefitsSectionMobile/>
                    <CompareCollegesCTAMobile/>
                    <DegreeSectionMobile/>
                    <CollegeMunchBannerMobile/>
                    <HiringPartnersSectionMobile/>
                    <ContactUsSectionMobile/>
                </div>
            </div>

        </div>
    );
};

export default CollegePageMobile;
