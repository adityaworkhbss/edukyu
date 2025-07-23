import Image from "next/image";
import StudentPlaced from "@/../public/Resources/Images/StudentPlaced.png";

const OurStudentPlaced = () => {
    const companies = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        name: i === 6 ? "Name College name" : "Company Logo", // Highlight the 7th item
        isHighlighted: i === 6,
    }));

    return (
        <section className="py-[64px] px-[56px]">
            <div>
                <div className="mb-[40px]">
                    <h2 className="text-[32px] font-semibold text-[#181D27] font-[Outfit] mb-4 leading-normal">
                        Our Student Placed
                    </h2>
                    <p className="text-[24px] font-normal text-[#9B9B9B] font-[Outfit] leading-normal">
                        Lorem Epsum
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {companies.map((company) => (
                        <div
                            key={company.id}
                            className={`aspect-square rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md relative 
                            
                            `}
                        >
                            <Image
                                src={StudentPlaced}
                                alt="Student Placed"
                                fill
                                className="object-cover"
                            />

                            {company.isHighlighted && (
                                <div className="absolute bottom-0 left-0 right-0 text-center bg-gradient-to-t from-white/50 to-white/20 backdrop-blur-md"
                                >
                                    <div className="text-white text-center font-[Outfit] text-[20px] font-normal leading-normal">
                                        Tanish Pandey
                                    </div>

                                    <div className="text-center font-[Outfit] text-[18px] font-normal leading-normal text-white/60">
                                        NMIMS 2025 July
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
