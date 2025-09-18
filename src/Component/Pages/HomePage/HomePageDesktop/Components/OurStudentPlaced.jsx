"use client";
import React from "react";
import Image from "next/image";
import GridComponent from "@/GlobalComponent/GridComponent";
import { AlumniData } from "@/Data Model/Homepage/AlumniData";

const OurStudentPlaced = () => {
    return (
        <section className="pb-[32px]">
            <GridComponent gridStart={0} gridEnd={6}>
                <h2 className="text-[48px] font-semibold text-[#024B53] font-[Outfit] leading-normal">
                    Our Student Placed
                </h2>
                <p className="text-[20px] pt-4 mb-[64px] font-normal text-[#515150] font-[Outfit] leading-none">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </p>
            </GridComponent>

            {/* Alternating row layout - Y direction */}
            <div className="grid grid-cols-12 gap-6" style={{ gridAutoRows: 'auto' }}>
                {AlumniData.map((alumni, idx) => (
                    <div
                        key={idx}
                        className={`
                            col-span-6 md:col-span-2 lg:col-span-2 
                            aspect-square rounded-[16px] overflow-hidden 
                            relative bg-[#FFF] group
                        `}
                        style={{
                            gridColumn: 'span 2',
                            gridRow: idx % 2 === 0 ? '1' : '2'
                        }}
                    >
                        <Image
                            src={alumni.image}
                            alt={alumni.name}
                            fill
                            className="object-contain"
                        />
                        {alumni.name && (
                            <div className="absolute bottom-0 left-0 right-0 text-center bg-gradient-to-t from-black/80 to-transparent backdrop-blur-md py-2 hidden group-hover:block transition-transform duration-300">
                                <div className="text-white text-[18px] font-[Outfit] font-semibold leading-normal">
                                    {alumni.name}
                                </div>
                                {alumni.university && (
                                    <div className="text-white/80 text-[16px] font-[Outfit] font-normal leading-normal">
                                        {alumni.university}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurStudentPlaced;