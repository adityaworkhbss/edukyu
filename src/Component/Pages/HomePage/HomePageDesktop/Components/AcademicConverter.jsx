import React, { useState } from 'react';
import GridComponent from "@/GlobalComponent/GridComponent";
import academic_converter from "@/../public/Resources/Images/academic_convertor.png";

export const AcademicConverter = () => {
    const [activeTab, setActiveTab] = useState('sgpa-to-percentage');
    const [sgpa, setSgpa] = useState('');
    const [cgpa, setCgpa] = useState('');
    const [convertedValue, setConvertedValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const tabs = [
        { id: 'sgpa-to-percentage', label: 'SGPA to Percentage' },
        { id: 'cgpa-to-percentage', label: 'CGPA to Percentage' },
        { id: 'sgpa-to-cgpa', label: 'SGPA to CGPA' }
    ];

    const handleConvert = () => {
        if (activeTab === 'sgpa-to-percentage') {
            const sgpaValue = parseFloat(sgpa);
            if (!isNaN(sgpaValue) && sgpaValue >= 0 && sgpaValue <= 10) {
                const percentageValue = ((sgpaValue - 0.75) * 10).toFixed(2);
                setConvertedValue(percentageValue + '%');
                setErrorMessage('');
            }
        } else if (activeTab === 'cgpa-to-percentage') {
            const cgpaValue = parseFloat(cgpa);
            if (!isNaN(cgpaValue) && cgpaValue >= 0 && cgpaValue <= 10) {
                const percentageValue = ((cgpaValue - 0.75) * 10).toFixed(2);
                setConvertedValue(percentageValue + '%');
                setErrorMessage('');
            }
        } else if (activeTab === 'sgpa-to-cgpa') {
            const sgpaValue = parseFloat(sgpa);
            if (!isNaN(sgpaValue) && sgpaValue >= 0 && sgpaValue <= 10) {
                setConvertedValue(sgpaValue.toFixed(2));
                setErrorMessage('');
            }
        }
    };

    const handleReset = () => {
        setSgpa('');
        setCgpa('');
        setConvertedValue('');
        setErrorMessage('');
    };

    const handleInputChange = (value) => {
        if (activeTab === 'cgpa-to-percentage') setCgpa(value);
        else setSgpa(value);
        
        // Validate input and set error message
        if (value === '') {
            setErrorMessage('');
        } else {
            const numValue = parseFloat(value);
            if (isNaN(numValue) || numValue < 0 || numValue > 10) {
                setErrorMessage('Please enter a valid value between 0 and 10');
            } else {
                setErrorMessage('');
            }
        }
        
        // Clear converted value when input changes
        setConvertedValue('');
    };

    const getInputLabel = () => {
        switch (activeTab) {
            case 'sgpa-to-percentage':
            case 'sgpa-to-cgpa':
                return 'Please enter your SGPA';
            case 'cgpa-to-percentage':
                return 'Please enter your CGPA';
            default:
                return '';
        }
    };

    const getOutputLabel = () => {
        switch (activeTab) {
            case 'sgpa-to-percentage':
            case 'cgpa-to-percentage':
                return 'Your percentage is';
            case 'sgpa-to-cgpa':
                return 'Your CGPA is';
            default:
                return '';
        }
    };

    const getCurrentInputValue = () => {
        switch (activeTab) {
            case 'cgpa-to-percentage':
                return cgpa;
            case 'sgpa-to-percentage':
            case 'sgpa-to-cgpa':
                return sgpa;
            default:
                return '';
        }
    };

    const isInputValid = () => {
        const currentValue = getCurrentInputValue();
        if (currentValue === '') return false;
        const numValue = parseFloat(currentValue);
        return !isNaN(numValue) && numValue >= 0 && numValue <= 10;
    };

    return (
        <div className="px-[56px] py-[64px] mt-12">
            <div className="flex flex-col flex-1">
                <GridComponent gridStart={0} gridEnd={6}>
                    <div className="text-[48px] font-semibold text-[#024B53] font-[Outfit] leading-normal">
                        Academic Converter Tool
                    </div>
                </GridComponent>

                <GridComponent gridStart={0} gridEnd={6}>
                    <div className="text-[20px] font-normal text-[#515150] font-[Outfit] leading-normal">
                        Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                    </div>
                </GridComponent>

                <div className="flex bg-white border-b border-[#B2B2B2] mt-[40px] mb-[40px]">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveTab(tab.id);
                                setConvertedValue('');
                                setErrorMessage('');
                            }}
                            className={`px-6 py-4 gap-[10px] text-sm font-medium transition-colors w-1/7 ${
                                activeTab === tab.id
                                    ? 'bg-white text-slate-800 border-b-2 border-teal-600'
                                    : 'text-slate-600'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <section className="flex flex-row items-start justify-between gap-[24px] py-8">
                <GridComponent gridStart={0} gridEnd={4}>
                    <div className="flex flex-col">
                        <div className="space-y-6 w-full">
                            <div>
                                <label className="block text-lg font-medium text-[24px] text-[#024B53] mb-3">
                                    {getInputLabel()}
                                </label>
                                <input
                                    type="number"
                                    value={getCurrentInputValue()}
                                    onChange={(e) => handleInputChange(e.target.value)}
                                    placeholder={activeTab === 'cgpa-to-percentage' ? 'Enter CGPA' : 'Enter SGPA'}
                                    min="0"
                                    max="10"
                                    step="0.01"
                                    className={`w-full px-4 py-3 text-lg border-2 rounded-lg focus:outline-none transition-colors ${
                                        errorMessage ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-teal-600'
                                    }`}
                                />
                                {errorMessage && (
                                    <p className="text-red-500 text-sm mt-2">
                                        {errorMessage}
                                    </p>
                                )}
                            </div>

                            <button
                                onClick={handleConvert}
                                disabled={!isInputValid()}
                                className={`w-full mt-[58px] font-semibold py-4 px-6 rounded-lg transition-colors shadow-md ${
                                    isInputValid() 
                                        ? 'bg-teal-700 hover:bg-teal-800 text-white cursor-pointer' 
                                        : 'bg-[#9B9B9B] text-[#FFF] cursor-not-allowed'
                                }`}
                            >
                                Convert Now
                            </button>

                            {/* {(getCurrentInputValue() || convertedValue) && (
                                <button
                                    onClick={handleReset}
                                    className="w-full border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                                >
                                    Reset ↻
                                </button>
                            )} */}
                        </div>
                    </div>
                </GridComponent>

                <div className="relative">
                    <div className="text-[24px] font-medium text-[#024B53] font-[Outfit] leading-normal">
                        {getOutputLabel()}
                    </div>

                    <div className="text-[56px] font-semibold text-[#024B53] font-[Outfit] leading-normal">
                        {convertedValue || '--.--%'}
                    </div>

                    {(convertedValue || getCurrentInputValue()) && (
                        <button
                            onClick={handleReset}
                            className="absolute inline-flex gap-1 items-center -bottom-[52px] -right-[50px]"
                        >
                            <div className="text-[16px] font-medium text-[#6A6A69] font-[Outfit] leading-normal">
                                Reset
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clipPath="url(#clip0_252_416)">
                                    <path d="M11.7667 4.23317C10.8 3.2665 9.47334 2.6665 8.00001 2.6665C5.05334 2.6665 2.67334 5.05317 2.67334 7.99984C2.67334 10.9465 5.05334 13.3332 8.00001 13.3332C10.4867 13.3332 12.56 11.6332 13.1533 9.33317H11.7667C11.22 10.8865 9.74001 11.9998 8.00001 11.9998C5.79334 11.9998 4.00001 10.2065 4.00001 7.99984C4.00001 5.79317 5.79334 3.99984 8.00001 3.99984C9.10667 3.99984 10.0933 4.45984 10.8133 5.1865L8.66667 7.33317H13.3333V2.6665L11.7667 4.23317Z" fill="#6A6A69" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_252_416">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    )}
                </div>

                <GridComponent lastUsedGridEnd={8} gridStart={0} gridEnd={4}>
                    <div className="w-full">
                        <img
                            src={academic_converter.src}
                            alt="SGPA to Percentage Calculator"
                            className="rounded-[13px] w-full object-cover"
                        />
                    </div>
                </GridComponent>
            </section>
        </div>
    );
};