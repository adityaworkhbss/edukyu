import Image from "next/image";
import rankLogos from "@/../public/Resources/Images/accrImag.png";
import GridComponent from "@/GlobalComponent/GridComponent";

const RankAndAccr = ({college}) => {
    // Create an array with 10 repeated logos
    const repeatedLogos = college?.university_info?.accreditations || [];

    console.log(repeatedLogos);

    return (
        <div className="w-full pt-[64px] flex flex-col max-w-full overflow-hidden">
            {/* Title */}
            <h2 className="text-[48px] font-semibold font-[Outfit] text-[#024B53] mb-12 break-words w-[65%]">
                Rankings & Accreditations
            </h2>

            {/* Scrollable Logo Row */}
            <div className="w-full overflow-x-auto scrollbar-hide bg-white">
                <div className="flex gap-3.5 py-2 flex-nowrap bg-white">
                    {repeatedLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="min-w-[100px] h-[80px] flex items-center justify-center bg-white rounded-lg flex-shrink-0"
                        >
                            <img
                               // style={{ backgroundColor: 'white' }}
                                src={logo.image}
                                alt={logo.name}
                                width={80}
                                height={80}
                                className="object-contain max-w-full h-auto "
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                                
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RankAndAccr;
