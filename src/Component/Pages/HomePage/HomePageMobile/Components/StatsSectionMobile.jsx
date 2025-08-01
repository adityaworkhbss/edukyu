import React from "react";

const StatsSectionMobile = () => {
    const stats = [
        { number: "197+", label: "Courses" },
        { number: "9000+", label: "Alumni" },
        { number: "10+", label: "Universities" },
        { number: "8+", label: "years of Experience" }
    ];

    return (
        <div className="py-[64px]">
            <section className="py-[32px] px-[20px] bg-hero-bg text-hero-text bg-[#024B53]">

                <div className="text-white font-[Outfit] text-[28px] font-semibold leading-normal">
                    Why Edukyu?
                </div>


                <div className="py-[64px]">
                    <div className="grid grid-cols-1 gap-8 text-center items-center">
                        {stats.map((stat, index) => (
                            <React.Fragment key={index}>
                                <div className="space-y-[16px] col-span-1">
                                    <div className="text-white text-center font-[Outfit] text-[56px] font-semibold leading-normal">
                                        {stat.number}
                                    </div>
                                    <div className="text-white text-center font-[Outfit] text-[24px] font-normal leading-normal">
                                        {stat.label}
                                    </div>
                                </div>

                                {index < stats.length - 1 && (
                                    <div className="h-px w-[127px] bg-white/50 mx-auto my-[24px]" />
                                )}
                            </React.Fragment>
                        ))}

                    </div>
                </div>

            </section>
        </div>
    );
};

export default StatsSectionMobile;