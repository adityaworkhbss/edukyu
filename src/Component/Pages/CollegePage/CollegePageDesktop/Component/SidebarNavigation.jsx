"use client";
import React from "react";

const sections = [
    "Rankings & Accreditations",
    "Courses",
    "Specializations",
    "Admission Process",
    "Fees",
    "Benefits",
    "Compare Colleges",
    "Degree Certificate",
    "Hiring Partner",
    "FAQ",
    "Contact Us",
];

const SidebarNavigation = () => {
    return (
        <aside className="w-full max-w-[250px] p-4 pt-[64px]">
            <ul className="space-y-4">
                {sections.map((item, index) => (
                    <li
                        key={index}
                        className={`text-base ${
                            index === 0
                                ? "font-semibold text-[#003B49]" // Highlighted item
                                : "text-gray-500"
                        }`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default SidebarNavigation;
