'use client';
import React from "react";
import { useParams } from "next/navigation";
import CoursePage from "@/Component/Pages/CoursePage/CoursePage";

export default function CourseRoute() {
    const { university_name, course_name } = useParams();

    return (
        <div className="w-full font-[Outfit]">
            <CoursePage
                universityName={university_name}
                courseName={course_name}
            />
        </div>
    );
}
