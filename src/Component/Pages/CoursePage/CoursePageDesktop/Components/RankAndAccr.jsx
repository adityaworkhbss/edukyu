import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import rankLogos from "@/../public/Resources/Images/accrImag.png";
import GridComponent from "@/GlobalComponent/GridComponent";

const RankAndAccr = ({ college }) => {
    // logos from API
    const accrs = college?.university_info?.accreditations || [];
    // duplicate so we can animate  (hidden from user) — 
    const logos = [...accrs, ...accrs];

    const trackRef = useRef(null);
    const containerRef = useRef(null);
    const rafRef = useRef(null);
    const lastTimeRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const speed = 80; // pixels per second

    useEffect(() => {
        const track = trackRef.current;
        const container = containerRef.current;
        if (!track || !container) return;

        let offset = 0;

        const elems = Array.from(track.children);
        const totalWidth = elems.reduce((sum, el) => sum + el.getBoundingClientRect().width + parseFloat(getComputedStyle(el).marginLeft || 0) + parseFloat(getComputedStyle(el).marginRight || 0), 0);
        const resetAt = totalWidth / 2; // since we duplicated

        const step = (time) => {
            if (isPaused) {
                lastTimeRef.current = time;
                rafRef.current = requestAnimationFrame(step);
                return;
            }

            if (!lastTimeRef.current) lastTimeRef.current = time;
            const dt = (time - lastTimeRef.current) / 1000; // seconds
            lastTimeRef.current = time;

            offset -= speed * dt;

            if (Math.abs(offset) >= resetAt) {
                offset += resetAt;
            }

            track.style.transform = `translateX(${offset}px)`;
            rafRef.current = requestAnimationFrame(step);
        };

        rafRef.current = requestAnimationFrame(step);

        return () => {
            cancelAnimationFrame(rafRef.current);
            lastTimeRef.current = null;
        };
    }, [isPaused, logos]);

    return (
        <div className="w-full pt-[64px] flex flex-col max-w-full overflow-hidden">
            {/* Title */}
            <h2 className="text-[48px] font-semibold font-[Outfit] text-[#024B53] mb-12 break-words w-[65%]">
                Rankings & Accreditations
            </h2>

            {/* Sliding Logo Marquee */}
            <div className="w-full overflow-hidden bg-white">
                {logos.length === 0 ? (
                    <div className="py-6 text-center text-sm text-gray-500">No accreditations available</div>
                ) : (
                    <div
                        className="relative overflow-hidden"
                        ref={containerRef}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div
                            ref={trackRef}
                            className="flex items-center gap-2 px-4"
                            style={{ whiteSpace: 'nowrap', transform: 'translateX(0px)' }}
                        >
                            {logos.map((logo, index) => (
                                <div
                                    key={index}
                                    className="inline-flex min-w-[100px] h-[80px] items-center justify-center bg-white rounded-lg flex-shrink-0 mx-2"
                                >
                                    <img
                                        src={logo.image}
                                        alt={logo.name || `logo-${index}`}
                                        width={80}
                                        height={80}
                                        className="object-contain max-w-full h-auto"
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RankAndAccr;
