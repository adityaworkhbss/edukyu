import React from 'react';
import Edukyu_logo from "../../Resources/Images/Edukyu_Logo.png";
import CollegeList from "./CollegeList/CollegeList";
import BlogComponentMobile from "../BlogComponent/BlogComponentMobile";

const MobileSidebar = ({ onClose }) => {

    const [isCollegeOpen, setIsCollegeOpen] = React.useState(false);
    const [isBlogOpen, setIsBlogOpen] = React.useState(false);

    return (
        <div className="fixed top-0 left-0 w-[100%] h-full  bg-white shadow-lg z-50 flex flex-col overflow-y-auto">
            <div className="flex justify-between items-center">
                <img className="items-center pt-[20px] pl-[20px] w-[100px] " src={Edukyu_logo} alt="Edukyu" />
                <button className="pt-6 pr-[20px]" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_222_128)">
                            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#323232"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_222_128">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>

            <div className="flex pt-[50px] px-[20px] text-[16px] text-left flex-col gap-4 p-4 font-outfit">
                <div className="inline-flex justify-between">
                    Colleges
                    {!isCollegeOpen ? (
                        <a onClick={() => setIsCollegeOpen(!isCollegeOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_222_100)">
                                    <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="#025E68"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_222_100">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    ) : (
                        <a onClick={() => setIsCollegeOpen(!isCollegeOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_305_162)">
                                    <path d="M7.41195 8.5878L11.9998 13.17L16.592 8.5922L18.0013 10.0029L11.9984 16L6.00128 9.99713L7.41195 8.5878Z" fill="#025E68"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_305_162">
                                        <rect width="24" height="24" fill="white" transform="translate(24.0059 0.00574493) rotate(90.0274)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    )}
                </div>

                <div className="w-[100%] h-[1px] bg-[#DBDBDB]"></div>

                {isCollegeOpen && (
                    <div className="pl-[44px] pt-[16px] pb-[54px]">
                        <CollegeList/>
                    </div>
                )}

                <div className="inline-flex justify-between">
                    Online Courses
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_222_100)">
                            <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="#025E68"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_222_100">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg></a>
                </div>

                <div className="w-[100%] h-[1px] bg-[#DBDBDB]"></div>

                <div className="inline-flex justify-between">
                    Compare
                </div>

                <div className="w-[100%] h-[1px] bg-[#DBDBDB]"></div>

                <div className="inline-flex justify-between" onClick={() => setIsBlogOpen(!isCollegeOpen)}>
                    Blogs
                </div>

                <div className="w-[100%] h-[1px] bg-[#DBDBDB]"></div>

                {isBlogOpen && (
                    <div className="pl-[44px] pt-[16px] pb-[54px]">
                        <BlogComponentMobile  onClose={() => setIsBlogOpen(false)}/>
                    </div>
                )}

                <div className="inline-flex justify-between">
                    More
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_222_100)">
                                <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="#025E68"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_222_100">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>

                <div className="w-[100%] h-[1px] bg-[#DBDBDB]"></div>

                <div className=" pt-4 pb-[226px] space-y-4">
                    <div className="text-[16px] font-normal text-[#025E68] ">CONTACT US</div>

                    <div className="inline-flex gap-x-[27px]">
                        <div className="flex items-center text-sm text-black gap-x-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 20 20">
                                <g clipPath="url(#clip0)">
                                    <path d="M5.45 4.16667C5.5 4.90833 5.625 5.63333 5.825 6.325L4.825 7.325C4.48333 6.325 4.26667 5.26667 4.19167 4.16667H5.45ZM13.6667 14.1833C14.375 14.3833 15.1 14.5083 15.8333 14.5583V15.8C14.7333 15.725 13.675 15.5083 12.6667 15.175L13.6667 14.1833ZM6.25 2.5H3.33333C2.875 2.5 2.5 2.875 2.5 3.33333C2.5 11.1583 8.84167 17.5 16.6667 17.5C17.125 17.5 17.5 17.125 17.5 16.6667V13.7583C17.5 13.3 17.125 12.925 16.6667 12.925C15.6333 12.925 14.625 12.7583 13.6917 12.45C13.6083 12.4167 13.5167 12.4083 13.4333 12.4083C13.2167 12.4083 13.0083 12.4917 12.8417 12.65L11.0083 14.4833C8.65 13.275 6.71667 11.35 5.51667 8.99167L7.35 7.15833C7.58333 6.925 7.65 6.6 7.55833 6.30833C7.25 5.375 7.08333 4.375 7.08333 3.33333C7.08333 2.875 6.70833 2.5 6.25 2.5Z" fill="#025E68"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="font-medium text-[16px]">833-688-9553</span>
                        </div>

                        <div className="flex items-center text-sm text-black gap-x-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 20 20">
                                <g clipPath="url(#clip1)">
                                    <path d="M18.3337 5.00001C18.3337 4.08334 17.5837 3.33334 16.667 3.33334H3.33366C2.41699 3.33334 1.66699 4.08334 1.66699 5.00001V15C1.66699 15.9167 2.41699 16.6667 3.33366 16.6667H16.667C17.5837 16.6667 18.3337 15.9167 18.3337 15V5.00001ZM16.667 5.00001L10.0003 9.16668L3.33366 5.00001H16.667ZM16.667 15H3.33366V6.66668L10.0003 10.8333L16.667 6.66668V15Z" fill="#025E68"/>
                                </g>
                                <defs>
                                    <clipPath id="clip1">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="font-medium text-[16px]">hi@edukyu.com</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MobileSidebar;