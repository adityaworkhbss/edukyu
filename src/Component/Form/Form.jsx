'use client';
import { useState } from "react";

export default function Form({ image, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        mobile: '',
        university_name: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setSuccess(false);

        // Basic validation
        if (!formData.name || !formData.email || !formData.mobile || !formData.city) {
            setError('Please fill all required fields');
            setIsSubmitting(false);
            return;
        }

        // Payload for Pujariwala API
        const payload = {
            name: formData.name,
            mobile: formData.mobile,
            email: formData.email,
            city: formData.city,
            data_from: "Website",
            source_id: "11",
            source_name: "NAA"
        };

        try {
            console.log("📤 Submitting payload to Pujariwala API:", payload);

            const response = await fetch('https://pujariwala.in/bai_crm_api_integrate/bai_crm_website_lead_post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'ENQ-BOOKS-KEY': 'a990c4a560e5e76e07347f5b87fefe97'
                },
                body: JSON.stringify(payload)
            });

            console.log("📥 Raw response object:", response);

            const result = await response.json().catch(() => null);
            console.log("📥 Parsed response JSON:", result);

            if (!response.ok) {
                throw new Error(result?.message || `Failed with status ${response.status}`);
            }

            setSuccess(true);
            setFormData({
                name: '',
                email: '',
                city: '',
                mobile: '',
                university_name: '',
            });

            setTimeout(() => {
                onClose();
            }, 2000);
        } catch (err) {
            console.error("❌ Error submitting form:", err);
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
            console.log("✅ Submission process finished");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.6)]">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 relative overflow-hidden">
                {image && (
                    <div className="w-[100px] h-[100px] flex items-center justify-center mx-auto mt-4">
                        <img src={image} alt="Form banner" className="object-cover" />
                    </div>
                )}

                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 z-10"
                >
                    ✕
                </button>

                <div className="p-6">
                    <h2 className="text-center text-lg font-semibold">
                        Share your details and <br /> our counselor will connect you.
                    </h2>

                    {error && (
                        <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
                            Form submitted successfully! Our counselor will contact you shortly.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter Your Name*"
                            className="w-full border border-gray-300 rounded p-2"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Your E-mail id*"
                            className="w-full border border-gray-300 rounded p-2"
                            required
                        />
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Enter Your City*"
                            className="w-full border border-gray-300 rounded p-2"
                            required
                        />

                        <div className="flex border border-gray-300 rounded overflow-hidden">
                            <span className="flex items-center px-2 bg-gray-100">+91</span>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Enter Your Mobile Number*"
                                className="flex-1 p-2 outline-none"
                                required
                            />
                        </div>

                        <label className="flex items-start space-x-2 text-sm">
                            <input type="checkbox" className="mt-1" required />
                            <span>
                                I authorise Edukyu and its associates to contact me with
                                updates & notifications via Email, SMS, WhatsApp, and Voice
                                call as per the Privacy Policy. This consent will override any
                                registration for DNC / NDNC.
                            </span>
                        </label>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? 'Submitting...' : 'Enroll Now'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
