import React, { useState } from 'react';

const SearchComponentDesktop = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const trendingSearches = [
        'Trending search #1',
        'Trending search #2',
        'Trending search #2',
        'Trending search #2',
        'Trending search #1',
        'Trending search #2',
        'Trending search #2',
        'Trending search #2',
        'Trending search #1',
        'Trending search #2',
        'Trending search #2',
        'Trending search #2',
        'Trending search #1',
        'Trending search #2',
        'Trending search #2',
        'Trending search #2'
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
        <div className="px-14 bg-[#FFF] pt-[44px] pb-[24px]">
            <div className="">
                {/* Search Bar */}
                <div className="">
                    <div className="flex-col">
                        <div className="flex ">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for your dream made easier, type anything to search..."
                                className="w-full font-outfit font-medium text-[#515150] bg-transparent focus:outline-none focus:ring-0"
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSearch(e);
                                    }
                                }}
                            />

                            <div className="right-0 h-8 w-8 rounded bg-[#CDCDCD]">
                                <button
                                    onClick={handleSearch}
                                    className="p-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip0_43_3317)">
                                            <path d="M10.3333 9.33333H9.80667L9.62 9.15333C10.2733 8.39333 10.6667 7.40667 10.6667 6.33333C10.6667 3.94 8.72667 2 6.33333 2C3.94 2 2 3.94 2 6.33333C2 8.72667 3.94 10.6667 6.33333 10.6667C7.40667 10.6667 8.39333 10.2733 9.15333 9.62L9.33333 9.80667V10.3333L12.6667 13.66L13.66 12.6667L10.3333 9.33333ZM6.33333 9.33333C4.67333 9.33333 3.33333 7.99333 3.33333 6.33333C3.33333 4.67333 4.67333 3.33333 6.33333 3.33333C7.99333 3.33333 9.33333 4.67333 9.33333 6.33333C9.33333 7.99333 7.99333 9.33333 6.33333 9.33333Z" fill="#515150"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_43_3317">
                                                <rect width="16" height="16" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="h-[1px] w-full mt-[8px] bg-[#CDCDCD]" />
                    </div>
                </div>

                {/* Trending Searches Section */}
                <div className="pt-16">
                    <div className="text-[22px] pb-6 text-left font-medium text-[#383837] font-outfit leading-none">
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
        </div>
    );
};

export default SearchComponentDesktop;