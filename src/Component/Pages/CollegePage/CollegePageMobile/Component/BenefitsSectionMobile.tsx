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
    const benefitsFromAPI = college?.university_info?.benefits || college?.university_info?.placement?.benefits || [];

    const benefits = benefitsFromAPI
        .filter((benefit) => benefit && benefit.trim() !== "")
        .slice(0, 6);

    return (
        <section
            className="w-full py-8 relative bg-white"
            aria-labelledby="benefits-heading"
        >
            <header>
                <h2
                    id="benefits-heading"
                    className="text-[#024B53] font-[Outfit] text-[28px] font-semibold mb-3">

                    Benefits of NIU Online
                </h2>

                <p className="text-[#515150] font-[Outfit] text-[14px] mb-8">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </p>
            </header>

            <CentralImageMobile img={college?.university_info?.banner_image || ""} />

            <div className="grid grid-cols-2 gap-4 max-w-[640px] mx-auto mb-8">
                {benefits.map((benefit, idx) => (
                    <BenefitCardMobile key={idx}>
                        {benefit}
                    </BenefitCardMobile>
                ))}
            </div>
        </section>
    );
};
