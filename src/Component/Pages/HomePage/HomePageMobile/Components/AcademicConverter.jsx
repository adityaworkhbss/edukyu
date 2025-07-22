import React, { useState } from 'react';

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
        <section className="mt-8">
            <h2 className="w-full max-w-[321px] text-[20px] text-[#181D27] font-semibold">
                Academic Converter Tool
            </h2>
            <p className="text-[#535862] text-base font-normal mt-2">
                Lorem Ipsum is placeholder text used in the graphic, print.
            </p>

            <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8aad82ab9aa1800501e4c0151aa8c2b9b356497b?placeholderIfAbsent=true"
                alt="Academic converter illustration"
                className="aspect-[1.5] object-contain w-full mt-6 rounded-[13px]"
            />

            <div className="items-center bg-[#E1E1E1] flex w-full  gap-4 text-base text-[#9B9B9B] font-medium mt-8 p-4 rounded-lg border-[1.785px] border-solid border-[#CDCDCD]">
                <div className="text-[#9B9B9B] self-stretch flex-1 shrink basis-[0%] my-auto">
                    Calculate your SGPA to Percentage
                </div>
                <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/1b7e04ab15c4ca86cbc876e757d2e473389a569a?placeholderIfAbsent=true"
                    alt="Calculator icon"
                    className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                />
            </div>

            <div className="flex w-full items-center gap-3 text-sm text-[#9B9B9B] font-light mt-6">
                <div className="items-center self-stretch flex gap-[18px] my-auto p-4 rounded-lg border-[1.785px] border-solid border-[#CDCDCD] flex-1">
                    <input
                        type="number"
                        value={sgpa}
                        onChange={(e) => setSgpa(e.target.value)}
                        placeholder="Enter your SGPA"
                        min="0"
                        max="10"
                        step="0.01"
                        className="text-[#9B9B9B] self-stretch my-auto bg-transparent outline-none w-full placeholder-[#9B9B9B]"
                    />
                </div>

                <button
                    onClick={handleConvert}
                    className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto hover:opacity-80 transition-opacity"
                >
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/dafd774375346e545021fc0f5669a74fdc9b8e3f?placeholderIfAbsent=true"
                        alt="Convert"
                        className="w-full h-full"
                    />
                </button>

                <div className="items-center self-stretch flex gap-[18px] my-auto p-4 rounded-lg border-[1.785px] border-solid border-[#CDCDCD] flex-1">
                    <input
                        type="text"
                        value={percentage}
                        readOnly
                        placeholder="In Percentage"
                        className="text-[#9B9B9B] self-stretch my-auto bg-transparent outline-none w-full placeholder-[#9B9B9B]"
                    />
                </div>
            </div>

            <div className="flex gap-4 mt-6">
                <button
                    onClick={handleConvert}
                    className="justify-center items-center flex w-full flex-col text-base text-white font-medium bg-[#357E86] px-[70px] py-4 rounded-lg hover:bg-[#2d6b72] transition-colors"
                >
                    Convert Now
                </button>
                {(sgpa || percentage) && (
                    <button
                        onClick={handleReset}
                        className="justify-center items-center flex text-base text-[#357E86] font-medium border border-[#357E86] px-6 py-4 rounded-lg hover:bg-[#357E86] hover:text-white transition-colors"
                    >
                        Reset
                    </button>
                )}
            </div>
        </section>
    );
};
