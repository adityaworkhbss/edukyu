// components/Blog/SearchBar.js
"use client";
import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
    return (
        <div className="flex items-center border-b border-[#CDCDCD] pb-2">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search from our plethora of blogs..."
                className="w-full font-outfit font-medium text-[#515150] bg-transparent focus:outline-none placeholder:text-[#515150]"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSearch(e);
                    }
                }}
            />
            {/*<button type="submit" className="h-8 w-8 rounded bg-[#CDCDCD] pl-2">*/}
            {/*    <svg*/}
            {/*        xmlns="http://www.w3.org/2000/svg"*/}
            {/*        width="20"*/}
            {/*        height="20"*/}
            {/*        fill="none"*/}
            {/*        viewBox="0 0 16 16"*/}
            {/*    >*/}
            {/*        <path*/}
            {/*            d="M10.333 9.333H9.807L9.62 9.153a4.667 4.667 0 1 0-.487.487l.186.18v.527l3.334 3.327 1-.993L10.333 9.333ZM6.333 9.333A3 3 0 1 1 9.333 6.333 3 3 0 0 1 6.333 9.333Z"*/}
            {/*            fill="#515150"*/}
            {/*        />*/}
            {/*    </svg>*/}
            {/*</button>*/}
        </div>
    );
};

export default SearchBar;