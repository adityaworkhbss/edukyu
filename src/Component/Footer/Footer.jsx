"use client";

import React, { useEffect, useState } from 'react';
import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';

const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Set initial
        const checkViewport = () => setIsMobile(window.innerWidth < 768);
        checkViewport();

        // Update on resize
        window.addEventListener('resize', checkViewport);
        return () => window.removeEventListener('resize', checkViewport);
    }, []);

    return isMobile ? <FooterMobile /> : <FooterDesktop />;
};

export default Footer;
