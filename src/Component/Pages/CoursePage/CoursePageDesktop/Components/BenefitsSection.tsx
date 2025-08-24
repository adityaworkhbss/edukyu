import React from 'react';
import { BenefitCard } from './UI/BenefitCard';
import { CentralImage } from './UI/CentralImage';
import GridComponent from "@/GlobalComponent/GridComponent";

interface UniversityInfo {
    name?: string;
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
    const benefitsFromAPI = college?.university_info?.benefits
        || college?.university_info?.placement?.benefits
        || [];

// Static fallback positions
    const staticBenefits = [
        { id: 1, position: "left-6 top-[214px] max-md:relative max-md:w-full max-md:max-w-[400px] max-md:h-auto max-md:mt-0 max-md:mb-5 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-full max-sm:mb-4 max-sm:p-3" },
        { id: 2, position: "left-6 top-[372px] max-md:relative max-md:w-full max-md:max-w-[400px] max-md:h-auto max-md:mt-0 max-md:mb-5 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-full max-sm:mb-4 max-sm:p-3" },
        { id: 3, position: "left-6 top-[540px] max-md:relative max-md:w-full max-md:max-w-[400px] max-md:h-auto max-md:mt-0 max-md:mb-5 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-full max-sm:mb-4 max-sm:p-3" },
        { id: 4, position: "left-[662px] top-[214px] max-md:relative max-md:w-full max-md:max-w-[400px] max-md:h-auto max-md:mt-0 max-md:mb-5 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-full max-sm:mb-4 max-sm:p-3" },
        { id: 5, position: "left-[662px] top-[372px] max-md:relative max-md:w-full max-md:max-w-[400px] max-md:h-auto max-md:mt-0 max-md:mb-5 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-full max-sm:mb-4 max-sm:p-3" },
        { id: 6, position: "left-[663px] top-[530px] max-md:relative max-md:w-full max-md:max-w-[400px] max-md:h-auto max-md:mt-0 max-md:mb-5 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-full max-sm:mb-4 max-sm:p-3" }
    ];

// Prepare benefits with merged positions
    const benefits = benefitsFromAPI
        .filter((b) => b && b.trim() !== "") // remove empty
        .slice(0, 6) // take only first 6
        .map((text, idx) => ({
            id: staticBenefits[idx]?.id || idx + 1,
            text,
            position: staticBenefits[idx]?.position || ""
        }));



    return (
        <section
            className="w-full h-[738px] pt-[64px] relative bg-white mx-auto my-0 p-0 max-md:max-w-full max-md:h-auto max-md:p-5 max-sm:p-4 max-w-full overflow-hidden ml-0.5"
            aria-labelledby="benefits-heading"
        >
            <header>
                <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4 break-words w-[65%]">
                    Benefits of MBA Online
                </div>
                <div className="text-[20px] pt-[16px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-[30px] break-words w-[65%]">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </div>
            </header>

            <CentralImage  img={college?.university_info?.banner_image || ""} />

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
