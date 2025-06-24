import React from 'react';
import { Mail, Phone, Facebook } from 'lucide-react';
import Edukyu_Logo from '../Images/Edukyu_Logo.png';

// Logo Component
const Logo = () => (
    <div className="flex items-center w-[199px] h-[66px]">
        <div className="flex items-center px-[11px] pr-[48px]">
            <img src={Edukyu_Logo} alt="logo" className="w-[141px] h-[44px]"  />
        </div>
    </div>
);

// Navigation Link Component
const NavLink = ({ arrowNeeded, children, href = "#" }) => (
    <a
        href={href}
        className="flex items-center text-white/80 hover:text-white transition-colors duration-200 text-sm"
    >
        {children}
        {arrowNeeded && (
            <div className="pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_415_1205)">
                        <path d="M6.00033 3.3335V4.66683H10.3937L2.66699 12.3935L3.60699 13.3335L11.3337 5.60683V10.0002H12.667V3.3335H6.00033Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_415_1205">
                            <rect width="16" height="16" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>

        )}
    </a>
);

// Section Component
const FooterSection = ({ title, children }) => {
    return (
        <div className="">
            <h3 className="text-white text-left text-lg  font-medium">{title}</h3>
            <div className="pt-[32px] space-y-4">
                {children.map((line, index) => (
                    <div key={index} className="h-[18px] w-[189px] text-white font-outfit text-[14px] font-normal">
                        {line}
                    </div>
                ))}
            </div>

        </div>
    );
};

// Contact Info Component
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


// Social Media Icons Component
const SocialIcons = () => (
    <div className="flex items-center space-x-[24px] pb-[64px]">
        {[...Array(6)].map((_, index) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_415_1224)">
                    <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_415_1224">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        ))}
    </div>
);

// Main Footer Component
const Footer = () => {
    const colleges = [
        "Amity University",
        "Chandigarh University",
        "Dr. DY Patil University",
        "Jain University",
        "Jamia Hamdard University",
        "Lovely Professional University",
        "Manipal University",
        "NMIMS University",
        "Shardha University",
        "Shoolini University",
        "Uttaranchal University",
        "VIT Online",
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

    return (
        <footer className="bg-[#024B53] rounded-[40px] text-white">
            {/* Main Footer Content */}
            <div className="px-14 ">
                <div className="flex ">
                    {/* Logo and Description */}
                    <div className="md:col-span-1 space-y-6 pt-[40px]">
                        <Logo />
                        <p className="text-white/80 pt-3 font-outfit text-[14px] font-normal text-left w-[296px]">
                            Edukyu, your trusted partner for Online education. We are a premier aggregator platform, bringing together a diverse range of specialized online courses from renowned Indian universities.
                        </p>


                        <div className="space-y-4 pb-[32px] pt-[59px]">
                            <h3 className="text-white  h-[25px] w-[189px] font-outfit text-[24px] font-normal leading-normal text-left">
                                Contact Us
                            </h3>

                            <ContactInfo />
                        </div>

                        <div className="">
                            <h3 className="text-white pt-[52px] pb-[32px] font-outfit text-[20px] not-italic font-medium leading-normal text-left">Follow us on</h3>
                            <SocialIcons />
                        </div>
                    </div>

                    {/* Colleges */}
                    <div className="pl-[130px] pt-[60px] ">
                        <FooterSection title="Colleges">
                            {colleges.map((college, index) => (
                                <NavLink arrowNeeded={false} key={index}>{college}</NavLink>
                            ))}
                        </FooterSection>
                    </div>

                    {/* Online Courses */}
                    <div className="pl-[54px]  pt-[60px]">
                        <FooterSection title="Online Courses">
                            {courses.map((course, index) => (
                                <NavLink arrowNeeded={true} key={index}>{course}</NavLink>
                            ))}
                        </FooterSection>
                    </div>

                    {/* Quick Links */}
                    <div className="pl-[80px]  pt-[60px]">
                        <FooterSection title="Quick Links">
                            {quickLinks.map((link, index) => (
                                <NavLink arrowNeeded={false} key={index}>{link}</NavLink>
                            ))}
                        </FooterSection>
                    </div>

                    {/* Find us at */}
                    <div className="pl-[24px] pt-[60px]">
                        <FooterSection title="Find us at">
                            {locations.map((location, index) => (
                                <NavLink arrowNeeded={true} key={index}>{location}</NavLink>
                            ))}
                        </FooterSection>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/10">
                <div className="pl-[56px] ">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                        {/* Left Text */}
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

                        {/* Right Text */}
                        <div className="text-right pt-[302x] pb-[40px] pr-[56px] py-[6px]">
                            <div className="text-[48px] opacity-20 font-outfit font-medium leading-none text-white">
                                #Kyukibadhnajayurihai
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;