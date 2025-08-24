import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { gridConfigs } from '@/libs/GridConfigs';
import GridContainer from '@/GlobalComponent/GridContainer';
import GridComponent from '@/GlobalComponent/GridComponent';
import {usePageContext} from "@/GlobalComponent/PageContext";
// import Edukyu_Logo from '../../../public/Resources/Images/edukyu-footer-logo.png';

// Separate components for better organization
const Logo = () => (
    <div className="flex h-[66px]">
        <div className="flex py-[11px] pr-[48px]">
            <img src="/Resources/Images/Edukyu_Logo.png" alt="logo" className="w-[141px] h-[44px]" />
        </div>
    </div>
);

const CompanyDescription = () => (
    <p className="text-white/80 pt-3 font-outfit text-[14px] font-normal text-left">
        Edukyu, your trusted partner for Online education. We are a premier aggregator platform, bringing together a diverse range of specialized online courses from renowned Indian universities.
    </p>
);

const NavLink = ({ arrowNeeded, children, href = "#", ...props }) => (
    <a
        href={href}
        {...props} // spread remaining props like onClick, className, etc.
        className={`flex items-center text-white/80 hover:text-white transition-colors duration-200 text-sm ${props.className || ''}`}
    >
        {children}
        {arrowNeeded && (
            <div className="pl-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                >
                    <g clipPath="url(#clip0_415_1205)">
                        <path
                            d="M6.00033 3.3335V4.66683H10.3937L2.66699 12.3935L3.60699 13.3335L11.3337 5.60683V10.0002H12.667V3.3335H6.00033Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_415_1205">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        )}
    </a>
);

const FooterSection = ({ title, children }) => {
    return (
        <div className="">
            <h3 className="text-white text-left text-lg font-medium">{title}</h3>
            <div className="pt-[32px] space-y-4">
                {children.map((line, index) => (
                    <div key={index} className="h-[18px] text-white font-outfit text-[14px] font-normal">
                        {line}
                    </div>
                ))}
            </div>
        </div>
    );
};

const ContactInfo = () => (
    <div className="space-y-4 pt-[32px]">
        <div className="space-y-3">
            <div className="flex items-center space-x-3 text-[14px] font-outfit font-normal not-italic leading-normal text-white">
                <Phone
                    size={16}
                    className="w-[16px] h-[16px] shrink-0 aspect-square text-white"
                />
                <span>+91 83368 89553</span>
            </div>
            <div className="flex items-center space-x-3 text-[14px] font-outfit font-normal not-italic leading-normal text-white">
                <Phone
                    size={16}
                    className="w-[16px] h-[16px] shrink-0 aspect-square text-white"
                />
                <span>+91 90085 25443</span>
            </div>
            <div className="flex items-center space-x-3 text-[14px] font-outfit font-normal not-italic leading-normal text-white">
                <Mail
                    size={16}
                    className="w-[16px] h-[16px] shrink-0 aspect-square text-white"
                />
                <a
                    href="mailto:hi@edukyu.com"
                    className="hover:text-white transition-colors"
                >
                    hi@edukyu.com
                </a>
            </div>
        </div>
    </div>
);

