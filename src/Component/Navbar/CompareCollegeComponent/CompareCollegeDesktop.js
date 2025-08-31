'use client';

import React from 'react';
import Image from 'next/image';
import CompareCollegeImage from '../../../../public/Resources/Images/CompareCollegeMenu.png';
import GridContainer from '@/GlobalComponent/GridContainer';
import GridComponent from '@/GlobalComponent/GridComponent';
import {usePageContext} from "@/GlobalComponent/PageContext";
import GridContainerSec from "@/GlobalComponent/GridContainerSec";
import GridComponentSec from "@/GlobalComponent/GridComponentSec";

const CompareCollegeDesktop = ({ numGrids, gutter }) => {
    const { setCurrentPage } = usePageContext();

    return (
        <div className="w-full rounded-b-xl bg-white px-14 py-6">
            <GridContainerSec
                numGrids={numGrids}
                gutter={gutter}
                gridHeight="auto"
                showGrids={false}
            >

                <GridComponentSec
                    lastUsedGridEnd={0}
                    gridStart={1}
                    gridEnd={7}
                    className="text-left"
                >
                    <div>
                        <div className="text-[22px] pt-6 pb-3 font-medium text-[#383837] font-outfit leading-none">
                            Confused which college to choose?
                        </div>

                        <div className="text-[16px] pb-8 w-full font-normal text-[#515150] font-outfit leading-none">
                            Compare the colleges that are on your mind, to see what all they provide and choose the best that you like. Because we want the best for you!
                        </div>

                        <div>
                            <button className="inline-flex items-center justify-center gap-[10px] px-[16px] py-[12px] rounded-[12px] bg-[#024B53] text-white text-[14px] font-medium font-outfit leading-none"
                                    onClick={() => setCurrentPage('compare-college')}
                            >
                                Compare Colleges
                            </button>
                        </div>
                    </div>
                </GridComponentSec>

                {/* Image Section - Grid 7 to 12 */}
                <GridComponentSec
                    lastUsedGridEnd={8}
                    gridStart={8}
                    gridEnd={12}
                    className=""
                >
                    <div className="pl-[24px] rounded-[12px]">
                        <Image
                            src={CompareCollegeImage}
                            alt="Compare College"
                            className="rounded-[12px]"
                            placeholder="blur"
                        />
                    </div>
                </GridComponentSec>
            </GridContainerSec>
        </div>
    );
};

export default CompareCollegeDesktop;
