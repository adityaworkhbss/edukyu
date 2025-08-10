import Image from "next/image";
import degree from "@/../public/Resources/Images/degree.png";

const DegreePoints = [
    "Accredited and acknowledged degree",
    "Degree approved by NAAC and AICTE",
    "Degree acknowledged in both private and public sectors",
    "Equivalent to an on-campus degree",
];

const DegreeSectionMobile = ({college}) => {
    return (
        <div className="w-full py-10 bg-white">
            {/* Title */}
            <h2 className="text-[#024B53] font-[Outfit] text-[22px] font-semibold leading-tight mb-2">
                {college.university_info.name}'s Program Benefits
            </h2>

            {/* Subtitle */}
            <p className="text-[#535862] text-[14px] leading-[22px] mb-6 font-[Outfit]">
                {college.university_info.about.description}
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

            {/* Image */}

            {college?.university_info?.degree?.certificate_image && (
                <img
                    src={college.university_info.degree.certificate_image}
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
