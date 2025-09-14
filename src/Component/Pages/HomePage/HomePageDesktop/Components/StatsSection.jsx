import React from "react";

const StatsSection = () => {
    const stats = [
        { number: "197+", label: "Courses" },
        { number: "9000+", label: "Alumni" },
        { number: "10+", label: "Universities" },
        { number: "8+", label: "years of Experience" }
    ];

    return (
        <div className="py-[32px]">
            <section className="py-[64px] px-[56px] bg-hero-bg text-hero-text bg-[#024B53]">

                <div className="text-white font-[Outfit] text-[48px] font-semibold leading-none">
                    Why Edukyu ?
                </div>

                <div className="py-[64px]">
                    <div className="grid grid-cols-2 lg:grid-cols-7 gap-8 text-center items-center">
                        {stats.map((stat, index) => (
                            <React.Fragment key={index}>
                                <div className="space-y-[16px] col-span-1">
                                    <div className="text-white text-center font-[Outfit] text-[56px] font-semibold leading-none">
                                        {stat.number}
                                    </div>
                                    <div className="text-white text-center font-[Outfit] text-[24px] font-normal leading-none">
                                        {stat.label}
                                    </div>
                                </div>

                                {/* Only insert a divider after every item except the last one */}
                                {index < stats.length - 1 && (
                                    <div className="hidden lg:block w-px h-[127px] bg-white/50 col-span-1 mx-auto" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    );
};

export default StatsSection;