"use client";
import React from 'react';

const LoadingOverlay = () => {
    return (
        <div className="fixed inset-0 z-[9999] bg-[#024B53] overflow-hidden">
            <img
                src="https://edukyu.com/assets/cxp-assets/imgs/gif/KYUKIBADHNAJARURIHAIsmallcaps-GIF.gif"
                alt="#Kyukibadhnajarurihai loading"
                className="w-screen h-screen object-cover"
                style={{ imageRendering: 'auto' }}
            />
        </div>
    );
};

export default LoadingOverlay;
