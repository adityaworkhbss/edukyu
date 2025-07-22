import { ImageIcon } from "lucide-react";

const ContentShowcase = () => {
    const contentBlocks = [
        {
            id: 1,
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is placeholder text used in the graphic, print. Lorem Ipsum is placeholder text used in the graphic, print. Lorem Ipsum is placeholder text used in the graphic, print. Lorem Ipsum is placeholder text used in the graphic, print."
        },
        {
            id: 2,
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is placeholder text used in the graphic, print. Lorem Ipsum is placeholder text used in the graphic, print. Lorem Ipsum is placeholder text used in the graphic, print. Lorem Ipsum is placeholder text used in the graphic, print."
        },
        {
            id: 3,
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is placeholder text used in the graphic, print. Lorem Ipsum is placeholder text used in the graphic, print. Lorem Ipsum is placeholder text used in the graphic, print. Lorem Ipsum is placeholder text used in the graphic, print."
        }
    ];

    return (
        <section className="py-16 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left column - Content blocks */}
                    <div className="space-y-8">
                        {contentBlocks.map((block) => (
                            <div key={block.id} className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-32 h-24 bg-program-image rounded-lg flex items-center justify-center">
                                        <ImageIcon size={24} className="text-secondary opacity-60" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-foreground mb-3">
                                        {block.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {block.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right column - Large content block */}
                    <div className="space-y-6">
                        <div className="aspect-[4/3] bg-program-image rounded-lg flex items-center justify-center">
                            <ImageIcon size={64} className="text-secondary opacity-60" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                Lorem Ipsum
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Lorem Ipsum is placeholder text used in the graphic, print. Lorem Ipsum is placeholder text used in the graphic, print. Lorem Ipsum is placeholder text used in the graphic, print. Lorem Ipsum is placeholder text used in the graphic, print.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentShowcase;