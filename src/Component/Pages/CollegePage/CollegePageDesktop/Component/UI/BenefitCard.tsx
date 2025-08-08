
import React, { useState } from 'react';

interface BenefitCardProps {
    children: React.ReactNode;
    className?: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ children, className = '' }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <article
            className={`flex flex-col items-center space-y-8 gap-8 border w-[295px] h-[134px] bg-[#EFFDFE] p-2 rounded-[10px] border-solid border-[#024B53] transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${className}`}
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

