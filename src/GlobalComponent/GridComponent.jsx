"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { gridConfigs } from "@/libs/GridConfigs";

const GridComponent = ({
    lastUsedGridEnd,
    itemNumberInRow = 0,
    gridStart,
    gridEnd,
    children,
    fromFooter = false,
    className = "",
    style = {},
    // optional values injected by GridContainer
    gridWidth: propGridWidth,
    gutterSize: propGutterSize,
    numGrids: propNumGrids,
}) => {
    const containerRef = useRef(null);
    const [computedGridWidth, setComputedGridWidth] = useState(propGridWidth || 0);
    const breakpoint = useBreakpoint();
    const config = gridConfigs[breakpoint];
    const numGrids = propNumGrids || config.numGrids;
    const gutterSize = propGutterSize || parseInt(config.gutter);

    useEffect(() => {
        // if parent passed gridWidth, use it; otherwise compute from DOM
        if (propGridWidth) {
            setComputedGridWidth(propGridWidth);
            return;
        }

        const calculateWidth = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.parentElement.offsetWidth;
                const totalGutter = (numGrids - 1) * gutterSize;
                const width = (containerWidth - totalGutter) / numGrids;
                setComputedGridWidth(width);
            }
        };

        calculateWidth();
        window.addEventListener('resize', calculateWidth);
        return () => window.removeEventListener('resize', calculateWidth);
    }, [propGridWidth, numGrids, gutterSize, breakpoint]);

    const calculatePosition = () => {
        if (!computedGridWidth) return { left: 0, width: '100%' };

        // normalize start/end within grid bounds
        const start = Math.max(1, Math.min(gridStart, numGrids));
        const end = Math.max(start, Math.min(gridEnd, numGrids));
        const spanCount = end - start + 1;

        // width spans columns and internal gutters between those columns
        const width = spanCount * computedGridWidth + (spanCount - 1) * gutterSize;

        // left is simply how many columns precede the start column times (gridWidth + gutter)
        const left = (start - 1) * (computedGridWidth + gutterSize);

        return { left, width };
    };

    const { left, width } = calculatePosition();

    return (
        <div ref={containerRef}>
            <div
                className={className}
                style={{
                    position: 'relative',
                    left: `${left}px`,
                    width: `${width}px`,
                    ...style,
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default GridComponent;