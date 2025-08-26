'use client';
import { useState } from "react";
import Image from 'next/image';


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
        if (!formData.name || !formData.email || !formData.mobile || !formData.city || !formData.university_name) {
            setError('Please fill all required fields');
            setIsSubmitting(false);
            return;
        }

        // Prepare payload
        const payload = {
            user_id: 'EDUKYU_CRM_230500001',
            password: '12345',
            name: formData.name,
            mobile: formData.mobile,
            email: formData.email,
            city: formData.city,
            university_name: formData.university_name,
            university_code: '', // You might want to map this from university_name
            prog_id: 'SD00000002',
            prog_name: 'Partner',
            source_name: 'WS',
            source_id: '101',
            data_from: typeof window !== 'undefined' ? window.location.href : ''
        };

        try {
            // First API call
            const response1 = await fetch('https://edukyu.enqbooks.com/enqbooks_api/api/Crm_leads_insert', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result1 = await response1.json();
            if (!response1.ok) {
                throw new Error(result1.message || 'Failed to submit to first API');
            }

            // Second API call
            const response2 = await fetch('https://pujariwala.in/bai_crm_api_integrate/bai_crm_website_lead_post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'ENQ-BOOKS-KEY': 'a990c4a560e5e76e07347f5b87fefe97'
                },
                body: JSON.stringify(payload)
            });

            const result2 = await response2.json();
            if (!response2.ok) {
                throw new Error(result2.message || 'Failed to submit to second API');
            }

            setSuccess(true);
            // Reset form on success
            setFormData({
                name: '',
                email: '',
                city: '',
                mobile: '',
                university_name: '',
            });

            // Close form after 2 seconds
            setTimeout(() => {
                onClose();
            }, 2000);
        } catch (err) {
            console.error('Error submitting form:', err);
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.6)]">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 relative overflow-hidden">
                {/* Optional Image at the Top */}
                {image && (
                    <div className="w-[100px] h-[100px] flex items-center justify-center mx-auto mt-4">
                        <img
                            src={image}
                            alt="Form banner"
                            className="object-cover"
                        />
                    </div>
                )}

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 z-10"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 30 30"
                    >
                        <path d="M7 4c-.256 0-.512.097-.707.293L4.293 6.293a1 1 0 000 1.414L11.586 15l-7.293 7.293a1 1 0 000 1.414l2 2a1 1 0 001.414 0L15 18.414l7.293 7.293a1 1 0 001.414 0l2-2a1 1 0 000-1.414L18.414 15l7.293-7.293a1 1 0 000-1.414l-2-2a1 1 0 00-1.414 0L15 11.586 7.707 4.293A1 1 0 007 4z"></path>
                    </svg>
                </button>

                {/* Form Content */}
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

                        <select
                            name="university_name"
                            value={formData.university_name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2"
                            required
                        >
                            <option value="" disabled>
                                Choose Your University*
                            </option>
                            <option value="D.Y.Patil University">D.Y.Patil University</option>
                            <option value="Amity University">Amity University</option>
                            <option value="Manipal University">Manipal University</option>
                            <option value="Lovely Professional University">Lovely Professional University</option>
                            <option value="Jain University">Jain University</option>
                            <option value="Shoolini University">Shoolini University</option>
                            <option value="Uttaranchal University">Uttaranchal University</option>
                            <option value="Vivekananda Global University">Vivekananda Global University</option>
                            <option value="NMIMS University">NMIMS University</option>
                            <option value="Sikkim Manipal University">Sikkim Manipal University</option>
                        </select>

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
                            <input
                                type="checkbox"
                                className="mt-1"
                                required
                            />
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