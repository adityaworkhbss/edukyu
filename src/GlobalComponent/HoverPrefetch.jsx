"use client";
import { useEffect } from 'react';

export default function HoverPrefetch() {
    useEffect(() => {
        const handleMouseEnter = (event) => {
            const anchor = event.target.closest('a[href^="/"]');
            if (!anchor) return;
            try {
                const url = new URL(anchor.href);
                // Trigger browser prefetch for same-origin internal links
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = url.pathname + url.search;
                document.head.appendChild(link);
                // Cleanup shortly after to avoid head bloat
                setTimeout(() => {
                    if (link.parentNode) link.parentNode.removeChild(link);
                }, 5000);
            } catch (_) {
                // ignore invalid URLs
            }
        };

        document.addEventListener('mouseover', handleMouseEnter, { passive: true });
        document.addEventListener('touchstart', handleMouseEnter, { passive: true });
        return () => {
            document.removeEventListener('mouseover', handleMouseEnter);
            document.removeEventListener('touchstart', handleMouseEnter);
        };
    }, []);

    return null;
}

