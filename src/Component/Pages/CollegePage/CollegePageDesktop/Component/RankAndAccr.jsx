import Image from "next/image";
import rankLogos from "@/../public/Resources/Images/accrImag.png";

const RankAndAccr = () => {
    // Create an array with 10 repeated logos
    const repeatedLogos = new Array(10).fill(rankLogos);

    return (
        <div className="w-full flex flex-col">
            {/* Title */}
            <h2 className="text-[48px] font-semibold font-[Outfit] text-[#024B53] mb-12">
                Rankings & Accreditations
            </h2>

            {/* Scrollable Logo Row */}
            <div className="w-full overflow-x-auto scrollbar-hide">
                <div className="flex gap-6 py-2 flex-nowrap">
                    {repeatedLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="min-w-[100px] h-[80px] flex items-center justify-center bg-white rounded-lg shadow-sm"
                        >
                            <Image
                                src={logo}
                                alt={`Accreditation ${index + 1}`}
                                width={100}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RankAndAccr;
