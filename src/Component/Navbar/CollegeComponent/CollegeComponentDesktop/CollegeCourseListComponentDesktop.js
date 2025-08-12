import React, { useEffect, useState } from 'react';
import { universitiesData } from '@/Data Model/UniversityData';
import GridContainer from '@/GlobalComponent/GridContainer';
import GridComponent from '@/GlobalComponent/GridComponent';
import {usePageContext} from "@/GlobalComponent/PageContext";

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

const CollegeCourseListComponentDesktop = ({ university, selectedProgram, setSelectedProgram }) => {
    const universityData = universitiesData[university] || {};
    const { setCurrentPage, setSelectedCollege } = usePageContext();


    const universityKeyMap = {
        'Amity': 'Amity_University',
        'DPU':'DYP',
        // 'DPU':'NUI',
        // 'DPU':'VGU',
        'Jain':'Jain_University',
        'LPU' :'Lovely_Professional_University',
        'Manipal':'Manipal_University',
        'NMIMS':'NMIMS',
        'Shardha':'Sikkim_Manipal_University',
        'Shoolini':'Shoolini_University',
        'UU':'UU',
        'VGU':'VGU',
    };

    const gridPositions = [
        { gridStart: 3, gridEnd: 5, lastUsedGridEnd: 2 },
        { gridStart: 6, gridEnd: 8, lastUsedGridEnd: 5 },
        { gridStart: 9, gridEnd: 11, lastUsedGridEnd: 8 },
    ];

    const getBaseProgramName = (formattedName) => formattedName.split(' (')[0];
    const defaultCourseType = "MBA";

    const formattedPrograms = Object.keys(universityData).map(program => {
        const courseCount = Object.keys(universityData[program]).length;
        return courseCount > 0 ? `${program} (${courseCount} Courses)` : program;
    });

    useEffect(() => {
        if (formattedPrograms.length > 0) {
            const defaultProgram =
                formattedPrograms.find(p => getBaseProgramName(p).toLowerCase() === defaultCourseType.toLowerCase()) ||
                formattedPrograms[0];
            setSelectedProgram(defaultProgram);
        }
    }, [formattedPrograms, setSelectedProgram, university]);

    const handleSelect = (name) => setSelectedProgram(name);

    const baseProgram = getBaseProgramName(selectedProgram);
    const selectedCourses = universityData[baseProgram] ? Object.keys(universityData[baseProgram]) : [];

    const totalExpected = 30;
    const filledCourses = [...selectedCourses];
    while (filledCourses.length < totalExpected) {
        filledCourses.push(null);
    }

    const distributedChunks = [[], [], []];
    filledCourses.forEach((course, index) => {
        distributedChunks[index % 3].push({ course, idx: index });
    });

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
                            <a
                                className="text-[14px] text-left h-[18px] text-[#024B53] flex font-medium font-outfit not-italic leading-normal gap-[8px]"
                                onClick={() => {
                                    const mappedKey = universityKeyMap[university];
                                    setSelectedCollege(mappedKey);
                                    setCurrentPage('college');
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
                            </a>
                        </div>

                        <div className="flex pt-8 pb-6">
                            <GridComponent lastUsedGridEnd={0} gridStart={1} gridEnd={2}>
                                <div>
                                    {formattedPrograms.map((program, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSelect(program)}
                                            className={`w-full mb-1 h-[36px] -ml-2 text-left text-[12px] px-[8px] py-[12px] flex items-center gap-[8px] rounded-[8px] transition-colors duration-200
                                                ${getBaseProgramName(selectedProgram) === getBaseProgramName(program)
                                                ? 'bg-[#024B53] text-white font-medium border'
                                                : 'bg-white text-[#333] hover:bg-[#B3CFD280]'}
                                            `}
                                        >
                                            {program}
                                        </button>
                                    ))}
                                </div>
                            </GridComponent>

                            <div className="bg-[#679EA4] w-px h-auto ml-1 mr-3"></div>

                            {gridPositions.map(({ gridStart, gridEnd, lastUsedGridEnd }, columnIndex) => {
                                const chunk = distributedChunks[columnIndex];
                                return (
                                    <GridComponent
                                        key={columnIndex}
                                        gridStart={gridStart}
                                        gridEnd={gridEnd}
                                        lastUsedGridEnd={lastUsedGridEnd}
                                        className="flex flex-col gap-y-1 gap-x-6"
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
                                    </GridComponent>
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
