"use client";
import React, { useEffect, useRef, useState } from 'react';
import Grid from './Grid';
import { useBreakpoint } from '@/hooks/useBreakpoint';

const Parent = ({ numGrids, gutter, gridHeight, color }) => {
    const containerRef = useRef(null);
    const [gridWidth, setGridWidth] = useState('0px');
    const breakpoint = useBreakpoint();

    const gapClass = {
        mobile: 'flex w-full gap-[16px]',
        tablet: 'flex w-full gap-[16px]',
        laptop: 'flex w-full gap-[24px]',
        desktop: 'flex w-full gap-[24px]',
    }[breakpoint];

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
        <div ref={containerRef} className={`${gapClass}`}>
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
