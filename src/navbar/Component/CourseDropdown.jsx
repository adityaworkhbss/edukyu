// CourseDropdown.jsx
import React from 'react';
import '../Styles/Navbar.css';

const CourseDropdown = ({ courseDropdownRef, courses, style }) => {
    return (
        <div
            ref={courseDropdownRef}
            style={style}
            className="bg-white shadow-lg rounded-md p-2 z-50 w-56 transition-all duration-300"
        >
            <p className="text-xs font-bold pb-1 border-b border-gray-200">Available Courses</p>
            <ul className="space-y-1">
                {courses.map((course, index) => (
                    <li
                        key={index}
                        className="text-xs p-1 hover:bg-[#005A6B] hover:text-white rounded transition-colors"
                    >
                        {course}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseDropdown;
