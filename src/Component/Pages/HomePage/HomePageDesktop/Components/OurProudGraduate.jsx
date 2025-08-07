import { useState } from "react";
import GridComponent from "@/GlobalComponent/GridComponent";
import CareerSuccessCard from "@/Component/Pages/HomePage/HomePageDesktop/Components/ui/CareerSuccessCard";
import { TestimonialData } from "@/Data Model/Homepage/TestimonialData";

const OurProudGraduates = () => {
    const testimonials = TestimonialData.testimonials;
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = testimonials.length;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + total) % total);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % total);
    };

    // Slice and loop for 5 visible cards
    const visibleCards = testimonials.slice(currentIndex, currentIndex + 5);
    const remaining = 5 - visibleCards.length;
    const cardsToShow = remaining > 0
        ? [...visibleCards, ...testimonials.slice(0, remaining)]
        : visibleCards;

    return (
        <section className="py-[64px] px-[56px] bg-background">
            {/* Heading */}
            <div className="mb-[64px]">
                <GridComponent gridStart={0} gridEnd={5}>
                    <div className="text-[48px] font-[600] leading-none text-[#024B53] font-[Outfit] mb-[16px]">
                        Testimonials
                    </div>
                </GridComponent>
                <GridComponent gridStart={0} gridEnd={5}>
                    <div className="text-[20px] font-[400] leading-none text-[#515150] font-[Outfit]">
                        Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                    </div>
                </GridComponent>
            </div>

            {/* Cards Carousel */}
            <div className="flex flex-row gap-4">
                {cardsToShow.map((testimonial, index) => (
                    <GridComponent key={`${testimonial.name}-${index}`} gridStart={0} gridEnd={6}>
                        <CareerSuccessCard data={testimonial} />
                    </GridComponent>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-[32px] pb-[64px]">
                <button
                    onClick={handlePrev}
                    className="bg-white z-10 p-4 hover:shadow-md rounded"
                    aria-label="Previous"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M26.6667 14.6667H10.44L17.8933 7.21337L16 5.33337L5.33334 16L16 26.6667L17.88 24.7867L10.44 17.3334H26.6667V14.6667Z" fill="#9B9B9B"/>
                    </svg>
                </button>

                <button
                    onClick={handleNext}
                    className="bg-white z-10 p-4 hover:shadow-md rounded"
                    aria-label="Next"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M5.33329 17.3333L21.56 17.3333L14.1066 24.7866L16 26.6666L26.6666 16L16 5.33329L14.12 7.21329L21.56 14.6666L5.33329 14.6666L5.33329 17.3333Z" fill="#024B53"/>
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default OurProudGraduates;
