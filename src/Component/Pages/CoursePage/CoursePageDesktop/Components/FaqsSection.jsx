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

const FaqsSection = ({ course }) => {
    const [openIndex, setOpenIndex] = useState(null);

    // Extract course data safely - handle both direct and nested structures
    let courseData = {};
    
    if (course) {
        // Check if course has direct properties
        if (course.faqs) {
            courseData = course;
        } 
        // Check if course has nested structure like CoursePageData
        else {
            const firstKey = Object.keys(course)[0];
            if (firstKey && course[firstKey]) {
                courseData = course[firstKey];
            }
        }
    }

    const faqs = courseData?.faqs || [];

    // Hide component if no FAQ data
    if (!faqs || faqs.length === 0) {
        return null;
    }

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white pt-8">
            {/* <GridComponent gridStart={0} gridEnd={7}> */}
                <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4 w-[calc(66.67%_-_12px)]">
                    FAQs
                </div>
            {/* </GridComponent> */}
            {/* <GridComponent gridStart={0} gridEnd={7}> */}
                <div className="text-[20px] pb-[64px] font-normal text-[#535862] font-[Outfit] leading-[30px] w-[calc(66.67%_-_12px)]">
                    Find answers to commonly asked questions about this course and admission process.
                </div>
            {/* </GridComponent> */}

            <div className="w-full space-y-3">
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <div className="bg-[#EFFDFE] rounded-[12px]">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex items-center justify-between px-[24px] py-[14px] text-[#333] font-[Outfit] text-[16px] font-normal leading-normal w-full"
                            >
                                {faq.question}
                                <ArrowIcon isOpen={openIndex === index} />
                            </button>
                        </div>

                        {/* Render answer outside the colored box as a white card in the page white space */}
                        {openIndex === index && (
                            <div className="mt-3 px-[24px] py-4 bg-white  text-[14px] text-[#535862] font-[Outfit]">
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
