import { ImageIcon } from "lucide-react";

const HelpMeChoose = () => {
    return (
        <section className="py-16 px-6 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left side - Form */}
                    <div className="bg-hero-bg text-hero-text p-8 rounded-lg relative z-10">
                        <h2 className="text-3xl font-bold mb-4">
                            Help me Choose
                        </h2>
                        <p className="text-lg opacity-90 mb-6">Lorem Epsum</p>

                        <div className="space-y-4">
                            <p className="text-lg">
                                Q1. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>

                            <div className="space-y-2">
                <textarea
                    placeholder="Suggestion: Lorem ipsum dolor sit amet, consectetur adipiscing...."
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/70 min-h-[100px] resize-none rounded-md px-3 py-2"
                />
                            </div>

                            <button className="bg-white text-foreground hover:bg-white/90 mt-6 px-4 py-2 rounded-md font-medium transition-colors">
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* Right side - Image placeholders */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square bg-program-image rounded-lg flex items-center justify-center">
                                <ImageIcon size={32} className="text-secondary opacity-60" />
                            </div>
                            <div className="aspect-[3/4] bg-program-image rounded-lg flex items-center justify-center">
                                <ImageIcon size={32} className="text-secondary opacity-60" />
                            </div>
                        </div>
                        <div className="aspect-[4/3] bg-program-image rounded-lg flex items-center justify-center">
                            <ImageIcon size={48} className="text-secondary opacity-60" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpMeChoose;