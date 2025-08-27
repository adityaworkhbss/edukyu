import Image from "next/image";
import collegepage_hero from '@/../public/Resources/Images/collegepage_hero.png';
import collegepage_hero_img from '@/../public/Resources/Images/collegepage_hero_img.png';
import GridComponent from "@/GlobalComponent/GridComponent";
import React, { useState } from "react";
import Form from "@/Component/Form/Form";

const HeroPage = ({ course }) => {

    const [showForm, setShowForm] = useState(false);

    // Add null checks to prevent errors
    if (!course) {
        return (
            <div className="w-full p-8">
                <div className="text-center text-gray-500">
                    Course information not available
                </div>
            </div>
        );
    }
    // else{
    //     console.log("Full course data:", course)
    //     console.log("Course keys:", Object.keys(course))
    //     if (course.page) {
    //         console.log("Course page data:", course.page)
    //     }
    //     // Check if the data structure is nested (like CoursePageData format)
    //     const firstKey = Object.keys(course)[0];
    //     if (firstKey && course[firstKey] && course[firstKey].page) {
    //         console.log("Nested course page data:", course[firstKey].page)
    //     }
    // }

    // Extract course data safely - handle both direct and nested structures
    let courseData = {};
    
    // Check if course has direct page property
    if (course.page) {
        courseData = course.page;
    } 
    // Check if course has nested structure like CoursePageData
    else {
        const firstKey = Object.keys(course)[0];
        if (firstKey && course[firstKey] && course[firstKey].page) {
            courseData = course[firstKey].page;
        }
    }
    
    console.log("Final courseData:", courseData)
    
    const {
        logo = "",
        title = "",
        university = "",
        description = "",
        duration = {},
        fees = {},
        accreditations = []
    } = courseData;

    return (

        <>
            <div className="w-full gap-6 pl-[56px] flex max-w-full">
                {/* Left Section */}
                <div className="w-1/2 flex flex-col pl-6  pt-6 min-w-0 ml-8">
                    {/* College Logo */}
                    <div className="w-[45%] h-[84px] bg-gray-200 rounded-lg mb-4 flex items-center justify-center mt-[52px]">
                       {logo && (
                           <img 
                               className="w-64 h-auto object-contain" 
                               src={logo} 
                               alt={`${university} logo`}
                           />
                       )}
                    </div>

                    {/* Course Title */}
                    <div className="mb-6 text-[52px] font-semibold text-[#025E68] font-[Outfit] break-words">
                        {title || "No title found"}
                    </div>
                    
                    {/* Debug info */}
                    {/* <div className="mb-2 text-sm text-red-500">
                        Debug: Title = "{title}", University = "{university}"
                    </div> */}

                    {/* University Name */}
                    {/* {university ? (
                        <div className="mb-4 text-[24px] font-medium text-[#025E68] font-[Outfit] break-words">
                            {university}
                        </div>
                    ) : (
                        <div className="mb-4 text-red-500">No university found</div>
                    )} */}

                    {/* Course Description */}
                    <div className="mb-[24px] text-[20px] font-normal text-[#025E68] font-[Outfit] break-words">
                        {description || "No description available"}
                    </div>

                    
                    <button
                        onClick={() => setShowForm(true)}
                        className="rounded-[12px] w-[150px] border border-white bg-[#025E68] text-white text-[14px] font-medium font-[Outfit] px-6 py-2 hover:bg-[#024B53] transition-colors">
                        Apply Now
                    </button>

                </div>

                {/* Right Section */}
                <div className="w-1/2 relative mb-8 flex-shrink-0">
                    <div className="max-w-full pl-3">
                        <Image
                            src={collegepage_hero}
                            alt="College Page Hero"
                            className="w-full h-auto"
                        />

                    </div>
                    <div className="absolute bottom-[-32px] right-[56px]">
                        <Image
                            src={collegepage_hero_img}
                            alt="College Page Hero Image"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            {showForm && <Form image={logo} onClose={() => setShowForm(false)} />}
        </>
    );
};

export default HeroPage;
