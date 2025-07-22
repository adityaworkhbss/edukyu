import React from 'react';

export const HeroSection = () => {
    return (
        <section className="bg-white self-stretch flex w-full flex-col overflow-hidden items-stretch font-normal pb-[111px]">
            <div
                className="self-center mt-14 px-[19px] text-[20px] font-semibold text-[#181D27] font-outfit leading-normal"
            >
                Let’s Help Navigate Your Career & Expand Your Skillset
            </div>

            <div className="self-center mt-3 px-[19px] text-[14px] font-normal leading-normal text-[#535862] font-outfit">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </div>

            <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6405fd06c99d97c3f8c90c6f6b73d72df04f0b76?placeholderIfAbsent=true"
                alt="Career navigation illustration"
                className="w-[358px] h-[318px] flex-shrink-0 aspect-[179/159] object-contain mb-[-22px] mt-3"
            />

        </section>
    );
};
