import Image from "next/image";
import StudentPlaced from "@/../public/Resources/Images/StudentPlaced.png";
import GridComponent from "@/GlobalComponent/GridComponent";

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
                    <GridComponent gridStart={0} gridEnd={7}>
                        <div className="text-[48px] font-semibold text-[#024B53] font-[Outfit] leading-normal mb-4">
                            Our Student Placed
                        </div>
                    </GridComponent>


                    <GridComponent gridStart={0} gridEnd={7}>
                        <div className="text-[20px] font-normal text-[#515150] font-[Outfit] leading-normal mb-[64px]">
                            Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                        </div>
                    </GridComponent>

                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {companies.map((company) => (
                        <div
                            key={company.id}
                            className={`aspect-square rounded-[16px] overflow-hidden transition-all duration-200 hover:shadow-md relative bg-[url('/path/to/image.jpg')] bg-lightgray bg-center bg-cover bg-no-repeat`}
                        >
                            <Image
                                src={StudentPlaced}
                                alt="Student Placed"
                                fill
                                className="object-cover"
                            />

                            {company.isHighlighted && (
                                <div className="absolute bottom-0 left-0 right-0 text-center bg-gradient-to-t from-white/50 to-white/20 backdrop-blur-md">
                                    <div className="text-white font-[Outfit] text-[20px] font-normal leading-normal">
                                        Tanish Pandey
                                    </div>
                                    <div className="text-white/60 font-[Outfit] text-[18px] font-normal leading-normal">
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
