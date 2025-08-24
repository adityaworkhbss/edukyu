"use client";
import React from "react";
import Image from "next/image";
import GridComponent from "@/GlobalComponent/GridComponent";
import {AlumniData} from "@/Data Model/Homepage/AlumniData"; // ✅ Import your alumni data

const OurFaculty = () => {
    // Split into groups of 4 for swipe "pages"
    const groupedCompanies = [];
    for (let i = 0; i < AlumniData.length; i += 4) {
        groupedCompanies.push(AlumniData.slice(i, i + 4));
    }

    return (
        <section className="pb-10 w-full">
            <GridComponent gridStart={0} gridEnd={6}>
                <h2 className="text-[48px] font-semibold text-[#024B53] font-[Outfit] leading-normal w-full">
                    Meet Your Faculty
                </h2>
                {/* <p className="text-[20px] pt-4 mb-[64px] font-normal text-[#515150] font-[Outfit] leading-normal">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </p> */}
            </GridComponent>

           

            <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory no-scrollbar mb-[32px] mt-[64px]">
                {groupedCompanies.map((group, groupIndex) => (
                    <div
                        key={groupIndex}
                        className="flex-shrink-0 w-full max-w-[420px] grid grid-cols-2 gap-6 snap-start"
                    >
                        {group.map((alumni, idx) => (
                            <div
                                key={idx}
                                className="aspect-square rounded-[16px] overflow-hidden relative bg-[#D9D9D9] group"
                            >
                                <Image
                                    src={alumni.image} // ✅ Alumni image
                                    alt={alumni.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                               
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurFaculty;