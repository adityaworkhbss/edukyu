import React from 'react';

const colleges = [
    'Trending search #1',
    'Trending search #2',
    'Trending search #2',
    'Trending search #2',
    'Trending search #1',
    'Trending search #2',
    'Trending search #2',
    'Trending search #2',
    'Trending search #1',
    'Trending search #2',
    'Trending search #2',
    'Trending search #2',
    'Trending search #1',
    'Trending search #2',
    'Trending search #2',
    'Trending search #2'
];

const CollegeList = () => {

    return (
        <div className="overflow-y-auto">
            <div className="flex w-[360px] h-[58px] pt-[17px] pr-[316px] pb-[17px] pl-[20px] items-center flex-shrink-0">

                <div>
                    <button className="w-6 h-6">
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
                    </button>
                </div>
                <div>
                    <input></input>
                </div>
            </div>

        <div>
            <div></div>
            <div></div>
        </div>
</div>
)
    ;
};

export default CollegeList;
