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
            <button
                onClick={onSearch}
                className="ml-2 h-8 w-8 flex items-center justify-center rounded bg-[#CDCDCD]"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                        d="M10.3333 9.33333H9.80667L9.62 9.15333C10.2733 8.39333 10.6667 7.40667 10.6667 6.33333C10.6667 3.94 8.72667 2 6.33333 2C3.94 2 2 3.94 2 6.33333C2 8.72667 3.94 10.6667 6.33333 10.6667C7.40667 10.6667 8.39333 10.2733 9.15333 9.62L9.33333 9.80667V10.3333L12.6667 13.66L13.66 12.6667L10.3333 9.33333ZM6.33333 9.33333C4.67333 9.33333 3.33333 7.99333 3.33333 6.33333C3.33333 4.67333 4.67333 3.33333 6.33333 3.33333C7.99333 3.33333 9.33333 4.67333 9.33333 6.33333C9.33333 7.99333 7.99333 9.33333 6.33333 9.33333Z"
                        fill="#515150"
                    />
                </svg>
            </button>
        </div>
    );
};

export default SearchBar;