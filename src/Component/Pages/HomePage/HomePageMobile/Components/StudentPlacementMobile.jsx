"use client";
import React from "react";
import Image from "next/image";
import { AlumniData } from "@/Data Model/Homepage/AlumniData"; // ✅ Import your alumni data

export const StudentPlacementMobile = () => {
    // Break alumni data into groups of 4 for each swipe "page"
    const groupedCompanies = [];
    for (let i = 0; i < AlumniData.length; i += 4) {
        groupedCompanies.push(AlumniData.slice(i, i + 4));
    }

    return (
        <section className="mt-8">
            <h2 className="text-[28px] text-[#024B53] font-[Outfit] font-semibold leading-normal">
                Our Student Placed
            </h2>
            <p className="text-[#515150] text-[14px] font-[Outfit] font-normal leading-normal mt-2">
                Lorem Ipsum is placeholder text used in the graphic, print.
            </p>

            {/* Swipeable container */}
            <div className="flex overflow-x-auto mt-[32px] space-x-4 no-scrollbar snap-x snap-mandatory">
                {groupedCompanies.map((group, groupIndex) => (
                    <div
                        key={groupIndex}
                        className="flex-shrink-0 w-full snap-start grid grid-cols-2 gap-4"
                    >
                        {group.map((alumni, idx) => (
                            <div
                                key={idx}
                                className="relative aspect-square bg-[#FFF] rounded-[12px] overflow-hidden group"
                            >
                                <Image
                                    src={alumni.image}
                                    alt={alumni.name}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                                {alumni.name && (
                                    <div className="absolute bottom-0 left-0 right-0 text-center bg-gradient-to-t from-black/80 to-transparent py-2">
                                        <div className="text-white text-[14px] font-[Outfit] font-semibold">
                                            {alumni.name}
                                        </div>
                                        {alumni.university && (
                                            <div className="text-white/80 text-[12px] font-[Outfit]">
                                                {alumni.university}
                                            </div>
                                        )}
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
