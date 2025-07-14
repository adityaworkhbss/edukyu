'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import moreImage1 from '../../../../public/Resources/Images/moreImage1.png';
import moreImage2 from '../../../../public/Resources/Images/moreImage2.png';
import moreImage3 from '../../../../public/Resources/Images/moreImage3.png';

const cardData = [
    { image: moreImage1 },
    { image: moreImage2 },
    { image: moreImage3 },
];

const MoreComponentMobile = ({ onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    return (
        <div className="fixed h-full top-0 left-0 w-full bg-white shadow-lg z-50 flex flex-col overflow-y-auto">
            <div className="flex h-[58px] px-5 pl-[20px] items-center shrink-0">
                <div onClick={onClose} className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#2B2B2A" />
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
                            onKeyDown={(e) => {
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

                    <div className="w-full mt-[6px] h-[1px] bg-[#CDCDCD]" />
                </div>
            </div>

            <div className="pt-[10px] px-[20px]">
                <p className="text-[#383837] font-outfit text-[16px] font-medium leading-normal not-italic text-left">
                    Apart from colleges and courses, we have a lot more to offer you, please check all our services...
                </p>

                <div className="flex pt-6">
                    <div>
                        <div className="text-[#121211] font-outfit text-[16px] font-medium leading-normal not-italic text-left mb-4">
                            Heading 1
                        </div>
                        <ul className="space-y-3 text-[14px] text-[#515150] font-medium not-italic leading-normal text-left font-outfit">
                            <li>About Us</li>
                            <li>Partner with Us</li>
                            <li>Trainers</li>
                            <li>Events</li>
                            <li>Career Connect</li>
                            <li>Offering 6</li>
                            <li>Offering 7</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-y-6 pt-[40px] pb-6 flex-col">
                    {cardData.map((card, idx) => (
                        <div key={idx} className="w-full rounded-[12px] overflow-hidden relative h-[180px]">
                            <Image
                                src={card.image}
                                alt={`Card ${idx + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-[12px]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MoreComponentMobile;
