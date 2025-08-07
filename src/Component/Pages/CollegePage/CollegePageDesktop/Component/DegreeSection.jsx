import Image from "next/image";

const DegreePoints = [
    "Accredited and acknowledged degree",
    "Degree approved by NAAC and AICTE",
    "Degree acknowledged in both private and public sectors",
    "Equivalent to an on-campus degree",
];

const DegreeSection = () => {
    return (
        <div className="w-full bg-[#FFF5F5] py-16 px-6 md:px-20">
            {/* Text Header */}
            <div className="mb-10 text-center md:text-left">
                <h2 className="text-[#024B53] font-semibold text-[28px] md:text-[36px] font-[Outfit] leading-tight">
                    Earn a globally recognized <br className="hidden md:block" />
                    UGC-endorsed degree
                </h2>
                <p className="text-[#4B4B4B] text-[16px] md:text-[18px] mt-3 font-[Outfit]">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </p>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Degree Image */}
                <div className="flex justify-center md:justify-start">
                    <Image
                        src="/ugc-degree-sample.png" // Rename your uploaded image to this and place in /public
                        alt="UGC Degree"
                        width={380}
                        height={300}
                        className="rounded-md shadow-md"
                    />
                </div>

                {/* Bullet Points */}
                <div className="space-y-4">
                    {DegreePoints.map((point, i) => (
                        <div
                            key={i}
                            className="bg-white/60 backdrop-blur-md border border-[#EAEAEA] text-[#4B4B4B] text-[15px] font-[Outfit] px-5 py-3 rounded-md"
                        >
                            {point}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DegreeSection;
