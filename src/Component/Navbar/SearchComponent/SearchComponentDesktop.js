'use client';

import { useState, useEffect } from 'react';
import { CollegePageSecondryData } from '@/Data Model/CollegePage/CollegePageSecondryData';
import {usePageContext} from "@/GlobalComponent/PageContext"; // adjust import path

export default function SearchComponentDesktop() {
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
        // 'NMIMS CDOE': 'NIU',
        // 'Shardha University': 'Shardha',
        'Shoolini University': 'Shoolini_University',
        'Online UU': 'UU',
        'Vivekanand Global University': 'VGU'
    };

    // Flatten all colleges into an array
    const allColleges = Object.values(CollegePageSecondryData[0]).map(college => ({
        name: college.Colleges?.text || '',
        about: college.About || '',
        img: college.Colleges?.img || ''
    }));

    // Update suggestions when user types
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

        if (universityKeyMap.hasOwnProperty(collegeName)) {
            setSelectedCollege(universityKeyMap[collegeName]);
            setCurrentPage('college');
        }

        console.log('Selected:', collegeName);
    };


    return (
        <div className="px-14 rounded-b-xl bg-white pt-[44px] pb-[24px] relative">
            {/* Search Input */}
            <div className="flex-col">
                <div className="flex relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for your dream made easier, type anything to search..."
                        className="w-full font-outfit font-medium text-[#515150] bg-transparent focus:outline-none focus:ring-0"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSearch(e);
                        }}
                        onFocus={() => {
                            if (suggestions.length) setShowDropdown(true);
                        }}
                    />
                    <div className="right-0 h-8 w-8 rounded bg-[#CDCDCD]">
                        <button onClick={handleSearch} className="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path d="M10.333 9.333H9.807L9.62 9.153a4.667 4.667 0 1 0-.487.487l.186.18v.527l3.334 3.327 1-.993L10.333 9.333ZM6.333 9.333A3 3 0 1 1 9.333 6.333 3 3 0 0 1 6.333 9.333Z" fill="#515150" />
                            </svg>
                        </button>
                    </div>

                    {/* Dropdown */}
                    {showDropdown && (
                        <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-60 overflow-y-auto z-50">
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
                <div className="h-[1px] w-full mt-[8px] bg-[#CDCDCD]" />
            </div>

            {/* Trending Searches */}
            <div className="pt-16">
                <div className="text-[22px] pb-6 font-medium text-[#383837] font-outfit leading-none">
                    Top trending searches
                </div>
                <div className="flex flex-wrap gap-3 justify-start">
                    {[
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
                    ].map((search, index) => (
                        <button
                            key={index}
                            onClick={() => setSearchQuery(search)}
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
