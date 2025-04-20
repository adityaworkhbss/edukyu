import React, { useState, useEffect, useRef } from 'react';
import ToggleDropdownButtons from "./ToggleButton";

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

    const courseData = {
        "Dr. D.Y Patil Vidyapeeth, Pune": ["Online MBA", "Online BBA", "Online Certificate Program for Digital Marketing", "Online Certificate Programme in Hospital & Health Care Management"],
        "NMIMS University": ["Online MBA", "Online Executive MBA", "Online BBA", "Online B.Com"],
        "Vivekananda Global University": ["Online MBA", "Online BBA", "Online MCA", "Online BCA", "Online BA", "Online MA", "Online M.Sc"],
        "Amity University": ["Online MBA", "Online MBA(Dual)", "Online BBA", "Online MCA", "Online BCA", "Online MA", "Online BA", "Online M.Com", "Online B.Com"],
        "Manipal University": ["Online MBA", "Online MBA(Dual)", "Online BBA", "Online MCA", "Online BCA", "Online MA", "Online M.Com", "Online B.Com"],
        "Jain University": ["Online MBA", "Online MBA(Dual)", "Online BBA", "Online MCA", "Online BCA", "Online B.Com Honours", "Online M.Com", "Online B.Com"],
        "Lovely Professional University": ["Online MBA", "Online MBA(Dual)", "Online MCA", "Online BCA", "Online MA", "Online BA", "Online M.Com", "Online M.Sc"],
        "Shoolini University": ["Online MBA", "Online MBA(Dual)", "Online BBA", "Online BCA", "Online B.Com Honours", "Online M.A", "Online B.A", "Online B.A Honours", "Pay After Placement Program"],
        "Uttranchal University": ["Online MBA", "Online MCA", "Online MBA(Hybrid Mode)", "Online BBA", "Online MCA", "Online BCA", "Online BA"]
    };

    const toggleDropdown = (option) => {
        setActiveDropdown(option);
        setShowDropdown(true);
        setShowCourseDropdown(false);
    };

    const handleCollegeClick = (college, e) => {
        if (activeDropdown === 'programs') {
            setSelectedCollege(college);
            setCourses(courseData[college] || []);
            setShowCourseDropdown(true);

            // Position the course dropdown relative to the clicked item
            if (courseDropdownRef.current) {
                const rect = e.target.getBoundingClientRect();
                courseDropdownRef.current.style.left = `${rect.left}px`;
                courseDropdownRef.current.style.top = `${rect.bottom + window.scrollY}px`;
            }
        }
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
            (!collegesBtnRef.current || !collegesBtnRef.current.contains(event.target)) &&
            (!programsBtnRef.current || !programsBtnRef.current.contains(event.target))) {
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

    return (
        <>
            <nav className="font-gilroy w-full bg-white shadow-sm">
                <div className="flex items-center justify-between py-2 px-4 md:px-10 lg:px-16">

                    {/* Logo Section */}
                    <div className="flex items-center ">
                        <img
                            src="https://edukyu.com/assets/cxp-assets/logo/logo.png"
                            alt="EduKyu"
                            className="h-8 mr-2"
                        />
                        <div className="w-px h-8 bg-black mx-2"></div>
                        <div className="text-sm font-bold size-3text-gray-800 whitespace-nowrap">
                            #Kyunki<span className="text-[#005A6B]">badhna</span>jarurihai
                        </div>
                    </div>

                    {/* Toggle Dropdown */}
                    <ToggleDropdownButtons
                        activeDropdown={activeDropdown}
                        toggleDropdown={toggleDropdown}
                        collegesBtnRef={collegesBtnRef}
                        programsBtnRef={programsBtnRef}
                    />


                    {/* Right Section (nav links + refer & earn) */}
                    <div className="hidden md:flex items-center">
                        {/* Navigation Links */}
                        <ul className="flex items-center space-x-4">
                            {['Home', 'About us', 'Compare College', 'Blogs', 'More'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-xs font-bold text-gray-800 hover:text-[#005A6B]">
                                        {item}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <button className="text-[#005a66] hover:text-[#008b9a]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        <line x1="11" y1="11" x2="11" y2="11" strokeWidth="4"></line>
                                    </svg>
                                </button>
                            </li>
                        </ul>

                        {/* Refer and Earn */}
                        <div className="relative ml-6">
                            <div className="flex flex-col items-start pl-6">
                                <a
                                    href="#"
                                    className="bg-[#005a66] text-white px-4 py-3 font-bold text-xs clip-path-polygon relative z-10 -mx-7"
                                    style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
                                >
                                    Refer and Earn
                                </a>
                                <p className="text-xs mt-1 -mx-7">
                                    UP TO <strong>Rs 20,000</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="block md:hidden text-2xl"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {/* Dropdown Menu */}
            {showDropdown && (
                <div
                    ref={dropdownRef}
                    className="absolute bg-white shadow-lg rounded-md p-2 mt-3 z-50 max-h-[450px] overflow-y-auto w-72"
                    style={{ left: '50%', transform: 'translateX(-50%)' }}
                >
                    {activeDropdown === 'programs' && (
                        <>
                            <div>
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
                            </div>
                            <hr className="my-2" />
                        </>
                    )}

                    <div>
                        <h3 className="text-xs font-bold py-2 border-b border-gray-200">Colleges</h3>
                        <ul>
                            {Object.keys(courseData).map((college) => (
                                <li
                                    key={college}
                                    className="text-xs p-2 hover:bg-[#005A6B] hover:text-white rounded cursor-pointer"
                                    onClick={(e) => handleCollegeClick(college, e)}
                                >
                                    {college}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Course Dropdown */}
            {showCourseDropdown && (
                <div
                    ref={courseDropdownRef}
                    className="absolute bg-white shadow-lg rounded-md p-2 z-50 w-56"
                >
                    <p className="text-xs font-bold pb-1 border-b border-gray-200">Available Courses</p>
                    <ul>
                        {courses.map((course, index) => (
                            <li key={index} className="text-xs p-1 hover:bg-[#005A6B] hover:text-white rounded">
                                {course}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Mobile Menu */}
            {showMobileMenu && (
                <div className="fixed inset-0 bg-white z-50 pt-4">
                    <div className="flex justify-end px-4">
                        <button
                            className="text-3xl text-[#005A6B]"
                            onClick={() => setShowMobileMenu(false)}
                        >
                            ×
                        </button>
                    </div>
                    <ul className="p-4 space-y-3">
                        {['Colleges', 'Online Programs', 'Home', 'About us', 'Compare College', 'Blogs', 'More'].map((item) => (
                            <li key={item} className="border-b border-gray-200 pb-2">
                                <a href="#" className="text-sm">{item}</a>
                            </li>
                        ))}
                        <li className="pt-4">
                            <button className="text-[#005a66]">
                                <img src="Vector.png" alt="Search" />
                            </button>
                        </li>
                        <li className="relative mt-6">
                            <div className="absolute -left-6 -top-4 text-6xl font-black text-black transform rotate-6 scale-x-50">/</div>
                            <div className="flex flex-col pl-6">
                                <a
                                    href="#"
                                    className="bg-[#005a66] text-white px-4 py-3 font-bold text-xs clip-path-polygon relative z-10"
                                    style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
                                >
                                    Refer and Earn
                                </a>
                                <p className="text-xs mt-1">
                                    UP TO <strong>Rs 20,000</strong>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;