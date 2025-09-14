import Image from "next/image";
import collegepage_hero_img from '@/../public/Resources/Images/collegepage_hero_img.png';
import GridComponent from "@/GlobalComponent/GridComponent";
import React, { useState } from "react";
import Form from "@/Component/Form/Form";

const HeroPage = ({ college }) => {
    const [showForm, setShowForm] = useState(false);

    if (!college || !college.university_info) {
        return (
            <div className="w-full p-8">
                <div className="text-center text-gray-500">College information not available</div>
            </div>
        );
    }

    return (
        <>
            <div className="w-full gap-6 pl-[56px]  flex max-w-full">
                {/* Left Section */}
                <div className="w-[calc(50%_-_40px)] flex flex-col  min-w-0">
                    <div className="mb-6 mt-[84px] text-[52px] font-semibold text-[#025E68] font-[Outfit] break-words">
                        {college.university_info.name}
                    </div>


                    <div className="mb-6 text-[20px] font-normal text-[#025E68] font-[Outfit] break-words">
                        {college.university_info.about.description}
                    </div>


                    <button
                        onClick={() => setShowForm(true)}
                        className="rounded-[12px] w-[150px] border border-white bg-[#025E68] text-white text-[14px] font-medium font-[Outfit] px-6 py-2">
                        Apply Now
                    </button>

                </div>

                {/* Right Section */}
                <div className="w-[calc(50%_+_16px)] relative mb-8 flex-shrink-0">
                    <div className="relative w-full h-full overflow-hidden rounded-3xl">
                        {/* Inline SVG clip path for custom hero shape */}
                        <svg
                            viewBox="0 0 671 645"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full block"
                            preserveAspectRatio="xMidYMid slice"
                        >
                            <defs>
                                <clipPath id="heroClip">
                                    <path d="M0 60C0 26.8629 26.8629 0 60 0H611C644.137 0 671 26.8629 671 60V371.656C671 396.451 655.749 418.691 632.62 427.626L81.6204 640.471C42.3076 655.657 0 626.646 0 584.502V60Z" />
                                </clipPath>
                            </defs>

                            <image
                                href={college.university_info.banner_image}
                                x="0"
                                y="0"
                                width="671"
                                height="645"
                                preserveAspectRatio="xMidYMid slice"
                                clipPath="url(#heroClip)"
                                className="object-cover w-full h-full"
                            />
                        </svg>
                    </div>


                    <div className="absolute bottom-[-32px] right-[56px] w-[calc(((360/1366)*100vw))] h-[calc(((360/1366)*100vw))*(0.6667)] ">
                        <Image
                            src={collegepage_hero_img}
                            alt="College Page Hero Image"
                            className=" w-[calc(((360/1366)*100vw))] h-[calc(((360/1366)*100vw))*(0.6667)] "
                        />
                    </div>
                </div>
            </div>

            {showForm && <Form image={college.university_info.logo} onClose={() => setShowForm(false)} />}
        </>
    );
};

export default HeroPage;