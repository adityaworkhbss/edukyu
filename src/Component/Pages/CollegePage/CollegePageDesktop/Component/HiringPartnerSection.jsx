import PartnerLogos from "./UI/PartnerLogos";
import GridComponent from "@/GlobalComponent/GridComponent";

const logos = [
    "/logos/google.png",
    "/logos/amazon.png",
    "/logos/accenture.png",
    "/logos/infosys.png",
    "/logos/tcs.png",
    "/logos/wipro.png",
    "/logos/microsoft.png",
    // Add more logos here...
];

const HiringPartnersSection = () => {
    return (
        <section className="bg-white py-10 px-4">
            <GridComponent gridStart={0} gridEnd={6}>
                <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4">
                    Hiring Partner of Manipal Online
                </div>
            </GridComponent>

            <GridComponent>
                <div className="text-[20px] pt-[16px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-[30px]">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </div>
            </GridComponent>


            <PartnerLogos logos={logos} />
        </section>
    );
};

export default HiringPartnersSection;
