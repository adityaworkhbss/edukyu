import React, { useState } from 'react';

const SearchComponentDesktop = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const blogItems = Array(4).fill({
        title: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum",
        description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum",
        date: "January 1, 2024",
        readTime: "08 min read"
    });

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    return (
        <div className="px-14 bg-white pt-[44px] pb-[24px]">
            {/* Search Bar */}
            <div className="flex items-center border-b border-[#CDCDCD] pb-2">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search from our plethora of blogs..."
                    className="w-full font-outfit font-medium text-[#515150] bg-transparent focus:outline-none placeholder:text-[#515150]"
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch(e);
                        }
                    }}
                />
                <button
                    onClick={handleSearch}
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

            {/* Blog Section */}
            <div className="pt-16">
                <div className="text-[22px] pb-6 text-left font-medium text-[#383837] font-outfit">
                    Our top blogs, fresh out of minds...
                </div>

                {/* Blog Grid */}
                <div className="inline-flex gap-[24px]">
                    {blogItems.map((item, index) => (
                        <div
                            key={index}
                            className="h-[339px] text-left flex flex-col justify-between rounded-[12px] bg-white hover:bg-[rgba(179,207,210,0.5)] transition-all duration-200"
                        >
                            {/* Placeholder Image */}
                            <div className="w-full h-[150px] bg-gray-200" />

                            {/* Blog Title */}
                            <div className="text-[#383837] px-3 pt-5 font-outfit text-[16px] font-medium leading-normal line-clamp-2">
                                {item.title}
                            </div>

                            {/* Blog Description */}
                            <div className="text-[#515150] px-3 pt-[13px] font-outfit text-[12px] font-normal leading-normal line-clamp-4">
                                {item.description}
                            </div>


                            {/* Meta Info */}
                            <div className="text-[#515150] px-3 pt-[37px] pb-4 font-outfit text-[12px] font-normal leading-normal">
                                Published on {item.date} | {item.readTime}
                            </div>

                        </div>
                    ))}
                </div>


                {/* CTA Button */}
                <div className="flex justify-end mt-10">
                    <button className="inline-flex items-center justify-center gap-[10px] px-[16px] py-[12px] bg-[#024B53] text-white text-[14px] font-outfit font-medium leading-normal rounded-[8px]">
                        Check all Blogs
                    </button>
                </div>

            </div>
        </div>
    );
};

export default SearchComponentDesktop;
