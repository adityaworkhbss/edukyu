import React, { forwardRef } from 'react';
import '../Styles/Navbar.css'

const ToggleDropdownButtons = forwardRef(({
                                              activeDropdown,
                                              toggleDropdown,
                                              collegesBtnRef,
                                              programsBtnRef
                                          }, ref) => {
    return (
        <div
            ref={ref}
            className="flex bg-white p-1 rounded-full drop-shadow-md justify-between w-[clamp(800px, 10vw, 220px)] h-[clamp(10px, 8vw, 50px)]"
        >
            <button
                ref={collegesBtnRef}
                className={`toggle-button px-8 py-2 font-bold rounded-full text-[clamp(10px,2vw,16px)] transition-all duration-400 ease-in-out ${activeDropdown === 'colleges' ? 'bg-yellow-400 text-black' : 'bg-transparent text-[#005A6B]'}`}
                onClick={() => toggleDropdown('colleges')}
            >
                Colleges
            </button>
            <button
                ref={programsBtnRef}
                className={`toggle-button px-3 py-2 font-bold text-sm rounded-full text-[clamp(10px,2vw,16px)] transition-all duration-400 ease-in-out ${activeDropdown === 'programs' ? 'bg-yellow-400 text-black' : 'bg-transparent text-[#005A6B]'}`}
                onClick={() => toggleDropdown('programs')}
            >
                Online Programs
            </button>
        </div>

    );
});

export default ToggleDropdownButtons;
