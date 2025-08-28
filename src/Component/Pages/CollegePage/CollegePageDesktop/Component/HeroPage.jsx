import Image from "next/image";
import collegepage_hero from '@/../public/Resources/Images/collegepage_hero.png';
import collegepage_hero_img from '@/../public/Resources/Images/collegepage_hero_img.png';
import GridComponent from "@/GlobalComponent/GridComponent";
import React, {useState} from "react";
import Form from "@/Component/Form/Form";

const HeroPage = ({college}) => {

    const [showForm, setShowForm] = useState(false);

    console.log("banner image ::: " + college.university_info.banner_image);

    // Add null checks to prevent errors
    if (!college || !college.university_info) {
        return (
            <div className="w-full p-8">
                <div className="text-center text-gray-500">
                    College information not available
                </div>
            </div>
        );
    }

    return (

        <>
            <div className="w-full gap-6 pl-[56px]  flex max-w-full">
                {/* Left Section */}
                <div className="w-1/2 flex flex-col py-6 min-w-0">
                    <div className="mb-6 text-[52px] font-semibold text-[#025E68] font-[Outfit] break-words">
                        {college.university_info.name}
                    </div>


                    <div className="mb-[65px] text-[20px] font-normal text-[#025E68] font-[Outfit] break-words">
                        {college.university_info.about.description}
                    </div>


                    <button
                        onClick={() => setShowForm(true)}
                        className="rounded-[12px] w-[150px] border border-white bg-[#025E68] text-white text-[14px] font-medium font-[Outfit] px-6 py-2">
                        Apply Now
                    </button>

                </div>

                {/* Right Section */}
                <div className="w-1/2 relative mb-8 flex-shrink-0">
                    <div className="relative w-full h-full pl-3 overflow-hidden">
                        <img
                            src={college.university_info.banner_image}
                            alt="College Page Hero"
                            fill
                            className="object-cover rounded-3xl h-full [clip-path:polygon(0_0,100%_0,100%_65%,0_100%)]"
                        />
                    </div>



                    <div className="absolute top-[16px] right-[56px]">
                        <Image
                            src={collegepage_hero_img}
                            alt="College Page Hero Image"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            {showForm && <Form image={college.university_info.logo} onClose={() => setShowForm(false)} />}
        </>
    );
};

export default HeroPage;
