import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const ContactUsComponentMobile = () => {
    const [message, setMessage] = useState('');

    const locations = [
        { name: 'Noida' },
        { name: 'Kolkata'},
        { name: 'Lucknow'},
        { name: 'Bangalore' }
    ];


    const handleSubmit = () => {
        if (message.trim()) {
            alert(`Message sent: ${message}`);
            setMessage('');
        }
    };

    return (
        <div className="bg-white flex pb-6 pt-[52px] py-5 flex-col">
            {/* Header Section */}
            <div className="bg-white">
                <div className="text-[#383837] font-outfit text-[20px] font-medium leading-normal not-italic">
                    Wanna meet us? Find us at the below mentioned location
                </div>


                {/* Location Grid */}
                <div className="flex flex-wrap gap-x-6 gap-y-4 pt-6">
                    {locations.map((location, index) => (
                        <button
                            key={index}
                            // onClick={() => handleLocationSelect(location.name)}
                            className={'flex text-left'}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <g clip-path="url(#clip0_70_565)">
                                    <path d="M5.99891 1.00146C4.06451 1.00146 2.5 2.56598 2.5 4.50037C2.5 7.12455 5.99891 10.9983 5.99891 10.9983C5.99891 10.9983 9.49781 7.12455 9.49781 4.50037C9.49781 2.56598 7.9333 1.00146 5.99891 1.00146ZM3.49969 4.50037C3.49969 3.1208 4.61934 2.00115 5.99891 2.00115C7.37848 2.00115 8.49813 3.1208 8.49813 4.50037C8.49813 5.93992 7.05858 8.09425 5.99891 9.43883C4.95923 8.10425 3.49969 5.92493 3.49969 4.50037Z" fill="#024B53"/>
                                    <path d="M5.99766 5.75007C6.6878 5.75007 7.24727 5.1906 7.24727 4.50046C7.24727 3.81032 6.6878 3.25085 5.99766 3.25085C5.30752 3.25085 4.74805 3.81032 4.74805 4.50046C4.74805 5.1906 5.30752 5.75007 5.99766 5.75007Z" fill="#323232"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_70_565">
                                        <rect width="11.9963" height="11.9963" fill="white" transform="translate(0 0.00183105)"/>
                                    </clipPath>
                                </defs>
                            </svg>

                            <span className="text-[#024B53] font-outfit text-[12px] font-normal leading-normal not-italic pl-[6px] pr-1">
                              {location.name}
                            </span>


                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <g clip-path="url(#clip0_70_566)">
                                    <path d="M4.5 2.5V3.5H7.795L2 9.295L2.705 10L8.5 4.205V7.5H9.5V2.5H4.5Z" fill="#024B53"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_70_566">
                                        <rect width="12" height="12" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    ))}
                </div>

                {/* Contact Page Link */}
                <div className="pt-[52px] pb-6">
                    <div className="text-[#383837] font-outfit text-[20px] font-medium not-italic leading-normal mb-4">
                        Wanna know more about us, check us out here
                    </div>

                    <button className="flex w-full mb-[52px] px-4 py-3 justify-center items-center gap-[10px]
                        rounded-[12px] border border-[#024B53]
                        text-[#024B53] font-outfit text-[14px] font-medium not-italic leading-normal
                        bg-white hover:border-[#046872] transition-colors duration-200">
                        Contact us Page
                    </button>

                </div>
            </div>

            {/* Decorative Pattern */}
            <div className="h-[219px] pb-5 bg-gray-200" />


            {/* Message Section */}
            <div className="rounded-b-[12px] px-5 bg-[rgba(179,207,210,0.3)]">

            <div className="">
                    <div className="text-[18px] font-medium not-italic leading-normal text-[#383837] font-outfit">
                        Your Message Matters
                    </div>


                    <p className="text-[#515150] font-outfit text-[16px] font-normal not-italic leading-normal mb-5">
                        We're here, ready to hear what you have to say
                    </p>

                    <button
                        onClick={handleSubmit}
                        className="flex w-full px-4 py-3 justify-center items-center gap-[10px]
                               rounded-[12px] border border-[#024B53]
                               text-[#024B53] font-outfit text-[14px] font-medium not-italic leading-normal
                               bg-white hover:border-[#046872] transition-colors duration-200 mb-6"
                    >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Let's Talk!
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ContactUsComponentMobile;
