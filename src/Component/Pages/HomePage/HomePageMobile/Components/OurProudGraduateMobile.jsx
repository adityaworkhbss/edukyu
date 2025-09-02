import { useRef, useState } from "react";
import CareerSuccessCardMobile from "@/Component/Pages/HomePage/HomePageMobile/Components/ui/CareerSuccessCardMobile";
import { TestimonialData } from "@/Data Model/Homepage/TestimonialData";

const OurProudGraduates = () => {
    const testimonials = TestimonialData.testimonials;
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = testimonials.length;

    const containerRef = useRef(null);

    const measureStep = () => {
        const container = containerRef.current;
        if (!container) return null;
        const first = container.querySelector('div.flex-shrink-0');
        if (!first) return null;
        const cardRect = first.getBoundingClientRect();
        const style = window.getComputedStyle(container);
        // modern browsers support gap on flex containers
        const gap = parseFloat(style.gap) || parseFloat(style.columnGap) || 17;
        return { step: Math.round(cardRect.width + gap), cardWidth: Math.round(cardRect.width), gap };
    };

    const handlePrev = () => {
        const container = containerRef.current;
        if (!container) return;
        const metrics = measureStep();
        if (!metrics) { container.scrollBy({ left: -(320 + 17), behavior: 'smooth' }); return; }
        const { step } = metrics;
        const scrollLeft = Math.round(container.scrollLeft);
        const currentIndex = Math.round(scrollLeft / step);
        const prevIndex = Math.max(currentIndex - 1, 0);
        const target = prevIndex * step;
        container.scrollTo({ left: target, behavior: 'smooth' });
    };

    const handleNext = () => {
        const container = containerRef.current;
        if (!container) return;
        const metrics = measureStep();
        if (!metrics) { container.scrollBy({ left: 320 + 17, behavior: 'smooth' }); return; }
        const { step } = metrics;
        const scrollLeft = Math.round(container.scrollLeft);
        const currentIndex = Math.round(scrollLeft / step);
        const nextIndex = Math.min(currentIndex + 1, infiniteTestimonials.length - 1);
        const target = nextIndex * step;
        container.scrollTo({ left: target, behavior: 'smooth' });
    };

    // Duplicate list for seamless looping
    const infiniteTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-[32px] bg-background">
            <div className="mb-[32px]">
                <h2 className="text-[#024B53] font-[Outfit] text-[28px] font-semibold leading-none">
                    Testimonials
                </h2>
                <p className="text-[#515150] font-[Outfit] text-[14px] font-normal leading-none pt-3 ">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </p>
            </div>

            <div
                ref={containerRef}
                className="flex gap-[17px] overflow-x-auto scroll-smooth no-scrollbar"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                {infiniteTestimonials.map((t, i) => (
                    <div key={`${t.name}-${i}`} className="flex-shrink-0 w-full scroll-snap-align-start">
                        <CareerSuccessCardMobile data={t} />
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