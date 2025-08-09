import Image from "next/image";
import rankLogos from "@/../public/Resources/Images/accrImag.png";

const RankAndAccrMobile = () => {
    // Example logos array – replace with your actual separate logo imports if needed
    const logos = [
        { src: "/Resources/Images/careers360.png", alt: "Careers 360" },
        { src: "/Resources/Images/nirf.png", alt: "NIRF" },
        { src: "/Resources/Images/nba.png", alt: "NBA" },
    ];

    return (
        <div className="w-full flex flex-col  py-8">
            {/* Title */}
            <h2 className="text-[#024B53] font-[Outfit] text-[28px] font-semibold mb-2">
                Rankings & Accreditation
            </h2>

            {/* Description */}
            <p className="text-[#515150] font-[Outfit] text-[14px] font-normal mb-6">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </p>

            {/* Logos */}
            <div className="flex justify-center gap-6">
                {logos.map((logo, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={100}
                            height={60}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RankAndAccrMobile;
