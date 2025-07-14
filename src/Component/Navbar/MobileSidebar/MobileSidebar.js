'use client';

import { useState } from 'react';
import Image from 'next/image';
import Edukyu_logo from "../../../../public/Resources/Images/Edukyu_Logo.png";
import BlogComponentMobile from "../BlogComponent/BlogComponentMobile";
import ContactUsComponentMobile from "../ContactUsComponent/ContactUsComponentMobile";
import MoreComponentMobile from "../MoreComponent/MoreComponentMobile";
import CollegeComponentMobileDropDown
    from "@/Component/Navbar/CollegeComponent/CollegeComponentMobile/CollegeComponentMobileDropDown";
import CourseComponentMobileDropDown
    from "@/Component/Navbar/CoursesComponent/CourseComponentMobile/CourseComponentMobileDropDown";

export default function MobileSidebar({ onClose }) {
    const [isCollegeOpen, setIsCollegeOpen] = useState(false);
    const [isBlogOpen, setIsBlogOpen] = useState(false);
    const [isContactUsOpen, setIsContactUsOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 flex flex-col overflow-y-auto">
            {/* Header with logo and close */}
            <div className="flex justify-between items-center">
                <div className="pt-[20px] pl-[20px] w-[100px]">
                    <Image src={Edukyu_logo} alt="Edukyu" className="w-auto h-auto" />
                </div>
                <button className="pt-6 pr-[20px]" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#323232" />
                    </svg>
                </button>
            </div>

            {/* Menu items */}
            <div className="flex pt-[50px] px-[20px] text-[16px] text-left flex-col gap-4 p-4 font-outfit">
                {/* Colleges */}
                <div className="inline-flex justify-between items-center">
                    <span>Colleges</span>
                    <button onClick={() => setIsCollegeOpen(!isCollegeOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                            <path d={isCollegeOpen
                                ? "M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                                : "M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"}
                                  fill="#025E68" />
                        </svg>
                    </button>
                </div>
                <div className="w-full h-[1px] bg-[#DBDBDB]" />
                {isCollegeOpen && <CollegeComponentMobileDropDown />}

                {/* Online Courses */}
                <div className="inline-flex justify-between items-center">
                    <span>Online Courses</span>
                    <button onClick={() => setIsCoursesOpen(!isCoursesOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                            <path d={isCoursesOpen
                                ? "M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                                : "M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"}
                                  fill="#025E68" />
                        </svg>
                    </button>
                </div>
                <div className="w-full h-[1px] bg-[#DBDBDB]" />
                {isCoursesOpen && <CourseComponentMobileDropDown />}

                {/* Compare */}
                <div className="inline-flex justify-between">Compare</div>
                <div className="w-full h-[1px] bg-[#DBDBDB]" />

                {/* Blogs */}
                <div className="inline-flex justify-between items-center">
                    <span onClick={() => setIsBlogOpen(!isBlogOpen)}>Blogs</span>
                </div>
                <div className="w-full h-[1px] bg-[#DBDBDB]" />
                {isBlogOpen && (
                    <div className="pl-[44px] pt-[16px] pb-[54px]">
                        <BlogComponentMobile onClose={() => setIsBlogOpen(false)} />
                    </div>
                )}

                {/* More */}
                <div className="inline-flex justify-between items-center">
                    <span onClick={() => setIsMoreOpen(!isMoreOpen)}>More</span>
                    <button onClick={() => setIsMoreOpen(!isMoreOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                            <path d={isMoreOpen
                                ? "M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                                : "M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"}
                                  fill="#025E68" />
                        </svg>
                    </button>
                </div>
                <div className="w-full h-[1px] bg-[#DBDBDB]" />
                {isMoreOpen && (
                    <div className="pl-[44px] pt-[16px] pb-[54px]">
                        <MoreComponentMobile onClose={() => setIsMoreOpen(false)} />
                    </div>
                )}

                {/* Contact Us */}
                <div className="pt-4 space-y-4">
                    <div className="text-[16px] font-normal text-[#025E68] cursor-pointer"
                         onClick={() => setIsContactUsOpen(!isContactUsOpen)}>
                        CONTACT US
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-x-[27px] justify-between gap-y-5">
                        <ContactDetail iconType="phone" text="+91 90085 25443" />
                        <ContactDetail iconType="phone" text="+91 83368 89553" />
                        <ContactDetail iconType="email" text="hi@edukyu.com" />
                    </div>
                </div>

                {isContactUsOpen && (
                    <div>
                        <ContactUsComponentMobile />
                    </div>
                )}
            </div>
        </div>
    );
}

function ContactDetail({ iconType, text }) {
    const iconPath = {
        phone: "M6.25 2.5H3.33C2.87 2.5 2.5 2.87 2.5 3.33C2.5 11.16 8.84 17.5 16.67 17.5C17.13 17.5 17.5 17.12 17.5 16.66V13.75C17.5 13.3 17.13 12.92 16.67 12.92C15.63 12.92 14.62 12.76 13.69 12.45C13.51 12.41 13.22 12.41 13 12.65L11 14.48C8.65 13.28 6.72 11.35 5.52 8.99L7.35 7.16C7.58 6.93 7.65 6.6 7.56 6.31C7.25 5.37 7.08 4.37 7.08 3.33C7.08 2.87 6.71 2.5 6.25 2.5Z",
        email: "M18.33 5C18.33 4.08 17.58 3.33 16.67 3.33H3.33C2.42 3.33 1.67 4.08 1.67 5V15C1.67 15.91 2.42 16.67 3.33 16.67H16.67C17.58 16.67 18.33 15.91 18.33 15V5ZM16.67 5L10 9.17L3.33 5H16.67ZM16.67 15H3.33V6.67L10 10.83L16.67 6.67V15Z"
    };

    return (
        <div className="flex items-center text-sm text-black gap-x-[20px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 20 20">
                <path d={iconPath[iconType]} fill="#025E68" />
            </svg>
            <span className="font-medium text-[16px]">{text}</span>
        </div>
    );
}
