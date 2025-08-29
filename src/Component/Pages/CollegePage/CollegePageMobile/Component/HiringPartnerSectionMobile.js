import GridComponent from "@/GlobalComponent/GridComponent";

const HiringPartnersSectionMobile = ({ college }) => {

    // Add null checks to prevent errors
    if (!college || !college.university_info || !college.university_info.placement) {
        return (
            <section className="bg-white py-8">
                <div className="text-center text-gray-500">
                    Hiring partner information not available
                </div>
            </section>
        );
    }

    const logos = college.university_info.placement.partners || [];
    const names = college.university_info.name || '';
   // console.log(names);
    // college.university_info.placement.partners
    return (
        <section className="bg-white py-8">
                <div className="text-[#024B53] font-[Outfit] text-[28px] font-semibold mb-3">
                    Hiring Partner of {names}
                </div>
                <div className="text-[#515150] font-[Outfit] text-[14px] mb-8">
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
                                className="h-[ 59.623px] w-[89px] object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HiringPartnersSectionMobile;
