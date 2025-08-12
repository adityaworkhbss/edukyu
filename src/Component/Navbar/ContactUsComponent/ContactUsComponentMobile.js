// app/components/ContactUsComponentMobile.js
"use client";

import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import contact_us_nav_image from "../../../../public/Resources/Images/contact_us_nav_img.jpg";

const ContactUsComponentMobile = () => {
    const [message, setMessage] = useState('');

    const locations = ['Noida', 'Kolkata', 'Lucknow', 'Bangalore'];

    const handleSubmit = () => {
        if (message.trim()) {
            alert(`Message sent: ${message}`);
            setMessage('');
        }
    };

    const handleWhatsAppClick = () => {
        const phone = "918336889553"; // with country code, no + or spaces
        const message = "Hi, I want to know more.";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="bg-white flex pb-6 pt-[52px] py-5 flex-col">
            <div className="bg-white">
                <h2 className="text-[#383837] font-outfit text-[20px] font-medium">
                    Wanna meet us? Find us at the below mentioned location
                </h2>

                <div className="flex flex-wrap gap-x-6 gap-y-4 pt-6">
                    {locations.map((location, idx) => (
                        <button key={idx} className="flex text-left items-center">
                            <span className="text-[#024B53] font-outfit text-[12px] pl-1 pr-1">{location}</span>
                        </button>
                    ))}
                </div>

                <div className="pt-[52px] pb-6">
                    <h2 className="text-[#383837] font-outfit text-[20px] font-medium mb-4">
                        Wanna know more about us, check us out here
                    </h2>
                    <button className="w-full px-4 py-3 border border-[#024B53] text-[#024B53] font-outfit text-[14px] font-medium rounded-[12px]">
                        Contact us Page
                    </button>
                </div>
            </div>

            {/*<div className="h-[219px] pb-5 bg-gray-200" />*/}
            <img className="h-[219px] w-full object-cover" src={contact_us_nav_image.src}   alt="contact us"/>

            <div className="rounded-b-[12px] px-5 bg-[rgba(179,207,210,0.3)]">
                <h3 className="text-[18px] font-medium text-[#383837] font-outfit pt-5">
                    Your Message Matters
                </h3>
                <p className="text-[#515150] text-[16px] mb-5">
                    We&apos;re here, ready to hear what you have to say
                </p>
                <button
                    onClick={handleWhatsAppClick}
                    className="w-full px-4 py-3 border border-[#024B53] text-[#024B53] font-outfit text-[14px] font-medium rounded-[12px] mb-6"
                >
                    <MessageSquare className="w-4 h-4 mr-2 inline" /> Let&apos;s Talk!
                </button>
            </div>
        </div>
    );
};

export default ContactUsComponentMobile;
