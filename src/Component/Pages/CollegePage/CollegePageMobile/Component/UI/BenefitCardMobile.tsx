
import React, { useState } from 'react';

interface BenefitCardProps {
    children: React.ReactNode;
    className?: string;
}

export const BenefitCardMobile: React.FC<BenefitCardProps> = ({ children, className = '' }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <article
            className={`relative bg-[#EFFDFE] rounded-[10px] mt-[12.33px] p-4 flex items-center justify-center text-center text-[#333] text-base font-normal leading-[22px] min-h-[134px] ${className}`}
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
            {/* Top-left corner border */}
            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#024B53] rounded-tl-md"></span>

            {/* Bottom-right corner border */}
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#024B53] rounded-br-md"></span>

            <div className="flex flex-col items-start gap-2 flex-[1_0_0] self-stretch relative">
                <div className="flex flex-col justify-between items-center flex-[1_0_0] self-stretch relative">
                    <div
                        className={`self-stretch text-[#333] text-center text-base font-normal relative max-sm:text-sm max-sm:leading-[1.4] transition-colors duration-300 ${
                            isHovered ? 'text-[#024B53]' : ''
                        }`}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </article>

    );
};

