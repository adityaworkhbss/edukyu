import React, { useEffect, useRef, useState } from 'react';
import Grid from './Grid';
import {useBreakpoint} from "../AppUtils/UseBreakpoint";

const Parent = ({ numGrids, gutter, gridHeight, color }) => {
    const containerRef = useRef(null);
    const [gridWidth, setGridWidth] = useState('0px');
    const breakpoint = useBreakpoint();

    const marginRightForLastGrid = {
        mobile: '20px',
        tablet: '20px',
        laptop: '56px',
        desktop: '56px', // or use 'auto' logic conditionally
    }[breakpoint];


    useEffect(() => {
        const calculateWidth = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const gutterPx = parseInt(gutter); // ensure it's number
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
        <div ref={containerRef} className="flex w-full">
            {Array.from({ length: numGrids }).map((_, i) => {
                const marginRight = i !== numGrids - 1 ? gutter : marginRightForLastGrid;
                console.log(`Grid ${i}: marginRight=${marginRight}`);
                return (
                    <Grid
                        key={i}
                        width={gridWidth}
                        height={gridHeight}
                        color={color}
                        gutter={marginRight}
                    />
                );
            })}
        </div>
    );
};

export default Parent;
