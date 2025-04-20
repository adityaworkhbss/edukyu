// CourseDropdown.jsx
import React from 'react';

const CourseDropdown = ({ courseDropdownRef, courses, style }) => {
    return (
        <div
            ref={courseDropdownRef}
            style={style}
            className="bg-white shadow-lg rounded-md p-2 z-50 w-56"
        >
            <p className="text-xs font-bold pb-1 border-b border-gray-200">Available Courses</p>
            <ul>
                {courses.map((course, index) => (
                    <li
                        key={index}
                        className="text-xs p-1 hover:bg-[#005A6B] hover:text-white rounded"
                    >
                        {course}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseDropdown;
