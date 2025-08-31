'use client';

import React, { useEffect, useState } from 'react';
import { CourseData } from '@/Data Model/CourseData';
import { DevEnvironment } from '@/DevEnvironment/DevEnviroment';
import GridContainer from '@/GlobalComponent/GridContainer';
import GridComponent from '@/GlobalComponent/GridComponent';
import CourseItems from './CourseItems';
import GridContainerSec from "@/GlobalComponent/GridContainerSec";
import GridComponentSec from "@/GlobalComponent/GridComponentSec";

const CoursesComponentDesktop = () => {
    const courseTypeFullForms = {
        MBA: 'Master of Business Administration',
        MA: 'Master of Arts',
        MSC: 'Master of Science',
        MCA: 'Master of Computer Applications',
        MCOM: 'Master of Commerce',
        Bcom: 'Bachelor of Commerce',
        BBA: 'Bachelor of Business Administration',
        BSC: 'Bachelor of Science',
        BA: 'Bachelor of Arts',
        BCA: 'Bachelor of Computer Applications',
    };

    const gridPositions = [
        { gridStart: 3, gridEnd: 5, lastUsedGridEnd: 2 },
        { gridStart: 6, gridEnd: 8, lastUsedGridEnd: 5 },
        { gridStart: 9, gridEnd: 11, lastUsedGridEnd: 8 },
    ];

    const defaultCourseType = DevEnvironment.DEFAULT_COURSE_TYPE || 'MBA';

    const getBaseProgramName = (formattedName) => formattedName.split(' (')[0];

    const formattedPrograms = Object.keys(CourseData).map((program) => {
        const subCourses = CourseData[program];
        const courseCount = Object.keys(subCourses).length;
        return courseCount > 0 ? `${program} (${courseCount} Courses)` : program;
    });

    const [selectedProgram, setSelectedProgram] = useState('');

    useEffect(() => {
        if (!selectedProgram && formattedPrograms.length > 0) {
            const defaultProgram =
                formattedPrograms.find(
                    (p) =>
                        getBaseProgramName(p).toLowerCase() ===
                        defaultCourseType.toLowerCase()
                ) || formattedPrograms[0];
            setSelectedProgram(defaultProgram);
        }
    }, [defaultCourseType, formattedPrograms, selectedProgram]);

    const handleSelect = (name) => setSelectedProgram(name);

    const baseProgram = getBaseProgramName(selectedProgram);
    const selectedCourses = CourseData[baseProgram]
        ? Object.keys(CourseData[baseProgram])
        : [];

    const selectedCourseTypeFullForm =
        courseTypeFullForms[baseProgram] || baseProgram;

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
        <GridContainerSec
        >
            <div className="overflow-hidden rounded-b-xl w-full bg-[#FFF] px-14">
                <div className="flex pt-6 border-gray-200">
                    <div className="text-[#383837] text-left pr-[40px] font-outfit text-[18px] font-medium leading-[20px] not-italic">
                        {selectedCourseTypeFullForm}
                    </div>
                    <a
                        href="#"
                        className="text-[14px] text-left h-[18px] text-[#024B53] flex font-medium font-outfit not-italic leading-normal gap-[8px]"
                    >
                        Explore Courses
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
                    <GridComponentSec
                        lastUsedGridEnd={0}
                        gridStart={1}
                        gridEnd={2}
                        className=""
                    >
                        <div>
                            {formattedPrograms.map((program, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSelect(program)}
                                    className={`w-full mb-1 h-[36px] text-left text-[12px] px-[8px] py-[12px] flex items-center gap-[8px] rounded-[8px] transition-colors duration-200
                                        ${
                                        getBaseProgramName(selectedProgram) ===
                                        getBaseProgramName(program)
                                            ? 'bg-[#024B53] text-white font-medium border'
                                            : 'bg-white text-[#333] hover:bg-[#B3CFD280]'
                                    }`}
                                >
                                    {program}
                                </button>
                            ))}
                        </div>
                    </GridComponentSec>

                    <div className="bg-[#679EA4] w-px h-auto ml-3 mr-3"></div>

                    {gridPositions.map(
                        ({ gridStart, gridEnd, lastUsedGridEnd }, columnIndex) => {
                            const chunk = distributedChunks[columnIndex];
                            return (
                                <GridComponentSec
                                    key={columnIndex}
                                    gridStart={gridStart}
                                    gridEnd={gridEnd}
                                    lastUsedGridEnd={lastUsedGridEnd}
                                    className={`flex flex-col gap-y-1 ${
                                        gridStart === 6 || gridStart === 9 ? "ml-6" : ""
                                    }`}

                                >
                                    {chunk.map(({ course, idx }) =>
                                        course === null ? (
                                            <div
                                                key={idx}
                                                className="w-full h-[36px] rounded-[8px] bg-transparent invisible mr-6"
                                            />
                                        ) : (
                                            <CourseItems key={idx} course={course} />
                                        )
                                    )}
                                </GridComponentSec>
                            );
                        }
                    )}
                </div>
            </div>
        </GridContainerSec>
    );
};

export default CoursesComponentDesktop;
