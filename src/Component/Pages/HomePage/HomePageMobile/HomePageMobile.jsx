import HeroSectionMobile, {HeroSection} from "@/Component/Pages/HomePage/HomePageMobile/Components/HeroSectionMobile";
import {PartnerUniversitiesMobile} from "@/Component/Pages/HomePage/HomePageMobile/Components/PartnerUniversitiesMobile";
import {ExplorePrograms} from "@/Component/Pages/HomePage/HomePageMobile/Components/ExplorePrograms";
import {HelpMeChoose} from "@/Component/Pages/HomePage/HomePageMobile/Components/HelpMeChoose";
import {AcademicConverter} from "@/Component/Pages/HomePage/HomePageMobile/Components/AcademicConverter";
import {StudentPlacement} from "@/Component/Pages/HomePage/HomePageMobile/Components/StudentPlacement";
import {ContactSection} from "@/Component/Pages/HomePage/HomePageMobile/Components/ContactSectiom";
import {BlogSection} from "@/Component/Pages/HomePage/HomePageMobile/Components/BlogsSection";
import StatsSectionMobile, {StatsSection} from "@/Component/Pages/HomePage/HomePageMobile/Components/StatsSectionMobile";
import {OurProudGraduate} from "@/Component/Pages/HomePage/HomePageMobile/Components/OurProudGraduate";


const HomePageMobile = () => {
    return (
        <div className="bg-white flex w-full mt-4 flex-col overflow-hidden mx-auto pb-8">

            <div className="bg-white self-stretch flex w-full flex-col overflow-hidden items-stretch font-normal pb-[111px]">
                <HeroSectionMobile />
            </div>

            <main className="flex w-full text-left flex-col px-[20px]">
                <PartnerUniversitiesMobile />
                <ExplorePrograms />
                <OurProudGraduate />
            </main>

            <HelpMeChoose />

            <div className="self-stretch flex w-full flex-col items-stretch px-[19px]">
                <AcademicConverter />
                <StudentPlacement />
            </div>

            <StatsSectionMobile />

            <div className="self-stretch flex w-full flex-col items-stretch px-[19px]">
                <ContactSection />
                <BlogSection />
            </div>
        </div>
    );
};

export default HomePageMobile;
