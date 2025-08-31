import React from "react";
import { BenefitCardMobile } from "./UI/BenefitCardMobile";
import { CentralImageMobile } from "./UI/CentralImageMobile";
import { CoursePageData } from '@/Data Model/CoursePage/CoursePageData';

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

export const BenefitsSectionMobile: React.FC<{ college?: College; course?: any }> = ({ college, course }) => {
    // Prefer course.programBenefits (course page), fallback to CoursePageData, then college strings
    const courseBenefits = course?.programBenefits || CoursePageData?.[0]?.online_mba?.programBenefits;

    // Normalize benefits to simple strings for the existing BenefitCard UI
    let benefitsFromAPI: string[] = [];
    if (Array.isArray(courseBenefits) && courseBenefits.length) {
        benefitsFromAPI = courseBenefits.map((b: any) => {
            if (!b) return '';
            // If benefit is an object with title, use title (keep UI compact)
            if (typeof b === 'object') return b.title || b.name || (b.description ? b.description : '');
            return String(b);
        }).filter(Boolean);
    } else {
        benefitsFromAPI = (college?.university_info?.benefits || college?.university_info?.placement?.benefits || []).filter(Boolean);
    }

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

                    Benefits of {course?.page?.title || course?.page?.university || 'Program'}
                </h2>

                <p className="text-[#515150] font-[Outfit] text-[14px] mb-8">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </p>
            </header>

            <CentralImageMobile img={course?.page?.logo || college?.university_info?.banner_image || ""} />

            <div className="grid grid-cols-2 gap-4 max-w-[640px] mx-auto mb-8">
                {benefits.map((benefit, idx) => (
                    <BenefitCardMobile key={idx}>
                        {benefit.length > 80 ? benefit.substring(0, 80) + "..." : benefit}
                    </BenefitCardMobile>
                ))}
            </div>
        </section>
    );
};
