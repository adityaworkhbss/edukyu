"use client";
import React from "react";
import Image from "next/image";
import StudentPlaced from "@/../public/Resources/Images/StudentPlaced.png";

const OurStudentPlaced = () => {
    const companies = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        isHighlighted: i === 6, // Only 7th card shows name overlay
    }));

    // Split companies into groups of 4 for each swipe "page"
    const groupedCompanies = [];
    for (let i = 0; i < companies.length; i += 4) {
        groupedCompanies.push(companies.slice(i, i + 4));
    }

    return (
        <section className="py-10 px-4">
            <h2 className="text-[28px] text-[#024B53] font-[Outfit] font-semibold leading-normal mb-3">
                Our Student Placed
            </h2>
            <p className="text-[#515150] text-[14px] font-[Outfit] font-normal leading-normal mb-[32px]">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </p>

            <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory no-scrollbar mb-[32px]">
                {groupedCompanies.map((group, groupIndex) => (
                    <div
                        key={groupIndex}
                        className="flex-shrink-0 w-full max-w-[300px] grid grid-cols-2 gap-4 snap-start"
                    >
                        {group.map((company) => (
                            <div
                                key={company.id}
                                className="aspect-square rounded-[16px] overflow-hidden relative bg-[#D9D9D9]"
                            >
                                <Image
                                    src={StudentPlaced}
                                    alt="Student Placed"
                                    fill
                                    className="object-cover"
                                />
                                {company.isHighlighted && (
                                    <div className="absolute bottom-0 left-0 right-0 text-center bg-gradient-to-t from-white/70 to-transparent backdrop-blur-md py-2">
                                        <div className="text-white text-[18px] font-[Outfit] font-semibold leading-normal">
                                            Tanish Pandey
                                        </div>
                                        <div className="text-white/80 text-[16px] font-[Outfit] font-normal leading-normal">
                                            NMIMS 2025 July
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurStudentPlaced;
