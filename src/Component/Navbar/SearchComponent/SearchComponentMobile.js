'use client';

import { useState, useEffect } from 'react';
import { CollegePageSecondryData } from '@/Data Model/CollegePage/CollegePageSecondryData';
import { usePageContext } from "@/GlobalComponent/PageContext";

export default function SearchComponentMobile({ onClose }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const { setCurrentPage, setSelectedCollege } = usePageContext();

    const universityKeyMap = {
        'Amity University Online': 'Amity_University',
        'D.Y. Patil University, Pune': 'DYP',
        'Jain Online University': 'Jain_University',
        'Lovely Professional University': 'Lovely_Professional_University',
        'Manipal University Jaipur': 'Manipal_University',
        'NMIMS CDOE': 'NMIMS',
        'Shoolini University': 'Shoolini_University',
        'Online UU': 'UU',
        'Vivekanand Global University': 'VGU'
    };

    const allColleges = Object.values(CollegePageSecondryData[0]).map(college => ({
        name: college.Colleges?.text || '',
        about: college.About || '',
        img: college.Colleges?.img || ''
    }));

    // Live search effect
    useEffect(() => {
        if (!searchQuery.trim()) {
            setSuggestions([]);
            setShowDropdown(false);
            return;
        }

        const query = searchQuery.toLowerCase();
        const filtered = allColleges.filter(college =>
            college.name.toLowerCase().includes(query) ||
            college.about.toLowerCase().includes(query)
        );

        setSuggestions(filtered);
        setShowDropdown(filtered.length > 0);
    }, [searchQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
        setShowDropdown(false);
    };

    const handleSuggestionClick = (collegeName) => {
        setSearchQuery(collegeName);
        setShowDropdown(false);

        const matchedKey = Object.keys(universityKeyMap).find(
            key => key.toLowerCase().trim() === collegeName.toLowerCase().trim()
        );

        if (matchedKey) {
            setSelectedCollege(universityKeyMap[matchedKey]);
            setCurrentPage('college'); // or 'compare' if needed
        }

        console.log('Selected:', collegeName);
    };

    const handleTrendingClick = (search) => {
        setSearchQuery(search);
    };

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

    return (
        <div className="fixed h-full top-0 left-0 w-full bg-white shadow-lg z-50 flex flex-col overflow-y-auto">
            {/* Header with back */}
            <div className="flex h-[58px] px-5 items-center shrink-0">
                <div onClick={onClose} className="cursor-pointer">
                    {/* Back arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#2B2B2A" />
                    </svg>
                </div>

                {/* Search input */}
                <div className="flex flex-col w-full px-4 pb-4 relative">
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
                            onFocus={() => {
                                if (suggestions.length) setShowDropdown(true);
                            }}
                        />
                        <div className="ml-2">
                            {/* Search icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_43_4046)">
                                    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#2B2B2A"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_43_4046">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="w-full mt-[6px] h-[1px] bg-[#CDCDCD]" />

                    {/* Suggestions dropdown */}
                    {showDropdown && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-60 overflow-y-auto z-50">
                            {suggestions.map((college, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => handleSuggestionClick(college.name)}
                                    className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer"
                                >
                                    <img src={college.img} alt={college.name} className="w-8 h-8 rounded" />
                                    <span className="text-sm text-gray-700">{college.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Trending searches */}
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
