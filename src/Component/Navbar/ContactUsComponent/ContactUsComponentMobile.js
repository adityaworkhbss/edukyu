// app/components/ContactUsComponentMobile.js
"use client";

import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import contact_us_nav_image from "../../../../public/Resources/Images/contact_us_nav_img.jpg";

const ContactUsComponentMobile = () => {
    const [message, setMessage] = useState("");

    // city + google maps link
    const locations = [
        { name: "Noida", link: "https://maps.app.goo.gl/Kuq8PjQRxFuHhAU16" },
        { name: "Kolkata", link: "https://maps.app.goo.gl/iW1DGCXHZSJjdFDo7" },
        { name: "Lucknow", link: "https://maps.app.goo.gl/AWag7JHenUkFswTq5" },
        { name: "Bangalore", link: "https://maps.app.goo.gl/2FXFsCrghT1k4aN68" },
    ];

    const handleSubmit = () => {
        if (message.trim()) {
            alert(`Message sent: ${message}`);
            setMessage("");
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
                        <a
                            key={idx}
                            href={location.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 py-1 bg-white bg-opacity-60 rounded-full text-sm"
                        >
                            {/* Pin Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="none"
                                viewBox="0 0 16 16"
                                className="mr-1"
                            >
                                <path
                                    d="M8 1.333C5.42 1.333 3.333 3.42 3.333 6c0 3.5 4.667 8.667 4.667 8.667s4.667-5.167 4.667-8.667C12.667 3.42 10.58 1.333 8 1.333ZM4.667 6c0-1.84 1.493-3.333 3.333-3.333s3.333 1.493 3.333 3.333c0 1.92-1.92 4.793-3.333 6.587C6.614 10.807 4.667 7.9 4.667 6Z"
                                    fill="#024B53"
                                />
                                <path
                                    d="M8 7.667A1.667 1.667 0 1 0 8 4.333a1.667 1.667 0 0 0 0 3.334Z"
                                    fill="#323232"
                                />
                            </svg>

                            {/* City Name */}
                            <span className="text-[#024B53] font-outfit text-[12px]">
                {location.name}
              </span>

                            {/* External Link Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                fill="none"
                                viewBox="0 0 16 16"
                                className="ml-1"
                            >
                                <path
                                    d="M6 3.333v1.334h4.393L2.666 12.393l.94.94 7.727-7.727v4.393h1.333V3.333H6Z"
                                    fill="#024B53"
                                />
                            </svg>
                        </a>
                    ))}
                </div>

                {/*<div className="pt-[52px] pb-6">*/}
                {/*    <h2 className="text-[#383837] font-outfit text-[20px] font-medium mb-4">*/}
                {/*        Wanna know more about us, check us out here*/}
                {/*    </h2>*/}
                {/*    <button className="w-full px-4 py-3 border border-[#024B53] text-[#024B53] font-outfit text-[14px] font-medium rounded-[12px]">*/}
                {/*        Contact us Page*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>

            <img
                className="h-[219px] w-full object-cover"
                src={contact_us_nav_image.src}
                alt="contact us"
            />

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
