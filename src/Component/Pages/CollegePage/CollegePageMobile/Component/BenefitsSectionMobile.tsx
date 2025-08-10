import React from "react";
import { BenefitCardMobile } from "./UI/BenefitCardMobile";
import { CentralImageMobile } from "./UI/CentralImageMobile";

interface UniversityInfo {
    banner_image?: string;
    benefits?: string[]; // ✅ Added benefits array from API
    placement?: {
        benefits?: string[]; // if placement also contains benefits
    };
}

interface College {
    university_info?: UniversityInfo;
}

export const BenefitsSectionMobile: React.FC<{ college: College }> = ({ college }) => {
    // ✅ Safely access benefits array from API
    const benefitsFromAPI = college?.university_info?.benefits || [];

    const benefits = benefitsFromAPI
        .filter((benefit) => benefit && benefit.trim() !== "")
        .slice(0, 6);

    return (
        <section
            className="w-full pt-[64px] relative bg-white mx-auto p-0
                max-md:max-w-full max-md:p-5 max-sm:p-4"
            aria-labelledby="benefits-heading"
        >
            <header>
                <h2
                    id="benefits-heading"
                    className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4"
                >
                    Benefits of NIU Online
                </h2>

                <p className="text-[20px] pt-[16px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-[30px]">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </p>
            </header>

            <CentralImageMobile img={college?.university_info?.banner_image || ""} />

            <div className="grid grid-cols-2 gap-4 max-w-[640px] mx-auto">
                {benefits.map((benefit, idx) => (
                    <BenefitCardMobile key={idx}>
                        {benefit}
                    </BenefitCardMobile>
                ))}
            </div>
        </section>
    );
};
