import GridComponent from "@/GlobalComponent/GridComponent";
import { useRef, useEffect, useState } from "react";

const HiringPartnersSectionMobile = ({ logos = [], name }) => {
    const accs = logos || [];
    
    // Hide component if no data is available
    if (!accs || accs.length === 0) {
        return null;
    }
    
    const items = [...accs, ...accs];

    const trackRef = useRef(null);
    const containerRef = useRef(null);
    const rafRef = useRef(null);
    const lastTimeRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const speed = 50; // Slower speed for mobile

    useEffect(() => {
        const track = trackRef.current;
        const container = containerRef.current;
        if (!track || !container) return;

        let offset = 0;
        const elems = Array.from(track.children);
        const totalWidth = elems.reduce((sum, el) => sum + el.getBoundingClientRect().width + parseFloat(getComputedStyle(el).marginLeft || 0) + parseFloat(getComputedStyle(el).marginRight || 0), 0);
        const resetAt = totalWidth / 2;

        const step = (time) => {
            if (isPaused) {
                lastTimeRef.current = time;
                rafRef.current = requestAnimationFrame(step);
                return;
            }

            if (!lastTimeRef.current) lastTimeRef.current = time;
            const dt = (time - lastTimeRef.current) / 1000;
            lastTimeRef.current = time;

            offset -= speed * dt;
            if (Math.abs(offset) >= resetAt) offset += resetAt;

            track.style.transform = `translateX(${offset}px)`;
            rafRef.current = requestAnimationFrame(step);
        };

        rafRef.current = requestAnimationFrame(step);
        return () => {
            cancelAnimationFrame(rafRef.current);
            lastTimeRef.current = null;
        };
    }, [isPaused, items]);
    return (
        <section className="bg-white py-8">
            <div className="text-[#024B53] font-[Outfit] text-[28px] font-semibold mb-3">
                Hiring Partner of {name}
            </div>
            <div className="text-[#515150] font-[Outfit] text-[14px] mb-8">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </div>

            {/* Animated scrolling area */}
            <div 
                className="w-full overflow-hidden" 
                ref={containerRef} 
                onTouchStart={() => setIsPaused(true)} 
                onTouchEnd={() => setIsPaused(false)}
                onMouseEnter={() => setIsPaused(true)} 
                onMouseLeave={() => setIsPaused(false)}
            >
                <div ref={trackRef} className="flex items-center gap-4" style={{ transform: 'translateX(0px)' }}>
                    {items.map((logo, idx) => (
                        <div key={idx} className="inline-flex items-center justify-center h-[50px] min-w-[80px] flex-shrink-0">
                            <img
                                src={logo}
                                alt={`Partner ${idx + 1}`}
                                className="h-[50px] w-auto object-contain"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HiringPartnersSectionMobile;
