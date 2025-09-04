import React, { useState } from 'react';
import { FormInput } from './ui/FormInput';
import { ConsentCheckbox } from './ui/ConsentCheckbox';
import GridComponent from "@/GlobalComponent/GridComponent";
import {ContactForm} from "@/Component/Pages/CoursePage/CoursePageDesktop/Components/UI/ContactForm";

const reasons = [
    'General Inquiry',
    'Course Information',
    'Technical Support',
    'Partnership',
    'Other'
];

export const CommentSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        city: '',
        mobileNumber: '',
        reason: '',
        consent: false
    });

    const [isReasonDropdownOpen, setIsReasonDropdownOpen] = useState(false);

    const handleInputChange = (field) => (value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.consent) {
            alert("Please accept the consent to proceed.");
            return;
        }

        if (!formData.fullName || !formData.email || !formData.city || !formData.mobileNumber || !formData.reason) {
            alert("Please fill in all required fields.");
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert("Thank you for your submission! We will contact you soon.");
                setFormData({
                    fullName: "",
                    email: "",
                    city: "",
                    mobileNumber: "",
                    reason: "",
                    consent: false,
                });
            } else {
                alert("Failed to send message. Please try again later.");
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong.");
        }
    };

    return (


        <form
            onSubmit={handleSubmit}
            className="group flex w-full flex-col items-stretch text-lg text-[#6A6A69] font-normal max-md:max-w-full max-md:mt-10"
        >
            <header>
                {/*<GridComponent gridStart={0} gridEnd={6}>*/}
                    <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4">
                        Contact Us
                    </div>
                {/*</GridComponent>*/}

                {/*<GridComponent>*/}
                    <div className="text-[20px] pb-[0] font-normal text-[#535862] font-[Outfit] leading-[30px]">
                        Unlimited access to world class courses, hands-on projects, and
                        job-ready certificate programs.
                    </div>
                {/*</GridComponent>*/}
            </header>

            <fieldset className="border-0 p-0 m-0">
                <legend className="sr-only">Contact Information</legend>

                <div className="flex w-full items-stretch gap-6 flex-wrap mt-8 max-md:max-w-full max-md:mt-10">
                    <FormInput
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleInputChange('fullName')}
                    />
                    <FormInput
                        placeholder="Enter your email id"
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        type="email"
                    />
                </div>

                <div className="flex w-full items-stretch gap-6 flex-wrap mt-6 max-md:max-w-full">
                    <FormInput
                        placeholder="Enter your city"
                        value={formData.city}
                        onChange={handleInputChange('city')}
                    />
                    <FormInput
                        placeholder="Enter your mobile number"
                        value={formData.mobileNumber}
                        onChange={handleInputChange('mobileNumber')}
                        type="tel"
                    />
                </div>

                <div className="relative mt-6">
                    <button
                        type="button"
                        onClick={() => setIsReasonDropdownOpen(!isReasonDropdownOpen)}
                        className="justify-center items-stretch border flex gap-[40px_100px] flex-wrap w-full px-4 py-3.5 rounded-xl border-solid border-[#6A6A69] max-md:max-w-full text-left"
                        aria-expanded={isReasonDropdownOpen}
                        aria-haspopup="listbox"
                    >
            <span className="text-[#6A6A69] flex-1">
              {formData.reason || 'Select your reason'}
            </span>
                        <img
                            src="https://api.builder.io/api/v1/image/assets/fecc5b616d6b4d1daa2c8ed2d9ae0ab4/0b695d8b1e437e4a397a2e7fef70dacba5d2adbc?placeholderIfAbsent=true"
                            className={`aspect-[1] object-contain w-6 shrink-0 transition-transform ${
                                isReasonDropdownOpen ? 'rotate-180' : ''
                            }`}
                            alt="Dropdown arrow"
                        />
                    </button>

                    {isReasonDropdownOpen && (
                        <div
                            className="absolute top-full left-0 right-0 bg-white border border-[#6A6A69] rounded-xl mt-1 shadow-lg z-10"
                            role="listbox"
                        >
                            {reasons.map((reason, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => {
                                        handleInputChange('reason')(reason);
                                        setIsReasonDropdownOpen(false);
                                    }}
                                    className="w-full text-left px-4 py-3 hover:bg-gray-50 text-[#6A6A69] first:rounded-t-xl last:rounded-b-xl"
                                    role="option"
                                    aria-selected={formData.reason === reason}
                                >
                                    {reason}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </fieldset>

            <ConsentCheckbox
                checked={formData.consent}
                onChange={handleInputChange('consent')}
            />

            <button
                type="submit"
                className="justify-center items-center flex gap-2.5 text-sm text-white font-medium whitespace-nowrap bg-[#9B9B9B] mt-6 px-4 py-3 rounded-xl group-hover:bg-[#035a63] transition-colors"
            >
                Submit
            </button>
        </form>
    );
};





