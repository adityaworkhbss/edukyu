import React, { useState } from 'react';
import {
    Calendar,
    MessageCircle,
    Share2,
    User,
    Tag,
    Facebook,
    Twitter,
    Linkedin,
    Send,
    Mail,
    Phone,
    UserCircle,
    CheckCircle,
    AlertCircle
} from "lucide-react";

const CommentSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        comment: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.comment.trim()) {
            newErrors.comment = 'Comment is required';
        } else if (formData.comment.trim().length < 10) {
            newErrors.comment = 'Comment must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ fullName: '', email: '', phone: '', comment: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <div className="bg-white shadow-lg border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
                <div className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-white" />
                    <h3 className="text-2xl font-bold text-white">Write Your Comment</h3>
                </div>
                <p className="text-teal-100 mt-2">Share your thoughts and join the conversation</p>
            </div>

            {isSubmitted && (
                <div className="mx-8 mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <div>
                        <p className="text-emerald-800 font-medium">Comment submitted successfully!</p>
                        <p className="text-emerald-600 text-sm">Thank you for your feedback. We'll review it shortly.</p>
                    </div>
                </div>
            )}

            <div className="p-8 space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                            <UserCircle className="w-4 h-4" />
                            Full Name *
                        </label>
                        <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            placeholder="Enter your full name"
                            className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 ${
                                errors.fullName
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-slate-300 focus:ring-teal-500 focus:border-teal-500'
                            }`}
                        />
                        {errors.fullName && (
                            <div className="flex items-center gap-1 text-red-600 text-sm">
                                <AlertCircle className="w-3 h-3" />
                                {errors.fullName}
                            </div>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                            <Mail className="w-4 h-4" />
                            Email Address *
                        </label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="Enter your email address"
                            className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 ${
                                errors.email
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-slate-300 focus:ring-teal-500 focus:border-teal-500'
                            }`}
                        />
                        {errors.email && (
                            <div className="flex items-center gap-1 text-red-600 text-sm">
                                <AlertCircle className="w-3 h-3" />
                                {errors.email}
                            </div>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                            <Phone className="w-4 h-4" />
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="Enter your phone number"
                            className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 ${
                                errors.phone
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-slate-300 focus:ring-teal-500 focus:border-teal-500'
                            }`}
                        />
                        {errors.phone && (
                            <div className="flex items-center gap-1 text-red-600 text-sm">
                                <AlertCircle className="w-3 h-3" />
                                {errors.phone}
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <MessageCircle className="w-4 h-4" />
                        Your Comment *
                    </label>
                    <textarea
                        value={formData.comment}
                        onChange={(e) => handleInputChange('comment', e.target.value)}
                        placeholder="Share your thoughts, questions, or feedback..."
                        rows={5}
                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 resize-none ${
                            errors.comment
                                ? 'border-red-300 focus:ring-red-500'
                                : 'border-slate-300 focus:ring-teal-500 focus:border-teal-500'
                        }`}
                    />
                    <div className="flex justify-between items-center">
                        {errors.comment ? (
                            <div className="flex items-center gap-1 text-red-600 text-sm">
                                <AlertCircle className="w-3 h-3" />
                                {errors.comment}
                            </div>
                        ) : (
                            <span className="text-slate-500 text-sm">
                                {formData.comment.length}/500 characters
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Submitting...
                            </>
                        ) : (
                            <>
                                <Send className="w-4 h-4" />
                                Submit Comment
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommentSection;