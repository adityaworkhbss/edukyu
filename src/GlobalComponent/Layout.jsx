import React from 'react';
import Parent from './Parent';
import { useBreakpoint } from '../AppUtils/UseBreakpoint';
import { gridConfigs } from '../AppUtils/GridConfigs';

const Layout = () => {
    const breakpoint = useBreakpoint();
    const config = gridConfigs[breakpoint];

    const marginClass = {
        mobile: 'ml-[20px] mr-[20px]',
        tablet: 'ml-[20px] mr-[20px]',
        laptop: 'ml-[56px] mr-[56px]',
        desktop: 'ml-[56px] mr-[56px]', // you can still use 'mx-auto' if you prefer centering
    }[breakpoint];

    return (
        <div className={`w-full ${marginClass}`}>
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