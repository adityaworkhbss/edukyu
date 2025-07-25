import { useState } from 'react';

const MobileFilterCheckbox = ({ filters, onToggle, onSelectAll }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const allChecked = Object.values(filters).every(Boolean);
    const checkedCount = Object.values(filters).filter(Boolean).length;
    const totalCount = Object.keys(filters).length;

    const filterCategories = [
        {
            title: "Basic Info",
            filters: ["abbreviation", "instituteType", "establishment", "about"]
        },
        {
            title: "Academic",
            filters: ["accreditation", "duration", "learningMethodology", "programs", "specialisation"]
        },
        {
            title: "Financial & Practical",
            filters: ["fees", "eligibility", "website"]
        },
        {
            title: "Reviews & Recommendations",
            filters: ["review", "ourRecommendation"]
        }
    ];

    const formatFilterName = (key) => {
        return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    };

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6 overflow-hidden">
            {/* Header */}
            <div
                className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#357E86] rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">Filter Options</h3>
                        <p className="text-sm text-gray-500">{checkedCount} of {totalCount} selected</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-12 h-6 bg-gray-200 rounded-full mr-3 relative">
                        <div
                            className={`w-6 h-6 bg-[#357E86] rounded-full transition-transform ${
                                checkedCount > totalCount / 2 ? 'translate-x-6' : 'translate-x-0'
                            }`}
                        ></div>
                    </div>
                    <svg
                        className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {/* Expanded Content */}
            {isExpanded && (
                <div className="p-4 space-y-6">
                    {/* Quick Actions */}
                    <div className="flex space-x-3">
                        <button
                            onClick={() => onSelectAll(true)}
                            className="flex-1 py-2 px-4 bg-[#357E86] text-white rounded-lg text-sm font-medium"
                        >
                            Select All
                        </button>
                        <button
                            onClick={() => onSelectAll(false)}
                            className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium"
                        >
                            Clear All
                        </button>
                    </div>

                    {/* Categorized Filters */}
                    {filterCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-3">
                            <h4 className="text-sm font-semibold text-gray-700 border-b border-gray-200 pb-2">
                                {category.title}
                            </h4>
                            <div className="grid grid-cols-1 gap-3">
                                {category.filters.map((filterKey) => (
                                    <label
                                        key={filterKey}
                                        className="flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                                    >
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                checked={filters[filterKey]}
                                                onChange={() => onToggle(filterKey)}
                                                className="sr-only"
                                            />
                                            <div className={`w-5 h-5 rounded border-2 transition-colors ${
                                                filters[filterKey]
                                                    ? 'bg-[#357E86] border-[#357E86]'
                                                    : 'bg-white border-gray-300'
                                            }`}>
                                                {filters[filterKey] && (
                                                    <svg className="w-3 h-3 text-white mx-auto mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                        <span className="ml-3 text-sm text-gray-700 font-medium">
                                            {formatFilterName(filterKey)}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobileFilterCheckbox;