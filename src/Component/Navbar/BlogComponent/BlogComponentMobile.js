"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
import { BlogService } from "@/Services/blogService";
import {usePageContext} from "@/GlobalComponent/PageContext";

const BlogComponentMobile = ({ onClose }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [blogs, setBlogs] = useState([]);
    const [searchMetaMap, setSearchMetaMap] = useState(new Map());
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const { setCurrentPage } = usePageContext();

    const router = useRouter();

    const shortDescBlogIdMap = {
        "essential-elements-for-training-success": 3,
        "is-pgdm-equivalent-to-mba": 4,
        "distance-learning-mba-pgdm-program-in-inida": 6,
        "why-distance-mba-is-worthy-for-working-professionals": 7,
        "feedback-form": 8,
        "distance-learning-vs-executive-mba-from-nmims-university": 9,
        "management-college-analysis-for-working-professionals": 10,
        "frequently-asked-question-regarding-distance-mba": 11,
        "nmims-mba-x-business-analytics-fees-date-extended-till-28th-march": 12,
        "nmims-global-access-april-2020-exams-wil-be-cancelled": 13,
        "nmims-knowledge-series-workplace-diversity-inclusion": 14,
        "nmims-knowledge-series-decoding-millennials-and-how-to-sell-them": 15,
        "nmims-knowledge-series-building-great-leaders": 16,
        "nmims-knowledge-series-story-of-loadshare": 17,
        "nmims-knowledge-series-redefining-leadership": 18,
        "nmims-knowledge-series-rising-influence-of-digital-on-consumer-behaviour": 19,
        "nmims-knowledge-series-bharat-vs-india": 20,
        "nmims-knowledge-series-value-based-leadership": 21,
        "nmims-knowledge-series-the-new-marketing-paradigm-in-the-age-of-millennials": 22,
        "nmims-june-2020-assignment-is-live": 23,
        "nmims-classes-announcement": 25,
        "adapting-to-work-from-home": 26,
        "the-future-of-jobs-amidst-covid-19": 28,
        "mba-for-executive-info-sessions": 29,
        "professional-diploma-in-digital-marketing-info-session": 30,
        "nmims-june-2020-exams-registration": 31,
        "nmims-distance-exams-guidelines-and-policy": 32,
        "nmims-distance-exams-guidelines-and-policy-lvn": 33,
        "executive-mba-wx-program-from-nmims-university": 34,
        "benefits-of-executive-mba-to-the-employer": 36,
        "recorded-session-future-of-sales-in-a-digital-world-nmims-knowledge-series-ezf": 38,
        "tips-to-succeed-with-cold-calling": 40,
        "nmims-msc-artificial-intelligence-and-machine-learning-ops": 41,
        "narsee-monjee-distance-mba-for-working-professionals": 42,
        "executive-mba-comparision-from-top-business-schools": 43,
        "nmims-mba-distance-june-2021-exams-guidelines": 44,
        "nmims-jan-2021-feedback-form": 45,
        "nmims-mba-distance-june-2021-exams-guidelines-testing": 46,
        "nmims-career-growth-with-an-executive-mba-for-working-professionals": 50,
        "nmims-is-executive-mba-necessary-to-be-a-successful-professional-2nm": 52,
        "nmims-mba-or-emba-which-one-39-s-right-for-you": 53,
        "nmims-how-much-input-do-employees-have-on-decision-making": 54,
        "nmims-the-rising-demand-for-executive-mbas-with-business-analytics-specializat": 55,
        "nmims-how-to-balance-an-executive-mba-while-working-full-time": 56,
        "nmims-executive-mba-in-financial-markets-the-ultimate-guide-for-applicants": 57,
        "nmims-employee-education-tips-how-to-get-an-employer-sponsored-online-mba": 58,
        "nmims-mba-in-it-an-overview": 59,
        "nmims-7-effective-executive-leadership-skills": 60,
        "nmims-what-can-you-do-with-an-mba-in-strategy-and-leadership": 61,
        "nmims-why-is-marketing-management-important-for-business": 62,
        "nmims-7-ways-human-resource-manager-can-effectively-contribute-to-business-gro-4ek": 64,
        "nmims-time-management-tips-for-online-learning-students": 65,
        "management-of-information-technology-and-systems-via-the-internet": 66,
        "pursue-mba-in-retail-management-from-nmims": 67,
        "5-reasons-you-should-pursue-an-executive-mba-from-nmims": 68,
        "a-complete-guide-executive-mba-for-working-professionals": 69,
        "how-to-choose-the-right-executive-mba-program": 70,
        "best-mba-course-for-working-professionals-in-india": 71,
        "careers-to-pursue-with-an-executive-mba-in-leadership-and-strategy": 72,
        "top-notch-mba-programs-in-2023": 73,
        "top-mba-programs-for-emerging-leaders": 74,
        "mba-specialization-in-demand-2023": 75,
        "is-executive-mba-from-nmims-worth-it": 76,
        "a-guide-to-certificate-in-business-management": 77,
        "enhance-your-professional-credibility-with-a-certificate-in-corporate-communicat": 78,
        "tips-for-a-successful-bba-business-analytics-degree": 79,
        "bachelor-in-business-administration-bba-a-guide-to-bba-journey": 80,
        "the-best-ways-to-successfully-apply-for-an-odl-mba": 81,
        "what-can-you-do-with-an-emba-in-operations-and-supply-chain-management": 82,
        "is-distance-mba-worth-it-for-freshers": 84,
        "5-operations-management-courses-to-help-you-boost-your-career-in-2023": 85,
        "how-is-an-mba-useful-for-it-professionals": 86,
        "mba-in-india-or-abroad-which-is-the-best": 87,
        "5-exciting-career-options-after-mba-in-marketing-management": 88,
        "what-strategic-leaders-need-to-know-in-2023-developing-the-skills-for-success": 89,
        "6-business-analytics-concepts-managers-should-know": 90,
        "what-are-the-biggest-mba-myths": 91,
        "6-biggest-challenges-supply-chain-management-is-facing-in-2023": 93,
        "how-business-analytics-helps-in-marketing": 94,
        "5-ways-to-manage-emba-while-working": 95,
        "5-mistakes-every-mba-aspirant-should-avoid": 96,
        "supply-chain-kpi-mistakes-to-avoid-in-2023": 97,
        "a-complete-guide-for-students-interested-in-distance-mba-programs": 98,
        "top-5-skills-every-business-analytics-professional-needs": 100,
        "future-of-online-mba-programme-in-2023": 101,
        "top-5-distance-education-mba-universities-in-india-2023": 102,
        "top-distance-mba-colleges-in-delhi": 103,
        "top-distance-mba-colleges-in-kolkata": 104,
        "what-is-business-management": 105,
        "top-distance-mba-colleges-in-pune": 106,
        "top-10-executive-mba-colleges-in-india": 107,
        "distance-mba-colleges-eligibility-fees-career-and-salary": 108,
        "distance-mba-from-iim": 109,
        "dy-patil-distance-mba": 110,
        "online-mba-courses-in-india": 111,
        "mba-for-working-professionals": 112,
        "online-mba-Business-Analytics": 113,
        "online-mba-courses-in-bangalore": 114,
        "shoolini-university": 115,
        "online-mba-in-banking-and-finance": 116,
        "online-mba-in-supply-chain-management-and-logistics": 117,
        "online-mba-in-hospital-management": 119,
        "online-mba-in-marketing": 120,
        "jain-university-online-mba": 121,
        "best-mba-specialization": 122,
        "online-mba-in-international-business": 123,
        "online-mba-operations-management": 124,
        "online-mba-in-human-resource-management": 126,
        "affordable-online-mba-in-india": 127,
        "amity-university-online-mba": 128,
        "ugc-approved-online-mba-colleges": 129,
        "online-mba-vs-regular-mba": 131,
        "job-opportunities-after-mba": 133,
        "online-mba-courses-in-mumbai": 134,
        "distance-mba-in-hyderabad": 137,
        "distance-mba-in-ahmedabad": 139,
        "how-to-choose-mba-specialization": 140,
        "distance-mba-in-chennai": 141,
        "annamalai-university-distance-mba": 145,
        "ignou-online-mba": 146,
        "online-mba-in-pune-university": 147,
        "distance-mba-colleges-in-jaipur": 148,
        "ugc-fake-university-list-2024": 149,
        "one-year-online-mba": 150,
        "best-course-after-b-com": 151,
        "top-10-colleges-for-executive-mba-distance-learning-in-india": 152,
        "ignou-mca-admissions": 153,
        "du-sol-courses": 154,
        "ugc-banned-suresh-gyan-vihar-university": 155,
        "ugc-approved-online-degree-courses": 156,
        "ugc-removes-ban-on-nmims-university": 157,
        "top-open-university-in-india": 158,
        "nirf-rankings-2024": 159,
        "ugc-banned-periyar-university": 160,
        "online-b-ed-courses-in-india": 161,
        "ugc-deb-approved-list-for-online-programmes-2024": 163,
        "online-ba-degree-courses-in-india": 164,
        "online-master-degree-in-india": 165,
        "nmims-online-mba": 166,
        "top-online-mca-colleges-in-pune": 168,
        "online-mtech-for-working-professionals": 169,
        "what-is-abc-id": 170,
        "top-online-bba-colleges-in-pune": 176,
        "nmims-executive-mba": 177,
        "top-online-mca-colleges-delhi": 178,
        "amity-online-mca": 179,
        "lovely-professional-university-online-mca": 180,
        "online-ma-courses-in-india": 182,
        "top-online-mca-colleges-in-india": 183,
        "manipal-university-online-mca": 184,
        "top-distance-mba-colleges-bhopal": 185,
        "top-distance-mba-colleges-patna": 186,
        "top-mca-specializations": 187,
        "amity-online-bba": 188,
        "chandigarh-university-distance-mba": 189,
        "top-bba-colleges-in-delhi": 190,
        "mba-in-digital-marketing": 191,
        "best-degree-to-become-an-ias-officer": 192,
        "ignou-courses-list": 193,
        "aicte-approved-mba-colleges": 194,
        "top-courses-to-do-along-with-ca-course": 195,
        "top-bca-specializations-in-india": 196,
        "top-mca-colleges-in-bangalore": 197,
        "top-educational-loan-provider-for-online-degree": 198,
        "how-universities-conduct-online-degree-exams": 199,
        "online-degree-courses-for-defense-personnel": 200,
        "top-mtech-colleges-in-india": 201,
        "best-mca-colleges-in-hyderabad": 202,
        "best-university-for-mca-in-india": 203,
        "highest-paying-jobs-after-mba": 204,
        "mba-vs-mca": 206,
        "best-mca-colleges-in-chennai": 207,
        "sikkim-manipal-university-online-mca": 208,
        "top-bba-colleges-in-india": 209,
        "top-bca-colleges-in-india": 210,
        "top-courses-after-bca": 212,
        "what-is-a-stem-mba": 213,
        "best-online-mca-colleges-in-mumbai": 214,
        "aicte-approved-colleges-in-pune": 215,
        "top-bba-specialization": 216,
        "bcom-for-ca-students": 217,
        "online-msc-data-science": 218,
        "best-mba-colleges-in-India-without-cat": 221,
        "online-msc-in-mathematics": 222,
        "online-mba-in-artificial-intelligence": 223,
        "online-mba-in-project-management": 224,
        "online-mca-in-data-science": 225,
        "online-mba-in-data-science": 226,
        "mca-colleges-in-nagpur": 227,
        "jamia-islamia-distance-online-courses": 228,
        "online-mca-colleges-in-ahmedabad": 229,
        "top-mca-colleges-in-coimbatore": 230,
        "online-mba-colleges-in-bangalore": 231,
        "niu-online-mba": 232,
        "niu-online-mca": 233,
        "niu-online-bba": 234,
        "top-mba-colleges-in-delhi": 235,
        "mba-colleges-in-hyderabad": 236
    };

    const handleReadMore = (blogId) => {
        // Close the mobile navbar first
        if (onClose) {
            onClose();
        }
        // Navigate to the blog (this will trigger the loading overlay in RootShell)
        router.push(`/blog/${blogId}`);
    };

    const fetchTopNavBlogs = async () => {
        try {
            const blogService = BlogService.getInstance();
            const data = await blogService.fetchTopNavBlogs();
            const searchData = await blogService.fetchBlogsSearchKeys();

            setBlogs(data.blogs);

            const newMap = new Map();
            searchData.blogs.forEach((blog) => {
                if (blog.metaKey && blog.subtitle && blog.blogId) {
                    newMap.set(blog.metaKey, {
                        title: blog.subtitle,
                        id: blog.blogId,
                        shortUrl: blog.shortUrl,
                    });
                }
            });

            setSearchMetaMap(newMap);
        } catch (err) {
            console.error("Error fetching blogs:", err);
        }
    };

    useEffect(() => {
        fetchTopNavBlogs();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);

        const suggestions = Array.from(searchMetaMap.entries())
            .filter(([_, val]) =>
                val.title.toLowerCase().includes(value.toLowerCase())
            )
            .map(([key, val]) => ({ key, title: val.title, id: val.id , shortUrl: val.shortUrl }));

        setFilteredSuggestions(suggestions);
    };


    const blogIdShortDescMap = Object.fromEntries(
        Object.entries(shortDescBlogIdMap).map(([key, value]) => [value, key])
    );

    const handleSuggestionClick = (id) => {
        setFilteredSuggestions([]);
        setSearchQuery("");
        // Close the mobile navbar first
        if (onClose) {
            onClose();
        }
        // Navigate to the blog (this will trigger the loading overlay in RootShell)
        router.push(`/blog/${id}`);
    };

    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
            });
        } catch {
            return dateString;
        }
    };

    return (
        <div className="fixed h-full top-0 left-0 w-full bg-white shadow-lg z-50 flex flex-col overflow-y-auto">
            <div className="flex items-center h-[58px] px-5 pl-[20px] shrink-0">
                <div onClick={onClose} className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#2B2B2A" />
                    </svg>
                </div>
                <div className="flex flex-col w-full px-4  relative">
                    <form
                        className="flex items-center justify-between  w-full"
                        onSubmit={handleSearch}>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleInputChange}
                            placeholder="Search blog topics..."
                            className="w-full px-4 py-2 border-b border-gray-300 "
                        />

                        <button type="submit" className="h-8 w-8 rounded ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_43_3515)">
                                    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#2B2B2A"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_43_3515">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </form>

                    {searchQuery.length > 0 && filteredSuggestions.length > 0 && (
                        <div className="fixed top-[50px] left-0 right-0 bg-white shadow-lg rounded-b-lg border border-gray-200 max-h-60 overflow-y-auto z-50 mx-5">
                            {filteredSuggestions.map((item, idx) => (
                                <div key={idx}>
                                    <div
                                        onClick={() => handleSuggestionClick(item.shortUrl)}
                                        className="flex items-center gap-3 p-3 cursor-pointer transition-all duration-200 hover:bg-gray-50"
                                    >
                                        <div className="w-8 h-8 rounded flex items-center justify-center">
                                            {idx === 0 ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                    <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="#024B53" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                    <g clipPath="url(#clip0_43_4046)">
                                                        <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#024B53" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_43_4046">
                                                            <rect width="24" height="24" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            )}
                                        </div>
                                        <span className="text-[14px] font-normal text-[#024B53] font-outfit flex-1">
                                            {item.title}
                                        </span>
                                    </div>
                                    {idx < filteredSuggestions.length - 1 && (
                                        <div className="h-[1px] w-full bg-[#CDCDCD] mx-3" />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="text-[22px] pb-6 text-left px-5 pt-5 font-medium text-[#383837] font-outfit leading-none">
                Our top blogs, fresh out of minds...
            </div>

            <div className="flex flex-col pt-6 gap-5 px-5">
                {blogs.map((item, index) => (
                    <div
                        key={index}
                        className="w-full rounded-[12px] border border-[#CDCDCD] bg-[rgba(255,255,255,0.80)] hover:bg-[rgba(179,207,210,0.5)] transition-all duration-200 flex flex-col justify-between"
                        onClick={() => handleReadMore(item.shortUrl)}
                    >
                        <img
                            src={`https://edukyu.com/public/${item.image}`}
                            alt={item.title || "Blog Image"}
                            className="w-full h-[150px] items-center rounded-t-xl object-cover"
                        />
                        <div className="text-[#383837] px-5 pt-5 font-outfit text-[16px] font-medium leading-normal line-clamp-3">
                            {item.subtitle}
                        </div>
                        <div className="text-[#515150] px-5 font-outfit text-[12px] pt-3 font-normal leading-normal mb-4 line-clamp-5">
                            {item.metaDesc}
                        </div>
                        <div className="text-[#515150] px-5 text-[12px] pb-4 font-outfit pt-6 font-normal">
                            Published on {formatDate(item.timeStamp)} | 8 Min
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center py-6 px-5">
                <button className="inline-flex w-full items-center justify-center gap-[10px] px-[16px] py-[12px] bg-[#024B53] text-white text-[14px] font-outfit font-medium leading-normal rounded-[8px]"
                        onClick={() => {
                            setCurrentPage('blog');
                            if (onClose) {
                                onClose();
                            }
                            router.push('/blogs');
                        }}>
                    Check all Blogs
                </button>
            </div>
        </div>
    );
};

export default BlogComponentMobile;
