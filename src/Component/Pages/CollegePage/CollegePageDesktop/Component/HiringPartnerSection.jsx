import GridComponent from "@/GlobalComponent/GridComponent";
import { useRef, useEffect, useState } from "react";

const HiringPartnersSection = ({ logos = [], name }) => {
    const accs = logos || [];
    const items = [...accs, ...accs];

    const trackRef = useRef(null);
    const containerRef = useRef(null);
    const rafRef = useRef(null);
    const lastTimeRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const speed = 100; // px/s

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
        <section className="bg-white pt-8 max-w-full overflow-hidden w-full">
            <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4 break-words w-[calc(66.67%_-_12px)]">
                Hiring Partner of {name}
            </div>
            <div className="text-[20px] pb-[24px] font-normal text-[#535862] font-[Outfit] leading-[30px] break-words w-[calc(66.67%_-_12px)]">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </div>

            <div className="w-full overflow-hidden" ref={containerRef} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                {items.length === 0 ? (
                    <div className="py-6 text-center text-sm text-gray-500">No hiring partners available</div>
                ) : (
                    <div ref={trackRef} className="flex items-center gap-6 px-4" style={{ transform: 'translateX(0px)' }}>
                        {items.map((logo, idx) => (
                            <div key={idx} className="inline-flex items-center justify-center h-[60px] min-w-[140px]">
                                <img
                                    src={logo}
                                    alt={`Partner ${idx + 1}`}
                                    className="h-[60px] object-contain flex-shrink-0"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default HiringPartnersSection;
