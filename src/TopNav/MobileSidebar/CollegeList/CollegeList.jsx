import React from 'react';

const colleges = [
    'Amity University',
    'Chandigarh University',
    'Dr. DY Patil University',
    'Jain University',
    'Jamia Hamdard University',
    'Lovely Professional University',
    'Manipal University',
    'NMIMS University',
    'Shardha University',
    'Shoolini University',
    'Uttaranchal University',
    'VIT Online',
    'Vivekanand Global University'
];

const CollegeList = () => {

    return (
        <div className="overflow-y-auto">
            <ul className="space-y-4">
                    {colleges.map((college, idx) => (
                        <li
                            key={idx}
                            className="flex font-outfit justify-between font-medium text-[14px]  text-[#025E68]"
                        >
                            {college}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_305_163)">
                                    <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="#025E68"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_305_163">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default CollegeList;
