import GridComponent from "@/GlobalComponent/GridComponent";

const HiringPartnersSectionMobile = ({ logos }) => {
    return (
        <section className="bg-white py-10 px-4">
                <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4">
                    Hiring Partner of Manipal Online
                </div>
                <div className="text-[20px] pt-[16px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-[30px]">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </div>

            {/* Scrollable area */}
            <div className="overflow-x-auto scrollbar-hide">
                {/* 2-row grid inside a flex container so it scrolls */}
                <div className="grid grid-rows-2 grid-flow-col gap-x-6 gap-y-6 w-max">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <img
                                src={logo}
                                alt={`Partner ${index + 1}`}
                                className="h-[60px] object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HiringPartnersSectionMobile;
