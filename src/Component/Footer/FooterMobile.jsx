'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import EdukyuLogo from '../../../public/Resources/Images/edukyu-footer-logo.png';
import { usePageContext } from "@/GlobalComponent/PageContext";

const EduKyuMobileFooter = () => {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const menuItems = [
        { title: 'Colleges', key: 'colleges' },
        { title: 'Online Courses', key: 'courses' },
        { title: 'Quick Links', key: 'links' },
        { title: 'Find Us at', key: 'findus' },
    ];

    const colleges = [
        'Amity University', 'Chandigarh University', 'Dr. DY Patil University', 'Jain University',
        'Jamia Hamdard University', 'Lovely Professional University', 'Manipal University',
        'NMIMS University', 'Shardha University', 'Shoolini University', 'Uttaranchal University',
        'VIT Online', 'Vivekanand Global University',
    ];

    const mapping = {
        "Amity University": "Amity-University",
        "Dr. DY Patil University": "D.Y.-Patil-Vidyapeeth",
        "Jain University": "Jain-University",
        "Lovely Professional University": "Lovely-Professional-University",
        "Manipal University": "Manipal-University-Jaipur",
        "NMIMS University": "NMIMS-University-Online",
        "Shardha University": "Shardha-University",
        "Shoolini University": "Shoolini-University",
        "Uttaranchal University": "Uttaranchal-University",
        "Vivekanand Global University": "Vivekanand-Global-University"
    };

    const courses = ['MBA', 'BBA', 'MCA', 'B.Com', 'M.Sc', 'B.Sc', 'MA', 'BA'];

    const quickLinksData = [
        { name: "About Us", action: () => window.open("https://edukyu.com/about-us", "_blank") },
        { name: "Our Team", action: () => window.open("https://edukyu.com/team", "_blank") },
        { name: "Partner with Us", action: () => window.open("https://edukyu.com/partner-with-us", "_blank") },
        { name: "Compare College", action: () => setCurrentPage('compare-colleges') },
        { name: "College Manch", action: () => window.open("https://collegemanch.com/", "_blank") },
        { name: "Blogs", action: () => setCurrentPage('blog') },
        { name: "Refer and Earn", action: () => window.open("https://edukyu.com/refer-and-earn/", "_blank") },
        { name: "SGPA to Calculator", action: () => window.open("https://edukyu.com/sgpa-to-percentage", "_blank") },
        { name: "CGPA to Calculator", action: () => window.open("https://edukyu.com/cgpa-to-percentage", "_blank") },
        { name: "SGPA to CGPA", action: () => window.open("https://edukyu.com/sgpa-to-cgpa", "_blank") },
        { name: "Contact Us", action: () => window.open("https://edukyu.com/contact-us", "_blank") }
    ];

    const locationsData = [
        { name: "Noida", url: "https://maps.app.goo.gl/Kuq8PjQRxFuHhAU16" },
        { name: "Kolkata", url: "https://maps.app.goo.gl/iW1DGCXHZSJjdFDo7" },
        { name: "Bangalore", url: "https://maps.app.goo.gl/2FXFsCrghT1k4aN68" },
        { name: "Lucknow", url: "https://maps.app.goo.gl/AWag7JHenUkFswTq5" }
    ];

    const { setCurrentPage, setSelectedCollege } = usePageContext();

    const universityKeyMap = {
        'Amity University': 'Amity_University',
        'Dr. DY Patil University': 'DYP',
        'Jain University': 'Jain_University',
        'Lovely Professional University': 'Lovely_Professional_University',
        'Manipal University': 'Manipal_University',
        'NMIMS University': 'NMIMS',
        'Shardha University': 'Sikkim_Manipal_University',
        'Shoolini University': 'Shoolini_University',
        'Uttaranchal University': 'UU',
        'Vivekanand Global University': 'VGU',
    };

    const handleItemClick = (key, item, index) => {
        if (key === 'links') {
            const linkData = quickLinksData[index];
            if (linkData && linkData.action) {
                linkData.action();
            }
        } else if (key === 'findus') {
            const locationData = locationsData.find(loc => loc.name === item);
            if (locationData) {
                window.open(locationData.url, "_blank");
            }
        }
        // Note: colleges now handled by Link components, no need for click handler
    };

    const renderList = (key, list) =>
        expandedSections[key] && (
            <div className="pb-5 pl-4 space-y-5">
                {list.map((item, idx) => {
                    if (key === 'colleges') {
                        return (
                            <Link
                                key={idx}
                                href={`/online-mba-programs/top-distance-mba-colleges/${encodeURIComponent(mapping[item])}`}
                                className="text-sm text-left text-white flex items-center cursor-pointer hover:text-white/80 transition-colors duration-200"
                            >
                                {item}
                            </Link>
                        );
                    }

                    return (
                        <div
                            key={idx}
                            className="text-sm text-left text-white flex items-center cursor-pointer hover:text-white/80 transition-colors duration-200"
                            onClick={() => handleItemClick(key, item, idx)}
                        >
                            {item}
                            {key === 'courses' && (
                                <span className="pl-2 pt-[3px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                                        <path
                                            d="M6 3.333V4.667h4.394L2.667 12.393 3.607 13.333l7.727-7.727v4.393H12.667V3.333H6Z"
                                            fill="white"
                                        />
                                    </svg>
                                </span>
                            )}
                            {key === 'findus' && (
                                <span className="pl-2 pt-[3px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                                        <path
                                            d="M6 3.333V4.667h4.394L2.667 12.393 3.607 13.333l7.727-7.727v4.393H12.667V3.333H6Z"
                                            fill="white"
                                        />
                                    </svg>
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        );

    return (
        <div className="bg-[#024B53] font-outfit text-white space-y-[52px] overflow-hidden">
            <div className="pt-3 px-[20px]">
                {menuItems.map((item) => (
                    <div key={item.key} className="border-b border-[#679EA4]">
                        <button
                            onClick={() => toggleSection(item.key)}
                            className="w-full flex justify-between items-center py-5 text-left"
                        >
                            <h3 className="text-[18px] font-medium">{item.title}</h3>
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${expandedSections[item.key] ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                        {item.key === 'colleges' && renderList(item.key, colleges)}
                        {item.key === 'courses' && renderList(item.key, courses)}
                        {item.key === 'links' && renderList(item.key, quickLinksData.map(link => link.name))}
                        {item.key === 'findus' && renderList(item.key, locationsData.map(loc => loc.name))}
                    </div>
                ))}
            </div>

            <div className="px-6 space-y-3">
                <h3 className="text-[20px] font-semibold mb-4">Contact Us</h3>
                {/* phones at both ends, email centered */}
                <div className="flex items-center justify-between mb-[22px] w-full">
                    <div className="flex items-center">
                        <ContactItem icon="phone" text="+91 83368 89553" />
                    </div>



                    <div className="flex items-center">
                        <ContactItem icon="phone" text="+91 90085 25443" />
                    </div>
                </div>
                <ContactItem icon="email" text="hi@edukyu.com" />
            </div>

            <div className="px-6">
                <h3 className="text-[20px] pb-[24px] font-medium text-left">Follow us on</h3>
                <div className="flex space-x-[30px]">

                    <div onClick={() => window.open("https://www.instagram.com/edukyuofficial/", "_blank")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16.017 2H7.947C6.37015 2.00185 4.85844 2.62914 3.74353 3.74424C2.62862 4.85933 2.00159 6.37115 2 7.948L2 16.018C2.00185 17.5948 2.62914 19.1066 3.74424 20.2215C4.85933 21.3364 6.37115 21.9634 7.948 21.965H16.018C17.5948 21.9631 19.1066 21.3359 20.2215 20.2208C21.3364 19.1057 21.9634 17.5938 21.965 16.017V7.947C21.9631 6.37015 21.3359 4.85844 20.2208 3.74353C19.1057 2.62862 17.5938 2.00159 16.017 2ZM19.957 16.017C19.957 16.5344 19.8551 17.0468 19.6571 17.5248C19.4591 18.0028 19.1689 18.4371 18.803 18.803C18.4371 19.1689 18.0028 19.4591 17.5248 19.6571C17.0468 19.8551 16.5344 19.957 16.017 19.957H7.947C6.90222 19.9567 5.90032 19.5415 5.16165 18.8026C4.42297 18.0638 4.008 17.0618 4.008 16.017V7.947C4.00827 6.90222 4.42349 5.90032 5.16235 5.16165C5.90122 4.42297 6.90322 4.008 7.948 4.008H16.018C17.0628 4.00827 18.0647 4.42349 18.8034 5.16235C19.542 5.90122 19.957 6.90322 19.957 7.948V16.017Z" fill="white" />
                            <path d="M11.9823 6.81885C10.6137 6.82096 9.30184 7.36563 8.33421 8.33345C7.36658 9.30127 6.82216 10.6133 6.82031 11.9818C6.8219 13.3508 7.36634 14.6632 8.33421 15.6312C9.30209 16.5993 10.6144 17.144 11.9833 17.1458C13.3524 17.1443 14.665 16.5997 15.6331 15.6316C16.6012 14.6635 17.1457 13.3509 17.1473 11.9818C17.1452 10.6129 16.6003 9.30073 15.632 8.33304C14.6637 7.36535 13.3512 6.82117 11.9823 6.81985V6.81885ZM11.9823 15.1378C11.1456 15.1378 10.3431 14.8054 9.75139 14.2138C9.15971 13.6221 8.82731 12.8196 8.82731 11.9828C8.82731 11.1461 9.15971 10.3436 9.75139 9.75193C10.3431 9.16025 11.1456 8.82785 11.9823 8.82785C12.8191 8.82785 13.6216 9.16025 14.2132 9.75193C14.8049 10.3436 15.1373 11.1461 15.1373 11.9828C15.1373 12.8196 14.8049 13.6221 14.2132 14.2138C13.6216 14.8054 12.8191 15.1378 11.9823 15.1378Z" fill="white" />
                            <path d="M17.1559 8.09509C17.8391 8.09509 18.3929 7.54127 18.3929 6.85809C18.3929 6.17492 17.8391 5.62109 17.1559 5.62109C16.4728 5.62109 15.9189 6.17492 15.9189 6.85809C15.9189 7.54127 16.4728 8.09509 17.1559 8.09509Z" fill="white" />
                        </svg>
                    </div>
                    <div onClick={() => window.open("https://www.linkedin.com/company/edukyu/", "_blank")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19.868 2.625H4.13203C3.3 2.625 2.625 3.3 2.625 4.13203V19.868C2.625 20.7 3.3 21.375 4.13203 21.375H19.868C20.7 21.375 21.375 20.7 21.375 19.868V4.13203C21.375 3.3 20.7 2.625 19.868 2.625ZM19.868 19.875C9.37266 19.8727 4.125 19.8703 4.125 19.868C4.12734 9.37266 4.12969 4.125 4.13203 4.125C14.6273 4.12734 19.875 4.12969 19.875 4.13203C19.8727 14.6273 19.8703 19.875 19.868 19.875ZM5.40469 9.65391H8.18672V18.6023H5.40469V9.65391ZM6.79688 8.43047C7.68516 8.43047 8.40937 7.70859 8.40937 6.81797C8.40937 6.60621 8.36767 6.39653 8.28663 6.20089C8.2056 6.00525 8.08682 5.82749 7.93709 5.67776C7.78735 5.52802 7.60959 5.40925 7.41395 5.32821C7.21831 5.24718 7.00863 5.20547 6.79688 5.20547C6.58512 5.20547 6.37544 5.24718 6.1798 5.32821C5.98416 5.40925 5.8064 5.52802 5.65667 5.67776C5.50693 5.82749 5.38815 6.00525 5.30712 6.20089C5.22608 6.39653 5.18437 6.60621 5.18437 6.81797C5.18203 7.70859 5.90391 8.43047 6.79688 8.43047ZM12.7102 14.175C12.7102 13.0078 12.9328 11.8781 14.3789 11.8781C15.8039 11.8781 15.825 13.2117 15.825 14.25V18.6023H18.6047V13.6945C18.6047 11.2852 18.0844 9.43125 15.2695 9.43125C13.9172 9.43125 13.0102 10.1742 12.6375 10.8773H12.6V9.65391H9.93047V18.6023H12.7102V14.175Z" fill="white" />
                        </svg>
                    </div>
                    <div onClick={() => window.open("https://in.pinterest.com/EduKyuofficial/", "_blank")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM4 12C4.00032 10.335 4.52012 8.71163 5.48694 7.35612C6.45376 6.00061 7.81942 4.98053 9.39355 4.43807C10.9677 3.89561 12.6718 3.8578 14.2685 4.32992C15.8651 4.80204 17.2747 5.76056 18.3006 7.07186C19.3266 8.38316 19.9179 9.9819 19.9921 11.6452C20.0662 13.3086 19.6196 14.9536 18.7144 16.351C17.8091 17.7484 16.4905 18.8285 14.9422 19.4409C13.3939 20.0532 11.6932 20.1672 10.077 19.767L10.795 16.393C11.482 16.989 12.335 17.216 13.154 17.201C14.052 17.184 14.954 16.881 15.709 16.406C16.461 15.933 17.133 15.246 17.501 14.399C17.8988 13.4859 18.063 12.4882 17.9788 11.4958C17.8947 10.5034 17.5648 9.54754 17.019 8.71447C16.4731 7.88139 15.7285 7.1973 14.8523 6.72389C13.976 6.25048 12.9957 6.00264 11.9997 6.00273C11.0038 6.00282 10.0235 6.25084 9.14734 6.72441C8.27117 7.19798 7.52667 7.88221 6.98099 8.71538C6.43531 9.54855 6.10562 10.5045 6.02165 11.4969C5.93767 12.4893 6.10207 13.487 6.5 14.4C6.54979 14.5243 6.62404 14.6373 6.71835 14.7324C6.81266 14.8275 6.92509 14.9026 7.049 14.9534C7.1729 15.0042 7.30574 15.0296 7.43964 15.0281C7.57354 15.0266 7.70577 14.9982 7.82848 14.9446C7.9512 14.891 8.06191 14.8133 8.15403 14.7161C8.24616 14.6189 8.31783 14.5043 8.36479 14.3788C8.41175 14.2534 8.43304 14.1199 8.42741 13.9861C8.42178 13.8523 8.38933 13.721 8.332 13.6C8.09497 13.0551 7.98232 12.4642 8.00225 11.8703C8.02218 11.2764 8.17419 10.6944 8.44722 10.1666C8.72025 9.6388 9.10745 9.17846 9.58067 8.81905C10.0539 8.45963 10.6013 8.21017 11.183 8.08879C11.7647 7.96741 12.3661 7.97717 12.9436 8.11734C13.5211 8.25752 14.06 8.5246 14.5213 8.89917C14.9827 9.27374 15.3547 9.74639 15.6105 10.2828C15.8663 10.8191 15.9993 11.4058 16 12C16 13.095 15.59 14.117 14.643 14.713C14.155 15.021 13.604 15.193 13.117 15.201C12.64 15.211 12.275 15.067 12.022 14.802C11.774 14.542 11.501 14.04 11.501 13.1C11.501 12.5 11.73 12 12.004 10.708C12.0337 10.5787 12.0373 10.4448 12.0147 10.3141C11.9921 10.1834 11.9437 10.0584 11.8723 9.94661C11.801 9.83477 11.7081 9.73825 11.5991 9.66267C11.4901 9.58708 11.3671 9.53395 11.2373 9.50635C11.1076 9.47875 10.9736 9.47725 10.8433 9.50193C10.7129 9.5266 10.5888 9.57697 10.4781 9.65009C10.3674 9.72321 10.2724 9.81762 10.1986 9.92782C10.1247 10.038 10.0735 10.1618 10.048 10.292L8.188 19.035C6.92101 18.3483 5.86304 17.3321 5.12587 16.0938C4.3887 14.8555 3.99971 13.4411 4 12Z" fill="white" />
                        </svg>
                    </div>
                    <div onClick={() => window.open("https://www.youtube.com/channel/UCAsNhNAY5AsweVzF3pYLRoQ", "_blank")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19.607 6.995C19.531 6.697 19.315 6.472 19.068 6.403C18.63 6.28 16.501 6 12.001 6C7.501 6 5.373 6.28 4.932 6.403C4.688 6.471 4.472 6.696 4.395 6.995C4.286 7.419 4.001 9.195 4.001 12C4.001 14.805 4.286 16.58 4.395 17.006C4.471 17.303 4.687 17.528 4.933 17.596C5.373 17.72 7.5 18 12 18C16.5 18 18.629 17.72 19.069 17.597C19.313 17.529 19.529 17.304 19.606 17.005C19.716 16.581 20 14.8 20 12C20 9.2 19.716 7.42 19.607 6.995ZM21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.897 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.108 4 12.001 4 12.001 4C12.001 4 17.897 4 19.606 4.476C20.55 4.742 21.293 5.516 21.544 6.498M10.001 15.5V8.5L16.001 12L10.001 15.5Z" fill="white" />
                        </svg>
                    </div>
                    <div onClick={() => window.open("https://www.facebook.com/Edukyu/", "_blank")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.06995 5.00219C6.47495 4.89219 5.20495 5.81819 4.31695 6.98119C3.42395 8.15119 2.79495 9.70119 2.44695 11.2492C2.10095 12.7962 2.01395 14.4382 2.29295 15.8132C2.56495 17.1492 3.25695 18.5232 4.71295 18.9582C6.10195 19.3732 7.34795 18.7832 8.29995 17.9822C9.25395 17.1802 10.0799 16.0362 10.7459 14.9312C11.2679 14.0642 11.7139 13.1812 12.0639 12.4272C12.4139 13.1802 12.8599 14.0642 13.3809 14.9312C14.0469 16.0362 14.8729 17.1802 15.8269 17.9822C16.7789 18.7832 18.0249 19.3732 19.4139 18.9582C20.8699 18.5232 21.5619 17.1492 21.8339 15.8132C22.1139 14.4382 22.0259 12.7962 21.6799 11.2492C21.3319 9.70119 20.7029 8.15019 19.8099 6.98119C18.9229 5.81819 17.6529 4.89119 16.0579 5.00219C14.3239 5.12219 13.0879 6.47119 12.3709 7.49019C12.2647 7.64258 12.1623 7.79763 12.0639 7.95519C11.9656 7.79736 11.8629 7.6423 11.7559 7.49019C11.0389 6.47019 9.80395 5.12319 8.06995 5.00219ZM10.9199 10.0272C10.6369 10.7422 9.94995 12.3752 9.03195 13.9002C8.41095 14.9322 7.71895 15.8582 7.01195 16.4522C6.30495 17.0462 5.74995 17.1802 5.28695 17.0422C4.89095 16.9242 4.46995 16.4822 4.25295 15.4152C4.04495 14.3882 4.09595 13.0402 4.39895 11.6872C4.70295 10.3342 5.23695 9.07319 5.90695 8.19419C6.58195 7.30919 7.27595 6.95219 7.93095 6.99819C8.69695 7.05119 9.46095 7.70319 10.1189 8.64019C10.4869 9.16319 10.7619 9.69219 10.9189 10.0262L10.9199 10.0272ZM13.2079 10.0272C13.4899 10.7422 14.1779 12.3752 15.0949 13.9002C15.7169 14.9322 16.4089 15.8582 17.1149 16.4522C17.8229 17.0472 18.3769 17.1802 18.8409 17.0422C19.2359 16.9242 19.6569 16.4822 19.8739 15.4152C20.0829 14.3882 20.0319 13.0402 19.7279 11.6872C19.4239 10.3342 18.8909 9.07319 18.2199 8.19419C17.5449 7.30919 16.8519 6.95219 16.1959 6.99819C15.4299 7.05119 14.6659 7.70319 14.0079 8.64019C13.7032 9.07912 13.4356 9.54273 13.2079 10.0262V10.0272Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="pl-5 pr-5 text-left">
                <div className="h-[66px] py-[11px] pr-[48px]">
                    <Image src={EdukyuLogo} alt="Edukyu Logo" width={141} height={44} />
                </div>
                <p className="text-sm text-white/80 leading-relaxed pt-3">
                    Edukyu, your trusted partner for Online education. We are a premier aggregator platform,
                    bringing together a diverse range of specialized online courses from renowned Indian universities.
                </p>
                <div className="pt-[40px] pb-[24px]">
                    <div className="h-[1px] bg-[#679EA4]" />
                </div>
                <div className="text-white text-[14px] leading-[24px] space-y-2 font-light">
                    <p>
                        By continuing past this page, you agree to our{' '}
                        <a href="#" className="underline hover:text-white">Terms of Service</a>,{' '}
                        <a href="#" className="underline hover:text-white">Privacy Policy</a> and{' '}
                        <a href="#" className="underline hover:text-white">Refund Policy</a>.
                    </p>
                    <p>© 2025 - Edukyu Private Limited. All rights reserved.</p>
                </div>
                <div className="pt-[32px] pb-[32px] text-[31px] font-medium text-white opacity-20 leading-none text-center">
                    #Kyukibadhnajarurihai
                </div>
            </div>
        </div>
    );
};

const ContactItem = ({ icon, text }) => (
    <div className="flex items-center space-x-2 text-sm text-left text-white">
        <span className="inline-block">
            {icon === 'phone' && (
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path
                        d="M5 2H2.667A.667.667 0 002 2.667C2 8.927 7.073 14 13.333 14A.667.667 0 0014 13.333V11a.667.667 0 00-.667-.667c-.826 0-1.633-.133-2.38-.38a.667.667 0 00-.607.18L8.807 11.587C6.92 10.62 5.373 9.08 4.413 7.193L5.88 5.727a.667.667 0 00.167-.607A11.55 11.55 0 015.667 2.667.667.667 0 005 2z"
                        fill="white"
                    />
                </svg>
            )}
            {icon === 'email' && (
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path
                        d="M14.667 4a.667.667 0 00-.667-.667H2.667A.667.667 0 002 4v8a.667.667 0 00.667.667h11.333A.667.667 0 0014.667 12V4zm-1.334 0L8 7.333 2.667 4h10.666zM2.667 12V5.333L8 8.667l5.333-3.334V12H2.667z"
                        fill="white"
                    />
                </svg>
            )}
        </span>
        <span className="leading-normal">{text}</span>
    </div>
);

export default EduKyuMobileFooter;