import { ImageIcon } from "lucide-react";

const OurStudentPlaced = () => {
    const companies = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        name: i === 6 ? "Name College name" : "Company Logo", // Highlight the 7th item
        isHighlighted: i === 6
    }));

    return (
        <section className="py-16 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Our Student Placed
                    </h2>
                    <p className="text-muted-foreground text-lg">Lorem Epsum</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {companies.map((company) => (
                        <div
                            key={company.id}
                            className={`aspect-square rounded-lg flex flex-col items-center justify-center p-4 transition-all duration-200 hover:shadow-md relative ${
                                company.isHighlighted
                                    ? "bg-white border-2 border-accent shadow-lg"
                                    : "bg-program-image hover:bg-accent"
                            }`}
                        >
                            <ImageIcon size={24} className="text-secondary opacity-60 mb-2" />
                            {company.isHighlighted && (
                                <div className="absolute bottom-2 left-2 right-2 text-center">
                                    <div className="bg-white text-foreground text-xs font-medium px-2 py-1 rounded">
                                        {company.name}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurStudentPlaced;