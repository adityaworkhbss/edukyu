import {useRef, useState} from "react";
import CareerSuccessCardMobile from "@/Component/Pages/HomePage/HomePageMobile/Components/ui/CareerSuccessCardMobile";
import {TestimonialData} from "@/Data Model/Homepage/TestimonialData";

const OurProudGraduates = () => {
    const testimonials = TestimonialData.testimonials;
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = testimonials.length;

    const containerRef = useRef(null);

    const handlePrev = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -(320 + 17), behavior: "smooth" });
        }
    };

    const handleNext = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 320 + 17, behavior: "smooth" });
        }
    };

    // Duplicate list for seamless looping
    const infiniteTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-[64px] bg-background">
            <div className="mb-[32px]">
                <h2 className="text-[#024B53] font-[Outfit] text-[28px] font-semibold leading-none">
                    Testimonials
                </h2>
                <p className="text-[#515150] font-[Outfit] text-[14px] font-normal leading-none pt-3 pb-[32px]">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </p>
            </div>

            {/* Carousel Container */}
            <div
                ref={containerRef}
                className="flex gap-[17px] overflow-x-auto scroll-smooth no-scrollbar"
            >
                {infiniteTestimonials.map((testimonial, index) => (
                    <div key={`${testimonial.name}-${index}`} className="flex-shrink-0 w-[320px]">
                        <CareerSuccessCardMobile  data={testimonial} />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-[24px] md:mt-[32px] px-[16px]">
                <button onClick={handlePrev} className="bg-white p-3" aria-label="Previous">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M26.6667 14.6667H10.44L17.8933 7.21337L16 5.33337L5.33334 16L16 26.6667L17.88 24.7867L10.44 17.3334H26.6667V14.6667Z" fill="#9B9B9B" />
                    </svg>
                </button>

                <button onClick={handleNext} className="bg-white p-3" aria-label="Next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M5.33329 17.3333L21.56 17.3333L14.1066 24.7866L16 26.6666L26.6666 16L16 5.33329L14.12 7.21329L21.56 14.6666L5.33329 14.6666L5.33329 17.3333Z" fill="#024B53" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default OurProudGraduates;
