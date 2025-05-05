import React from 'react';

const Grid = ({ width, height, color }) => {
    return (
        <div
            style={{
                width,
                height,
                backgroundColor: color,
            }}
        />
    );
};

export default Grid;
