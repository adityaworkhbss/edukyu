import React from 'react';
import { BenefitCard } from './UI/BenefitCard';
import { CentralImage } from './UI/CentralImage';
import GridComponent from "@/GlobalComponent/GridComponent";
import { CoursePageData } from '@/Data Model/CoursePage/CoursePageData';

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

export const BenefitsSection: React.FC<{ college?: College; course?: any }> = ({ college, course }) => {
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

// Static fallback positions
    
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
            className="w-full h-full pt-[64px] bg-white mx-auto my-0 p-0 max-md:max-w-full max-md:h-auto max-md:p-5 max-sm:p-4 max-w-full overflow-hidden "
            aria-labelledby="benefits-heading"
        >
            <header className=''>
                <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4 break-words w-full" style={{ width: 'calc(200% / 3 - 32px)' }}>
                    Benefits of {course?.page?.title || course?.page?.university || 'Program'}
                </div>
                <div className="text-[20px] pt-[16px] font-normal text-[#535862] font-[Outfit] leading-[30px] break-words w-full  pb-8 " style={{ width: 'calc(200% / 3 - 32px)' }}>
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </div>
            </header>
           <div className="relative">
               <div className="max-w-[1200px] mx-auto">
                   <div className="flex items-start justify-between gap-6 max-md:flex-col max-md:items-center">
                       {/* Left column (3 cards) */}
                       <div className="w-[33.333%] max-md:w-full flex flex-col gap-6">
                           {benefits.slice(0, 3).map((benefit) => (
                               <BenefitCard key={benefit.id} className="relative w-full">
                                   {benefit.text.length > 80
                                       ? benefit.text.substring(0, 80) + "..."
                                       : benefit.text}
                               </BenefitCard>
                           ))}
                       </div>

                       {/* Center column (central image) */}
                       <div className="flex-shrink-0 flex items-center justify-center">
                           <div className="w-[278px] h-auto">
                               <CentralImage img={course?.page?.logo || college?.university_info?.banner_image || ""} />
                           </div>
                       </div>

                       {/* Right column (3 cards) */}
                       <div className="w-[33.333%] max-md:w-full flex flex-col gap-6">
                           {benefits.slice(3, 6).map((benefit) => (
                               <BenefitCard key={benefit.id} className="relative w-full">
                                   {benefit.text.length > 80
                                       ? benefit.text.substring(0, 80) + "..."
                                       : benefit.text}
                               </BenefitCard>
                           ))}
                       </div>
                   </div>
               </div>
           </div>
        </section>
    );
};

export default BenefitsSection;