const FilterCheckbox = ({ filters, onToggle, onSelectAll }) => {
    const allChecked = Object.values(filters).every(Boolean);

    return (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
            <div className="flex flex-wrap gap-3">
                {Object.entries(filters).map(([key, value]) => (
                    <button
                        key={key}
                        onClick={() => onToggle(key)}
                        className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            value
                                ? 'bg-indigo-100 text-[#357E86] border border-indigo-200'
                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                    >
                        <svg
                            className={`w-4 h-4 mr-2 ${value ? 'text-[#357E86]' : 'text-gray-400'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {value ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            )}
                        </svg>
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </button>
                ))}

                <button
                    onClick={() => onSelectAll(!allChecked)}
                    className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        allChecked
                            ? 'bg-indigo-100 text--[#357E86] border border-indigo-200'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                >
                    <svg
                        className={`w-4 h-4 mr-2 ${allChecked ? 'text--[#357E86]' : 'text-gray-400'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {allChecked ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        )}
                    </svg>
                    Select All
                </button>
            </div>
        </div>
    );
};

export default FilterCheckbox;