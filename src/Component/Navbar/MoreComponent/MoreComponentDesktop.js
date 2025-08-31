'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moreImage1 from '../../../../public/Resources/Images/moreImage1.png';
import moreImage2 from '../../../../public/Resources/Images/moreImage2.png';
import moreImage3 from '../../../../public/Resources/Images/moreImage3.png';
import GridContainer from '@/GlobalComponent/GridContainer';
import GridComponent from '@/GlobalComponent/GridComponent';
import GridContainerSec from "@/GlobalComponent/GridContainerSec";
import GridComponentSec from "@/GlobalComponent/GridComponentSec";

const cardData = [
    { image: moreImage1 },
    { image: moreImage2 },
    { image: moreImage3 },
];

const MoreComponentDesktop = () => {
    return (
        <GridContainerSec>
            <div className="w-full rounded-b-xl bg-white px-14 py-6">
                <p className="text-[22px] pb-8 text-left font-medium not-italic leading-normal text-[#383837] font-outfit mb-6">
                    Apart from colleges and courses, we have a lot more to offer you, please check all our services...
                </p>

                <div className="flex items-stretch">
                    {/* Left Menu Column */}
                    <div className="w-[250px] pb-6 mr-8 flex flex-col space-y-4">
                        {/* 1. Partner with Us */}
                        <Link
                            href="https://edukyu.com/partner-with-us"
                            className="text-[20px] font-semibold text-[#121211] font-outfit hover:text-[#024B53]"
                        >
                            Partner with Us
                        </Link>

                        {/* 2. Calculator Tools */}
                        <div>
                            <div className="text-[18px] font-semibold text-[#121211] font-outfit mb-2">Calculator Tools</div>
                            <ul className="ml-4 space-y-1 text-[16px] text-[#515150] font-medium font-outfit">
                                <li>
                                    <Link href="https://edukyu.com/sgpa-to-percentage" className="hover:text-[#024B53]">
                                        SGPA to Percentage
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://edukyu.com/cgpa-to-percentage" className="hover:text-[#024B53]">
                                        CGPA to Percentage
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://edukyu.com/sgpa-to-cgpa" className="hover:text-[#024B53]">
                                        SGPA to CGPA
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* 3. Career Connect */}
                        <Link
                            href="https://edukyu.com/contact-us"
                            className="text-[20px] font-semibold text-[#121211] font-outfit hover:text-[#024B53]"
                        >
                            Career Connect
                        </Link>

                        {/* 4. Trainers */}
                        <Link
                            href="https://edukyu.com/trainers"
                            className="text-[20px] font-semibold text-[#121211] font-outfit hover:text-[#024B53]"
                        >
                            Trainers
                        </Link>

                        {/* 5. Events */}
                        <Link
                            href="https://edukyu.com/events"
                            className="text-[20px] font-semibold text-[#121211] font-outfit hover:text-[#024B53]"
                        >
                            Events
                        </Link>
                    </div>

                    {/* Image Grid Section */}
                    <GridComponentSec lastUsedGridEnd={1} gridStart={3} gridEnd={12}>
                        <div className="flex gap-x-6 gap-y-5 flex-wrap h-full">
                            {cardData.map((card, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 rounded-[12px] bg-cover bg-no-repeat bg-center w-[331px] h-[253px] relative overflow-hidden"
                                >
                                    <Image
                                        src={card.image}
                                        alt={`Card ${idx + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </GridComponentSec>
                </div>
            </div>
        </GridContainerSec>
    );
};

export default MoreComponentDesktop;
