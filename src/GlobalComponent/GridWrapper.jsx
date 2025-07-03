import React from 'react';
import { useBreakpoint } from '../AppUtils/UseBreakpoint';
import { gridConfigs } from '../AppUtils/GridConfigs';

const GridWrapper = ({ children, startCol, endCol }) => {
    const breakpoint = useBreakpoint();
    const config = gridConfigs[breakpoint];

    // Calculate the width based on grid columns
    const calculateWidth = () => {
        const gutterPx = parseInt(config.gutter);
        const span = endCol - startCol + 1;
        const totalGutter = (span - 1) * gutterPx;
        return `calc((100% - ${totalGutter}px) / ${config.numGrids} * ${span} + ${(span - 1) * gutterPx}px)`;
    };

    // Calculate the left position
    const calculateLeft = () => {
        const gutterPx = parseInt(config.gutter);
        return `calc((100% - ${(config.numGrids - 1) * gutterPx}px) / ${config.numGrids} * ${startCol - 1} + ${(startCol - 1) * gutterPx}px)`;
    };

    const wrapperStyle = {
        position: 'absolute',
        left: calculateLeft(),
        width: calculateWidth(),
        top: 0,
        height: '100%',
    };

    return (
        <div style={wrapperStyle}>
            {children}
        </div>
    );
};

export default GridWrapper;