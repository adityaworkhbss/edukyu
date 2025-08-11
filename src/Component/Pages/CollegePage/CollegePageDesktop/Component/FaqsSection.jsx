import { useState } from "react";
import GridComponent from "@/GlobalComponent/GridComponent";

const ArrowIcon = ({ isOpen }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
    >
        <g clipPath="url(#clip0_365_1966)">
            <path
                d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z"
                fill="#515150"
            />
        </g>
        <defs>
            <clipPath id="clip0_365_1966">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const FaqsSection = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-10 px-4">
            <GridComponent gridStart={0} gridEnd={6}>
                <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4">
                    Hiring Partner of Manipal Online
                </div>
            </GridComponent>
            <GridComponent gridStart={0} gridEnd={6}>
                <div className="text-[20px] pt-[16px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-[30px]">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </div>
            </GridComponent>

            <div className="w-full space-y-3">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-[#EFFDFE] rounded-[12px]">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex items-center justify-between px-[24px] py-[14px] text-[#333] font-[Outfit] text-[16px] font-normal leading-normal w-full"
                        >
                            {faq.question}
                            <ArrowIcon isOpen={openIndex === index} />
                        </button>

                        {openIndex === index && (
                            <div className="px-[24px] pb-4 text-[14px] text-[#535862] font-[Outfit]">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </section>
    );
};

export default FaqsSection;
