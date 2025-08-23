import Image from "next/image";

const RankAndAccrMobile = ({ college }) => {
    const logos = college?.university_info?.accreditations || [];

    return (
        <div className="w-full flex flex-col py-8">
            {/* Title */}
            <h2 className="text-[#024B53] font-[Outfit] text-[28px] font-semibold mb-3">
                Rankings & Accreditation
            </h2>

            {/* Description */}
            <p className="text-[#515150] font-[Outfit] text-[14px] font-normal mb-8">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </p>

            {/* Logos */}
            <div className="flex overflow-x-auto gap-4 scrollbar-hide">
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 flex items-center justify-center"
                    >
                        <img
                            src={logo.image}
                            alt={logo.name}
                            width={90}
                            height={90}
                            className=""
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default RankAndAccrMobile;
