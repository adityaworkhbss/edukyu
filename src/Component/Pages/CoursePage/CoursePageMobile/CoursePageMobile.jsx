import { useRef, useState, useEffect } from "react";
import HeroPageMobile from "@/Component/Pages/CoursePage/CoursePageMobile/Components/HeroPageMobile";
import RankAndAccrMobile from "@/Component/Pages/CoursePage/CoursePageMobile/Components/RankAndAccrMobile";
import CoursesMobile from "@/Component/Pages/CoursePage/CoursePageMobile/Components/CoursesMobile";
import SpecializationMobile from "@/Component/Pages/CoursePage/CoursePageMobile/Components/SpecializationMobile";
import { Semester } from "./Components/SemesterMobile";
import OurFacultyMobile from "@/Component/Pages/CoursePage/CoursePageMobile/Components/MeetOurFacultyMobile";
import EligibilityCriteria from "@/Component/Pages/CoursePage/CoursePageMobile/Components/EligibilityCriteriasMobile";
import EligibilityCriteriaImage from "./Components/EligibilityCriterias2Mobile";
import AdmissionProcessMobile from "@/Component/Pages/CoursePage/CoursePageMobile/Components/AdmissionProcessMobile";
import FeeTableMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/FeeTableMobile";
import Benefits, { BenefitsSectionMobile } from "@/Component/Pages/CoursePage/CoursePageMobile/Components/BenefitsSectionMobile";
import CompareCollegesCTAMobile from "@/Component/Pages/CollegePage/CollegePageMobile/Component/CompareCollegeCTAMobile";
import DegreeSectionMobile from "@/Component/Pages/CoursePage/CoursePageMobile/Components/DegreeSectionMobile";
import ToolsCertificate from "@/Component/Pages/CoursePage/CoursePageMobile/Components/ToolsCertificateMobile";
import JobRoles from "@/Component/Pages/CoursePage/CoursePageMobile/Components/JobRolesMobile";
import ContactFormMobile, {
    ContactUsSectionMobile
} from "@/Component/Pages/CollegePage/CollegePageMobile/Component/ContactUsSectionMobile";
import SidebarNavigationMobile from "@/Component/Pages/CoursePage/CoursePageMobile/Components/SidebarNavigationMobile";
import CollegeMunchBannerMobile from "@/Component/Pages/CoursePage/CoursePageMobile/Components/CollegeMunchBannerMobile";
import GridComponent from "@/GlobalComponent/GridComponent";
import collegePageMobile from "@/Component/Pages/CollegePage/CollegePageMobile/CollegePageMobile";
import FaqsSectionMobile from "@/Component/Pages/CoursePage/CoursePageMobile/Components/FaqsSectionMobile";
import HiringPartnersSectionMobile from "@/Component/Pages/CoursePage/CoursePageMobile/Components/HiringPartnerSectionMobile";
const CoursePageMobile = ({ course, collegeSecondry }) => {

    return (
        <div className="w-full">
            <HeroPageMobile course={course} />


            <div className="">
                <div className="pl-[20px] pr-[20px]">
                    <SidebarNavigationMobile />
                    < div id="ranking">
                        <RankAndAccrMobile course={course} />
                    </div>
                    {/* <div id="courses">
                        <CoursesMobile course={course} />
                    </div> */}
                    <div id="specialization">
                        <SpecializationMobile course={course} />
                    </div>
                    <div id="semester">
                        <Semester course={course} />
                    </div>
                    <div id="ourfaculty">
                        <OurFacultyMobile />
                    </div>
                    <div id="eligibilitycriteria">
                        <EligibilityCriteria course={course} />
                    </div>
                    <div id="eligibilitycriteriaimage">
                        <EligibilityCriteriaImage course={course} />
                    </div>
                    <div id="admission">
                        <AdmissionProcessMobile course={course} />
                    </div>
                    {/* <div id="fees">
                        <FeeTableMobile collegeSecondry={collegeSecondry} />
                    </div> */}
                    {/* <div id="benefits">
                        <BenefitsSectionMobile course={course} />
                    </div> */}
                    
                    <div id="degree">
                        <DegreeSectionMobile course={course} />
                    </div>
                    <div id="compare">
                        <CompareCollegesCTAMobile />
                    </div>
                     <div id="tools">
                        <ToolsCertificate course={course}/>
                    </div>
                    <div id="jobroles">
                        <JobRoles course={course} />
                    </div>
                    <div id="hiring">
                        <HiringPartnersSectionMobile course={course} />
                    </div>
                      <div>
                        <CollegeMunchBannerMobile/>
                    </div>
                    <div id="faq">
                        <FaqsSectionMobile course={course} />
                    </div>
                    <div id="contact">
                        <ContactUsSectionMobile />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CoursePageMobile;
