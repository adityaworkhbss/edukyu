"use client";
import React from 'react';

const Grid = ({ width, height, color, gutter }) => {
    const style = {
        width,
        height,
        backgroundColor: color || 'transparent',
        minHeight: '24px',
        border: '1px solid rgba(0,0,0,0.04)',
        boxSizing: 'border-box',
    };
    return <div style={style} />;
};

export default Grid;