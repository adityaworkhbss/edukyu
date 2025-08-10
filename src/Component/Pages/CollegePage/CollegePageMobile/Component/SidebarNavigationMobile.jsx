import React, { useState } from 'react';

export const SidebarNavigationMobile = () => {
    const [activeTab, setActiveTab] = useState('Ranking & Accreditations');

    const tabs = [
        'Ranking & Accreditations',
        'Courses',
        'Specialization',
        'Specialization'
    ];

    return (
        <div className="flex border-b border-[#E5E5E5] overflow-x-auto whitespace-nowrap no-scrollbar">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`px-6 py-4 font-[Outfit] text-[16px] focus:outline-none ${
                        activeTab === tab
                            ? 'text-[#024B53] font-semibold border-b-2 border-[#024B53]'
                            : 'text-[#515150] font-normal hover:text-[#024B53]'
                    }`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>

    );
};