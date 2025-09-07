// Component/RootShell.js
"use client";
import TopNav from "@/Component/Navbar/TopNav";
import Footer from "@/Component/Footer/Footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { gridConfigs } from "@/libs/GridConfigs";
import LoadingOverlay from "@/GlobalComponent/LoadingOverlay";
import { usePathname } from 'next/navigation';
import React, { useEffect, useState, useRef } from 'react';

export default function RootShell({ children }) {
    const breakpoint = useBreakpoint();
    const config = gridConfigs[breakpoint];
    const pathname = usePathname();
    // start true so overlay shows on initial page load
    const [loading, setLoading] = useState(true);
    const initialLoadRef = useRef(true);

    const marginClass = {
        mobile: 'ml-[20px] mr-[20px]',
        tablet: 'ml-[20px] mr-[20px]',
        laptop: 'ml-[56px] mr-[56px]',
        desktop: 'mx-auto',
    }[breakpoint];

    useEffect(() => {
        // start loading when user clicks internal links
        const onDocumentClick = (e) => {
            const anchor = e.target.closest && e.target.closest('a');
            if (!anchor) return;
            const href = anchor.getAttribute('href');
            if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
            try {
                const url = new URL(href, window.location.origin);
                if (url.origin === window.location.origin && url.pathname !== window.location.pathname) {
                    setLoading(true);
                }
            } catch (err) {
                // ignore invalid URLs
            }
        };

        const onPopState = () => setLoading(true);

        document.addEventListener('click', onDocumentClick);
        window.addEventListener('popstate', onPopState);

        return () => {
            document.removeEventListener('click', onDocumentClick);
            window.removeEventListener('popstate', onPopState);
        };
    }, []);

    // hide loading overlay once pathname updates (navigation finished)
    useEffect(() => {
        if (initialLoadRef.current) {
            // first time pathname available: mark that initial load was observed
            initialLoadRef.current = false;
            return;
        }
        setLoading(false);
    }, [pathname]);

    // hide overlay when window finishes loading or DOMContentLoaded; fallback after 7s
    useEffect(() => {
        const finish = () => setLoading(false);
        if (document.readyState === 'complete') {
            finish();
            return;
        }
        window.addEventListener('load', finish);
        document.addEventListener('DOMContentLoaded', finish);
        const fallback = setTimeout(finish, 3000);
        return () => {
            window.removeEventListener('load', finish);
            document.removeEventListener('DOMContentLoaded', finish);
            clearTimeout(fallback);
        };
    }, []);

    useEffect(() => {
        if (loading) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }
        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        };
    }, [loading]);

    return (
        <div className="w-full font-[Outfit]">
            <TopNav />
            <div className="">
                {/*{DevEnvironment.ENABLE_GRIDS && (*/}
                {/*    <div className={`${marginClass} absolute`}>*/}
                {/*        <Parent {...config} />*/}
                {/*    </div>*/}
                {/*)}*/}
                {children}
            </div>
            <Footer />
            {loading && <LoadingOverlay />}
        </div>
    );
}