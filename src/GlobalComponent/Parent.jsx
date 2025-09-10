"use client";
import React, { useEffect, useRef, useState } from 'react';
import Grid from './Grid';
import { useBreakpoint } from '@/hooks/useBreakpoint';

const Parent = ({ numGrids, gutter, gridHeight, color }) => {
    const containerRef = useRef(null);
    const [gridWidth, setGridWidth] = useState('0px');
    const breakpoint = useBreakpoint();

    // use the gutter value from props to set gap so it always matches gridConfigs
    const gapStyle = { gap: gutter };

    useEffect(() => {
        const calculateWidth = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const gutterPx = parseInt(gutter);
                const totalGutter = (numGrids - 1) * gutterPx;
                const width = (containerWidth - totalGutter) / numGrids;
                setGridWidth(`${width}px`);
            }
        };

        calculateWidth();
        window.addEventListener('resize', calculateWidth);
        return () => window.removeEventListener('resize', calculateWidth);
    }, [numGrids, gutter]);

    return (
        <div ref={containerRef} className={`flex w-full items-start`} style={{ ...gapStyle, paddingTop: '8px' }}>
            {Array.from({ length: numGrids }).map((_, i) => (
                <Grid
                    key={i}
                    width={gridWidth}
                    height={gridHeight}
                    color={color}
                />
            ))}
        </div>
    );
};

export default Parent;