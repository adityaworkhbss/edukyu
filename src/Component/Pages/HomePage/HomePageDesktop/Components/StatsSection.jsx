const StatsSection = () => {
    const stats = [
        { number: "197+", label: "Courses" },
        { number: "9000+", label: "Alumni" },
        { number: "10+", label: "Universities" },
        { number: "8+", label: "years of Experience" }
    ];

    return (
        <div className="py-[64px]">
            <section className="py-[40px] mx-[56px] bg-hero-bg text-hero-text bg-[#679EA4] rounded-[12px]">
                <div className="">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <div className="text-white text-center font-[Outfit] text-[56px] font-semibold leading-none">
                                    {stat.number}
                                </div>

                                <div className="text-white text-center font-[Outfit] text-[36px] font-medium leading-none opacity-90">
                                    {stat.label}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StatsSection;