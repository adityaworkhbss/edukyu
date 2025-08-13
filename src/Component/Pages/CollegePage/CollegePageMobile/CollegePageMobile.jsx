import {SpecializationMobile} from "@/Component/Pages/CollegePage/CollegePageMobile/Component/SpecializationMobile";
import CompareCollegesCTAMobile
    from "@/Component/Pages/CollegePage/CollegePageMobile/Component/CompareCollegeCTAMobile";
import HeroPageMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/HeroPageMobile";
import RankAndAccrMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/RankAndAccrMobile";
import AdmissionProcessMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/AdmissionProcessMobile";
import FeeTableMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/FeeTableMobile";
import DegreeSectionMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/DegreeSectionMobile";
import {BenefitsSectionMobile} from "@/Component/Pages/CollegePage/CollegePageMobile/Component/BenefitsSectionMobile";
import {ContactUsSectionMobile} from "@/Component/Pages/CollegePage/CollegePageMobile/Component/ContactUsSectionMobile";
import CollegeMunchBannerMobile
    from "@/Component/Pages/CollegePage/CollegePageMobile/Component/CollegeMunchBannerMobile";
import {
    SidebarNavigationMobile
} from "@/Component/Pages/CollegePage/CollegePageMobile/Component/SidebarNavigationMobile";
import CoursesMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/CoursesMobile";
import FaqsSectionMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/FaqsSectionMobile";
import HiringPartnersSectionMobile
    from "@/Component/Pages/CollegePage/CollegePageMobile/Component/HiringPartnerSectionMobile";

const CollegePageMobile = ({college, collegeSecondry}) => {

    return (
        <div className="w-full">
            <HeroPageMobile college={college} />


            <div className="">
                <div className="pl-[20px] pr-[20px]">
                    <SidebarNavigationMobile/>
                    <div id="ranking">
                        <RankAndAccrMobile college={college}/>
                    </div>
                    <div id="courses">
                        <CoursesMobile college={college}/>
                    </div>
                    <div id="specialization">
                        {/*<SpecializationMobile data={collegeSecondry}/>*/}
                    </div>
                    <div id="admission">
                        <AdmissionProcessMobile college={college}/>
                    </div>
                    <div id="fees">
                        <FeeTableMobile collegeSecondry={collegeSecondry}/>
                    </div>
                    <div id="benefits">
                        <BenefitsSectionMobile college={college}/>
                    </div>
                    <div id="compare">
                        <CompareCollegesCTAMobile/>
                    </div>
                    <div id="degree">
                        <DegreeSectionMobile college={college}/>
                    </div>
                    <div id="hiring">
                        <HiringPartnersSectionMobile college={college}/>
                    </div>
                    <div id="faq">
                        <FaqsSectionMobile faqs={college?.university_info?.faqs || []}/>
                    </div>
                    <div id="contact">
                        <ContactUsSectionMobile/>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CollegePageMobile;
