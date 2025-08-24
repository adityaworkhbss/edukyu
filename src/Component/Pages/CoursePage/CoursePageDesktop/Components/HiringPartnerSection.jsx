import GridComponent from "@/GlobalComponent/GridComponent";

const HiringPartnersSection = ({ logos, name }) => {
    return (
        <section className="bg-white py-12 max-w-full overflow-hidden w-full ml-0.5">
            <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4 break-words w-[65%]">
                Hiring Partner of {name} Online
            </div>
            <div className="text-[20px] pt-[16px] pb-[24px] font-normal text-[#535862] font-[Outfit] leading-[30px] break-words w-[65%]">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </div>

            <div className="overflow-x-auto scrollbar-hide max-w-full">
                <div className="flex gap-8 px-1">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Partner ${index + 1}`}
                            className="h-[60px] object-contain flex-shrink-0 max-w-full"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HiringPartnersSection;
