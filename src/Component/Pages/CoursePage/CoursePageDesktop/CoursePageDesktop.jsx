import HeroPage from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/HeroPage";
import RankAndAccr from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/RankAndAccr";
import Courses from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/Courses";
import Specialization from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/Specialization";
import AdmissionProcess from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/AdmissionProcess";
import FeeTable from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/FeeTable";
import Benefits, {BenefitsSection} from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/BenefitsSection";
import CompareCollegesCTA from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/CompareCollegeCTA";
import DegreeSection from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/DegreeSection";
import ContactForm, {
    ContactUsSection
} from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/ContactUsSection";
import SidebarNavigation from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/SidebarNavigation";
import CollegeMunchBanner from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/CollegeMunchBanner";
import GridComponent from "@/GlobalComponent/GridComponent";
import collegePageMobile from "@/Component/Pages/CollegePage/CollegePageMobile/CollegePageMobile";
import FaqsSection from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/FaqsSection";
import HiringPartnersSection from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/HiringPartnerSection";

const CoursePageDesktop = ({college, collegeSecondry}) => {

    return (
        <div>
            <div>
                <HeroPage college={college} />
            </div>

            <div className="px-[32px] max-w-full overflow-x-hidden">



                <div className="flex gap-4 max-w-full w-full">
                    <div className="w-1/4 flex-shrink-0">
                        <SidebarNavigation/>
                    </div>

                    <div className="w-3/4 space-y-[64px] min-w-0 max-w-full">
                        <div id="ranking">
                            <RankAndAccr college={college} />
                        </div>
                        <div id="courses">
                            <Courses college={college}/>
                        </div>
                        <div id="specialization">
                            <Specialization data={collegeSecondry}/>
                        </div>
                        <div id="admission">
                            <AdmissionProcess college={college}/>
                        </div>
                        <div id="fees">
                            <FeeTable collegeSecondry={collegeSecondry}/>
                        </div>
                        <div id="benefits">
                            <BenefitsSection college={college}/>
                        </div>
                        <div className="py-[64px]" id="compare">
                            <CompareCollegesCTA/>
                        </div>
                        <div id="degree">
                            <DegreeSection  college={college}/>
                        </div>
                        <div id="hiring">
                            <HiringPartnersSection
                                logos={college?.university_info?.placement?.partners || []}
                                name={college?.university_info?.name || ''}
                            />
                        </div>
                        <div id="faq">
                            <FaqsSection faqs={college?.university_info?.faqs || []}/>
                        </div>
                        <div id="contact">
                            <ContactUsSection/>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    );
};

export default CoursePageDesktop;
