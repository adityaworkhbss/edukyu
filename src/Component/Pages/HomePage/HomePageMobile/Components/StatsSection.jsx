import React from 'react';

const StatItem = ({ number, label }) => {
    return (
        <div className="flex flex-col items-stretch">
            <div className="self-center text-xl font-semibold">{number}</div>
            <div className="text-base font-medium mt-4">{label}</div>
        </div>
    );
};

export const StatsSection = () => {
    return (
        <section className="self-stretch flex w-full items-stretch gap-[40px_100px] overflow-hidden text-xl text-white font-semibold text-center bg-[#679EA4] mt-[71px] px-[57px] py-[58px] rounded-lg">
            <div className="flex flex-col items-stretch flex-1">
                <StatItem number="197+" label="UG/PG Courses" />
                <div className="mt-[54px]">
                    <StatItem number="197+" label="UG/PG Courses" />
                </div>
            </div>
            <div className="flex flex-col items-stretch flex-1">
                <StatItem number="197+" label="UG/PG Courses" />
                <div className="mt-[54px]">
                    <StatItem number="197+" label="UG/PG Courses" />
                </div>
            </div>
        </section>
    );
};
