'use client';

import React from 'react';
import Image from 'next/image';
import moreImage1 from '../../../../public/Resources/Images/moreImage1.png';
import moreImage2 from '../../../../public/Resources/Images/moreImage2.png';
import moreImage3 from '../../../../public/Resources/Images/moreImage3.png';
import GridContainer from '@/GlobalComponent/GridContainer';
import GridComponent from '@/GlobalComponent/GridComponent';

const cardData = [
    { image: moreImage1 },
    { image: moreImage2 },
    { image: moreImage3 },
];

const MoreComponentDesktop = () => {
    return (
        <GridContainer>
            <div className="w-full rounded-b-xl bg-white px-14 py-6">
                <p className="text-[22px] pb-8 text-left font-medium not-italic leading-normal text-[#383837] font-outfit mb-6">
                    Apart from colleges and courses, we have a lot more to offer you, please check all our services...
                </p>

                <div className="flex items-stretch">
                    {/* Left Menu Column */}
                    <div className="w-[250px] pb-6 mr-8 flex flex-col space-y-4">
                        {/* 1. Partner with Us */}
                        <div className="text-[20px] font-semibold text-[#121211] font-outfit">Partner with Us</div>

                        {/* 2. Calculator Tools */}
                        <div>
                            <div className="text-[18px] font-semibold text-[#121211] font-outfit mb-2">Calculator Tools</div>
                            <ul className="ml-4 space-y-1 text-[16px] text-[#515150] font-medium font-outfit">
                                <li>SGPA to Percentage</li>
                                <li>CGPA to Percentage</li>
                                <li>SGPA to CGPA</li>
                            </ul>
                        </div>

                        {/* 3. Career Connect */}
                        <div className="text-[20px] font-semibold text-[#121211] font-outfit">Career Connect</div>

                        {/* 4. Trainers */}
                        <div className="text-[20px] font-semibold text-[#121211] font-outfit">Trainers</div>

                        {/* 5. Events */}
                        <div className="text-[20px] font-semibold text-[#121211] font-outfit">Events</div>
                    </div>

                    {/* Image Grid Section */}
                    <GridComponent lastUsedGridEnd={1} gridStart={3} gridEnd={12}>
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
                    </GridComponent>
                </div>
            </div>
        </GridContainer>
    );
};

export default MoreComponentDesktop;
