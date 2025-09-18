import React from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';

import {CollegePageSecondryData} from "@/Data Model/CollegePage/CollegePageSecondryData";
import {CollegePageData} from "@/Data Model/CollegePage/CollegePageData"
import CoursePageDesktop from "@/Component/Pages/CoursePage/CoursePageDesktop/CoursePageDesktop";
import CoursePageMobile from "@/Component/Pages/CoursePage/CoursePageMobile/CoursePageMobile";
//import { CoursePageData } from '@/Data Model/CoursePage/CoursePageData';
import { CoursePageData } from '@/Data Model/CoursePage/testdata';

const CoursePage = ({universityName, courseName}) => {
    const breakpoint = useBreakpoint();

    // console.log("check data validation :::::::::::: " , CoursePageData[0][universityName][courseName]);

    const courseData = CoursePageData[0][universityName][courseName]

    // Handle legacy "DPU" key by mapping it to "DYP"
    // let actualCollegeName = collegeName;
    // if (collegeName === 'DPU') {
    //     actualCollegeName = 'DYP';
    // }

    // Add null checks and fallback
    // const collegeData = CollegePageData?.[0]?.[actualCollegeName];
    // const collegeSecondryData = CollegePageSecondryData?.[0]?.[actualCollegeName];

    // Get available college names for debugging
    // const availableColleges = CollegePageData?.[0] ? Object.keys(CollegePageData[0]) : [];

    // If college data doesn't exist, show error message
    if (!CoursePageData) {
        return (
            <div className="w-full p-8 text-center">
                <h2 className="text-2xl font-semibold text-red-600 mb-4">
                    Course Not Found
                </h2>
                <p className="text-gray-600 mb-4">
                    The course "{courseName}" was not found in our database.
                </p>
                <div className="text-sm text-gray-500 mb-4">
                    Available courses: {availableCourses.join(', ')}
                </div>
                <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    Return to Home
                </button>
            </div>
        );
    }
    // else{
    //     console.log(courseName);
    //     console.log(CoursePageData[0])
    // }

    return (
        <>
            {breakpoint === 'mobile' || breakpoint === 'tablet' ? (
                <CoursePageMobile course={courseData} courseSecondry={CollegePageSecondryData} />
                
            ) : (
                <CoursePageDesktop course={courseData} courseSecondry={CollegePageSecondryData}/>
            )}
        </>
    );
};

//CoursePageData[0][universityName][courseName]
//CollegePageSecondryData[0][universityName][courseName]

export default CoursePage;
