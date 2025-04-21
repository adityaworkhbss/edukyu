import React from 'react';
import '../Styles/Navbar.css';
import searchbutton from '../../Images/Navbar/searchbutton.png';

const MobileMenu = ({ showMobileMenu, setShowMobileMenu }) => {
    return (
        <div
            className={`
                fixed inset-0 z-50 flex justify-end transition-all duration-300 ease-in-out
                ${showMobileMenu ? 'bg-black bg-opacity-40' : 'pointer-events-none bg-transparent'}
            `}
        >
            <div
                className={`
                    w-2/3 h-full bg-white pt-4 shadow-lg transform transition-transform duration-300 ease-in-out
                    ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                {/* Close Button */}
                <div className="flex justify-end px-4">
                    <button
                        className="text-3xl text-[#005A6B] focus:outline-none"
                        onClick={() => setShowMobileMenu(false)}
                        aria-label="Close menu"
                    >
                        ×
                    </button>
                </div>

                {/* Menu Items */}
                <ul className="p-4 space-y-3 text-left">
                    {[
                        'Colleges',
                        'Online Programs',
                        'Home',
                        'About us',
                        'Compare College',
                        'Blogs',
                        'More'
                    ].map((item) => (
                        <li key={item} className="border-b border-gray-200 pb-2">
                            <a href="#" className="text-sm block text-black">
                                {item}
                            </a>
                        </li>
                    ))}

                    {/* Search Button */}
                    <li className="pt-4">
                        <button className="text-[#005a66] focus:outline-none">
                            <img src={searchbutton} alt="Search" />
                        </button>
                    </li>

                    {/* Refer and Earn Section */}
                    <li className="relative mt-6 pt-4">
                        <div className="absolute left-2 top-1/3 transform -translate-y-1/2 rotate-[15deg] scale-x-[25%] text-black font-black text-[100px] leading-none">
                            /
                        </div>



                        <div className="flex flex-col pl-6" style={{ width: '170px' }}>
                            <a
                                href="#"
                                className="bg-[#005a66] text-white px-4 py-3 font-bold text-xs relative z-10"
                                style={{
                                    clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
                                    width: '100%' // ensure it fills the parent width
                                }}
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
        </div>
    );
};

export default MobileMenu;
