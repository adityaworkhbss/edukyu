"use client";
import React, { useState, useMemo } from "react";

// SidebarNavigation now receives college and collegeSecondry and shows only
// links for sections that have data. This keeps sidebar in sync with main content.
const SidebarNavigation = ({ college = {}, collegeSecondry = {} }) => {
    // derive availability of sections from props
    const available = useMemo(() => {
        const ui = college?.university_info || {};
        return {
            ranking: Array.isArray(ui.accreditations) && ui.accreditations.length > 0,
            courses: Array.isArray(ui.courses) && ui.courses.length > 0,
            // specialization: Boolean(collegeSecondry?.Specialisation && Object.keys(collegeSecondry.Specialisation).length > 0),
            admission: Array.isArray(ui.admission_process) && ui.admission_process.length > 0,
            fees: Boolean((collegeSecondry && (collegeSecondry.Programs || collegeSecondry["Detail Fees"]))),
            benefits: Boolean((ui.benefits && ui.benefits.length > 0) || (ui.placement && ui.placement.benefits && ui.placement.benefits.length > 0)),
            compare: true, // Compare CTA doesn't depend on college data
            degree: Boolean(ui.degree && ui.degree.description),
            hiring: Array.isArray(ui?.placement?.partners) && ui.placement.partners.length > 0,
            faq: Array.isArray(ui.faqs) && ui.faqs.length > 0,
            contact: Boolean(ui.contact || ui.email || ui.phone)
        };
    }, [college, collegeSecondry]);

    const sections = [
        { label: "Rankings & Accreditations", id: "ranking", show: available.ranking },
        { label: "Courses", id: "courses", show: available.courses },
        { label: "Specializations", id: "specialization", show: available.specialization },
        { label: "Admission Process", id: "admission", show: available.admission },
        { label: "Fees", id: "fees", show: available.fees },
        { label: "Benefits", id: "benefits", show: available.benefits },
        { label: "Compare Colleges", id: "compare", show: available.compare },
        { label: "Degree Certificate", id: "degree", show: available.degree },
        { label: "Hiring Partner", id: "hiring", show: available.hiring },
        { label: "FAQ", id: "faq", show: available.faq },
        { label: "Contact Us", id: "contact", show: available.contact },
    ].filter(s => s.show);

    const [active, setActive] = useState(sections[0]?.id || null);

    const handleClick = (id) => {
        setActive(id);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    if (sections.length === 0) return null;

    return (
        <aside className="w-full max-w-[250px] pt-[32px] sticky top-0" aria-label="Page sections">
            <ul className="space-y-8 text-[18px]">
                {sections.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => handleClick(item.id)}
                        className={`cursor-pointer text-lg ${active === item.id
                                ? "font-semibold text-[#003B49]"
                                : "text-[#9B9B9B] hover:text-[#003B49]"
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