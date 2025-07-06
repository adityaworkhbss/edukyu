import React from 'react';

const CoursesListCorrespondToCollege = ({ courseData, program }) => {

    const courseList = courseData[program];
    const courseArray = Object.entries(courseList);


    return (
        <div className="overflow-hidden">

            <div className="flex flex-row gap-3 pt-5 border-gray-200">
                <div className="text-[#024B53] font-outfit text-[14px] font-medium not-italic leading-[20px]">
                    See what {program} has to offer you
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_43_3625)">
                        <path d="M7.99984 2.66669L7.05984 3.60669L10.7798 7.33335H2.6665V8.66669H10.7798L7.05984 12.3934L7.99984 13.3334L13.3332 8.00002L7.99984 2.66669Z" fill="#024B53"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_43_3625">
                            <rect width="16" height="16" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>


            </div>

            <div className="flex flex-col pl-4 gap-5 pt-5 pb-5">
                {courseArray.length > 0 && (
                    <div className="flex flex-col gap-4">
                        {courseArray.map((course, idx) => (
                            <div
                                key={idx}
                                className="flex justify-between items-center text-[#2B2B2A] font-outfit text-[14px] font-normal not-italic leading-normal"
                            >
                                <div>{course[0]}</div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_43_3568)">
                                        <path
                                            d="M7.99984 2.66669L7.05984 3.60669L10.7798 7.33335H2.6665V8.66669H10.7798L7.05984 12.3934L7.99984 13.3334L13.3332 8.00002L7.99984 2.66669Z"
                                            fill="#515150"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_43_3568">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        ))}
                    </div>
                )}
            </div>


        </div>
    );
};

export default CoursesListCorrespondToCollege;
