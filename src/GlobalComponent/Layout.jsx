import React from 'react';
import Parent from './Parent';
import TopNav from '../TopNav/TopNav';
import { useBreakpoint } from '../AppUtils/UseBreakpoint';
import { gridConfigs } from '../AppUtils/GridConfigs';

const Layout = () => {
    const breakpoint = useBreakpoint();
    const config = gridConfigs[breakpoint];

    const marginClass = {
        mobile: 'ml-[20px] mr-[20px]',
        tablet: 'ml-[20px] mr-[20px]',
        laptop: 'ml-[56px] mr-[56px]',
        desktop: 'mx-auto',
    }[breakpoint];

    return (
        <div className="w-full">
            <TopNav />
            <div className={`${marginClass}`}>
                <Parent
                    numGrids={config.numGrids}
                    gutter={config.gutter}
                    gridWidth={config.gridWidth}
                    gridHeight={config.gridHeight}
                    color="rgba(220, 100, 255, 0.2)"
                />
            </div>
        </div>
    );
};

export default Layout;
