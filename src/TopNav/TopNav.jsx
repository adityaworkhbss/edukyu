import React, {useState} from 'react';
import { useBreakpoint } from '../AppUtils/UseBreakpoint';
import Edukyu_logo from '../Resources/Images/Edukyu_Logo.png'
import refer_logo from '../Resources/Images/refer_logo.png'
import MobileSidebar from "./MobileSidebar/MobileSidebar";
import CompareCollegeDesktop from "./CompareCollegeComponent/CompareCollegeDesktop";
import SearchComponentDesktop from "./SearchComponent/SearchComponentDesktop";
import SearchComponentMobile from "./SearchComponent/SearchComponentMobile";
import BlogComponentDesktop from "./BlogComponent/BlogComponentDesktop";
import ContactUsComponentDesktop from "./ContactUsComponent/ContactUsComponentDesktop";
import MoreComponentDesktop from "./MoreComponent/MoreComponentDesktop";
import CoursesComponentDesktop from "./CoursesComponent/CoursesComponentDesktop/CoursesComponentDesktop";
import CollegeHeaderComponentDesktop from "./CollegeComponent/CollegeComponentDesktop/CollegeHeaderComponentDesktop";

const TopNav = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [showCourses, setShowCourses] = useState(false);
    const [showCompareCollege, setShowCompareCollege] = useState(false);
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showBlog, setShowBlog] = useState(false);
    const [showContactUs, setShowContactUs] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [showCollege, setShowCollege] = useState(false);
    const breakpoint = useBreakpoint();
    const isMobile = breakpoint === 'mobile';

    const handleCoursesClick = (e) => {
        e.preventDefault();
        setShowCourses(prev => !prev);
    };

    const handleCompareCollegeClick = (e) => {
        e.preventDefault();
        setShowCompareCollege(prev => !prev);
    };

    const handleSearchClick = (e) => {
        e.preventDefault();
        setShowSearch(prev => !prev);
    };

    const handleBlogClick = (e) => {
        e.preventDefault();
        setShowBlog(prev => !prev);
    };

    const handleContactUsClick = (e) => {
        e.preventDefault();
        setShowContactUs(prev => !prev);
    };

    const handleMoreClick = (e) => {
        e.preventDefault();
        setShowMore(prev => !prev);
    };

    const handleCollegeClick = (e) => {
        e.preventDefault();
        setShowCollege(prev => !prev);
    };

    return (
        <div className="bg-white w-full h-16 z-60 shadow-md">
            {isMobile ? (
                <>
                    <div className="flex items-center h-12 justify-between px-5 ">
                        <div className="pr-5" onClick={() => setSidebarOpen(true)}>
                            {/* Hamburger Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path d="M2 16V18H22V16H2ZM2 11V13H22V11H2ZM2 6V8H22V6H2Z" fill="#2B2B2A"/>
                            </svg>
                        </div>

                        <div className="flex items-center">
                            <img className="items-center" src={Edukyu_logo} alt="Edukyu" />
                        </div>

                        <div className="pl-5" onClick={() => setShowMobileSearch(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_74_37)">
                                    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#2B2B2A"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_74_37">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className="overscroll-y-auto"></div>
                    {isSidebarOpen && (
                        <MobileSidebar onClose={() => setSidebarOpen(false)} />
                    )}

                    {showMobileSearch && (
                        <SearchComponentMobile onClose={() => setShowMobileSearch(false)} />
                    )}



                </>
            ) : (
                <div className="flex justify-between pl-14 pr-14">
                    <div className="py-3 w-[123px] h-[40px]">
                        <img src={Edukyu_logo} alt="Edukyu"></img>
                    </div>

                    <div className="inline-flex gap-6">
                        <div className="inline-flex gap-[29px] text-[#383837] font-outfit text-[16px] font-medium py-[22px]">
                            <a href="#" onClick={handleCollegeClick}>Colleges</a>
                            <a href="#" onClick={handleCoursesClick}>Online Courses</a>
                            <a href="#" onClick={handleCompareCollegeClick}>Compare</a>
                            <a href="#" onClick={handleSearchClick}>Search</a>
                            <a href="#" onClick={handleBlogClick}>Blogs</a>
                            <a href="#" onClick={handleMoreClick}>More</a>
                            <a href="#" onClick={handleContactUsClick}>Contact Us</a>
                        </div>

                        <div className="pl-6 inline-flex gap-[9px] py-[14px]">
                            <a href="#" className="flex items-center gap-2">
                                <img
                                    src={refer_logo}
                                    alt="refer"
                                    className="w-[36px] h-[36px] flex-shrink-0 aspect-square"
                                />
                                <div className="text-sm font-medium text-[#024B53] font-outfit">
                                    Refer & earn
                                </div>

                            </a>
                        </div>
                    </div>


                </div>
            )}
            {isMobile && (
                <div className="h-8 pl-[20px] text-[12px] font-normal bg-[#025E68] text-white font-outfit flex items-center">
                    <div className="flex items-center gap-6">
                        <img
                            src={refer_logo}
                            alt="refer"
                            className="w-[16px] h-[16px] flex-shrink-0 aspect-square"
                        />
                    </div>
                    <div className="pl-2">
                        Earn upto Rs. 5000/-, refer your friend!!
                    </div>

                </div>
            )}

            {showCourses && (
                <div className="absolute top-16 left-0 w-full z-50">
                    <CoursesComponentDesktop />
                </div>
            )}

            {showCompareCollege && (
                <div className="absolute top-16 left-0 w-full z-50">
                    <CompareCollegeDesktop
                    />
                </div>
            )}

            {showSearch && (
                <div className="absolute top-16 left-0 w-full z-50">
                    <SearchComponentDesktop />
                </div>
            )}

            {showBlog && (
                <div className="absolute top-16 left-0 w-full z-50">
                    <BlogComponentDesktop />
                </div>
            )}

            {showContactUs && (
                <div className="absolute top-16 left-0 w-full z-50">
                    <ContactUsComponentDesktop />
                </div>
            )}

            {showMore && (
                <div className="absolute top-16 left-0 w-full z-50">
                    <MoreComponentDesktop />
                </div>
            )}

            {showCollege && (
                <div className="absolute top-16 left-0 w-full z-50">
                    <CollegeHeaderComponentDesktop />
                </div>
            )}
        </div>
    );
};

export default TopNav;
