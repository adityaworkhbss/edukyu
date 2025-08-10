import React from 'react';
import { BenefitCard } from './UI/BenefitCard';
import { CentralImage } from './UI/CentralImage';
import GridComponent from "@/GlobalComponent/GridComponent";

interface UniversityInfo {
    banner_image?: string;
    benefits?: string[]; // benefits array from API
    placement?: {
        benefits?: string[];
    };
}

interface College {
    university_info?: UniversityInfo;
}

export const BenefitsSection: React.FC<{ college: College }> = ({ college }) => {
    // Get benefits array safely, fallback to static array if none
    const benefitsFromAPI = college?.university_info?.benefits || [];

    // If API benefits empty, fallback to static hardcoded benefits with positions
    const staticBenefits = [
        {
            id: 1,
            text: "Online Manipal University offers students a wide range of fully online, accredited degree and diploma courses, totaling over 10 options.",
            position: "left-6 top-[214px] max-md:relative max-md:w-full max-md:max-w-[400px] max-md:h-auto max-md:mt-0 max-md:mb-5 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-full max-sm:mb-4 max-sm:p-3"
        },
        {
            id: 2,
            text: "These courses have been approved by the UGC for online delivery.",
            position: "left-6 top-[372px] max-md:relative max-md:w-full max-md:max-w-[400px] max-md:h-auto max-md:mt-0 max-md:mb-5 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-full max-sm:mb-4 max-sm:p-3"
        },
        {
            id: 3,
            text: "Students can choose from undergraduate programs like BCA, BBA, and B. Com, as well as postgraduate programs like MCA, MBA, M. Com, and MA JMC, all of which are offered in online mode.",
            position: "left-6 top-[540px] max-md:relative max-md:w-full max-md:max-w-[400px] max-md:h-auto max-md:mt-0 max-md:mb-5 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-full max-sm:mb-4 max-sm:p-3"
        },
        {
            id: 4,
            text: "Additionally, the university conducts examinations online, with remote proctoring through the LMS.",
            position: "left-[662px] top-[214px] max-md:relative max-md:w-full max-md:max-w-[400px] max-md:h-auto max-md:mt-0 max-md:mb-5 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-full max-sm:mb-4 max-sm:p-3"
        },
        {
            id: 5,
            text: "To facilitate easy financing, the university also offers no-cost EMI options.",
            position: "left-[662px] top-[372px] max-md:relative max-md:w-full max-md:max-w-[400px] max-md:h-auto max-md:mt-0 max-md:mb-5 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-full max-sm:mb-4 max-sm:p-3"
        },
        {
            id: 6,
            text: "Moreover, scholarship opportunities are available for government employees, defense personnel, meritorious students, and differently-abled individuals.",
            position: "left-[663px] top-[530px] max-md:relative max-md:w-full max-md:max-w-[400px] max-md:h-auto max-md:mt-0 max-md:mb-5 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-full max-sm:mb-4 max-sm:p-3"
        }
    ];

    // Compose final benefits array with positions if possible
    // If benefitsFromAPI has data, map them without position (or you can assign default positions)
    // If no data, use staticBenefits (with positions for absolute positioning)
    const benefits = benefitsFromAPI
        .filter((b) => b && b.trim() !== "")
        .slice(0, 6)
        .map((text, idx) => ({
            id: idx + 1,
            text,
            position: "", // add this
        }));


    return (
        <section
            className="w-full h-[738px] pt-[64px] relative bg-white mx-auto my-0 p-0 max-md:max-w-full max-md:h-auto max-md:p-5 max-sm:p-4"
            aria-labelledby="benefits-heading"
        >
            <header>
                <GridComponent lastUsedGridEnd={0} gridStart={0} gridEnd={6}>
                    <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4">
                        Benefits of NIU Online
                    </div>
                </GridComponent>
                <GridComponent lastUsedGridEnd={0} gridStart={0} gridEnd={6}>
                    <div className="text-[20px] pt-[16px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-[30px]">
                        Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                    </div>
                </GridComponent>
            </header>

            <CentralImage img={college?.university_info?.banner_image || ""} />

            {benefits.map((benefit) => (
                <BenefitCard
                    key={benefit.id}
                    className={`absolute ${benefit.position || ""}`}
                >
                    {benefit.text}
                </BenefitCard>
            ))}
        </section>
    );
};
