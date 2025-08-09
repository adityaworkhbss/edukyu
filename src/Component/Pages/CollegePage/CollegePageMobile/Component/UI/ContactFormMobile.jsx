import React, { useState } from 'react';
import { FormInputMobile } from './FormInputMobile';
import { ConsentCheckboxMobile } from './ConsentCheckboxMobile';

export const ContactFormMobile = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        mobileNumber: '',
        consent: false
    });

    const handleInputChange = (field) => (value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.consent) {
            alert('Please accept the consent to proceed.');
            return;
        }

        if (!formData.name || !formData.email || !formData.city || !formData.mobileNumber) {
            alert('Please fill in all required fields.');
            return;
        }

        console.log('Form submitted:', formData);
        alert('Thank you for your submission!');

        // Reset form
        setFormData({
            name: '',
            email: '',
            city: '',
            mobileNumber: '',
            consent: false
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col items-stretch max-md:max-w-full"
        >
            <header className="mb-8">
                <h2 className="text-[#024B53] font-[Outfit] text-[28px] font-semibold mb-2">
                    Contact Us
                </h2>
                <p className="text-[#515150] font-[Outfit] text-[14px] font-normal">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </p>
            </header>

            <fieldset className="border-0 p-0 m-0">
                <legend className="sr-only">Contact Information</legend>

                <div className="space-y-4">
                    <FormInputMobile
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={handleInputChange('name')}
                    />
                    <FormInputMobile
                        placeholder="Enter Your Mail Id"
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        type="email"
                    />
                    <FormInputMobile
                        placeholder="Enter Your City"
                        value={formData.city}
                        onChange={handleInputChange('city')}
                    />
                    <FormInputMobile
                        placeholder="Enter Your Mobile Number"
                        value={formData.mobileNumber}
                        onChange={handleInputChange('mobileNumber')}
                        type="tel"
                    />
                </div>
            </fieldset>

            <ConsentCheckboxMobile
                checked={formData.consent}
                onChange={handleInputChange('consent')}
            />

            <button
                type="submit"
                className="justify-center items-center bg-[#025E68] rounded-[12px] mt-6 px-4 py-3 hover:bg-[#024B53] transition-colors"
            >
                <span className="text-white font-[Outfit] text-[20px] font-semibold">
                    SUBMIT
                </span>
            </button>
        </form>
    );
};