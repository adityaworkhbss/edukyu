import React from 'react';
import Parent from './Parent';
import { useBreakpoint } from '../AppUtils/UseBreakpoint';
import { gridConfigs } from '../AppUtils/GridConfigs';

const Layout = () => {
    const breakpoint = useBreakpoint();
    const config = gridConfigs[breakpoint];

    const marginClass = {
        mobile: 'ml-[20px]',
        tablet: 'ml-[20px]',
        laptop: 'ml-[56px]',
        desktop: 'mx-auto',
    }[breakpoint];

    const widthClass = {
        desktop: 'w-[1807px]',
        laptop: 'w-fit',
        tablet: 'w-fit',
        mobile: 'w-fit',
    }[breakpoint];

    return (
        <div className={`${marginClass} ${widthClass}`}>
            <Parent
                numGrids={config.numGrids}
                gutter={config.gutter}
                gridWidth={config.gridWidth}
                gridHeight={config.gridHeight}
                color="rgba(220, 100, 255, 0.2)"
            />
        </div>
    );
};

export default Layout;
