'use client';

import { useState } from 'react';

export default function SearchComponentDesktop() {
    const [searchQuery, setSearchQuery] = useState('');

    const trendingSearches = [
        'Trending search #1', 'Trending search #2', 'Trending search #2', 'Trending search #2',
        'Trending search #1', 'Trending search #2', 'Trending search #2', 'Trending search #2',
        'Trending search #1', 'Trending search #2', 'Trending search #2', 'Trending search #2',
        'Trending search #1', 'Trending search #2', 'Trending search #2', 'Trending search #2',
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
        <div className="px-14 rounded-b-xl bg-white pt-[44px] pb-[24px]">
            <div className="flex-col">
                <div className="flex">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for your dream made easier, type anything to search..."
                        className="w-full font-outfit font-medium text-[#515150] bg-transparent focus:outline-none focus:ring-0"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSearch(e);
                        }}
                    />
                    <div className="right-0 h-8 w-8 rounded bg-[#CDCDCD]">
                        <button onClick={handleSearch} className="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <g clipPath="url(#clip0)">
                                    <path d="M10.333 9.333H9.807L9.62 9.153a4.667 4.667 0 1 0-.487.487l.186.18v.527l3.334 3.327 1-.993L10.333 9.333ZM6.333 9.333A3 3 0 1 1 9.333 6.333 3 3 0 0 1 6.333 9.333Z" fill="#515150" />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="h-[1px] w-full mt-[8px] bg-[#CDCDCD]" />
            </div>

            <div className="pt-16">
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
