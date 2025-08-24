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
        <div className="w-full py-12 max-w-full overflow-hidden ml-0.5">
            {/* Text Header */}
            <div className="mb-10 text-left">

                <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4 break-words w-[65%]">
                    Earn a globally recognized UGC-endorsed degree
                </div>


                <div className="text-[20px] pt-[16px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-[30px] break-words w-[65%]">
                   Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row items-start gap-6 max-w-full">
                {/* Degree Image */}
                {degreeInfo.certificate_image && (
                    <div className="flex flex-shrink-0 w-[320px]">
                        <img
                            src={degreeInfo.certificate_image} // Rename your uploaded image to this and place in /public
                            alt="Certificate"
                            width={380}
                            height={300}
                            className="rounded-md border border-gray-200 max-w-full h-auto"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>
                )}

                {/* Bullet Points */}
                <div className="space-y-4 flex-1 min-w-0 ">
                    {college.university_info.about.highlights.map((point, i) => (
                        <div
                            key={i}
                            className="border-r-[12px] bg-[#EFFDFE] backdrop-blur-md border border-[#FFF] text-[#333] text-[16px] font-normal font-[Outfit] px-5 py-3 rounded-md break-words w-[660px]"
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
