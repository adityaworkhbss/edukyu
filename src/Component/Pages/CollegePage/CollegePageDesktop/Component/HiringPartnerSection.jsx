import GridComponent from "@/GlobalComponent/GridComponent";

const HiringPartnersSection = ({ logos, name }) => {
    return (
        <section className="bg-white py-12">
            <GridComponent gridStart={0} gridEnd={6}>
                <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4">
                    Hiring Partner of {name}
                </div>
            </GridComponent>
            <GridComponent gridStart={0} gridEnd={6}>
                <div className="text-[20px] pt-[16px] pb-[24px] font-normal text-[#535862] font-[Outfit] leading-[30px]">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </div>
            </GridComponent>

            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-8 px-1">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Partner ${index + 1}`}
                            className="h-[60px] object-contain flex-shrink-0"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HiringPartnersSection;
