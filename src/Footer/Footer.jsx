import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMailOpen } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSend } from "react-icons/io5";

const locationsData = [
    {
        city: "Noida",
        address: "B 15, Second floor, Sector 2, Noida 201301",
    },
    {
        city: "Bangalore",
        address:
            "Second floor, 782, 16th Main Rd, above Bata showroom, BTM 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076.",
    },
    {
        city: "Kolkata",
        address:
            "1403, 14th Floor, Ergo Tower, Salt Lake Sector-5, Kolkata, West Bengal- 700091",
    },
    {
        city: "Lucknow",
        address:
            "710-A, 7th floor, levana cyber heights, lucknow 226010",
    },
];

function LocationsDropdown() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-64"> {/* You can adjust the width as needed */}
            <h3 className="font-semibold mb-2 text-2xl">Locations</h3>
            <ul className="space-y-2 text-sm">
                {locationsData.map((loc, index) => (
                    <li key={index} className="border-b border-gray-600 pb-2">
                        <button
                            className="flex items-center justify-between w-full text-left"
                            onClick={() => toggleDropdown(index)}
                        >
                            <span>{loc.city}</span>
                            <span
                                className={`transform transition-transform duration-200 ${
                                    openIndex === index ? "rotate-180" : ""
                                }`}
                            >
                                <RiArrowDropDownLine />
                            </span>
                        </button>
                        {openIndex === index && (
                            <p className="mt-2 text-gray-300 text-sm pl-1">{loc.address}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}


const Footer = () => {
    return (
        <footer className="bg-[#043b3c] text-white px-6 md:px-20 py-10 bottom-0 text-left">
            {/* TOP SECTION */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 pb-6 border-b border-gray-600">
                <div className="flex items-start gap-3">
                    <span className="text-yellow-400 text-4xl pt-2">
                      <FaLocationDot />
                    </span>
                    <div>
                        <h3 className="font-semibold mb-1 text-2xl">Find us</h3>
                        <p>B 15, Second floor, Sector 2, Noida 201301</p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <span className="text-yellow-400 text-4xl pt-2">
                      <IoCall />
                    </span>
                    <div>
                        <h3 className="font-semibold mb-1 text-2xl">Call us</h3>
                        <p>+91-8336899553</p>
                        <p>+91-9008525443</p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <span className="text-yellow-400 text-4xl pt-2">
                      <IoMdMailOpen />
                    </span>
                    <div>
                        <h3 className="font-semibold mb-1 text-2xl">Mail us</h3>
                        <p>hi@edukyu.com</p>
                    </div>
                </div>
            </div>


            {/* MIDDLE SECTION */}
            <div className="flex flex-col md:flex-row justify-between gap-12 py-10">
                <div className="md:w-1/4">
                    <h2 className="text-2xl font-bold mb-2">
                        <img src="https://edukyu.com/assets/img/edukyu-logo.png" alt="EduKyu" className="h-16 mr-4 " />
                    </h2>
                    <p className="text-sm text-left">
                        Edukyu, your trusted partner for Online education. We are a premier aggregator platform, bringing together a diverse range of specialized online courses from renowned Indian universities.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-2 text-2xl">Useful Links</h3>
                    <ul className="space-y-1 text-sm text-left">
                        <li>› About Us</li>
                        <li>› Our Team</li>
                        <li>› Partner With Us</li>
                        <li>› Refer And Earn</li>
                        <li>› Blogs</li>
                        <li>› Contact Us</li>
                        <li>› SGPA to Calculator</li>
                        <li>› CGPA to Calculator</li>
                        <li>› SGPA to CGPA</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2 text-2xl">Online Courses</h3>
                    <ul className="space-y-1 text-sm text-left">
                        <li>› Masters In Business Administration</li>
                        <li>› Bachelors In Business Administration</li>
                        <li>› Marketing Management (MBA)</li>
                        <li>› Human Resource Management (MBA)</li>
                        <li>› Financial Management (MBA)</li>
                    </ul>
                </div>

                {/* ✅ Updated Location Dropdown here */}
                <LocationsDropdown />
            </div>

            {/* BOTTOM SECTION */}
            {/* BOTTOM SECTION */}
            <div className="bg-[#00393d] text-white px-4 md:px-20 py-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10 border-t border-gray-600 pt-6">
                    {/* Left Text */}
                    <div className="md:w-1/2">
                        <h4 className="text-lg font-semibold mb-2">Subscribe</h4>
                        <div className="h-1 w-12 bg-yellow-400 mb-3"></div>
                        <p className="text-sm">
                            Don’t miss out on our latest updates! Enter your email to subscribe.
                        </p>
                    </div>

                    {/* Email input and socials */}
                    <div className="md:w-1/2">
                        <div className="flex w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="flex-grow px-4 py-2 text-black rounded-l-md"
                            />
                            <button className="bg-yellow-400 text-black px-4 py-2 rounded-r-md">
                                <span className="text-lg">
                                    <IoSend />
                                </span>
                            </button>
                        </div>
                        <div className="flex gap-3 mt-4">
                            <a href="#"><FaFacebookF className="hover:scale-110 transition" /></a>
                            <a href="#"><FaTwitter className="hover:scale-110 transition" /></a>
                            <a href="#"><FaInstagram className="hover:scale-110 transition" /></a>
                            <a href="#"><FaLinkedinIn className="hover:scale-110 transition" /></a>
                            <a href="#"><FaPinterestP className="hover:scale-110 transition" /></a>
                        </div>
                    </div>
                </div>

                {/* Legal Text */}
                <div className="text-center text-xs mt-6 text-gray-400">
                    By continuing past this page, you agree to our <span className="text-yellow-400">Terms of Service</span>, <span className="text-yellow-400">Privacy Policy</span> and <span className="text-yellow-400">Refund Policy</span>.
                    <br />
                    © 2025 – <span className="font-semibold text-white">Edukyu Private Limited.</span> All rights reserved.
                </div>

            </div>

        </footer>
    );
};

export default Footer;

