import React from "react";
import Image from "next/image";
import graduateImage from "@/../public/Resources/Images/graduate.png"; // Update path if needed

const HelpSectionMobile = () => {
    const challenges = [
        "Is this college/degree UGC or AICTE recognized?",
        "Will this course be valued by employers?",
        "What’s the eligibility for admission?",
        "What’s the total fee & payment options?",
        "What subjects & specializations are offered?",
        "How are classes, exams, and results conducted?",
        "Does the college offer placements or internships?",
        "How much study time is needed each week?",
        "Can I transfer credits from previous studies?",
    ];

    return (
        <div className="flex flex-col w-full px-4 pb-8 bg-white">
            {/* Heading */}
            <h2 className="text-[28px] font-[600] leading-normal text-[#024B53] font-[Outfit] mb-2">
                We are here to help you!
            </h2>

            {/* Paragraph */}
            <p className="text-[14px] text-[#515150] font-[400] font-[Outfit] mb-3 leading-normal">
                Let us know what all challenges you are facing, our dedicated team will get back to you with the resolution. Because we are always here to help you.{" "}
                <span className="text-[#A38906]">#kyukibadhanjarurihai</span>
            </p>

            {/* Image */}
            <Image
                src={graduateImage}
                alt="Graduate"
                className="pt-[36px] w-full h-auto rounded-[22px]"
            />

            {/* Challenge Box */}
            <div className="bg-[#F4F7FC] rounded-[22px] py-6 px-[14px] w-full">
                {/* Box Title */}
                <p className="text-[20px] font-[600] text-[#024B53] font-[Outfit] mb-4">
                    Select your challenges
                </p>

                {/* Checkbox List */}
                <div className="flex flex-col gap-5">
                    {challenges.map((question, idx) => (
                        <label
                            key={idx}
                            className="flex items-start gap-3 text-[16px] font-[400] text-[#357E86] font-[Outfit] cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                className="mt-1 w-4 h-4 rounded-[4px] border border-[#357E86] accent-[#024B53]"
                            />
                            <span>{question}</span>
                        </label>
                    ))}
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 py-3 text-[14px] font-[500] text-white font-[Outfit] rounded-[12px] bg-[#024B53]">
                    Talk to an Expert
                </button>
            </div>
        </div>
    );
};

export default HelpSectionMobile;
