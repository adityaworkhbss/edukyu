import React, {useState} from 'react';

const BlogComponentMobile = ({ onClose })  => {

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
        <div className="fixed h-full top-0 left-0 w-[100%] bg-white shadow-lg z-50 flex flex-col overflow-y-auto">

            <div className="flex h-[58px] px-5  pl-[20px] items-center shrink-0">
                <div onClick={onClose} className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_43_3995)">
                            <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#2B2B2A"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_43_3995">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="flex flex-col w-full px-4 pb-4">
                    <div className="flex items-center w-full pt-4">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search"
                            className="flex-1 font-outfit text-[16px] font-medium text-[#515150] bg-transparent focus:outline-none truncate placeholder:text-[#515150]"
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch(e);
                                }
                            }}
                        />

                        <div className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path
                                    fill="#2B2B2A"
                                    d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="w-full mt-[6px] h-[1px] bg-[#CDCDCD]"></div>
                </div>
            </div>

            <div className="text-[22px] pb-6 text-left px-5 pt-5 font-medium text-[#383837] font-outfit leading-none">
                Our top blogs, fresh out of minds...
            </div>

            <div className="flex flex-col pt-6 gap-5 px-5">
                {blogItems.map((item, index) => (
                    <div
                        key={index}
                        className="w-full h-[339px] rounded-[12px] border border-[#CDCDCD] bg-[rgba(255,255,255,0.80)] hover:bg-[rgba(179,207,210,0.5)] transition-all duration-200 flex flex-col justify-between"
                    >
                        {/* Image Placeholder */}
                        <div className="w-full h-[150px] bg-gray-200 rounded-t-[12px]" />


                            <div className="text-[#383837] px-5 pt-5 font-outfit text-[16px] font-medium mb-2 leading-normal line-clamp-2">
                                {item.title}
                            </div>

                            <div className="text-[#515150] px-5 font-outfit text-[12px] pt-3 font-normal leading-normal mb-4 line-clamp-4">
                                {item.description}
                            </div>

                            <div className="text-[#515150] px-5 text-[12px] pb-4 font-outfit pt-6 font-normal">
                                Published on {item.date} | {item.readTime}
                            </div>

                    </div>
                ))}
            </div>


            {/* CTA Button */}
            <div className="flex justify-center py-6 px-5">
                <button className="inline-flex w-full items-center justify-center gap-[10px] px-[16px] py-[12px] bg-[#024B53] text-white text-[14px] font-outfit font-medium leading-normal rounded-[8px]">
                    Check all Blogs
                </button>
            </div>

        </div>
    );
};

export default BlogComponentMobile;
