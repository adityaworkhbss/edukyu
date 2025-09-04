"use client";
import React, { useState, useMemo } from "react";

// Dynamic sidebar: shows only sections that have data in the provided `course` prop.
const SidebarNavigation = ({ course = {} }) => {
    // derive availability of sections from course prop
    const available = useMemo(() => {
        // Extract course data safely - handle both direct and nested structures
        let courseData = {};
        if (course) {
            // If the object already looks like course data
            if (course.accreditations || course.curriculum || course.page) {
                courseData = course;
            } else {
                // CoursePageData shape: array/object keyed by university
                const firstKey = Object.keys(course)[0];
                if (firstKey && course[firstKey]) {
                    courseData = course[firstKey];
                }
            }
        }

        return {
            ranking: Array.isArray(courseData.accreditations) && courseData.accreditations.length > 0,
            courses: Boolean(courseData.curriculum || courseData.page || courseData.specializations),
            specialization: Array.isArray(courseData.specializations) && courseData.specializations.length > 0,
            benefits: Array.isArray(courseData.programBenefits) && courseData.programBenefits.length > 0,
            semester: Boolean(courseData.curriculum && courseData.curriculum.semesters),
            ourfaculty: Array.isArray(courseData.faculty) && courseData.faculty.length > 0,
            eligibilitycriteria: Boolean(courseData.eligibility),
            eligibilitycriteriaimage: Boolean(courseData.feeStructure || courseData.fees || courseData.page?.fees),
            admission: Array.isArray(courseData.admission_process) && courseData.admission_process.length > 0,
            compare: true, // Compare CTA doesn't depend on course data
            degree: Boolean(courseData.page),
            tools: Boolean(courseData.careerOpportunities),
            jobroles: Boolean(
                courseData.careerOpportunities && (
                    Array.isArray(courseData.careerOpportunities.jobRoles) || Array.isArray(courseData.careerOpportunities.job_roles)
                )
            ),
            contact: true, // keep contact visible
        };
    }, [course]);

    const sections = [
        { label: "Rankings & Accreditations", id: "ranking", show: available.ranking },
        // { label: "Specializations", id: "specialization", show: available.specialization },
        { label: "Benefits", id: "benefits", show: available.benefits },
        { label: "Semester", id: "semester", show: available.semester },
        { label: "Our Faculty", id: "ourfaculty", show: available.ourfaculty },
        { label: "Eligibility Criteria", id: "eligibilitycriteria", show: available.eligibilitycriteria },
        { label: "Fee Structure", id: "eligibilitycriteriaimage", show: available.eligibilitycriteriaimage },
        { label: "Admission Process", id: "admission", show: available.admission },
        { label: "Compare Colleges", id: "compare", show: available.compare },
        { label: "Degree Certificate", id: "degree", show: available.degree },
        { label: "Job Roles", id: "jobroles", show: available.jobroles },
        { label: "Contact Us", id: "contact", show: available.contact },
    ].filter((s) => s.show);

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
                        className={`cursor-pointer text-lg ${active === item.id ? "font-semibold text-[#003B49]" : "text-[#9B9B9B] hover:text-[#003B49]"
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