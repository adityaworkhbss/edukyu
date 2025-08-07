import PartnerLogos from "./UI/PartnerLogos";

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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Hiring Partner of Manipal Online
            </h2>
            <p className="text-gray-600 mb-4">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </p>

            <PartnerLogos logos={logos} />
        </section>
    );
};

export default HiringPartnersSection;
