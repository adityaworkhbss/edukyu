"use client";
import React, { useEffect, useRef, useState } from 'react';
import Grid from './Grid';

const GridContainerSec = ({
                           numGrids,
                           gutter,
                           gridHeight,
                           color = "rgba(220, 100, 255, 0.2)",
                           children,
                           showGrids = true
                       }) => {
    const containerRef = useRef(null);
    const [gridWidth, setGridWidth] = useState(0);
    const [gutterSize, setGutterSize] = useState(0);

    useEffect(() => {
        const calculateMetrics = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const gutterPx = parseInt(gutter);
                setGutterSize(gutterPx);
                const totalGutter = (numGrids - 1) * gutterPx;
                const width = (containerWidth - totalGutter) / numGrids;
                setGridWidth(width);
            }
        };

        calculateMetrics();
        window.addEventListener('resize', calculateMetrics);
        return () => window.removeEventListener('resize', calculateMetrics);
    }, [numGrids, gutter]);

    return (
        <div ref={containerRef} className="relative w-full">
            {showGrids && (
                <div className="absolute top-0 left-0 w-full flex" style={{ gap: gutter }}>
                    {Array.from({ length: numGrids }).map((_, i) => (
                        <Grid
                            key={i}
                            width={`${gridWidth}px`}
                            height={gridHeight}
                            color={color}
                        />
                    ))}
                </div>
            )}

            <div className="flex flex-row">
                {React.Children.map(children, (child) =>
                    React.isValidElement(child)
                        ? React.cloneElement(child, {
                            gridWidth,
                            gutterSize,
                            numGrids,
                        })
                        : child
                )}
            </div>
        </div>
    );
};

export default GridContainerSec;