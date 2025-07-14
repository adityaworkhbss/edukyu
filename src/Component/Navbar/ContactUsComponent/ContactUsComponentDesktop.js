// app/components/ContactUsComponentDesktop.js
"use client";

import React from 'react';
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { gridConfigs } from "@/libs/GridConfigs";
import GridComponent from "@/GlobalComponent/GridComponent";

const ContactUsComponentDesktop = () => {
    const breakpoint = useBreakpoint();
    const config = gridConfigs[breakpoint];

    return (
        <GridComponent
            numGrids={config.numGrids}
            gutter={config.gutter}
            gridHeight="auto"
            showGrids={true}
        >
            <div className="bg-[#FFF] rounded-b-xl px-14 py-6 w-full ">
                <div className="flex justify-between">
                    <GridComponent
                        lastUsedGridEnd={0}
                        gridStart={1}
                        gridEnd={6}
                        className=""
                    >
                        <div className="flex flex-col text-left">
                            <div className="text-[#383837] font-outfit text-[22px] font-medium leading-normal not-italic">
                                Wanna talk to us? We are always there to listen to you
                            </div>

                            <div className="pt-6 flex space-x-6 text-[#024B53] text-sm">

                                {/*<GridComponent*/}
                                {/*    lastUsedGridEnd={0}*/}
                                {/*    gridStart={1}*/}
                                {/*    gridEnd={2}*/}
                                {/*    className=""*/}
                                {/*>*/}
                                <div className="flex gap-2">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_70_401)">
                                            <path d="M4.36 3.33333C4.4 3.92667 4.5 4.50667 4.66 5.06L3.86 5.86C3.58667 5.06 3.41333 4.21333 3.35333 3.33333H4.36ZM10.9333 11.3467C11.5 11.5067 12.08 11.6067 12.6667 11.6467V12.64C11.7867 12.58 10.94 12.4067 10.1333 12.14L10.9333 11.3467ZM5 2H2.66667C2.3 2 2 2.3 2 2.66667C2 8.92667 7.07333 14 13.3333 14C13.7 14 14 13.7 14 13.3333V11.0067C14 10.64 13.7 10.34 13.3333 10.34C12.5067 10.34 11.7 10.2067 10.9533 9.96C10.8867 9.93333 10.8133 9.92667 10.7467 9.92667C10.5733 9.92667 10.4067 9.99333 10.2733 10.12L8.80667 11.5867C6.92 10.62 5.37333 9.08 4.41333 7.19333L5.88 5.72667C6.06667 5.54 6.12 5.28 6.04667 5.04667C5.8 4.3 5.66667 3.5 5.66667 2.66667C5.66667 2.3 5.36667 2 5 2Z" fill="#024B53"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_70_401">
                                                <rect width="16" height="16" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>+91 8536689553</span>

                                </div>
                                {/*</GridComponent>*/}

                                {/*<GridComponent*/}
                                {/*    lastUsedGridEnd={2}*/}
                                {/*    gridStart={3}*/}
                                {/*    gridEnd={5}*/}
                                {/*    className=""*/}
                                {/*>*/}
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_70_401)">
                                            <path d="M4.36 3.33333C4.4 3.92667 4.5 4.50667 4.66 5.06L3.86 5.86C3.58667 5.06 3.41333 4.21333 3.35333 3.33333H4.36ZM10.9333 11.3467C11.5 11.5067 12.08 11.6067 12.6667 11.6467V12.64C11.7867 12.58 10.94 12.4067 10.1333 12.14L10.9333 11.3467ZM5 2H2.66667C2.3 2 2 2.3 2 2.66667C2 8.92667 7.07333 14 13.3333 14C13.7 14 14 13.7 14 13.3333V11.0067C14 10.64 13.7 10.34 13.3333 10.34C12.5067 10.34 11.7 10.2067 10.9533 9.96C10.8867 9.93333 10.8133 9.92667 10.7467 9.92667C10.5733 9.92667 10.4067 9.99333 10.2733 10.12L8.80667 11.5867C6.92 10.62 5.37333 9.08 4.41333 7.19333L5.88 5.72667C6.06667 5.54 6.12 5.28 6.04667 5.04667C5.8 4.3 5.66667 3.5 5.66667 2.66667C5.66667 2.3 5.36667 2 5 2Z" fill="#024B53"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_70_401">
                                                <rect width="16" height="16" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>+91 9008525443</span>
                                </div>

                                {/*</GridComponent>*/}

                                {/*<GridComponent*/}
                                {/*    lastUsedGridEnd={4}*/}
                                {/*    gridStart={5}*/}
                                {/*    gridEnd={6}*/}
                                {/*    className=""*/}
                                {/*>*/}
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_70_423)">
                                            <path d="M14.6673 4.00002C14.6673 3.26669 14.0673 2.66669 13.334 2.66669H2.66732C1.93398 2.66669 1.33398 3.26669 1.33398 4.00002V12C1.33398 12.7334 1.93398 13.3334 2.66732 13.3334H13.334C14.0673 13.3334 14.6673 12.7334 14.6673 12V4.00002ZM13.334 4.00002L8.00065 7.32669L2.66732 4.00002H13.334ZM13.334 12H2.66732V5.33335L8.00065 8.66669L13.334 5.33335V12Z" fill="#024B53"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_70_423">
                                                <rect width="16" height="16" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>hi@edukyu.com</span>
                                </div>
                                {/*</GridComponent>*/}
                            </div>

                            {/* Locations section */}
                            <div className="pt-12">
                                <div className="text-[#383837] font-outfit text-[22px] font-medium leading-normal not-italic">
                                    Wanna meet us? Find us at the below mentioned location
                                </div>
                                <div className="flex flex-wrap gap-2 pt-6">
                                    <div className="flex items-center gap-2 bg-white bg-opacity-60 py-1 rounded-full text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_70_405)">
                                                <path d="M8.00065 1.33331C5.42065 1.33331 3.33398 3.41998 3.33398 5.99998C3.33398 9.49998 8.00065 14.6666 8.00065 14.6666C8.00065 14.6666 12.6673 9.49998 12.6673 5.99998C12.6673 3.41998 10.5807 1.33331 8.00065 1.33331ZM4.66732 5.99998C4.66732 4.15998 6.16065 2.66665 8.00065 2.66665C9.84065 2.66665 11.334 4.15998 11.334 5.99998C11.334 7.91998 9.41398 10.7933 8.00065 12.5866C6.61398 10.8066 4.66732 7.89998 4.66732 5.99998Z" fill="#024B53"/>
                                                <path d="M8.00065 7.66665C8.92113 7.66665 9.66732 6.92045 9.66732 5.99998C9.66732 5.07951 8.92113 4.33331 8.00065 4.33331C7.08018 4.33331 6.33398 5.07951 6.33398 5.99998C6.33398 6.92045 7.08018 7.66665 8.00065 7.66665Z" fill="#323232"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_70_405">
                                                    <rect width="16" height="16" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <span className="text-[#024B53]">Noida</span>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_70_427)">
                                                <path d="M5.99935 3.33331V4.66665H10.3927L2.66602 12.3933L3.60602 13.3333L11.3327 5.60665V9.99998H12.666V3.33331H5.99935Z" fill="#024B53"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_70_427">
                                                    <rect width="16" height="16" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        {["Kolkata", "Lucknow", "Bangalore"].map((city) => (
                                            <div
                                                key={city}
                                                className="flex items-center gap-2 bg-white bg-opacity-60 px-3 py-1 rounded-full text-sm"
                                            >
                                                {/* Location pin icon */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                                    <g clipPath="url(#clip0)">
                                                        <path d="M8 1.333C5.42 1.333 3.333 3.42 3.333 6c0 3.5 4.667 8.667 4.667 8.667s4.667-5.167 4.667-8.667C12.667 3.42 10.58 1.333 8 1.333ZM4.667 6c0-1.84 1.493-3.333 3.333-3.333s3.333 1.493 3.333 3.333c0 1.92-1.92 4.793-3.333 6.587C6.614 10.807 4.667 7.9 4.667 6Z" fill="#024B53" />
                                                        <path d="M8 7.667A1.667 1.667 0 1 0 8 4.333a1.667 1.667 0 0 0 0 3.334Z" fill="#323232" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16" height="16" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>

                                                {/* City name */}
                                                <span className="text-[#024B53]">{city}</span>

                                                {/* External link icon */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                                    <g clipPath="url(#clip1)">
                                                        <path d="M6 3.333v1.334h4.393L2.666 12.393l.94.94 7.727-7.727v4.393h1.333V3.333H6Z" fill="#024B53" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip1">
                                                            <rect width="16" height="16" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>

                            {/* Know more section */}
                            <div className="pt-[65px] flex gap-x-5">
                                <div className="text-[#383837] font-outfit text-[20px] font-medium leading-normal not-italic">
                                    Wanna know more about us, check us out here
                                </div>

                                <div className="flex items-center gap-1">
                                    <span className="text-[#024B53] font-outfit text-[14px] font-medium leading-[20px] not-italic">
                                      Contact us page
                                    </span>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_70_435)">
                                            <path d="M7.99935 2.66669L7.05935 3.60669L10.7793 7.33335H2.66602V8.66669H10.7793L7.05935 12.3934L7.99935 13.3334L13.3327 8.00002L7.99935 2.66669Z" fill="#024B53"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_70_435">
                                                <rect width="16" height="16" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </GridComponent>


                    <GridComponent
                        lastUsedGridEnd={6}
                        gridStart={8}
                        gridEnd={12}
                        className="right-0"
                    >
                        <div className="  h-auto rounded-[12px] bg-[rgba(179,207,210,0.3)]">

                            <div className="h-[219px] bg-gray-200" />

                            {/* Message box overlay */}
                            <div className="text-left px-4 flex justify-between">
                                <div>
                                    <div className="text-[#383837] pt-5 font-outfit text-[18px] font-medium leading-normal not-italic">
                                        Your Message Matters
                                    </div>

                                    <p className="text-[#515150] pb-5 font-outfit text-[16px] font-normal leading-normal not-italic">
                                        We're here, ready to hear what you have to say
                                    </p>
                                </div>

                                <div>
                                    <button className="flex w-[115px] mt-[23px] px-4 py-3 justify-center items-center gap-[10px]
                                           text-[#024B53] font-outfit text-[14px] font-medium leading-normal not-italic
                                           rounded-[12px] border border-[#024B53] transition-colors hover:bg-[#e6f0ef]">
                                        Let's Talk!
                                    </button>
                                </div>
                            </div>

                        </div>
                    </GridComponent>
                </div>
            </div>
        </GridComponent>
    );
};

export default ContactUsComponentDesktop;