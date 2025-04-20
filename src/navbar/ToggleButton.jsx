// ToggleDropdownButtons.jsx
import React from 'react';

const ToggleDropdownButtons = ({
                                   activeDropdown,
                                   toggleDropdown,
                                   collegesBtnRef,
                                   programsBtnRef
                               }) => {
    return (
        <div className="flex bg-white p-1 rounded-full shadow-sm justify-between w-[260px] md:w-2/12 space-x-1">
            <button
                ref={collegesBtnRef}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ease-in-out ${activeDropdown === 'colleges' ? 'bg-yellow-400 text-black' : 'bg-transparent text-[#005A6B]'}`}
                onClick={() => toggleDropdown('colleges')}
            >
                Colleges
            </button>
            <button
                ref={programsBtnRef}
                className={`px-3 py-2 rounded-full text-xs font-bold transition-all duration-300 ease-in-out ${activeDropdown === 'programs' ? 'bg-yellow-400 text-black' : 'bg-transparent text-[#005A6B]'}`}
                onClick={() => toggleDropdown('programs')}
            >
                Online Programs
            </button>
        </div>
    );
};

export default ToggleDropdownButtons;
