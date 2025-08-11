import Image from "next/image";
import GridComponent from "@/GlobalComponent/GridComponent";
import degree from "@/../public/Resources/Images/degree.png";



const DegreeSection = ({college}) => {

    const degreeInfo = college?.university_info?.degree;

    // Only render if description exists
    if (!degreeInfo?.description) {
        return null;
    }

    return (
        <div className="w-full py-12">
            {/* Text Header */}
            <div className="mb-10 text-left">

                <GridComponent gridStart={0} gridEnd={6}>
                    <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4">
                        {college.university_info.name}'s Program Benefits
                    </div>
                </GridComponent>


                <GridComponent gridStart={0} gridEnd={6}>
                    <div className="text-[20px] pt-[16px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-[30px]">
                        {college.university_info.about.description}
                    </div>
                </GridComponent>
            </div>

            {/* Content Section */}
            <div className="inline-flex items-center gap-6">
                {/* Degree Image */}
                {degreeInfo.certificate_image && (
                    <div className="flex ">
                        <img
                            src={degreeInfo.certificate_image} // Rename your uploaded image to this and place in /public
                            alt="Certificate"
                            width={380}
                            height={300}
                            className="rounded-md border border-gray-200"
                        />
                    </div>
                )}

                {/* Bullet Points */}
                <div className="space-y-4">
                    {college.university_info.about.highlights.map((point, i) => (
                        <div
                            key={i}
                            className="bg-white/60 w-full  backdrop-blur-md border border-[#EAEAEA] text-[#4B4B4B] text-[15px] font-[Outfit] px-5 py-3 rounded-md"
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
