import HeroSectionMobile, {HeroSection} from "@/Component/Pages/HomePage/HomePageMobile/Components/HeroSectionMobile";
import {PartnerUniversitiesMobile} from "@/Component/Pages/HomePage/HomePageMobile/Components/PartnerUniversitiesMobile";
import {ExploreProgramsMobile} from "@/Component/Pages/HomePage/HomePageMobile/Components/ExploreProgramsMobile";
import {HelpMeChoose} from "@/Component/Pages/HomePage/HomePageMobile/Components/HelpMeChoose";
import {StudentPlacementMobile} from "@/Component/Pages/HomePage/HomePageMobile/Components/StudentPlacementMobile";
import {ContactSection} from "@/Component/Pages/HomePage/HomePageMobile/Components/ContactSectiom";
import {BlogSection} from "@/Component/Pages/HomePage/HomePageMobile/Components/BlogsSectionMobile";
import StatsSectionMobile, {StatsSection} from "@/Component/Pages/HomePage/HomePageMobile/Components/StatsSectionMobile";
import OurProudGraduateMobile, {OurProudGraduate} from "@/Component/Pages/HomePage/HomePageMobile/Components/OurProudGraduateMobile";
import CompareCollegeCTAMobile from "@/Component/Pages/HomePage/HomePageMobile/Components/CompareCollegeCTAMobile";
import AcademicConverterMobile from "@/Component/Pages/HomePage/HomePageMobile/Components/AcademicConverterMobile";
import HelpSectionMobile from "@/Component/Pages/HomePage/HomePageMobile/Components/HelpSectionMobile";
import CollegeMunchBannerMobile from "@/Component/Pages/HomePage/HomePageMobile/Components/CollegeMunchBannerMobile";


const HomePageMobile = () => {
    return (
        <div className="bg-white flex w-full mt-4 flex-col overflow-hidden mx-auto pb-8">

            <div className="bg-white self-stretch flex w-full flex-col overflow-hidden items-stretch font-normal pb-[64px]">
                <HeroSectionMobile />
            </div>

            <main className="relative flex w-full text-left flex-col px-[20px] z-0">
                <PartnerUniversitiesMobile />
                <ExploreProgramsMobile />
                <OurProudGraduateMobile />
                <CompareCollegeCTAMobile />
            </main>

            {/*<HelpMeChoose />*/}



            <div className="self-stretch flex w-full flex-col items-stretch px-[20px]">
                <AcademicConverterMobile />
                <StudentPlacementMobile />
            </div>

            <StatsSectionMobile />
            <HelpSectionMobile />

            <div className="self-stretch flex w-full flex-col items-stretch px-[19px]">

                <CollegeMunchBannerMobile/>
                <BlogSection />
            </div>
        </div>
    );
};

export default HomePageMobile;
