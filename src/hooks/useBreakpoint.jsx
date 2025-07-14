// hooks/useBreakpoint.js

import { useState, useEffect } from 'react';

export const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState('mobile');

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            if (width >= 1920) setBreakpoint('desktop');
            else if (width >= 1024) setBreakpoint('laptop');
            else if (width >= 768) setBreakpoint('tablet');
            else setBreakpoint('mobile');
        };

        updateSize(); // Set initial value
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return breakpoint;
};
