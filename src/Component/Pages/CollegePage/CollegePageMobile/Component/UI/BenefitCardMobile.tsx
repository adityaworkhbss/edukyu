
import React, { useState } from 'react';

interface BenefitCardProps {
    children: React.ReactNode;
    className?: string;
}

export const BenefitCardMobile: React.FC<BenefitCardProps> = ({ children, className = '' }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <article
            className={`bg-[#EFFDFE] border border-[#024B53] rounded-[10px] p-4 flex items-center justify-center text-center text-[#333] text-base font-normal leading-[22px] min-h-[134px] ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="article"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    setIsHovered(!isHovered);
                }
            }}
        >
            <div className="flex flex-col items-start gap-2 flex-[1_0_0] self-stretch relative">
                <div className="flex flex-col justify-between items-center flex-[1_0_0] self-stretch relative">
                    <div className={`self-stretch text-[#333] text-center text-base font-normal relative max-sm:text-sm max-sm:leading-[1.4] transition-colors duration-300 ${isHovered ? 'text-[#024B53]' : ''}`}>
                        {children}
                    </div>
                </div>
            </div>
        </article>
    );
};

