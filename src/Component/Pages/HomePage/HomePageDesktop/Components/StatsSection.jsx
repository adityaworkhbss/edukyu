const StatsSection = () => {
    const stats = [
        { number: "197+", label: "Courses" },
        { number: "9000+", label: "Alumni" },
        { number: "10+", label: "Universities" },
        { number: "8+", label: "years of Experience" }
    ];

    return (
        <section className="py-16 px-6 bg-hero-bg text-hero-text">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-2">
                            <div className="text-4xl lg:text-5xl xl:text-6xl font-bold">
                                {stat.number}
                            </div>
                            <div className="text-lg lg:text-xl opacity-90">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;