import { useRef, useState, useEffect } from "react";
import CareerSuccessCardMobile from "@/Component/Pages/HomePage/HomePageMobile/Components/ui/CareerSuccessCardMobile";
import { TestimonialData } from "@/Data Model/Homepage/TestimonialData";

const OurProudGraduates = () => {
    const testimonials = TestimonialData.testimonials;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const total = testimonials.length;

    const containerRef = useRef(null);

    // Function to check scroll position and update arrow states
    const checkScrollPosition = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    // Update current index based on scroll position
    const updateCurrentIndex = () => {
        if (containerRef.current) {
            const cardWidth = containerRef.current.offsetWidth;
            const gap = 17; // 17px gap
            const scrollLeft = containerRef.current.scrollLeft;
            const newIndex = Math.round(scrollLeft / (cardWidth + gap));
            setCurrentIndex(newIndex);
        }
    };

    // Effect to set up scroll listener
    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const handleScroll = () => {
                checkScrollPosition();
                updateCurrentIndex();
            };
            
            container.addEventListener('scroll', handleScroll);
            checkScrollPosition(); // Initial check
            
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, [testimonials]);

    // Reset scroll position when testimonials change
    useEffect(() => {
        setCurrentIndex(0);
        setCanScrollLeft(false);
        setCanScrollRight(testimonials.length > 1);
    }, [testimonials.length]);

    const handleNext = () => {
        if (containerRef.current && currentIndex < infiniteTestimonials.length - 1) {
            const cardWidth = containerRef.current.offsetWidth;
            const gap = 17; // 17px gap
            const nextIndex = currentIndex + 1;
            containerRef.current.scrollTo({ 
                left: nextIndex * (cardWidth + gap), 
                behavior: 'smooth' 
            });
        }
    };

    const handlePrev = () => {
        if (containerRef.current && currentIndex > 0) {
            const cardWidth = containerRef.current.offsetWidth;
            const gap = 17; // 17px gap
            const prevIndex = currentIndex - 1;
            containerRef.current.scrollTo({ 
                left: prevIndex * (cardWidth + gap), 
                behavior: 'smooth' 
            });
        }
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
            <div className="flex justify-between items-center mt-[24px] md:mt-[32px]">
                <button 
                    onClick={handlePrev} 
                    disabled={!canScrollLeft}
                    className={`bg-white z-10 p-[4.5] hover:shadow-md rounded transition-opacity ${
                        !canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
                    }`} 
                    aria-label="Previous"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
                        <path d="M26.6667 14.6667H10.44L17.8933 7.21337L16 5.33337L5.33334 16L16 26.6667L17.88 24.7867L10.44 17.3334H26.6667V14.6667Z" fill={!canScrollLeft ? "#D1D5DB" : "#024B53"}/>
                    </svg>
                </button>

                <button 
                    onClick={handleNext} 
                    disabled={!canScrollRight}
                    className={`bg-white z-10 p-[4.5] hover:shadow-md rounded transition-opacity ${
                        !canScrollRight ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
                    }`} 
                    aria-label="Next"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
                        <path d="M5.33329 17.3333L21.56 17.3333L14.1066 24.7866L16 26.6666L26.6666 16L16 5.33329L14.12 7.21329L21.56 14.6666L5.33329 14.6666L5.33329 17.3333Z" fill={!canScrollRight ? "#D1D5DB" : "#024B53"}/>
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default OurProudGraduates;