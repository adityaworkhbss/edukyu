'use client';

import React, { useState } from 'react';

const CourseItems = ({ course }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                padding: '12px 8px',
                gap: '8px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                borderRadius: '8px',
                background: isHovered
                    ? 'rgba(179, 207, 210, 0.50)'
                    : '#FFFFFF',
                color: '#024B53',
                fontSize: '12px',
                fontFamily: 'Outfit',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: 'normal',
                transition: 'background-color 0.2s ease',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                textAlign: 'left',
            }}
        >
            {course}
        </div>
    );
};

export default CourseItems;
