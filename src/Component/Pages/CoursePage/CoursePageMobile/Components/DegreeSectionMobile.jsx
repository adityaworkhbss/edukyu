import Image from "next/image";
import degree from "@/../public/Resources/Images/degree.png";

const DegreeSectionMobile = ({ college }) => {
    const degreeInfo = college?.university_info?.degree;

    // Only render if description exists
    if (!degreeInfo?.description) {
        return null;
    }

    return (
        <div className="w-full py-8 bg-white">
            {/* Title */}
            <h2 className="text-[#024B53] font-[Outfit] text-[28px] font-semibold mb-3">
                {degreeInfo.description}
            </h2>

            {/* Subtitle */}
            <p className="text-[#515150] font-[Outfit] text-[14px] mb-8">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </p>

            {/* Bullet Points */}
            <div className="flex flex-col gap-3 mb-6">
                {college.university_info.about.highlights.map((point, index) => (
                    <div
                        key={index}
                        className="bg-[#E9F7FB] text-[#024B53] text-[14px] leading-[20px] font-[Outfit] px-4 py-3 rounded-md"
                    >
                        {point}
                    </div>
                ))}
            </div>

            {/* Certificate Image */}
            {degreeInfo.certificate_image && (
                <img
                    src={degreeInfo.certificate_image}
                    alt="Certificate"
                    width={300}
                    height={220}
                    className="rounded-md border border-gray-200"
                />
            )}
        </div>
    );
};

export default DegreeSectionMobile;
