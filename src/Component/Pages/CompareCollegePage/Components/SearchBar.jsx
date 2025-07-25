import { useState } from 'react';

const SearchBar = ({ index, collegeNames, onSelect, onRemove, showRemove }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedCollege, setSelectedCollege] = useState('');

    const filteredColleges = collegeNames.filter(college =>
        college.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelect = (college) => {
        setSelectedCollege(college);
        setSearchTerm(college);
        setShowDropdown(false);
        onSelect(index, college);
    };

    return (
        <div className="w-1/4 relative">
            <div className="flex items-center bg-white border border-gray-300 rounded-lg p-3 shadow-sm hover:border-[#357E86] transition-colors">
                <div className="mr-3 flex-shrink-0">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#357E86]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                </div>
                <div className="relative flex-grow">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setShowDropdown(e.target.value.length > 0);
                        }}
                        placeholder="Search University"
                        className="w-full border-none focus:outline-none focus:ring-0 placeholder-gray-400"
                        aria-label="Search for a university"
                    />
                    {showDropdown && filteredColleges.length > 0 && (
                        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                            {filteredColleges.map((college) => (
                                <div
                                    key={college}
                                    className="p-3 hover:bg-indigo-50 cursor-pointer flex items-center"
                                    onClick={() => handleSelect(college)}
                                >
                                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>{college}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {showRemove && (
                <button
                    onClick={() => onRemove(index)}
                    className="absolute -right-2 -top-2 bg-[#357E86] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 transition-colors shadow-md"
                    aria-label="Remove college"
                >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default SearchBar;