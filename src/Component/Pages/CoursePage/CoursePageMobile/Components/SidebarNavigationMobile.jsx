import React, { useState } from 'react';

export const SidebarNavigationMobile = () => {
    const [activeTab, setActiveTab] = useState('Ranking & Accreditations');

    const tabs = [
        { label: 'Ranking & Accreditations', id: 'ranking' },
        { label: 'Courses', id: 'courses' },
        { label: 'Specialization', id: 'specialization' },
        { label: 'Admission Process', id: 'admission' },
        { label: 'Fees', id: 'fees' },
        { label: 'Benefits', id: 'benefits' },
        { label: 'Compare Colleges', id: 'compare' },
        { label: 'Degree Certificate', id: 'degree' },
        { label: 'Hiring Partner', id: 'hiring' },
        { label: 'FAQ', id: 'faq' },
        { label: 'Contact Us', id: 'contact' },
    ];

    const handleScroll = (id) => {
        setActiveTab(tabs.find(t => t.id === id)?.label);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="flex border-b border-[#E5E5E5] overflow-x-auto whitespace-nowrap my-[32px] no-scrollbar">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={`px-6 py-4 font-[Outfit] text-[16px] focus:outline-none ${
                        activeTab === tab.label
                            ? 'text-[#024B53] font-semibold border-b-2 border-[#024B53]'
                            : 'text-[#515150] font-normal hover:text-[#024B53]'
                    }`}
                    onClick={() => handleScroll(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};
