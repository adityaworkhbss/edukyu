import React, { useEffect, useRef, useState } from 'react';
import { useBreakpoint } from "../AppUtils/UseBreakpoint";
import { gridConfigs } from "../AppUtils/GridConfigs";

const GridComponent = ({
                           lastUsedGridEnd,
                           itemNumberInRow = 0,
                           gridStart,
                           gridEnd,
                           children,
                           fromFooter = false,
                           className = "",
                           style = {}
                       }) => {
    const containerRef = useRef(null);
    const [gridWidth, setGridWidth] = useState(0);


    // console.log(lastUsedGridEnd);

    const breakpoint = useBreakpoint();
    const config = gridConfigs[breakpoint];

    const numGrids = config.numGrids;
    const gutterSize = parseInt(config.gutter);

    useEffect(() => {
        const calculateWidth = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.parentElement.offsetWidth;
                // Use parent element width instead of own div width
                const totalGutter = (numGrids - 1) * gutterSize;
                const width = (containerWidth - totalGutter) / numGrids;
                setGridWidth(width);
            }
        };


        calculateWidth();
        window.addEventListener('resize', calculateWidth);
        return () => window.removeEventListener('resize', calculateWidth);
    }, [numGrids, gutterSize, breakpoint]);

    const calculatePosition = () => {
        if (!gridWidth) return { left: 0, width: '100%' };

        const start = Math.max(1, Math.min(gridStart, numGrids));
        const end = Math.max(start, Math.min(gridEnd, numGrids));
        const spanCount = end - start + 1;

        const width = spanCount * gridWidth + (spanCount - 1) * gutterSize;

        if (lastUsedGridEnd === 0) {
            const left = (start - 1) * (gridWidth + gutterSize);
            return { left, width };
        } else {
            //
            // console.log("breakpoint", breakpoint);
            // console.log("numGrids", numGrids);
            // console.log("gutterSize", gutterSize);
            // console.log("width", gridWidth);

            // Calculate left offset relative to previous grid
            let left = 0;
            if(start - lastUsedGridEnd <= 1) {
                left = ((start - lastUsedGridEnd) * (gridWidth + gutterSize));
            } else {
                left = ((start - lastUsedGridEnd - 1) * (gridWidth + gutterSize)) + gutterSize;
            }

            if(!fromFooter) left = 0;

            return { left, width };
        }
    };


    const { left, width } = calculatePosition();

    return (
        <div
            ref={containerRef}
            style={{  /* ensure it fills parent width */ }}
        >
            <div
                className={className}
                style={{
                    position: 'relative',  // so left works
                    left: `${left}px`,
                    width: `${width}px`,
                    ...style
                }}
            >
                {children}
            </div>
        </div>
    );
};


export default GridComponent;
