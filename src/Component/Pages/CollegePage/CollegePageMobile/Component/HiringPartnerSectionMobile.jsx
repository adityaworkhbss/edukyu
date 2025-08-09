import Image from "next/image";
import { ChevronDown } from "lucide-react";

const logos = [
    { src: "/logos/google.png", alt: "Google" },
    { src: "/logos/amazon.png", alt: "Amazon" },
    { src: "/logos/accenture.png", alt: "Accenture" },
    { src: "/logos/infosys.png", alt: "Infosys" },
    { src: "/logos/tcs.png", alt: "TCS" },
    { src: "/logos/wipro.png", alt: "Wipro" },
    { src: "/logos/microsoft.png", alt: "Microsoft" },
    // Add more logos if needed
];

const HiringPartnersSectionMobile = () => {
    return (
        <div className="w-full px-5 py-10 bg-white">
            {/* Title */}
            <h2 className="text-[#024B53] font-[Outfit] text-[22px] font-semibold leading-tight mb-2">
                Hiring Partner of Manipal Online
            </h2>

            {/* Subtitle */}
            <p className="text-[#535862] text-[14px] leading-[22px] mb-6 font-[Outfit]">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </p>

            {/* Scrollable partner list */}
            <div className="flex flex-col gap-3 pr-2">
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="bg-[#E9F7FB] flex justify-between items-center px-4 py-3 rounded-md"
                    >
                        <div className="flex items-center gap-3">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={24}
                                height={24}
                                className="rounded"
                            />
                            <span className="text-[#024B53] font-[Outfit] text-[14px]">
                                Accredited and acknowledged degree
                            </span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z" fill="#515150"/>
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HiringPartnersSectionMobile;
