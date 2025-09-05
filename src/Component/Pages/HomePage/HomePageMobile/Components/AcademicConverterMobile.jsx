import React, { useState } from "react";
import Image from "next/image";
import academic_converter from "@/../public/Resources/Images/academic_convertor.png";

const AcademicConverterMobile = () => {
    const [activeTab, setActiveTab] = useState("sgpa-to-percentage");
    const [sgpa, setSgpa] = useState("");
    const [cgpa, setCgpa] = useState("");
    const [convertedValue, setConvertedValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const tabs = [
        { id: "sgpa-to-percentage", label: "SGPA to Percentage" },
        { id: "cgpa-to-percentage", label: "CGPA to Percentage" },
        { id: "sgpa-to-cgpa", label: "SGPA to CGPA" },
    ];

    const handleConvert = () => {
        if (activeTab === "sgpa-to-percentage") {
            const sgpaValue = parseFloat(sgpa);
            if (!isNaN(sgpaValue) && sgpaValue >= 0 && sgpaValue <= 10) {
                const percentageValue = ((sgpaValue - 0.75) * 10).toFixed(2);
                setConvertedValue(percentageValue + "%");
                setErrorMessage("");
            }
        } else if (activeTab === "cgpa-to-percentage") {
            const cgpaValue = parseFloat(cgpa);
            if (!isNaN(cgpaValue) && cgpaValue >= 0 && cgpaValue <= 10) {
                const percentageValue = ((cgpaValue - 0.75) * 10).toFixed(2);
                setConvertedValue(percentageValue + "%");
                setErrorMessage("");
            }
        } else if (activeTab === "sgpa-to-cgpa") {
            const sgpaValue = parseFloat(sgpa);
            if (!isNaN(sgpaValue) && sgpaValue >= 0 && sgpaValue <= 10) {
                setConvertedValue(sgpaValue.toFixed(2));
                setErrorMessage("");
            }
        }
    };

    const handleReset = () => {
        setSgpa("");
        setCgpa("");
        setConvertedValue("");
        setErrorMessage("");
    };

    const handleInputChange = (value) => {
        if (activeTab === "cgpa-to-percentage") setCgpa(value);
        else setSgpa(value);

        if (value === "") {
            setErrorMessage("");
        } else {
            const numValue = parseFloat(value);
            if (isNaN(numValue) || numValue < 0 || numValue > 10) {
                setErrorMessage("Please enter a valid value between 0 and 10");
            } else {
                setErrorMessage("");
            }
        }

        setConvertedValue("");
    };

    const getInputLabel = () => {
        switch (activeTab) {
            case "sgpa-to-percentage":
            case "sgpa-to-cgpa":
                return "Please enter your SGPA";
            case "cgpa-to-percentage":
                return "Please enter your CGPA";
            default:
                return "";
        }
    };

    const getOutputLabel = () => {
        switch (activeTab) {
            case "sgpa-to-percentage":
            case "cgpa-to-percentage":
                return "Your percentage is";
            case "sgpa-to-cgpa":
                return "Your CGPA is";
            default:
                return "";
        }
    };

    const getCurrentInputValue = () => {
        switch (activeTab) {
            case "cgpa-to-percentage":
                return cgpa;
            case "sgpa-to-percentage":
            case "sgpa-to-cgpa":
                return sgpa;
            default:
                return "";
        }
    };

    const isInputValid = () => {
        const currentValue = getCurrentInputValue();
        if (currentValue === "") return false;
        const numValue = parseFloat(currentValue);
        return !isNaN(numValue) && numValue >= 0 && numValue <= 10;
    };

    return (
        <div className="py-8 mt-8 flex flex-col">
            {/* Heading */}
            <div className="text-[28px] font-semibold text-[#024B53] font-[Outfit] leading-none mb-3">
                Academic Converter Tools
            </div>

            {/* Subheading */}
            <div className="text-[14px] font-normal text-[#515150] font-[Outfit] leading-none mb-[32px]">
                Unlimited access to world class courses, hands-on projects, and
                job-ready certificate programs.
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[#E0E0E0] overflow-x-auto no-scrollbar mb-[48px]">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => {
                            setActiveTab(tab.id);
                            setConvertedValue("");
                            setErrorMessage("");
                        }}
                        className={`flex-1 text-sm font-medium py-2 px-3 whitespace-nowrap border-b-2 transition-colors ${
                            activeTab === tab.id
                                ? "border-b-[2px] border-b-[rgba(53,126,134,1)] text-[rgba(53,126,134,1)]"
                                : "text-[#383837]"
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
                placeholder={
                    activeTab === "cgpa-to-percentage" ? "Enter CGPA" : "Enter SGPA"
                }
                min="0"
                max="10"
                step="0.01"
                className={`w-full px-4 py-3 mt-2 text-lg rounded-[12px] border-[1.785px] focus:outline-none ${
                    errorMessage
                        ? "border-red-500 focus:ring-2 focus:ring-red-500"
                        : "border-[#025E68] focus:ring-2 focus:ring-[#024B53]"
                }`}
            />
            {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}

            {/* Convert Button */}
            <button
                onClick={handleConvert}
                disabled={!isInputValid()}
                className={`mt-6 w-full py-3 px-4 font-medium rounded-[12px] font-[Outfit] shadow-md ${
                    isInputValid()
                        ? "bg-[#024B53] text-white cursor-pointer"
                        : "bg-[#9B9B9B] text-[#FFF] cursor-not-allowed"
                }`}
            >
                Convert Now
            </button>

            {/* Output */}
            <div className="mt-6">
                <p className="text-[#024B53] font-[Outfit] text-[24px] font-medium leading-normal mb-5">
                    {getOutputLabel()}
                </p>
                <div className="inline-flex justify-between items-center w-full">
                    <p className="text-[#024B53] font-[Outfit] text-[52px] font-semibold leading-normal">
                        {convertedValue || "--.--%"}
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

            {/* Image */}
            <div className="pt-[52px] w-full rounded-[22px] overflow-hidden">
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
