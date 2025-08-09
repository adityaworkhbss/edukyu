
import React from 'react';
import { BenefitCardMobile } from './UI/BenefitCardMobile'
import { CentralImageMobile } from './UI/CentralImageMobile';
import GridComponent from "@/GlobalComponent/GridComponent";

export const BenefitsSectionMobile: React.FC = () => {
    const benefits = [
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

    return (
        <section
            className="w-full h-[738px] pt-[64px] relative bg-white mx-auto my-0 p-0 max-md:max-w-full max-md:h-auto max-md:p-5 max-sm:p-4"
            aria-labelledby="benefits-heading"
        >
            <header>
                    <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4">
                        Benefits of NIU Online
                    </div>

                    <div className="text-[20px] pt-[16px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-[30px]">
                        Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                    </div>
            </header>

            <CentralImageMobile />

            <div className="grid grid-cols-2 gap-4 max-w-[640px] mx-auto">
                {benefits.map((benefit) => (
                    <BenefitCardMobile
                        key={benefit.id}
                    >
                        {benefit.text}
                    </BenefitCardMobile>
                ))}
            </div>



        </section>
    );
};

