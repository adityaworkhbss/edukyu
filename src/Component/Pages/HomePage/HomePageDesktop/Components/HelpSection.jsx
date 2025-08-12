import React, {useState} from "react";
import Image from "next/image";
import graduateImage from "@/../public/Resources/Images/graduate.png";
import GridComponent from "@/GlobalComponent/GridComponent";
import Form from "@/Component/Form/Form"; // update this path as needed

const HelpSection = () => {
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

    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <div className="flex flex-row justify-between gap-6 px-[56px] py-[64px] w-full">
                {/* Left Content */}
                <div className="text-left w-1/2">
                    <div className="text-[48px] font-[600] mb-[16px] leading-none text-[#024B53] font-[Outfit]">
                        We are here to help you!
                    </div>
                    <div className="text-[20px] mb-[66px] font-[400] leading-none text-[#515150] font-[Outfit]">
                        Let us know what all challenges you are facing, our dedicated team
                        will get back to you with the resolution. Because we are always here
                        to help you.{" "}
                        <span className="text-[#CCA832] font-[400] font-[Outfit]">
            #kyukibadhanjarurihai
          </span>
                    </div>

                    <div className="flex justify-center h-auto w-full">
                        <Image src={graduateImage} alt="Graduate" className="mt-4" />
                    </div>
                </div>

                {/* Right Content */}
                <div className="bg-[#F4F7FC] rounded-[22px] p-[32px] w-1/2">
                    <div className="text-[20px] font-[600] leading-none text-[#024B53] font-[Outfit] mb-[22px]">
                        Select your challenges
                    </div>

                    <div className="flex flex-col gap-[28px]">
                        {challenges.map((question, idx) => (
                            <label
                                key={idx}
                                className="inline-flex items-start gap-3 cursor-pointer text-[16px] font-[400] leading-none text-[#357E86] font-[Outfit]"
                            >
                                <input
                                    type="checkbox"
                                    className="mt-1 w-4 h-4 mr-[14px] rounded-[4px] border border-[#357E86] accent-[#024B53]"
                                />
                                <span>{question}</span>
                            </label>
                        ))}
                    </div>

                    <button
                        onClick={() => setShowForm(true)}
                        className="inline-flex items-center justify-center gap-[10px] mt-[66px] px-4 py-3 text-[14px] font-[500] leading-none text-white font-[Outfit] bg-[#024B53] rounded-md">
                        Talk to an Expert
                    </button>
                </div>
            </div>

            {showForm && <Form onClose={() => setShowForm(false)} />}
        </>
    );
};

export default HelpSection;
