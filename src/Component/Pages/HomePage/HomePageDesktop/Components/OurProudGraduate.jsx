import { useState, useRef, useEffect } from "react";
import GridComponent from "@/GlobalComponent/GridComponent";
import CareerSuccessCard from "@/Component/Pages/HomePage/HomePageDesktop/Components/ui/CareerSuccessCard";
import { TestimonialData } from "@/Data Model/Homepage/TestimonialData";

const OurProudGraduates = () => {
    const testimonials = TestimonialData.testimonials;
    // Duplicate the array so we have room on both sides for circular scrolling
    const displayTestimonials = [...testimonials, ...testimonials];
    const total = testimonials.length;
    const displayTotal = displayTestimonials.length;
    // Start at `total` so the first original testimonial sits centered and the last original appears on the left
    const [currentIndex, setCurrentIndex] = useState(total);
    const trackRef = useRef(null);
    const itemRef = useRef(null);
    const [translatePx, setTranslatePx] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + displayTotal) % displayTotal);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % displayTotal);
    };

    // compute transform in px to avoid percentage+gap mismatch causing drift
    useEffect(() => {
        const compute = () => {
            const track = trackRef.current;
            const item = itemRef.current;
            if (!track || !item) return;
            const trackRect = track.getBoundingClientRect();
            const itemRect = item.getBoundingClientRect();
            // computed gap between items (CSS gap)
            const style = window.getComputedStyle(track);
            const gap = parseFloat(style.gap) || 0;
            const itemFull = itemRect.width + gap;
            // center offset: want active card centered — card width is itemRect.width
            const centerOffset = trackRect.width * 0.25; // since card is 50% width, center point is 25%
            const desired = centerOffset - currentIndex * itemFull;
            setTranslatePx(desired);
        };

        compute();
        window.addEventListener("resize", compute);
        return () => window.removeEventListener("resize", compute);
    }, [currentIndex, displayTotal]);

    // Seamless loop: when we've navigated into cloned region (index < total),
    // jump to the matching index in the second copy without animation.
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const onTransitionEnd = (e) => {
            if (e.target !== track) return; // only handle when track finished
            // if we are in the first copy (0..total-1), jump to the same in second copy
            if (currentIndex < total) {
                const target = currentIndex + total;
                // disable transition, set index, then re-enable transition
                setTransitionEnabled(false);
                // use setTimeout to allow DOM to apply the non-transitioned transform
                requestAnimationFrame(() => {
                    setCurrentIndex(target);
                    // restore transition on next frame
                    requestAnimationFrame(() => setTransitionEnabled(true));
                });
            }
        };

        track.addEventListener("transitionend", onTransitionEnd);
        return () => track.removeEventListener("transitionend", onTransitionEnd);
    }, [currentIndex, total]);

    return (
        <section className="py-[64px] px-[56px] bg-background">
            {/* Heading */}
            <div className="mb-[64px]">
                <GridComponent gridStart={0} gridEnd={6}>
                    <div className="text-[48px] font-[600] leading-none text-[#024B53] font-[Outfit] mb-[16px]">
                        Testimonials
                    </div>
                </GridComponent>
                <GridComponent gridStart={0} gridEnd={6}>
                    <div className="text-[20px] font-[400] leading-none text-[#515150] font-[Outfit]">
                        Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                    </div>
                </GridComponent>
            </div>

          
                        <div className="">
                            <div className="-mx-[56px]">
                                <div
                                    ref={trackRef}
                                    className={`flex flex-nowrap ${transitionEnabled ? 'transition-transform duration-500 ease-in-out' : ''} gap-6`}
                                    style={{
                                        transform: `translateX(${translatePx}px)`
                                    }}
                                >
                                    {displayTestimonials.map((testimonial, index) => (
                                        <div
                                            key={`${testimonial.name}-${index}`}
                                            ref={index === 0 ? itemRef : null}
                                            className="flex-none px-2"
                                            style={{ width: 'calc(50% - 48px)', boxSizing: 'border-box' }}
                                        >
                                            <GridComponent gridStart={0} gridEnd={12}>
                                                <CareerSuccessCard data={testimonial} isActive={index === currentIndex} />
                                            </GridComponent>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Navigation Buttons */}
            <div className="flex justify-between mt-[32px] pb-[64px]">
                <button
                    onClick={handlePrev}
                    className="bg-white z-10 p-4 hover:shadow-md rounded"
                    aria-label="Previous"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M26.6667 14.6667H10.44L17.8933 7.21337L16 5.33337L5.33334 16L16 26.6667L17.88 24.7867L10.44 17.3334H26.6667V14.6667Z" fill="#9B9B9B" />
                    </svg>
                </button>

                <button
                    onClick={handleNext}
                    className="bg-white z-10 p-4 hover:shadow-md rounded"
                    aria-label="Next"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M5.33329 17.3333L21.56 17.3333L14.1066 24.7866L16 26.6666L26.6666 16L16 5.33329L14.12 7.21329L21.56 14.6666L5.33329 14.6666L5.33329 17.3333Z" fill="#024B53" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default OurProudGraduates;
