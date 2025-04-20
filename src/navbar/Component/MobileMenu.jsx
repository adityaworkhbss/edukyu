import React from 'react';

const MobileMenu = ({ showMobileMenu, setShowMobileMenu }) => {
    return (
        showMobileMenu && (
            <div className="fixed inset-0 bg-white z-50 pt-4">
                <div className="flex justify-end px-4">
                    <button className="text-3xl text-[#005A6B]" onClick={() => setShowMobileMenu(false)}>
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
                            <p className="text-xs mt-1">UP TO <strong>Rs 20,000</strong></p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    );
};

export default MobileMenu;
