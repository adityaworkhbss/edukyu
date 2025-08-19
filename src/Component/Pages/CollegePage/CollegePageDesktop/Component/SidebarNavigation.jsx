"use client";
import React, { useState } from "react";

const sections = [
    { label: "Rankings & Accreditations", id: "ranking" },
    { label: "Courses", id: "courses" },
    { label: "Specializations", id: "specialization" },
    { label: "Admission Process", id: "admission" },
    { label: "Fees", id: "fees" },
    { label: "Benefits", id: "benefits" },
    { label: "Compare Colleges", id: "compare" },
    { label: "Degree Certificate", id: "degree" },
    { label: "Hiring Partner", id: "hiring" },
    { label: "FAQ", id: "faq" },
    { label: "Contact Us", id: "contact" },
];

const SidebarNavigation = () => {
    const [active, setActive] = useState(sections[0].id);

    const handleClick = (id) => {
        setActive(id);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <aside className="w-full max-w-[220px] p-3 pt-[90px] sticky top-0">
            <ul className="space-y-3">
                {sections.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => handleClick(item.id)}
                        className={`cursor-pointer text-sm ${
                            active === item.id
                                ? "font-semibold text-[#003B49]"
                                : "text-gray-500 hover:text-[#003B49]"
                        }`}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default SidebarNavigation;
