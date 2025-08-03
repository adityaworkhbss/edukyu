'use client';

import { useState } from 'react';

export default function SearchComponentMobile({ onClose }) {
    const [searchQuery, setSearchQuery] = useState('');

    const trendingSearches = [
        'Top BCA colleges in India',
        'IGNOU courses list',
        'NMIMS online MBA',
        'Best MBA specialization',
        'IGNOU online MBA',
        'Online MBA in Hospital Management',
        'Annamalai University distance MBA',
        'Top open university in India',
        'Distance MBA in Hyderabad',
        'Distance MBA colleges in Pune',
        'Distance MBA colleges in Kolkata',
        'Online MTech for working professionals',
        'UGC approved online MBA colleges',
        'Online MCA colleges in Pune',
        'UGC approved online degree courses',
    ];


    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    const handleTrendingClick = (search) => {
        setSearchQuery(search);
        console.log('Selected trending search:', search);
    };

    return (
        <div className="fixed h-full top-0 left-0 w-full bg-white shadow-lg z-50 flex flex-col overflow-y-auto">
            <div className="flex h-[58px] px-5 items-center shrink-0">
                <div onClick={onClose} className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <g clipPath="url(#clip0)">
                            <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#2B2B2A" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className="flex flex-col w-full px-4 pb-4">
                    <div className="flex items-center w-full pt-4">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search"
                            className="flex-1 font-outfit text-[16px] font-medium text-[#515150] bg-transparent focus:outline-none truncate placeholder:text-[#515150]"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleSearch(e);
                            }}
                        />
                        <div className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                <path
                                    fill="#2B2B2A"
                                    d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="w-full mt-[6px] h-[1px] bg-[#CDCDCD]" />
                </div>
            </div>

            <div className="pt-[42px] px-[20px]">
                <div className="text-[22px] pb-6 font-medium text-[#383837] font-outfit leading-none">
                    Top trending searches
                </div>
                <div className="flex flex-wrap gap-3 justify-start">
                    {trendingSearches.map((search, index) => (
                        <button
                            key={index}
                            onClick={() => handleTrendingClick(search)}
                            className="inline-flex items-center gap-[8px] px-[8px] py-[12px] rounded-[8px] bg-transparent hover:bg-[rgba(179,207,210,0.5)] transition-all duration-200 text-[14px] font-normal text-[#024B53] font-outfit whitespace-nowrap"
                        >
                            {search}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
