"use client";
import React from 'react';

const Grid = ({ width, height, color, gutter }) => {
    return (
        <div
            style={{
                width,
                height,
                backgroundColor: color,
                marginRight: gutter,
            }}
        />
    );
};

export default Grid;
