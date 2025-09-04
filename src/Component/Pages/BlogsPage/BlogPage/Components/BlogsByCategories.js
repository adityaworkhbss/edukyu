"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const BlogsByCategories = () => {
    const router = useRouter();

    const categories = [
        'Business',
        'Educational',
        'Education',
        'Knowledge Series',
        'Webinar',
        'Sales',
        'Masters Program',
        'Education Analysis',
        'Leadership',
        'Business Analytics',
        'MBA',
        'Supply Chain Management',
        'Executive MBA',
        'Online MBA',
        'Distance MBA',
        'Business Management',
        'DY Patil University',
        'Blog',
        'MCA',
        'UGC',
        'NMIMS',
        'Open Universities',
        'NIRF',
        'News',
    ];

    const handleCategoryClick = (category) => {
        const encoded = encodeURIComponent(category); // Encode spaces & special chars
        router.push(`/blogs/${encoded}`);
    };

    return (
        <div className="py-6 px-2 ">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Categories</h2>

            <div className="space-y-1">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        onClick={() => handleCategoryClick(category)}
                        className="flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors group"
                    >
                        <span className="text-slate-700 group-hover:text-slate-900">
                            {category}
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.00033 2.66663L7.06033 3.60663L10.7803 7.33329H2.66699V8.66663H10.7803L7.06033 12.3933L8.00033 13.3333L13.3337 7.99996L8.00033 2.66663Z" fill="#515150"/>
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogsByCategories;
