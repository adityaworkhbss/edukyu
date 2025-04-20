import React, { useState, useEffect, useRef } from 'react';
import ToggleDropdownButtons from "./Component/ToggleButton";
import CourseDropdown from "./Component/CourseDropdown";
import './Styles/Navbar.css';
import MobileMenu from "./Component/MobileMenu";


const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState('colleges');
    const [showDropdown, setShowDropdown] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showCourseDropdown, setShowCourseDropdown] = useState(false);
    const [selectedCollege, setSelectedCollege] = useState('');
    const [courses, setCourses] = useState([]);
    const dropdownRef = useRef(null);
    const courseDropdownRef = useRef(null);
    const collegesBtnRef = useRef(null);
    const programsBtnRef = useRef(null);
    const toggleButtonRef = useRef(null);
    const [dropdownTop, setDropdownTop] = useState(0);
    const [dropdownLeft, setDropdownLeft] = useState(0);
    const [courseDropdownStyle, setCourseDropdownStyle] = useState({});

    const courseData = {
        "Dr. D.Y Patil Vidyapeeth, Pune": ["Online MBA", "Online BBA", "Online Certificate Program for Digital Marketing", "Online Certificate Programme in Hospital & Health Care Management"],
        "NMIMS University": ["Online MBA", "Online Executive MBA", "Online BBA", "Online B.Com"],
        "Vivekananda Global University": ["Online MBA", "Online BBA", "Online MCA", "Online BCA", "Online BA", "Online MA", "Online M.Sc"],
        "Amity University": ["Online MBA", "Online MBA(Dual)", "Online BBA", "Online MCA", "Online BCA", "Online MA", "Online BA", "Online M.Com", "Online B.Com"],
        "Manipal University": ["Online MBA", "Online MBA(Dual)", "Online BBA", "Online MCA", "Online BCA", "Online MA", "Online M.Com", "Online B.Com"],
        "Jain University": ["Online MBA", "Online MBA(Dual)", "Online BBA", "Online MCA", "Online BCA", "Online B.Com Honours", "Online M.Com", "Online B.Com"],
        "Lovely Professional University": ["Online MBA", "Online MBA(Dual)", "Online MCA", "Online BCA", "Online MA", "Online BA", "Online M.Com", "Online M.Sc"],
        "Shoolini University": ["Online MBA", "Online MBA(Dual)", "Online BBA", "Online BCA", "Online B.Com Honours", "Online M.A", "Online B.A", "Online B.A Honours", "Pay After Placement Program"],
        "Uttranchal University": ["Online MBA", "Online MCA", "Online MBA(Hybrid Mode)", "Online BBA", "Online BCA", "Online BA"]
    };

    const toggleDropdown = (option) => {
        setActiveDropdown(option);
        setShowDropdown(true);
        setShowCourseDropdown(false);
    };

    const handleCollegeClick = (event, college) => {
        const rect = event.target.getBoundingClientRect();

        if(activeDropdown !== 'programs'){

        }else{
            setSelectedCollege(college);
            setCourses(courseData[college]);
            setShowCourseDropdown(true);


            const isWideScreen = window.innerWidth > 1080;
            const newLeft = isWideScreen
                ? `${rect.right + 15}px`  // Open to the right on wide screens
                : `${rect.left+50}px`; // Open to the left on narrow screens

            if(isWideScreen) {
                setCourseDropdownStyle({
                    position: 'fixed',
                    top: `${rect.top + rect.height + window.scrollY - 100}px`,
                    left : newLeft,
                });
            }else{

                setCourseDropdownStyle({
                    position: 'fixed',
                    top: `${rect.top + rect.height + window.scrollY - 100}px`,
                    right : newLeft,

                });
            }
        }

    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current && !dropdownRef.current.contains(event.target) &&
            (!collegesBtnRef.current || !collegesBtnRef.current.contains(event.target)) &&
            (!programsBtnRef.current || !programsBtnRef.current.contains(event.target))
        ) {
            setShowDropdown(false);
            setShowCourseDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (showDropdown && toggleButtonRef.current) {
            const rect = toggleButtonRef.current.getBoundingClientRect();
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            const scrollX = window.scrollX || document.documentElement.scrollLeft;
            const isSmallScreen = window.innerWidth < 760;
            const navbarHeight = 70; // Adjust this value based on your actual navbar height
            const dropdownWidth = 288; // 72 * 4 = 288px

            const top = isSmallScreen
                ? navbarHeight + scrollY - 20 // just below the navbar
                : rect.bottom + scrollY;

            const left = isSmallScreen
                ? window.innerWidth / 2 - dropdownWidth / 2
                : rect.left + scrollX;

            setDropdownTop(top);
            setDropdownLeft(left);
        }
    }, [showDropdown]);


    return (
        <>
            <nav className="font-gilroy w-full bg-white shadow-sm px-[clamp(12px,5vw,100px)]">

                <div className="flex items-center justify-between py-2 px-4 md:px-10 lg:px-16">
                    {/* Logo Section */}
                    <div className="flex items-center logo ">
                        <img src="https://edukyu.com/assets/cxp-assets/logo/logo.png" alt="EduKyu" className="h-5 mr-1 sm:h-8 sm:mr-2" />
                        <div className=" logo-sperator w-px h-8 bg-black mx-2"></div>
                        <div className="kyunki font-gilroy font-normal text-[12px] leading-[100%] tracking-[0%] font-bold text-gray-800 whitespace-nowrap">
                            #Kyunki<span className="text-[#005A6B]">badhna</span>jarurihai
                        </div>

                    </div>

                    {/* Toggle Dropdown */}
                    <ToggleDropdownButtons
                        activeDropdown={activeDropdown}
                        toggleDropdown={toggleDropdown}
                        collegesBtnRef={collegesBtnRef}
                        programsBtnRef={programsBtnRef}
                        ref={toggleButtonRef}
                    />

                    {/* Right Nav */}
                    <div className="hidden md:flex items-center -pl-[clamp(12px,5vw,96px)]">
                    <ul className="flex items-center space-x-4 menu-buttons">
                            {['Home', 'About us', 'Compare College', 'Blogs', 'More'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="font-gilroy font-bold text-gray-800 hover:text-[#005A6B] text-[clamp(8px,2vw,14px)] whitespace-nowrap">
                                        {item}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <button className="text-[#005a66] hover:text-[#008b9a]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                        <line x1="11" y1="11" x2="11" y2="11" strokeWidth="4" />
                                    </svg>
                                </button>
                            </li>
                        </ul>

                        <div className="relative ml-6">
                            <div className="flex flex-col items-start pl-6 menu-buttons">
                                <a
                                    href="#"
                                    className="bg-[#005a66] text-white px-4 py-3 font-bold text-xs clip-path-polygon relative z-10 -mx-7"
                                    style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
                                >
                                    Refer and Earn
                                </a>
                                <p className="text-xs mt-1 -mx-7">UP TO <strong>Rs 20,000</strong></p>
                            </div>
                        </div>
                    </div>

                    <button className="block md:hidden text-2xl navbar-toggle"  onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        ☰
                    </button>
                </div>
            </nav>

            {/* Dropdown Menu */}
            {showDropdown && (
                <div
                    ref={dropdownRef}
                    className="absolute bg-white shadow-lg rounded-md p-2 z-50 max-h-[450px] overflow-y-auto w-72 mt-5"
                    style={{ top: `${dropdownTop}px`, left: `${dropdownLeft}px` }}
                >
                    {activeDropdown === 'programs' && (
                        <>
                            <h3 className="text-xs font-bold py-2 border-b border-gray-200">Online Programs</h3>
                            <ul>
                                {[
                                    'Master Of Business Administration',
                                    'Bachelor Of Business Administration',
                                    'Master Of Computer Application',
                                    'Bachelor Of Computer Application',
                                    'Master Of Arts',
                                    'Bachelor Of Arts',
                                    'Master Of Commerce',
                                    'Bachelor Of Commerce',
                                    'Master Of Science',
                                    'Bachelor Of Science'
                                ].map((program) => (
                                    <li key={program} className="text-xs p-2 hover:bg-[#005A6B] hover:text-white rounded">
                                        <a href="#">{program}</a>
                                    </li>
                                ))}
                            </ul>
                            <hr className="my-2" />
                        </>
                    )}

                    <h3 className="text-xs font-bold py-2 border-b border-gray-200">Colleges</h3>
                    <ul>
                        {Object.keys(courseData).map((college) => (
                            <li
                                key={college}
                                onClick={(e) => handleCollegeClick(e, college)}
                                className="text-xs p-2 cursor-pointer hover:bg-[#005A6B] hover:text-white rounded"
                            >
                                {college}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Course Dropdown */}
            <div className="relative">
                {showCourseDropdown && (
                    <CourseDropdown
                        courseDropdownRef={courseDropdownRef}
                        courses={courses}
                        style={courseDropdownStyle}
                        className="transition-opacity duration-400 opacity-0 transform translate-y-4 ease-in-out"
                    />
                )}
            </div>

            {/* Mobile Menu */}
            <MobileMenu
                showMobileMenu={showMobileMenu}
                setShowMobileMenu={setShowMobileMenu}
            />
        </>
    );
};

export default Navbar;
