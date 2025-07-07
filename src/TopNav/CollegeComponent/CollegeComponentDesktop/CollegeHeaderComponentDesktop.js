import React, { useRef, useState } from 'react';
import CollegeCourseListComponentDesktop from './CollegeCourseListComponentDesktop';
import { DevEnvironment } from '../../../DevEnvironment/DevEnviroment';

export default function CollegeHeaderComponentDesktop() {
    const [showCourses] = useState(true);
    const defaultCollege = DevEnvironment.DEFAULT_COLLEGE;
    const [selectedUniversity, setSelectedUniversity] = useState(defaultCollege);
    const scrollContainerRef = useRef(null);

    const colleges = [
        'Amity University',
        'Chandigarh University',
        'Dr. DY Patil University',
        'Jain University',
        'Jamia Hamdard University',
        'Lovely Professional University',
        'Manipal University',
        'NMIMS University',
        'Shardha University',
        'Shoolini University',
        'Uttaranchal University',
        'VIT Online',
        'Vivekanand Global University'
    ];

    const universityKeyMap = {
        'Amity University': 'Amity',
        'Dr. DY Patil University': 'DPU',
        'Jain University': 'Jain',
        'Lovely Professional University': 'LPU',
        'Manipal University': 'Manipal',
        'NMIMS University': 'NMIMS',
        'Shardha University': 'Shardha',
        'Shoolini University': 'Shoolini',
        'Uttaranchal University': 'UU',
        'Vivekanand Global University': 'VGU',
    };

    const handleToggle = (university) => () => {
        if (selectedUniversity !== university) {
            setSelectedUniversity(university);
            console.log(selectedUniversity);
        }
    };

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 400, // scroll by ~2 items
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="font-outfit w-[100%] pl-9 rounded-b-xl z-50 bg-white">
            <div className="relative">
                <div
                    ref={scrollContainerRef}
                    className="flex pl-5 pt-6 px-3 items-center flex-nowrap whitespace-nowrap overflow-x-auto scroll-smooth no-scrollbar"
                    style={{ maxWidth: '100%' }}
                >
                    {colleges.map((university, index) => (
                        <div
                            key={index}
                            className={`inline-flex px-6 py-3 justify-center items-center gap-3 bg-white rounded-sm cursor-pointer whitespace-nowrap flex-shrink-0
                                ${selectedUniversity === university ? 'border-b-2 border-[#024B53]' : ''}`}
                            onClick={handleToggle(university)}
                        >
                            <span
                                className={`font-outfit text-[16px] leading-[20px] font-semibold ${
                                    selectedUniversity === university
                                        ? 'text-[#024B53]'
                                        : 'text-[#383837]'
                                }`}
                                style={{ fontStyle: 'normal' }}
                            >
                                {university}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Right Scroll Button */}
                <div
                    className="absolute right-0 bottom-0 transform -translate-y-1/2 pr-3 bg-white cursor-pointer z-10"
                    onClick={handleScrollRight}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6L8.59 7.41Z"
                            fill="#357E86"
                        />
                    </svg>
                </div>
            </div>

            <div className="w-full h-px bg-[#9B9B9B] ml-5 pr-[56px]"></div>

            {showCourses && (
                <div className="font-outfit">
                    <CollegeCourseListComponentDesktop
                        university={universityKeyMap[selectedUniversity]}
                    />
                </div>
            )}
        </div>
    );
}
