import React from 'react';

interface BenefitCardProps {
    children: React.ReactNode;
    className?: string;
}

export const BenefitCardMobile: React.FC<BenefitCardProps> = ({ children, className = '' }) => {
    return (
        <article
            className={`relative bg-[#EFFDFE] rounded-[10px] mt-[12.33px] p-4 flex items-center justify-center text-center text-[#333] text-base font-normal leading-[22px] min-h-[134px] ${className}`}
            role="article"
            tabIndex={0}
        >
            {/* Top-left corner border */}
            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#024B53] rounded-tl-md"></span>

            {/* Bottom-right corner border */}
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#024B53] rounded-br-md"></span>

            <div className="text-[#333] text-center text-base font-normal max-sm:text-sm max-sm:leading-[1.4]">
                {children}
            </div>
        </article>
    );
};
