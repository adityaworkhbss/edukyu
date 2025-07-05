import React from 'react';
import moreImage1 from '../../Resources/Images/moreImage1.png';
import moreImage2 from '../../Resources/Images/moreImage2.png';
import moreImage3 from '../../Resources/Images/moreImage3.png'
import GridContainer from "../../GlobalComponent/GridContainer";
import GridComponent from "../../GlobalComponent/GridComponent";

const cardData = [
    {
        image: moreImage1, // Use imported variable here, no quotes
    },
    {
        image: moreImage2,
    },
    {
        image: moreImage3,
    },
];

const MoreComponentDesktop = () => {
    return (
        <GridContainer>
            <div className="w-full bg-white px-14 py-6">
                <p className="text-[22px] pb-8 text-left font-medium not-italic leading-normal text-[#383837] font-outfit mb-6">
                    Apart from colleges and courses, we have a lot more to offer you, please check all our services...
                </p>

                <div className="flex">
                    {/* Sidebar */}
                    <div className="w-[200px] mr-8">
                        <div className="text-[20px] text-left font-medium not-italic leading-normal text-[#121211] font-outfit mb-4">
                            Heading 1
                        </div>

                        <ul className="space-y-3 text-[16px] text-[#515150] font-medium not-italic leading-normal text-left font-outfit">
                            <li>About Us</li>
                            <li>Partner with Us</li>
                            <li>Trainers</li>
                            <li>Events</li>
                            <li>Career Connect</li>
                            <li>Offering 6</li>
                            <li>Offering 7</li>
                        </ul>
                    </div>

                    {/* Cards */}
                    <GridComponent
                        lastUsedGridEnd={1}
                        gridStart={3}
                        gridEnd={12}
                        className=""
                    >
                        <div className="flex gap-x-6 gap-y-5 flex-wrap">
                            {cardData.map((card, idx) => (
                                <div
                                    key={idx}
                                    className=" flex-shrink-0 rounded-[12px] bg-cover bg-no-repeat bg-center w-[331px] h-[253px]"
                                    style={{
                                        backgroundImage: `url(${card.image})`,
                                        backgroundColor: 'lightgray',
                                    }}
                                >
                                    {/* Optional inner content */}
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
