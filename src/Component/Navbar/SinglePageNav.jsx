'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useBreakpoint } from '@/hooks/useBreakpoint';

const SinglePageNav = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [scrollProgress, setScrollProgress] = useState(0);
    const breakpoint = useBreakpoint();
    const isMobile = breakpoint === 'mobile';

    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navHeight = 64; // Height of the navigation bar
            const elementTop = element.offsetTop - navHeight;
            
            window.scrollTo({
                top: elementTop,
                behavior: 'smooth'
            });
            setActiveSection(sectionId);
        }
    };

    // Update active section based on scroll position and calculate scroll progress
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'blogs', 'compare'];
            const scrollPosition = window.scrollY + 100;
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / windowHeight) * 100;
            setScrollProgress(Math.min(progress, 100));

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: 'Home', icon: '🏠' },
        { id: 'blogs', label: 'Blogs', icon: '📝' },
        { id: 'compare', label: 'Compare Colleges', icon: '⚖️' }
    ];

    if (isMobile) {
        return (
            <div className="bg-white w-full font-outfit z-50 shadow-md sticky top-0">
                {/* Progress Bar */}
                <div className="h-1 bg-gray-200">
                    <div 
                        className="h-full bg-gradient-to-r from-[#024B53] to-[#025E68] transition-all duration-300"
                        style={{ width: `${scrollProgress}%` }}
                    />
                </div>
                
                <div className="flex items-center h-12 justify-between px-5">
                    <div className="flex items-center">
                        <Image src="/Resources/Images/Edukyu_Logo.png" alt="Edukyu" width={120} height={40} />
                    </div>
                </div>
                
                {/* Mobile Navigation Pills */}
                <div className="h-12 bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center space-x-2 overflow-x-auto px-4">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap transform hover:scale-105 ${
                                activeSection === item.id
                                    ? 'bg-gradient-to-r from-[#024B53] to-[#025E68] text-white shadow-lg scale-105'
                                    : 'bg-white text-[#383837] hover:bg-gray-100 shadow-sm'
                            }`}
                        >
                            <span className="mr-1">{item.icon}</span>
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white w-full font-outfit z-50 shadow-md sticky top-0">
            {/* Progress Bar */}
            <div className="h-1 bg-gray-200">
                <div 
                    className="h-full bg-gradient-to-r from-[#024B53] to-[#025E68] transition-all duration-300"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>
            
            <div className="flex justify-between items-center pl-14 pr-14 h-16">
                <div className="flex items-center">
                    <Image src="/Resources/Images/Edukyu_Logo.png" alt="Edukyu" width={123} height={40} />
                </div>

                {/* Desktop Navigation */}
                <div className="flex items-center space-x-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-[16px] font-medium transition-all duration-300 transform hover:scale-105 ${
                                activeSection === item.id
                                    ? 'text-white bg-gradient-to-r from-[#024B53] to-[#025E68] shadow-lg scale-105'
                                    : 'text-[#383837] hover:text-[#024B53] hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 shadow-sm'
                            }`}
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>

                {/* Refer & Earn */}
                <div className="flex items-center">
                    <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-300 transform hover:scale-105 shadow-sm">
                        <Image src="/Resources/Images/refer_logo.png" alt="refer" width={36} height={36} />
                        <div className="text-sm font-medium text-[#024B53] font-outfit">
                            Refer & earn
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SinglePageNav;