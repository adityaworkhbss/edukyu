'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useBreakpoint } from '@/hooks/useBreakpoint';

import MobileSidebar from './MobileSidebar/MobileSidebar';
import CompareCollegeDesktop from './CompareCollegeComponent/CompareCollegeDesktop';
import SearchComponentDesktop from './SearchComponent/SearchComponentDesktop';
import SearchComponentMobile from './SearchComponent/SearchComponentMobile';
import BlogComponentDesktop from './BlogComponent/BlogComponentDesktop';
import ContactUsComponentDesktop from './ContactUsComponent/ContactUsComponentDesktop';
import MoreComponentDesktop from './MoreComponent/MoreComponentDesktop';
import CoursesComponentDesktop from './CoursesComponent/CourseComponentDesktop/CoursesComponentDesktop';
import CollegeHeaderComponentDesktop from './CollegeComponent/CollegeComponentDesktop/CollegeHeaderComponentDesktop';
import { usePageContext } from "@/GlobalComponent/PageContext";
import Link from "next/link";

export default function TopNav() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const [activeTab, setActiveTab] = useState(null);
    const { setCurrentPage, currentPage } = usePageContext();
    const breakpoint = useBreakpoint();
    const isMobile = breakpoint === 'mobile';

    const dropdownRef = useRef(null);

    const toggleTab = (tabName) => (e) => {
        e.preventDefault();
        setActiveTab((prevTab) => (prevTab === tabName ? null : tabName));
    };



    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !event.target.closest('[data-tab-button]') // ignore clicks on tab buttons
            ) {
                setActiveTab(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            if (activeTab) {
                console.log("" + document.body.style.overflow)
                document.body.style.overflow = 'hidden';
                console.log(document.body.style.overflow);
                document.documentElement.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';
            }
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [activeTab, isMobile]);


    useEffect(() => {
        setActiveTab(null);
    }, [currentPage]);

    return (
        <div className="bg-white w-full h-16 font-outfit z-5000 shadow-md">
            {isMobile ? (
                <>
                    {/* Mobile Header */}
                    <div className="flex items-center h-12 justify-between px-5">
                        <div className="pr-5" onClick={() => setSidebarOpen(true)}>
                            {/* Hamburger Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path d="M2 16V18H22V16H2ZM2 11V13H22V11H2ZM2 6V8H22V6H2Z" fill="#2B2B2A" />
                            </svg>
                        </div>
                        <Link href="/">
                            <div className="flex items-center"
                           // onClick={() => setCurrentPage('home')}
                        >
                            <Image src="/Resources/Images/Edukyu_Logo.png" alt="Edukyu" width={120} height={40} />
                        </div>
                        </Link>

                        {/* <div className="flex items-center"
                            onClick={() => setCurrentPage('home')}
                        >
                            <Image src="/Resources/Images/Edukyu_Logo.png" alt="Edukyu" width={120} height={40} />
                        </div> */}

                        <div className="pl-5" onClick={() => setShowMobileSearch(true)}>
                            {/* Search Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_43_4046)">
                                    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#2B2B2A" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_43_4046">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    {isSidebarOpen && <MobileSidebar onClose={() => setSidebarOpen(false)} />}
                    {showMobileSearch && <SearchComponentMobile onClose={() => setShowMobileSearch(false)} />}

                    <div className="h-8 z-1000 pl-[20px] text-[12px] rounded-b-[10px] font-normal bg-[#025E68] text-white font-outfit flex items-center">
                        <Image src="/Resources/Images/refer_logo.png" alt="refer" width={16} height={16} />
                        <div className="pl-2">Earn upto Rs. 5000/-, refer your friend!!</div>
                    </div>
                </>
            ) : (
                <div className="flex justify-between pl-14 pr-14">
                    <div className="py-3 w-[123px] h-[40px]"
                    //  onClick={() => {
                    //      setCurrentPage('home');
                    //      setActiveTab(null);
                    //  }}


                    >
                        <Link href="/">
                            <Image src="/Resources/Images/Edukyu_Logo.png" alt="Edukyu" width={123} height={40} />
                        </Link>
                    </div>

                    <div className="inline-flex gap-6">
                        <div className="inline-flex gap-[29px] text-[#383837] font-outfit text-[16px] font-medium py-[22px]">
                            {['college', 'courses', 'compare', 'search', 'blog', 'more', 'contact'].map((tab) => (
                                <a key={tab} href="#"
                                    data-tab-button
                                    onClick={toggleTab(tab)}
                                    className={activeTab === tab ? 'text-[#024B53] border-b-2 border-[#024B53]' : ''}>
                                    {tab === 'college' ? 'Colleges' :
                                        tab === 'courses' ? 'Online Courses' :
                                            tab === 'compare' ? 'Compare' :
                                                tab === 'search' ? 'Search' :
                                                    tab === 'blog' ? 'Blogs' :
                                                        tab === 'more' ? 'More' : 'Contact Us'}
                                </a>
                            ))}
                        </div>

                        <div className="pl-6 inline-flex gap-[9px] py-[14px]">
                            <a href="#" className="flex items-center gap-2">
                                <Image src="/Resources/Images/refer_logo.png" alt="refer" width={36} height={36} />
                                <div className="text-sm font-medium text-[#024B53] font-outfit">
                                    Refer & earn
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Dropdown overlay */}
            {activeTab && <div className="fixed left-0 w-full h-full bg-[rgba(0,0,0,0.6)] z-40" />}

            {/* Dropdown content wrapper */}
            {activeTab && (
                <div ref={dropdownRef} className="absolute rounded-b-xl top-16 left-0 w-full z-50">
                    {activeTab === "college" && <CollegeHeaderComponentDesktop onNavbarClose={() => setActiveTab(null)} />}
                    {activeTab === "courses" && <CoursesComponentDesktop />}
                    {activeTab === "compare" && <CompareCollegeDesktop onNavbarClose={() => setActiveTab(null)} />}
                    {activeTab === "search" && <SearchComponentDesktop />}
                    {activeTab === "blog" && <BlogComponentDesktop />}
                    {activeTab === "more" && <MoreComponentDesktop />}
                    {activeTab === "contact" && <ContactUsComponentDesktop />}
                </div>
            )}
        </div>
    );
}
