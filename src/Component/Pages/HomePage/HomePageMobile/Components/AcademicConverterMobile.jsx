import React, { useState } from 'react';
import Image from "next/image";
import academic_converter from "@/../public/Resources/Images/academic_convertor.png";

const AcademicConverterMobile = () => {
    const [activeTab, setActiveTab] = useState('sgpa-to-percentage');
    const [sgpa, setSgpa] = useState('');
    const [cgpa, setCgpa] = useState('');
    const [convertedValue, setConvertedValue] = useState('');

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
            } else {
                alert('Please enter a valid SGPA between 0 and 10');
            }
        } else if (activeTab === 'cgpa-to-percentage') {
            const cgpaValue = parseFloat(cgpa);
            if (!isNaN(cgpaValue) && cgpaValue >= 0 && cgpaValue <= 10) {
                const percentageValue = ((cgpaValue - 0.75) * 10).toFixed(2);
                setConvertedValue(percentageValue + '%');
            } else {
                alert('Please enter a valid CGPA between 0 and 10');
            }
        } else if (activeTab === 'sgpa-to-cgpa') {
            const sgpaValue = parseFloat(sgpa);
            if (!isNaN(sgpaValue) && sgpaValue >= 0 && sgpaValue <= 10) {
                setConvertedValue(sgpaValue.toFixed(2));
            } else {
                alert('Please enter a valid SGPA between 0 and 10');
            }
        }
    };

    const handleReset = () => {
        setSgpa('');
        setCgpa('');
        setConvertedValue('');
    };

    const handleInputChange = (value) => {
        if (activeTab === 'cgpa-to-percentage') setCgpa(value);
        else setSgpa(value);
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

    return (
        <div className=" py-12 mt-8 flex flex-col">
            {/* Heading */}
            <div className="text-[28px] font-semibold text-[#024B53] font-[Outfit] leading-none mb-3">
                Academic Converter Tools
            </div>

            {/* Subheading / Description */}
            <div className="text-[14px] font-normal text-[#515150] font-[Outfit] leading-none mb-[32px]">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </div>


            {/* Tabs */}
            <div className="flex border-b border-[#E0E0E0] overflow-x-auto no-scrollbar mb-[42px]">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => {
                            setActiveTab(tab.id);
                            setConvertedValue('');
                        }}
                        className={`flex-1 text-sm font-medium py-2 px-3 whitespace-nowrap border-b-2 transition-colors ${
                            activeTab === tab.id ? 'border-b-[2px] border-b-[rgba(53,126,134,1)] text-[rgba(53,126,134,1)]' : 'text-[#383837]'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Input */}
            <label className="text-[22px] font-medium text-[#024B53] font-[Outfit] leading-none mb-6">
                {getInputLabel()}
            </label>
            <input
                type="number"
                value={getCurrentInputValue()}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={activeTab === 'cgpa-to-percentage' ? 'Enter CGPA' : 'Enter SGPA'}
                className="w-full px-4 py-3 mt-2 text-lg rounded-[12px] border-[1.785px] border-[#025E68] focus:outline-none focus:ring-2 focus:ring-[#024B53]"
            />



            <button
                onClick={handleConvert}
                className="mt-6 w-full py-3 px-4 bg-[#024B53] text-white font-medium rounded-[12px] font-[Outfit]"
            >
                Convert Now
            </button>

            {convertedValue && (
                <div className="mt-8">
                    <p className="text-[#024B53] font-[Outfit] text-[24px] font-medium leading-normal mb-5">{getOutputLabel()}</p>
                    <div className="inline-flex justify-between items-center w-full">
                        <p className="text-[#024B53] font-[Outfit] text-[52px] font-semibold leading-normal">
                            {convertedValue}
                        </p>
                        {(convertedValue || getCurrentInputValue()) && (
                            <button
                                onClick={handleReset}
                                className="text-sm text-[#6A6A69] font-[Outfit] pt-5"
                            >
                                Reset ↻
                            </button>
                        )}
                    </div>


                </div>
            )}


            <div className="pt-[52px] w-full rounded-lg overflow-hidden">
                <Image
                    src={academic_converter}
                    alt="Academic Converter Graphic"
                    className="w-full object-cover"
                />
            </div>
        </div>
    );
};

export default AcademicConverterMobile;