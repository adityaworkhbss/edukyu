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
        { id: 1, position: "left-0 top-[14px] max-md:relative max-md:w-full max-md:max-w-[400px] max-md:h-auto max-md:mt-0 max-md:mb-5 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-full max-sm:mb-4 max-sm:p-3" },
        { id: 2, position: "left-0 top-[172px] max-md:relative max-md:w-full max-md:max-w-[400px] max-md:h-auto max-md:mt-0 max-md:mb-5 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-full max-sm:mb-4 max-sm:p-3" },
        { id: 3, position: "left-0 top-[340px] max-md:relative max-md:w-full max-md:max-w-[400px] max-md:h-auto max-md:mt-0 max-md:mb-5 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-full max-sm:mb-4 max-sm:p-3" },
        { id: 4, position: "left-[calc(66.66%_-_8px)] top-[14px] max-md:relative max-md:w-full max-md:max-w-[400px] max-md:h-auto max-md:mt-0 max-md:mb-5 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-full max-sm:mb-4 max-sm:p-3" },
        { id: 5, position: "left-[calc(66.66%_-_8px)] top-[172px] max-md:relative max-md:w-full max-md:max-w-[400px] max-md:h-auto max-md:mt-0 max-md:mb-5 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-full max-sm:mb-4 max-sm:p-3" },
        { id: 6, position: "left-[calc(66.66%_-_8px)] top-[340px] max-md:relative max-md:w-full max-md:max-w-[400px] max-md:h-auto max-md:mt-0 max-md:mb-5 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-full max-sm:mb-4 max-sm:p-3" }
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
            className="w-full h-[738px] pt-[64px] bg-white mx-auto my-0 p-0 max-md:max-w-full max-md:h-auto max-md:p-5 max-sm:p-4 max-w-full overflow-hidden "
            aria-labelledby="benefits-heading"
        >
            <header className=''>
                <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4 break-words w-full" style={{ width: 'calc(200% / 3 - 32px)' }}>
                    Benefits of {college?.university_info?.name || 'University'}
                </div>
                <div className="text-[20px] pt-[16px] font-normal text-[#535862] font-[Outfit] leading-[30px] break-words w-full " style={{ width: 'calc(200% / 3 - 32px)' }}>
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </div>
            </header>
            <div className=' relative'>
                <CentralImage img={college?.university_info?.banner_image || ""} />

                {benefits.map((benefit) => (
                    <BenefitCard
                        key={benefit.id}

                        className={`absolute ${benefit.position || ""} w-[calc(33.333%_-_32px)]`}
                    >
                        {benefit.text}
                    </BenefitCard>
                ))}
            </div>
        </section>
    );
};