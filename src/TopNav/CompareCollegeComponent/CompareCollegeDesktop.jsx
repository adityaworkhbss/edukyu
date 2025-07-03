import React from 'react';
import CompareCollageImage from '../../Resources/Images/CompareCollegeMenu.png';


const CompareCollegeDesktop = ({ containerWidth, gutter, numGrids }) => {


    return (
        <div className="w-full flex bg-[#FFF] px-14 py-6">
            <div className="text-left">
                <div className="text-[22px] pt-6 pb-3 font-medium text-[#383837] font-outfit leading-none">
                    Confused which college to choose?
                </div>

                <div className="text-[16px] pb-8 w-[720px] font-normal text-[#515150] font-outfit leading-none">
                    Compare the colleges that are on your mind, to see what all they provide and choose the best that you like. Because we want the best for you!
                </div>

                <div>
                    <button className="inline-flex items-center justify-center gap-[10px] px-[16px] py-[12px] rounded-[12px] bg-[#024B53] text-white text-[14px] font-medium font-outfit leading-none">
                        Compare Colleges
                    </button>
                </div>

            </div>
            <div className="pl-[26px]">
                <div className="inline-flex py-[8px] h-[146px] w-auto justify-end items-center gap-[29.25px] rounded-[12px]">
                    <img src={CompareCollageImage} alt="Compare College" />
                </div>
            </div>

        </div>
    );
};

export default CompareCollegeDesktop;