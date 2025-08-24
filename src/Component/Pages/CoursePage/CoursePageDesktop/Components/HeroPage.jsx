import Image from "next/image";
import collegepage_hero from '@/../public/Resources/Images/collegepage_hero.png';
import collegepage_hero_img from '@/../public/Resources/Images/collegepage_hero_img.png';
import GridComponent from "@/GlobalComponent/GridComponent";
import React, { useState } from "react";
import Form from "@/Component/Form/Form";

const HeroPage = ({ college }) => {

    const [showForm, setShowForm] = useState(false);

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
            <div className="w-full gap-6 pl-[56px] flex max-w-full">
                {/* Left Section */}
                <div className="w-1/2 flex flex-col pl-6  pt-6 min-w-0 ml-8">
                    {/* University Logo Placeholder */}
                    <div className="w-[45%] h-[84px] bg-gray-200 rounded-lg mb-4 flex items-center justify-center mt-[52px]">
                       <img className="w-64" src="https://placehold.co/255x84" />
                    </div>

                    <div className="mb-6 text-[52px] font-semibold text-[#025E68] font-[Outfit] break-words">
                        MBA(Master’s in Business Administrative)
                    </div>


                    <div className="mb-[48px] text-[20px] font-normal text-[#025E68] font-[Outfit] break-words">
                        Manipal University Online Jaipur offers the 2-year online MBA program designed for both experienced professionals and fresh graduates. The programs offer flexibility of online learning without compromising on the quality of education.
                        The online MBA program at Manipal University Jaipur provides students with the necessary skills and knowledge to excel in today's competitive business environment. Classes, assignments, projects, examinations, and placement opportunities are all conducted online, allowing students to learn from the comfort of their homes.
                    </div>


                    <button
                        onClick={() => setShowForm(true)}
                        className="rounded-[12px] w-[150px] border border-white bg-[#025E68] text-white text-[14px] font-medium font-[Outfit] px-6 py-2">
                        Apply Now
                    </button>

                </div>

                {/* Right Section */}
                <div className="w-1/2 relative mb-8 flex-shrink-0">
                    <div className="max-w-full pl-3">
                        <Image
                            src={collegepage_hero}
                            alt="College Page Hero"
                            className="w-full h-auto"
                        />

                    </div>
                    <div className="absolute bottom-[-32px] right-[56px]">
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
