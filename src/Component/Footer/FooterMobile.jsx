'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import EdukyuLogo from '../../../public/Resources/Images/edukyu-footer-logo.png';

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

    const courses = ['MBA', 'BBA', 'MCA', 'B.Com', 'M.Sc', 'B.Sc', 'MA', 'BA'];
    const quickLinks = [
        'About Us', 'Our Team', 'Partner with Us', 'Compare College', 'College Manch',
        'Blogs', 'Refer and Earn', 'SGPA to Calculator', 'CGPA to Calculator',
        'SGPA to CGPA', 'Contact Us'
    ];
    const locations = ['Noida', 'Kolkata', 'Bangalore', 'Lucknow'];

    const renderList = (key, list) =>
        expandedSections[key] && (
            <div className="pb-5 pl-4 space-y-5">
                {list.map((item, idx) => (
                    <div key={idx} className="text-sm text-left text-white flex items-center">
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
                    </div>
                ))}
            </div>
        );

    return (
        <div className="bg-[#024B53] font-outfit text-white space-y-[52px] overflow-hidden">
            <div className="pt-[32px] px-[20px]">
                {menuItems.map((item) => (
                    <div key={item.key} className="border-b border-[#679EA4]">
                        <button
                            onClick={() => toggleSection(item.key)}
                            className="w-full flex justify-between items-center py-5 text-left"
                        >
                            <h3 className="text-[18px] font-medium">{item.title}</h3>
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${
                                    expandedSections[item.key] ? 'rotate-180' : ''
                                }`}
                            />
                        </button>
                        {item.key === 'colleges' && renderList(item.key, colleges)}
                        {item.key === 'courses' && renderList(item.key, courses)}
                        {item.key === 'links' && renderList(item.key, quickLinks)}
                        {item.key === 'findus' && renderList(item.key, locations)}
                    </div>
                ))}
            </div>

            <div className="px-6 space-y-3">
                <h3 className="text-[20px] font-semibold mb-4">Contact Us</h3>
                <div className="flex justify-between">
                    <div className="space-y-3">
                        <ContactItem icon="phone" text="+91 83368 89553" />
                        <ContactItem icon="phone" text="+91 90085 25443" />
                    </div>
                    <ContactItem icon="email" text="hi@edukyu.com" />
                </div>
            </div>

            <div className="px-6">
                <h3 className="text-[20px] pb-[24px] font-medium text-left">Follow us on</h3>
                <div className="flex space-x-[30px]">
                    {/* Add SVGs or icons here */}
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
                <div className="pt-[32px] pb-[32px] text-[28px] font-medium text-white opacity-20 leading-none">
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
