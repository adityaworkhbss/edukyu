'use client';

import React from 'react';
import Image from 'next/image';
import CompareCollegeImage from '../../../../public/Resources/Images/CompareCollegeMenu.png';
import { usePageContext } from "@/GlobalComponent/PageContext";
import Link from 'next/link';

const CompareCollegeMobile = ({ onNavbarClose, onSidebarClose }) => {
    const { setCurrentPage } = usePageContext();

    const handleCompareClick = () => {
        // Close the navbar components if provided
        if (onNavbarClose) {
            onNavbarClose(); // Close the compare-colleges component
        }
        if (onSidebarClose) {
            onSidebarClose(); // Close the entire mobile sidebar
        }
    };

    return (
        <div className="fixed h-full top-0 left-0 w-full bg-white shadow-lg z-50 px-5 flex flex-col overflow-y-auto">
            {/* Top bar with back */}
            <div className="flex h-[58px] pt-6">
                <div onClick={onNavbarClose} className="cursor-pointer pt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15.4102 7.41L10.8302 12L15.4102 16.59L14.0002 18L8.00016 12L14.0002 6L15.4102 7.41Z" fill="#515150" />
                    </svg>
                </div>
                <div className="text-[#515150] pl-2 font-outfit text-[20px] font-medium not-italic leading-normal">
                    Compare Colleges
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col justify-center px-4 py-8">
                {/* Image */}
                <div className="text-center mb-8">
                    <Image
                        src={CompareCollegeImage}
                        alt="Compare College"
                        className="rounded-[12px] mx-auto max-w-[280px] w-full"
                        placeholder="blur"
                    />
                </div>

                {/* Text Content */}
                <div className="text-center mb-8">
                    <div className="text-[22px] font-semibold text-[#383837] font-outfit leading-tight mb-4">
                        Confused which college to choose?
                    </div>

                    <div className="text-[16px] font-normal text-[#515150] font-outfit leading-relaxed">
                        Compare the colleges that are on your mind, to see what all they provide and choose the best that you like. Because we want the best for you!
                    </div>
                </div>

                {/* Compare Button */}
                <div className="text-center">
                    <Link
                        href="/compare-colleges"
                        onClick={handleCompareClick}
                        className="inline-flex items-center justify-center gap-[10px] px-[24px] py-[14px] rounded-[12px] bg-[#024B53] text-white text-[16px] font-medium font-outfit leading-none cursor-pointer min-w-[200px] hover:bg-[#036068]"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                        </svg>
                        Compare Colleges
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CompareCollegeMobile;