const SocialIcons = () => (
    <div className="flex items-center space-x-[24px] pb-[64px]">
        <div onClick={() => window.open("https://www.instagram.com/edukyuofficial/", "_blank")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16.017 2H7.947C6.37015 2.00185 4.85844 2.62914 3.74353 3.74424C2.62862 4.85933 2.00159 6.37115 2 7.948L2 16.018C2.00185 17.5948 2.62914 19.1066 3.74424 20.2215C4.85933 21.3364 6.37115 21.9634 7.948 21.965H16.018C17.5948 21.9631 19.1066 21.3359 20.2215 20.2208C21.3364 19.1057 21.9634 17.5938 21.965 16.017V7.947C21.9631 6.37015 21.3359 4.85844 20.2208 3.74353C19.1057 2.62862 17.5938 2.00159 16.017 2ZM19.957 16.017C19.957 16.5344 19.8551 17.0468 19.6571 17.5248C19.4591 18.0028 19.1689 18.4371 18.803 18.803C18.4371 19.1689 18.0028 19.4591 17.5248 19.6571C17.0468 19.8551 16.5344 19.957 16.017 19.957H7.947C6.90222 19.9567 5.90032 19.5415 5.16165 18.8026C4.42297 18.0638 4.008 17.0618 4.008 16.017V7.947C4.00827 6.90222 4.42349 5.90032 5.16235 5.16165C5.90122 4.42297 6.90322 4.008 7.948 4.008H16.018C17.0628 4.00827 18.0647 4.42349 18.8034 5.16235C19.542 5.90122 19.957 6.90322 19.957 7.948V16.017Z" fill="white"/>
                <path d="M11.9823 6.81885C10.6137 6.82096 9.30184 7.36563 8.33421 8.33345C7.36658 9.30127 6.82216 10.6133 6.82031 11.9818C6.8219 13.3508 7.36634 14.6632 8.33421 15.6312C9.30209 16.5993 10.6144 17.144 11.9833 17.1458C13.3524 17.1443 14.665 16.5997 15.6331 15.6316C16.6012 14.6635 17.1457 13.3509 17.1473 11.9818C17.1452 10.6129 16.6003 9.30073 15.632 8.33304C14.6637 7.36535 13.3512 6.82117 11.9823 6.81985V6.81885ZM11.9823 15.1378C11.1456 15.1378 10.3431 14.8054 9.75139 14.2138C9.15971 13.6221 8.82731 12.8196 8.82731 11.9828C8.82731 11.1461 9.15971 10.3436 9.75139 9.75193C10.3431 9.16025 11.1456 8.82785 11.9823 8.82785C12.8191 8.82785 13.6216 9.16025 14.2132 9.75193C14.8049 10.3436 15.1373 11.1461 15.1373 11.9828C15.1373 12.8196 14.8049 13.6221 14.2132 14.2138C13.6216 14.8054 12.8191 15.1378 11.9823 15.1378Z" fill="white"/>
                <path d="M17.1559 8.09509C17.8391 8.09509 18.3929 7.54127 18.3929 6.85809C18.3929 6.17492 17.8391 5.62109 17.1559 5.62109C16.4728 5.62109 15.9189 6.17492 15.9189 6.85809C15.9189 7.54127 16.4728 8.09509 17.1559 8.09509Z" fill="white"/>
            </svg>
        </div>
        <div onClick={() => window.open("https://www.linkedin.com/company/edukyu/", "_blank")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.868 2.625H4.13203C3.3 2.625 2.625 3.3 2.625 4.13203V19.868C2.625 20.7 3.3 21.375 4.13203 21.375H19.868C20.7 21.375 21.375 20.7 21.375 19.868V4.13203C21.375 3.3 20.7 2.625 19.868 2.625ZM19.868 19.875C9.37266 19.8727 4.125 19.8703 4.125 19.868C4.12734 9.37266 4.12969 4.125 4.13203 4.125C14.6273 4.12734 19.875 4.12969 19.875 4.13203C19.8727 14.6273 19.8703 19.875 19.868 19.875ZM5.40469 9.65391H8.18672V18.6023H5.40469V9.65391ZM6.79688 8.43047C7.68516 8.43047 8.40937 7.70859 8.40937 6.81797C8.40937 6.60621 8.36767 6.39653 8.28663 6.20089C8.2056 6.00525 8.08682 5.82749 7.93709 5.67776C7.78735 5.52802 7.60959 5.40925 7.41395 5.32821C7.21831 5.24718 7.00863 5.20547 6.79688 5.20547C6.58512 5.20547 6.37544 5.24718 6.1798 5.32821C5.98416 5.40925 5.8064 5.52802 5.65667 5.67776C5.50693 5.82749 5.38815 6.00525 5.30712 6.20089C5.22608 6.39653 5.18437 6.60621 5.18437 6.81797C5.18203 7.70859 5.90391 8.43047 6.79688 8.43047ZM12.7102 14.175C12.7102 13.0078 12.9328 11.8781 14.3789 11.8781C15.8039 11.8781 15.825 13.2117 15.825 14.25V18.6023H18.6047V13.6945C18.6047 11.2852 18.0844 9.43125 15.2695 9.43125C13.9172 9.43125 13.0102 10.1742 12.6375 10.8773H12.6V9.65391H9.93047V18.6023H12.7102V14.175Z" fill="white"/>
            </svg>
        </div>
        <div  onClick={() => window.open("https://in.pinterest.com/EduKyuofficial/", "_blank")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM4 12C4.00032 10.335 4.52012 8.71163 5.48694 7.35612C6.45376 6.00061 7.81942 4.98053 9.39355 4.43807C10.9677 3.89561 12.6718 3.8578 14.2685 4.32992C15.8651 4.80204 17.2747 5.76056 18.3006 7.07186C19.3266 8.38316 19.9179 9.9819 19.9921 11.6452C20.0662 13.3086 19.6196 14.9536 18.7144 16.351C17.8091 17.7484 16.4905 18.8285 14.9422 19.4409C13.3939 20.0532 11.6932 20.1672 10.077 19.767L10.795 16.393C11.482 16.989 12.335 17.216 13.154 17.201C14.052 17.184 14.954 16.881 15.709 16.406C16.461 15.933 17.133 15.246 17.501 14.399C17.8988 13.4859 18.063 12.4882 17.9788 11.4958C17.8947 10.5034 17.5648 9.54754 17.019 8.71447C16.4731 7.88139 15.7285 7.1973 14.8523 6.72389C13.976 6.25048 12.9957 6.00264 11.9997 6.00273C11.0038 6.00282 10.0235 6.25084 9.14734 6.72441C8.27117 7.19798 7.52667 7.88221 6.98099 8.71538C6.43531 9.54855 6.10562 10.5045 6.02165 11.4969C5.93767 12.4893 6.10207 13.487 6.5 14.4C6.54979 14.5243 6.62404 14.6373 6.71835 14.7324C6.81266 14.8275 6.92509 14.9026 7.049 14.9534C7.1729 15.0042 7.30574 15.0296 7.43964 15.0281C7.57354 15.0266 7.70577 14.9982 7.82848 14.9446C7.9512 14.891 8.06191 14.8133 8.15403 14.7161C8.24616 14.6189 8.31783 14.5043 8.36479 14.3788C8.41175 14.2534 8.43304 14.1199 8.42741 13.9861C8.42178 13.8523 8.38933 13.721 8.332 13.6C8.09497 13.0551 7.98232 12.4642 8.00225 11.8703C8.02218 11.2764 8.17419 10.6944 8.44722 10.1666C8.72025 9.6388 9.10745 9.17846 9.58067 8.81905C10.0539 8.45963 10.6013 8.21017 11.183 8.08879C11.7647 7.96741 12.3661 7.97717 12.9436 8.11734C13.5211 8.25752 14.06 8.5246 14.5213 8.89917C14.9827 9.27374 15.3547 9.74639 15.6105 10.2828C15.8663 10.8191 15.9993 11.4058 16 12C16 13.095 15.59 14.117 14.643 14.713C14.155 15.021 13.604 15.193 13.117 15.201C12.64 15.211 12.275 15.067 12.022 14.802C11.774 14.542 11.501 14.04 11.501 13.1C11.501 12.5 11.73 12 12.004 10.708C12.0337 10.5787 12.0373 10.4448 12.0147 10.3141C11.9921 10.1834 11.9437 10.0584 11.8723 9.94661C11.801 9.83477 11.7081 9.73825 11.5991 9.66267C11.4901 9.58708 11.3671 9.53395 11.2373 9.50635C11.1076 9.47875 10.9736 9.47725 10.8433 9.50193C10.7129 9.5266 10.5888 9.57697 10.4781 9.65009C10.3674 9.72321 10.2724 9.81762 10.1986 9.92782C10.1247 10.038 10.0735 10.1618 10.048 10.292L8.188 19.035C6.92101 18.3483 5.86304 17.3321 5.12587 16.0938C4.3887 14.8555 3.99971 13.4411 4 12Z" fill="white"/>
            </svg>
        </div>
        <div  onClick={() => window.open("https://www.youtube.com/channel/UCAsNhNAY5AsweVzF3pYLRoQ", "_blank")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.607 6.995C19.531 6.697 19.315 6.472 19.068 6.403C18.63 6.28 16.501 6 12.001 6C7.501 6 5.373 6.28 4.932 6.403C4.688 6.471 4.472 6.696 4.395 6.995C4.286 7.419 4.001 9.195 4.001 12C4.001 14.805 4.286 16.58 4.395 17.006C4.471 17.303 4.687 17.528 4.933 17.596C5.373 17.72 7.5 18 12 18C16.5 18 18.629 17.72 19.069 17.597C19.313 17.529 19.529 17.304 19.606 17.005C19.716 16.581 20 14.8 20 12C20 9.2 19.716 7.42 19.607 6.995ZM21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.897 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.108 4 12.001 4 12.001 4C12.001 4 17.897 4 19.606 4.476C20.55 4.742 21.293 5.516 21.544 6.498M10.001 15.5V8.5L16.001 12L10.001 15.5Z" fill="white"/>
            </svg>
        </div>
        <div  onClick={() => window.open("https://www.facebook.com/Edukyu/", "_blank")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.06999 5.00201C6.47499 4.89201 5.20499 5.81801 4.31699 6.98101C3.42399 8.15101 2.79499 9.70101 2.44699 11.249C2.10099 12.796 2.01399 14.438 2.29299 15.813C2.56499 17.149 3.25699 18.523 4.71299 18.958C6.10199 19.373 7.34799 18.783 8.29999 17.982C9.25399 17.18 10.08 16.036 10.746 14.931C11.268 14.064 11.714 13.181 12.064 12.427C12.414 13.18 12.86 14.064 13.381 14.931C14.047 16.036 14.873 17.18 15.827 17.982C16.779 18.783 18.025 19.373 19.414 18.958C20.87 18.523 21.562 17.149 21.834 15.813C22.114 14.438 22.026 12.796 21.68 11.249C21.332 9.70101 20.703 8.15001 19.81 6.98101C18.923 5.81801 17.653 4.89101 16.058 5.00201C14.324 5.12201 13.088 6.47101 12.371 7.49001C12.2647 7.64239 12.1624 7.79744 12.064 7.95501C11.9657 7.79718 11.863 7.64212 11.756 7.49001C11.039 6.47001 9.80399 5.12301 8.06999 5.00201ZM10.92 10.027C10.637 10.742 9.94999 12.375 9.03199 13.9C8.41099 14.932 7.71899 15.858 7.01199 16.452C6.30499 17.046 5.74999 17.18 5.28699 17.042C4.89099 16.924 4.46999 16.482 4.25299 15.415C4.04499 14.388 4.09599 13.04 4.39899 11.687C4.70299 10.334 5.23699 9.07301 5.90699 8.19401C6.58199 7.30901 7.27599 6.95201 7.93099 6.99801C8.69699 7.05101 9.46099 7.70301 10.119 8.64001C10.487 9.16301 10.762 9.69201 10.919 10.026L10.92 10.027ZM13.208 10.027C13.49 10.742 14.178 12.375 15.095 13.9C15.717 14.932 16.409 15.858 17.115 16.452C17.823 17.047 18.377 17.18 18.841 17.042C19.236 16.924 19.657 16.482 19.874 15.415C20.083 14.388 20.032 13.04 19.728 11.687C19.424 10.334 18.891 9.07301 18.22 8.19401C17.545 7.30901 16.852 6.95201 16.196 6.99801C15.43 7.05101 14.666 7.70301 14.008 8.64001C13.7032 9.07894 13.4356 9.54255 13.208 10.026V10.027Z" fill="white"/>
            </svg>
        </div>
    </div>
);

const FooterDesktop = () => {
    const breakpoint = useBreakpoint();
    const config = gridConfigs[breakpoint];

    const { setCurrentPage, setSelectedCollege } = usePageContext();

    const marginClass = {
        mobile: 'ml-[20px] mr-[20px]',
        tablet: 'ml-[20px] mr-[20px]',
        laptop: 'ml-[56px] mr-[56px]',
        desktop: 'mx-auto',
    }[breakpoint];

    const colleges = [
        "Amity University",
        "Dr. DY Patil University",
        "Jain University",
        "Lovely Professional University",
        "Manipal University",
        "NMIMS University",
        "Shardha University",
        "Shoolini University",
        "Uttaranchal University",
        "Vivekanand Global University"
    ];

    const courses = [
        "MBA", "BBA", "MCA", "B.Com", "M.Sc", "B.Sc", "MA", "BA"
    ];

    const quickLinks = [
        "About Us",
        "Our Team",
        "Partner with Us",
        "Compare College",
        "College Manch",
        "Blogs",
        "Refer and Earn",
        "SGPA to Calculator",
        "CGPA to Calculator",
        "SGPA to CGPA",
        "Contact Us"
    ];

    const locations = [
        "Noida",
        "Kolkata",
        "Bangalore",
        "Lucknow"
    ];

    const universityKeyMap = {
        'Amity University': 'Amity_University',
        'Dr. DY Patil University':'DYP',
        // 'DPU':'NUI',
        // 'DPU':'VGU',
        'Jain University':'Jain_University',
        'Lovely Professional University' :'Lovely_Professional_University',
        'Manipal University':'Manipal_University',
        'NMIMS University':'NMIMS',
        'Shardha University':'Sikkim_Manipal_University',
        'Shoolini University':'Shoolini_University',
        'Uttaranchal University':'UU',
        'Vivekanand Global University':'VGU',
    };

    return (
        <footer className="bg-[#024B53] text-white rounded-b-xl">
            <div className={`${marginClass}`}>
                <GridContainer
                    numGrids={config.numGrids}
                    gutter={config.gutter}
                    gridHeight="auto"
                    showGrids={true}
                >
                    {/* Logo and Company Description - Grid 1 to 3 */}
                    <GridComponent
                        lastUsedGridEnd={0}
                        gridStart={1}
                        gridEnd={3}
                        fromFooter={true}
                        className="pt-[40px]"
                    >
                        <div className="left-0">
                            <Logo />
                            <CompanyDescription />

                            <div className="pt-[59px]">
                                <h3 className="text-white h-[25px] w-[189px] font-outfit text-[24px] font-normal leading-normal text-left">
                                    Contact Us
                                </h3>
                                <ContactInfo />
                            </div>

                            <div className="">
                                <h3 className="text-white pt-[52px] pb-[24px] font-outfit text-[20px] not-italic font-medium leading-normal text-left">
                                    Follow us on
                                </h3>
                                <SocialIcons />
                            </div>
                        </div>
                    </GridComponent>

                    {/* Colleges Section - Grid 4 to 5 */}
                    <GridComponent
                        lastUsedGridEnd={3}
                        gridStart={4}
                        gridEnd={5}
                        fromFooter={true}
                        className="pt-[60px] text-left truncate line-clamp-1"
                    >
                        <FooterSection title="Colleges">
                            {colleges.map((college, index) => (
                                <NavLink
                                    arrowNeeded={false}
                                    key={index}
                                    className="cursor-pointer"
                                    onClick={() => {
                                            const mappedKey = universityKeyMap[college];
                                            console.log(mappedKey);
                                            setSelectedCollege(mappedKey);
                                            setCurrentPage('college');

                                    }}
                                >
                                    {college}
                                </NavLink>
                            ))}
                        </FooterSection>


                    </GridComponent>

                    {/*/!* Online Courses Section - Grid 6 to 7 *!/*/}
                    <GridComponent
                        lastUsedGridEnd={5}
                        fromFooter={true}
                        gridStart={6}
                        gridEnd={7}
                        className="pt-[60px] ml-6"
                    >
                        <FooterSection title="Online Courses">
                            {courses.map((course, index) => (
                                <NavLink arrowNeeded={true} key={index}>{course}</NavLink>
                            ))}
                        </FooterSection>
                    </GridComponent>

                    {/*/!* Quick Links Section - Grid 8 to 10 *!/*/}
                    <GridComponent
                        lastUsedGridEnd={7}
                        gridStart={8}
                        gridEnd={9}
                        fromFooter={true}
                        className="pt-[60px] ml-12"
                    >
                        <FooterSection title="Quick Links">
                            {quickLinks.map((link, index) => (
                                <NavLink arrowNeeded={false} key={index}>{link}</NavLink>
                            ))}
                        </FooterSection>
                    </GridComponent>

                    {/*/!* Find us at Section - Grid 11 to 12 *!/*/}
                    <GridComponent
                        lastUsedGridEnd={9}
                        gridStart={10}
                        gridEnd={11}
                        fromFooter={true}
                        className="pt-[60px] "
                    >
                        <FooterSection title="Find us at">
                            {locations.map((location, index) => (
                                <NavLink arrowNeeded={true} key={index}>{location}</NavLink>
                            ))}
                        </FooterSection>
                    </GridComponent>
                </GridContainer>

                <GridContainer
                    numGrids={config.numGrids}
                    gutter={config.gutter}
                    gridHeight="auto"
                    showGrids={true}
                >

                    {/*/!* Bottom Section - Full Width *!/*/}
                    <GridComponent
                        lastUsedGridEnd={0}
                        gridStart={1}
                        gridEnd={12}
                        fromFooter={true}
                        className="border-white/10 border-t mt-8"
                    >
                        <div className="flex flex-row justify-between items-center">
                            <div className="text-base pt-[38px] pb-[46px] text-left font-outfit font-medium leading-6 text-white/60">
                                By continuing past this page, you agree to our{' '}
                                <a
                                    href="#"
                                    className="text-white/80 hover:text-white underline underline-offset-auto decoration-solid"
                                >
                                    Terms of Service
                                </a>,{' '}
                                <a
                                    href="#"
                                    className="text-white/80 hover:text-white underline underline-offset-auto decoration-solid"
                                >
                                    Privacy Policy
                                </a>{' '}
                                and{' '}
                                <a
                                    href="#"
                                    className="text-white/80 hover:text-white underline underline-offset-auto decoration-solid"
                                >
                                    Refund Policy
                                </a>.
                                <div className="text-base font-outfit font-medium leading-6 text-white/60 mb-1">
                                    © 2025 - Edukyu Private Limited. All rights reserved.
                                </div>
                            </div>

                            <div className="text-right pt-[302x] pb-[40px] py-[6px]">
                                <div className="text-[48px] opacity-20 font-outfit font-medium leading-none text-white">
                                    #Kyukibadhnajayurihai
                                </div>
                            </div>
                        </div>
                    </GridComponent>

                </GridContainer>
            </div>
        </footer>
    );
};

export default FooterDesktop;