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
            className="flex w-full flex-col items-stretch max-md:max-w-full"
        >
            <header className="">
                <h2 className="text-[#024B53] font-[Outfit] text-[28px] font-semibold mb-3">
                    Contact Us
                </h2>
                <p className="text-[#515150] font-[Outfit] text-[14px] mb-8">
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

                    <FormInputMobile
                        placeholder="Enter Your City"
                        value={formData.mobileNumber}
                        onChange={handleInputChange('city')}
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