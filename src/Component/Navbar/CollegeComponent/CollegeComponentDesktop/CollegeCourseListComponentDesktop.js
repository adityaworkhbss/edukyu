import React, { useEffect, useState } from 'react';
import { universitiesData } from '@/Data Model/UniversityData';
import GridContainer from '@/GlobalComponent/GridContainer';
import GridComponent from '@/GlobalComponent/GridComponent';
import { usePageContext } from "@/GlobalComponent/PageContext";
import Link from "next/link";
import GridComponentSec from "@/GlobalComponent/GridComponentSec";

const CourseItems = ({ course }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                padding: '12px 8px',
                gap: '8px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                borderRadius: '8px',
                background: isHovered ? 'rgba(179, 207, 210, 0.50)' : '#FFFFFF',
                color: '#024B53',
                fontSize: '12px',
                fontFamily: 'Outfit',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: 'normal',
                transition: 'background-color 0.2s ease',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                textAlign: 'left',
            }}
        >
            {course}
        </div>
    );
};

const CollegeCourseListComponentDesktop = ({ university, selectedProgram, setSelectedProgram, onNavbarClose }) => {
    const universityData = universitiesData[university] || {};
    const { setCurrentPage, setSelectedCollege } = usePageContext();

    const universityKeyMapCorrect = {
        "Amity": 'Amity-University',
        "DYP": 'D.Y.-Patil-Vidyapeeth',
        "Jain": 'Jain-University',
        "LPU": 'Lovely-Professional-University',
        "Manipal": 'Manipal-University-Jaipur',
        "NMIMS": 'NMIMS-University-Online',
        "Shardha": 'Shardha-University',
        "Shoolini": 'Shoolini-University',
        "UU": 'Uttaranchal-University',
        "VGU": 'Vivekanand-Global-University',
        "NIU": 'Noida-International-University',
        "Sikkim_Manipal_University": 'Sikkim-Manipal-University'
    };

    const gridPositions = [
        { gridStart: 3, gridEnd: 5, lastUsedGridEnd: 2 },
        { gridStart: 6, gridEnd: 8, lastUsedGridEnd: 5 },
        { gridStart: 9, gridEnd: 11, lastUsedGridEnd: 8 },
    ];

    // Fixed: More robust function to extract base program name
    const getBaseProgramName = (formattedName) => {
        if (!formattedName) return '';
        // Remove course count in parentheses: "MBA (5 Courses)" -> "MBA"
        return formattedName.split(' (')[0].trim();
    };

    const defaultCourseType = "MBA";

    // Create formatted programs with course counts
    const formattedPrograms = Object.keys(universityData).map(program => {
        const courseCount = Object.keys(universityData[program] || {}).length;
        return courseCount > 0 ? `${program} (${courseCount} Courses)` : program;
    });

    // Fixed: Better initialization and dependency management
    useEffect(() => {
        if (formattedPrograms.length > 0) {
            // Try to find MBA first, otherwise use the first available program
            const defaultProgram = formattedPrograms.find(p =>
                getBaseProgramName(p).toLowerCase() === defaultCourseType.toLowerCase()
            ) || formattedPrograms[0];

            // Only update if different to avoid infinite loops
            if (selectedProgram !== defaultProgram) {
                setSelectedProgram(defaultProgram);
            }
        }
    }, [university, formattedPrograms.length]); // Removed selectedProgram and setSelectedProgram from dependencies

    // Fixed: Ensure we're working with the correct program name
    const handleSelect = (programName) => {
        console.log('Selecting program:', programName); // Debug log
        setSelectedProgram(programName);
    };

    // Fixed: Better handling of selected courses
    const baseProgram = getBaseProgramName(selectedProgram);
    const selectedCourses = (universityData[baseProgram] && typeof universityData[baseProgram] === 'object')
        ? Object.keys(universityData[baseProgram])
        : [];

    console.log('Current state:', { // Debug logs
        university,
        selectedProgram,
        baseProgram,
        availablePrograms: Object.keys(universityData),
        selectedCoursesCount: selectedCourses.length
    });

    const totalExpected = 30;
    const filledCourses = [...selectedCourses];
    while (filledCourses.length < totalExpected) {
        filledCourses.push(null);
    }

    const distributedChunks = [[], [], []];
    filledCourses.forEach((course, index) => {
        distributedChunks[index % 3].push({ course, idx: index });
    });

    const handleCollegeLinkClick = () => {
        // Call the callback function to close navbar if provided
        if (typeof onCollegeNavigate === 'function') {
            onCollegeNavigate();
        }
    };

    return (
        <GridContainer>
            <div className="overflow-hidden w-full bg-[#FFF] px-6">
                {Object.keys(universityData).length === 0 ? (
                    <div className="py-10 text-center text-gray-500 font-outfit text-[14px]">
                        No courses available for this university.
                    </div>
                ) : (
                    <>
                        <div className="flex pt-6">
                            <div className="text-[#383837] text-left pr-[40px] font-outfit text-[18px] font-medium leading-[20px] not-italic">
                                Courses {university} Provides
                            </div>
                            <Link
                                className="text-[14px] text-left h-[18px] text-[#024B53] flex font-medium font-outfit not-italic leading-normal gap-[8px]"
                                href={`/online-mba-programs/top-distance-mba-colleges/${encodeURIComponent(universityKeyMapCorrect[university])}`}
                                onClick={() => {
                                    if (onNavbarClose) {
                                        onNavbarClose(); // Close the navbar dropdown
                                    }
                                }}
                            >
                                Explore College
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 shrink-0 aspect-square"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_171_79)">
                                        <path
                                            d="M6.00033 3.33334V4.66667H10.3937L2.66699 12.3933L3.60699 13.3333L11.3337 5.60667V10H12.667V3.33334H6.00033Z"
                                            fill="#024B53"
                                        />
                                    </g>
                                </svg>
                            </Link>
                        </div>

                        <div className="flex pt-8 pb-6">
                            <GridComponent lastUsedGridEnd={0} gridStart={1} gridEnd={2}>
                                <div>
                                    {formattedPrograms.map((program, index) => {
                                        const isSelected = getBaseProgramName(selectedProgram) === getBaseProgramName(program);
                                        return (
                                            <button
                                                key={index}
                                                onClick={() => handleSelect(program)}
                                                className={`w-full mb-1 h-[36px] -ml-2 text-left text-[12px] px-[8px] py-[12px] flex items-center gap-[8px] rounded-[8px] transition-colors duration-200
                                                    ${isSelected
                                                        ? 'bg-[#024B53] text-white font-medium border'
                                                        : 'bg-white text-[#333] hover:bg-[#B3CFD280]'}
                                                `}
                                            >
                                                {program}
                                            </button>
                                        );
                                    })}
                                </div>
                            </GridComponent>

                            <div className="bg-[#679EA4] w-px h-auto ml-1 mr-2"></div>

                            {gridPositions.map(({ gridStart, gridEnd, lastUsedGridEnd }, columnIndex) => {
                                const chunk = distributedChunks[columnIndex];
                                return (
                                    <GridComponentSec
                                        key={columnIndex}
                                        gridStart={gridStart}
                                        gridEnd={gridEnd}
                                        lastUsedGridEnd={lastUsedGridEnd}
                                        className={`flex flex-col gap-y-1 ${gridStart === 6 || gridStart === 9 ? "ml-6" : ""
                                            }`}
                                    >
                                        {chunk.map(({ course, idx }) => {
                                            if (course === null) {
                                                return (
                                                    <div
                                                        key={idx}
                                                        className="w-full h-[36px] rounded-[8px] bg-transparent invisible"
                                                    />
                                                );
                                            }
                                            return <CourseItems key={idx} course={course} />;
                                        })}
                                    </GridComponentSec>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        </GridContainer>
    );
};

export default CollegeCourseListComponentDesktop;