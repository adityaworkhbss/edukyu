import { useState } from "react";
import { ImageIcon } from "lucide-react";

const ExplorePrograms = () => {
    const [activeTab, setActiveTab] = useState("PG");

    const programs = Array.from({ length: 4 }, (_, i) => ({
        id: i + 1,
        title: "MBA",
        description: "Lorem Ipsum",
        details: "Lorem Ipsum"
    }));

    const tabs = [
        { id: "PG", label: "PG" },
        { id: "UG", label: "UG" },
        { id: "DC", label: "Diploma/Certificate" }
    ];

    return (
        <section className="px-[56px] bg-background">
            <div className="">
                <div className="">
                    <div className="text-[32px] font-semibold text-black font-[Outfit] leading-normal">
                        Explore Programs
                    </div>

                    <div className="text-[24px] pt-[12px] pb-[20px] font-normal text-[#9B9B9B] font-[Outfit] leading-normal">
                        Lorem Epsum
                    </div>

                    <div className="flex gap-0 bg-[#CDCDCD] rounded-lg p-1 w-fit">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex w-[182px] px-[20px] py-[12px] justify-center items-center gap-[10px] rounded-md text-[16px] font-semibold font-[Outfit] leading-normal transition-colors
        ${
                                    activeTab === tab.id
                                        ? "bg-[#357E86] text-white"
                                        : "bg-[#CDCDCD] text-[#383837] border-r border-[#9B9B9B] hover:text-black"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {programs.map((program) => (
                        <div key={program.id} className="bg-program-card border border-border rounded-lg shadow-sm">
                            <div className="p-0">
                                <div className="aspect-[4/3] bg-program-image rounded-t-lg flex items-center justify-center">
                                    <ImageIcon size={48} className="text-secondary opacity-60" />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-xl text-foreground mb-2">
                                        {program.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-1">
                                        {program.description}
                                    </p>
                                    <p className="text-muted-foreground text-sm">
                                        {program.details}
                                    </p>
                                </div>
                            </div>
                            <div className="p-6 pt-0 flex items-center">
                                <button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-md font-medium transition-colors">
                                    View Program
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExplorePrograms;