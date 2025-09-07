'use client';
import React from "react";
import { useParams } from "next/navigation";
import CompareCollege from "@/Component/Pages/CompareCollegePage/CompareCollege";

export default function CompareRoute() {
    //const {} = useParams();

    return (
        <div className="w-full font-[Outfit]">
            <CompareCollege />;
        </div>
    );
}
