import Image from "next/image";
import {useState} from "react";

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

const FaqsSectionMobile = ({faqs}) => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div className="w-full py-8 bg-white">
            {/* Title */}
            <h2 className="text-[#024B53] font-[Outfit] text-[28px] font-semibold mb-3">
                FAQs
            </h2>

            {/* Subtitle */}
            <p className="text-[#515150] font-[Outfit] text-[14px] mb-6">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </p>

            {/* Scrollable partner list */}
            <div className="w-full space-y-3">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-[#EFFDFE]  rounded-[12px]">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex items-left text-left px-[24px] py-[14px] text-[#333] font-[Outfit] text-[16px] font-normal leading-normal w-full"
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
        </div>
    );
};

export default FaqsSectionMobile;
