import { ImageIcon, Instagram, Linkedin } from "lucide-react";

const OurProudGraduates = () => {
    const graduates = Array.from({ length: 9 }, (_, i) => ({
        id: i + 1,
        image: "placeholder"
    }));

    return (
        <section className="py-16 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Our Proud Graduates
                    </h2>
                    <p className="text-muted-foreground text-lg">Lorem Epsum</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                    {/* Left side - Main graduate image */}
                    <div className="w-full">
                        <div className="aspect-[4/3] bg-program-image rounded-lg flex items-center justify-center">
                            <ImageIcon size={64} className="text-secondary opacity-60" />
                        </div>
                    </div>

                    {/* Right side - Graduate info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium">
                                Logo
                            </div>
                            <div className="flex-1 h-px bg-border"></div>
                            <div className="bg-program-image text-foreground px-4 py-2 rounded-md text-sm font-medium">
                                Logo
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-4">
                                Lorem Ipsum
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Lorem Ipsum is a placeholder text used in the graphic, print. Lorem Ipsum is a placeholder text used in the graphic, print. Lorem Ipsum is a placeholder text used in the graphic, print. Lorem Ipsum is a placeholder text used in the graphic, print.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <Instagram size={24} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                            <Linkedin size={24} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                        </div>
                    </div>
                </div>

                {/* Graduate avatars row */}
                <div className="flex justify-center gap-3">
                    {graduates.map((graduate, index) => (
                        <div
                            key={graduate.id}
                            className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 ${
                                index === 4
                                    ? "bg-secondary ring-2 ring-secondary"
                                    : "bg-program-image hover:bg-accent"
                            }`}
                        >
                            <ImageIcon size={16} className="text-secondary opacity-60" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurProudGraduates;