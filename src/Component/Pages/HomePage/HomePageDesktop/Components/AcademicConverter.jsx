import React, { useState } from 'react';
import GridContainer from "@/GlobalComponent/GridContainer";
import GridComponent from "@/GlobalComponent/GridComponent";

export const AcademicConverter = () => {
    const [sgpa, setSgpa] = useState('');
    const [percentage, setPercentage] = useState('');

    const handleConvert = () => {
        const sgpaValue = parseFloat(sgpa);
        if (!isNaN(sgpaValue) && sgpaValue >= 0 && sgpaValue <= 10) {
            const percentageValue = ((sgpaValue - 0.75) * 10).toFixed(2);
            setPercentage(percentageValue);
        } else {
            alert('Please enter a valid SGPA between 0 and 10');
        }
    };

    const handleReset = () => {
        setSgpa('');
        setPercentage('');
    };

    return (

        <div className="px-[56px] py-[64px]">
            <div className="flex flex-col flex-1">
                <div className="text-[32px] text-[#181D27] font-semibold font-outfit">
                    Academic Converter Tool
                </div>

                <div className="text-[24px] leading-[30px] text-[#535862] font-normal font-outfit mt-2 mb-6">
                    SGPA, CGPA, or Percentage — Get Results in One Click.
                </div>
            </div>
            <GridContainer>
                <section className="flex flex-row items-start justify-between gap-[24px] py-8">
                    {/* Left: Image Card */}
                    <GridComponent
                        lastUsedGridEnd={0} gridStart={0} gridEnd={4}
                    >
                        <div className="w-full">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/8aad82ab9aa1800501e4c0151aa8c2b9b356497b?placeholderIfAbsent=true"
                                alt="SGPA to Percentage Calculator"
                                className="rounded-[13px] w-full object-cover"
                            />
                        </div>

                    </GridComponent>


                    {/* Right: Inputs & Buttons */}
                    <div className="flex flex-col flex-1">

                        {/* Info bar */}
                        <div className="flex items-center bg-[#E1E1E1] text-[#9B9B9B] text-base font-medium rounded-lg border border-[#CDCDCD] px-4 py-3">
                            <span className="flex-1 basis-0 grow">Calculate your SGPA to Percentage</span>
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/1b7e04ab15c4ca86cbc876e757d2e473389a569a?placeholderIfAbsent=true"
                                alt="Calculator icon"
                                className="w-6 h-6"
                            />
                        </div>

                        {/* Input fields */}
                        <div className="flex flex-row items-center gap-4 mt-6">
                            <div className="flex-1 flex items-center px-4 py-3 rounded-lg border border-[#CDCDCD]">
                                <input
                                    type="number"
                                    value={sgpa}
                                    onChange={(e) => setSgpa(e.target.value)}
                                    placeholder="Enter your SGPA"
                                    min="0"
                                    max="10"
                                    step="0.01"
                                    className="w-full bg-transparent outline-none text-[#181D27] placeholder-[#9B9B9B]"
                                />
                            </div>

                            <button
                                onClick={handleConvert}
                                className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                            >
                                <img
                                    src="https://api.builder.io/api/v1/image/assets/TEMP/dafd774375346e545021fc0f5669a74fdc9b8e3f?placeholderIfAbsent=true"
                                    alt="Convert"
                                    className="w-full h-full"
                                />
                            </button>

                            <div className="flex-1 flex items-center px-4 py-3 rounded-lg border border-[#CDCDCD]">
                                <input
                                    type="text"
                                    value={percentage}
                                    readOnly
                                    placeholder="In Percentage"
                                    className="w-full bg-transparent outline-none text-[#181D27] placeholder-[#9B9B9B]"
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 mt-6">
                            <button
                                onClick={handleConvert}
                                className="flex bg-[#357E86] text-white px-4 py-4 rounded-lg font-medium hover:bg-[#2d6b72] transition-colors"
                            >
                                Convert Now
                            </button>
                            {(sgpa || percentage) && (
                                <button
                                    onClick={handleReset}
                                    className="flex-1 border border-[#357E86] text-[#357E86] px-4 py-4 rounded-lg font-medium hover:bg-[#357E86] hover:text-white transition-colors"
                                >
                                    Reset
                                </button>
                            )}
                        </div>
                    </div>
                </section>
            </GridContainer>
        </div>

    );
};
