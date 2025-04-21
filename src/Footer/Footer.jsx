import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMailOpen } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-[#043b3c] text-white px-6 md:px-20 py-10 bottom-0 text-left">
            {/* TOP SECTION: Find us, Call us, Mail us */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-gray-600">
                {/* Find us */}
                <span className="text-yellow-400 text-4xl">
                        <FaLocationDot />
                    </span>
                <div className="flex items-start gap-3">
                    <div>
                        <h3 className="font-semibold mb-1">Find us</h3>
                        <p>B 15, Second floor, Sector 2, Noida 201301</p>
                    </div>
                </div>
                {/* Call us */}
                <span className="text-yellow-400 text-4xl">
                    <IoCall />
                </span>
                <div className="flex items-start gap-3">
                    <div>
                        <h3 className="font-semibold mb-1">Call us</h3>
                        <p>+91-8336899553</p>
                        <p>+91-9008525443</p>
                    </div>
                </div>
                {/* Mail us */}
                <span className="text-yellow-400 text-4xl">
                    <IoMdMailOpen />
                </span>
                <div className="flex items-start gap-3">
                    <div>
                        <h3 className="font-semibold mb-1">Mail us</h3>
                        <p>hi@edukyu.com</p>
                    </div>
                </div>
            </div>

            {/* MIDDLE SECTION: EduKyu, Useful Links, Courses, Locations */}
            <div className="flex flex-col md:flex-row justify-between gap-12 py-10">
                {/* EduKyu Info */}
                <div className="md:w-1/4">
                    <h2 className="text-2xl font-bold mb-2">
                        <img src="https://edukyu.com/assets/img/edukyu-logo.png" alt="EduKyu" className="h-16 mr-4 " />
                    </h2>
                    <p className="text-sm text-left">
                        Edukyu, your trusted partner for Online education. We are a premier aggregator platform, bringing together a diverse range of specialized online courses from renowned Indian universities.
                    </p>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="font-semibold mb-2 ">Useful Links</h3>
                    <ul className="space-y-1 text-sm text-left">
                        <li>› About Us</li>
                        <li>› Our Team</li>
                        <li>› Partner With Us</li>
                        <li>› Refer And Earn</li>
                        <li>› Blogs</li>
                        <li>› Contact Us</li>
                    </ul>
                </div>

                {/* Online Courses */}
                <div>
                    <h3 className="font-semibold mb-2">Online Courses</h3>
                    <ul className="space-y-1 text-sm text-left">
                        <li>› Masters In Business Administration</li>
                        <li>› Bachelors In Business Administration</li>
                        <li>› Marketing Management (MBA)</li>
                        <li>› Human Resource Management (MBA)</li>
                        <li>› Financial Management (MBA)</li>
                    </ul>
                </div>

                {/* Locations */}
                <div>
                    <h3 className="font-semibold mb-2">Locations</h3>
                    <ul className="space-y-1 text-sm text-left">
                        <li>Noida</li>
                        <li>Bangalore</li>
                        <li>Kolkata</li>
                        <li>Lucknow</li>
                    </ul>
                </div>
            </div>

            {/* BOTTOM SECTION: Subscribe + Social Links */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-gray-600">
                {/* Subscribe */}
                <div className="text-sm">
                    <p className="mb-2">Don’t miss out on our latest updates! Enter your email to subscribe.</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="px-4 py-2 text-black rounded-l-md"
                        />
                        <button className="bg-yellow-400 text-black px-4 py-2 rounded-r-md">➤</button>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 text-xl">
                    <div className="flex gap-4 text-xl">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaPinterestP /></a>
                    </div>

                </div>
            </div>

            {/* Footer Note */}
            <div className="text-center text-xs mt-6 text-gray-400">
                By continuing past this page, you agree to our <span className="text-yellow-400">Terms of Service</span>, <span className="text-yellow-400">Privacy Policy</span> and <span className="text-yellow-400">Refund Policy</span>.
            </div>
        </footer>


    );
};

export default Footer;
