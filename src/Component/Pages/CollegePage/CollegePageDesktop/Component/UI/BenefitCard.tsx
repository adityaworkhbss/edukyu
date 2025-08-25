import React from 'react';

interface BenefitCardProps {
    children: React.ReactNode;
    className?: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ children, className = '' }) => {
    return (
        <article
            className={`flex items-center justify-center border w-[295px] h-[134px] bg-[#EFFDFE] p-2 rounded-[10px] border-solid border-[#024B53] rounded-[10px] ${className}`}
            role="article"
            tabIndex={0}
        >
            <div className="text-[#333] text-center text-base font-normal max-sm:text-sm max-sm:leading-[1.4]">
                {children}
            </div>
        </article>
    );
};
