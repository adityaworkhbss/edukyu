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
import Benefits, {BenefitsSection} from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/BenefitsSection";
import CompareCollegesCTA from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/CompareCollegeCTA";
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
import FaqsSection from "@/Component/Pages/CollegePage/CollegePageDesktop/Component/FaqsSection";
import HiringPartnersSection from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/HiringPartnerSection";


const CoursePageDesktop = ({college, collegeSecondry}) => {

    return (
        <div>
            <div>
                <HeroPage college={college} />
            </div>

            <div className="px-[56px] max-w-full overflow-x-hidden">



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
                        
                       
                        <div id="benefits">
                            <BenefitsSection college={college}/>
                        </div>
                        <div id="semester">
                            <Semester />
                        </div>
                        <div id="faculty">
                            <OurFaculty />
                        </div>
                        <div id="eligibilityCriteria">
                            <EligibilityCriteria />
                        </div>
                        <div id="eligibilityCriteriaimage">
                            <EligibilityCriteriaImage />
                        </div>
                        <div id="admission">
                            <AdmissionProcess college={college}/>
                        </div>
                       
                        
                        <div className="py-[64px]" id="compare">
                            <CompareCollegesCTA/>
                        </div>
                        <div id="degree">
                            <DegreeSection  college={college}/>
                        </div>
                        <div id="toolscertificate">
                            <ToolsCertificate />
                        </div>
                        <div id="jobroles">
                            <JobRoles />
                        </div>
                       
                        <div id="hiring">
                            <HiringPartnersSection
                                logos={college?.university_info?.placement?.partners || []}
                                name={college?.university_info?.name || ''}
                            />

                            <div id="collegemunch">
                                <CollegeMunchBanner />
                            </div>
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
