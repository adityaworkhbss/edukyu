'use client';

import { useState, useEffect } from 'react';
import { CollegePageSecondryData } from '@/Data Model/CollegePage/CollegePageSecondryData';
import { usePageContext } from "@/GlobalComponent/PageContext";
import Link from 'next/link';

export default function SearchComponentMobile({ onClose }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const { setCurrentPage, setSelectedCollege } = usePageContext();

    // /college/amity-university-online



    // universityKeyMap[amity-university-online]

    const universityKeyMap = {
        'Amity University Online': 'Amity-University',
        'D.Y. Patil University, Pune': 'D.Y.-Patil-Vidyapeeth',
        'Jain Online University': 'Jain-University',
        'Lovely Professional University': 'Lovely-Professional-University',
        'Manipal University Jaipur': 'Manipal-University-Jaipur',
        'NMIMS CDOE': 'NMIMS-University-Online',
        'Shoolini University': 'Shoolini-University',
        'Online UU': 'Uttaranchal-University',
        'Vivekanand Global University': 'Vivekanand-Global-University'
    };

    // Top trending tags data
    const topTrendingTags = [
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
        'UGC approved online degree courses'
    ];

    const handleTrendingClick = (trendingTag) => {
        setSearchQuery(trendingTag);
        // Close the mobile search overlay when a trending tag is clicked
        if (onClose) {
            onClose();
        }
        console.log('Trending search:', trendingTag);
    };

    // Get college names from universityKeyMap for all colleges (5 total)
    const collegeNames = Object.keys(universityKeyMap);

    const allCollegesList = [
        {
            name: collegeNames[0], // Amity University Online
            img: 'https://edukyu.com/college_image/Amity_University.png',
            type: 'trending' // First 3 are trending
        },
        {
            name: collegeNames[1], // D.Y. Patil University, Pune
            img: 'https://edukyu.com/college_image/DYP.png',
            type: 'trending'
        },
        {
            name: collegeNames[2], // Jain Online University
            img: 'https://edukyu.com/college_image/Jain_University.png',
            type: 'trending'
        },
        {
            name: collegeNames[3], // Lovely Professional University
            img: 'https://edukyu.com/college_image/Lovely_Professional_University.png',
            type: 'search' // Last 2 are search
        },
        {
            name: collegeNames[4], // Manipal University Jaipur
            img: 'https://edukyu.com/college_image/Manipal_University.png',
            type: 'search'
        }
    ];

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
        
        // Filter from allCollegesList (the ones with proper icons and types) that match the search
        const filteredColleges = allCollegesList.filter(college =>
            college.name.toLowerCase().includes(query)
        );
        
        // Also filter from general college data if needed
        const filteredGeneral = allColleges.filter(college =>
            college.name.toLowerCase().includes(query) ||
            college.about.toLowerCase().includes(query)
        ).slice(0, 5); // Limit to 5 results

        // Combine and prioritize allCollegesList results
        const combinedResults = [
            ...filteredColleges,
            ...filteredGeneral.filter(general => 
                !filteredColleges.some(college => college.name === general.name)
            )
        ].slice(0, 5); // Limit total results

        setSuggestions(combinedResults);
        setShowDropdown(combinedResults.length > 0);
    }, [searchQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
        setShowDropdown(false);
    };

    const handleSuggestionClick = (collegeName) => {
        setSearchQuery(collegeName);
        setShowDropdown(false);
        
        // Close the mobile search overlay when a suggestion is clicked
        if (onClose) {
            onClose();
        }
        
        console.log('Selected:', collegeName);
    };

    return (
        <div className="fixed h-full top-0 left-0 w-full bg-white shadow-lg z-50 flex flex-col overflow-y-auto rounded-b-xl">
            {/* Header with back */}
            <div className="flex h-[58px] px-5 items-center shrink-0">
                <div onClick={onClose} className="cursor-pointer">
                    {/* Back arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#2B2B2A" />
                    </svg>
                </div>

                {/* Search input */}
                <div className="flex flex-col w-full px-4  relative">
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
                        <div className="fixed top-[50px] left-0 right-0 bg-white shadow-lg rounded-b-lg border border-gray-200 max-h-60 overflow-y-auto z-50 mx-5">
                            {suggestions.map((college, idx) => (
                                <div key={idx}>
                                    <Link
                                        href={universityKeyMap.hasOwnProperty(college.name) ? `/college/${universityKeyMap[college.name]}` : '#'}
                                        onClick={() => handleSuggestionClick(college.name)}
                                        className="flex items-center gap-3 p-3 cursor-pointer transition-all duration-200 hover:bg-gray-50"
                                    >
                                        <div className="w-8 h-8 rounded flex items-center justify-center">
                                            {idx === 0 ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                    <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="#024B53" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                    <g clipPath="url(#clip0_43_4046)">
                                                        <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#024B53" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_43_4046">
                                                            <rect width="24" height="24" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            )}
                                        </div>
                                        <span className="text-[14px] font-normal text-[#024B53] font-outfit flex-1">
                                            {college.name}
                                        </span>
                                    </Link>
                                    {idx < suggestions.length - 1 && (
                                        <div className="h-[1px] w-full bg-[#CDCDCD] mx-3" />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Trending searches */}
            <div className="pt-[58px] px-[20px]">
                <div className="text-[22px] pb-4 font-medium text-[#383837] font-outfit leading-none">
                    Top trending searches
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {topTrendingTags.map((tag, index) => (
                        <button
                            key={index}
                            onClick={() => handleTrendingClick(tag)}
                            className="inline-flex items-center gap-[8px] px-[8px] py-[12px] rounded-[8px] bg-transparent hover:bg-[rgba(179,207,210,0.5)] transition-all duration-200 text-[14px] font-normal text-[#024B53] font-outfit text-left"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
