import React from 'react';
import Grid from './Grid';

const Parent = ({ numGrids, gutter, gridWidth, gridHeight, color }) => {
    return (
        <div className="flex" style={{ gap: gutter }}>
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
