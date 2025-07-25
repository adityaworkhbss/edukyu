import { useState, useEffect } from 'react';
import MobileCollegeHeader from './Components/MobileCollegeHeader';
import MobileSearchBar from './Components/MobileSearchBar';
import MobileComparisonTable from './Components/MobileComparisonTable';
import MobileFactorsCard from './Components/MobileFactorsCard';
import MobileFilterCheckbox from './Components/MobileFilterCheckbox';
import {CompareCollegeDB} from "@/Data Model/CompareCollegeDB";

const CompareCollegeMobile = () => {
    const [collegeData, setCollegeData] = useState({});
    const [collegeNames, setCollegeNames] = useState([]);
    const [selectedColleges, setSelectedColleges] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [filters, setFilters] = useState({
        abbreviation: true,
        instituteType: true,
        establishment: true,
        about: true,
        accreditation: true,
        duration: true,
        learningMethodology: true,
        fees: true,
        programs: true,
        specialisation: true,
        review: true,
        ourRecommendation: true,
        eligibility: true,
        website: true
    });

    useEffect(() => {
        // Flatten the CompareCollegeDB array into a usable object
        const flattenedData = CompareCollegeDB.reduce((acc, obj) => {
            return { ...acc, ...obj };
        }, {});

        setCollegeData(flattenedData);
        setCollegeNames(Object.keys(flattenedData));

        // Set default colleges if available
        if (flattenedData["Sikkim Manipal University"] && flattenedData["Manipal University"]) {
            setSelectedColleges([
                flattenedData["Sikkim Manipal University"],
                flattenedData["Manipal University"]
            ]);
        }
    }, []);

    const handleCollegeSelect = (index, collegeName) => {
        if (!collegeData[collegeName]) return;

        const newSelectedColleges = [...selectedColleges];
        newSelectedColleges[index] = collegeData[collegeName];
        setSelectedColleges(newSelectedColleges);
    };

    const addSearchBar = () => {
        if (selectedColleges.length >= 3) return;
        setSelectedColleges([...selectedColleges, null]);
    };

    const removeSearchBar = (index) => {
        const newSelectedColleges = [...selectedColleges];
        newSelectedColleges.splice(index, 1);
        setSelectedColleges(newSelectedColleges);
    };

    const toggleFilter = (filterName) => {
        setFilters(prev => ({
            ...prev,
            [filterName]: !prev[filterName]
        }));
    };

    const toggleSelectAll = (checked) => {
        const newFilters = {};
        for (const key in filters) {
            if (Object.prototype.hasOwnProperty.call(filters, key)) {
                newFilters[key] = checked;
            }
        }
        setFilters(newFilters);
    };


    return (
        <div className="px-4 py-6 max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-3">
                    Compare Online Colleges & Universities
                </h1>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Make an informed decision for your future by comparing top institutions
                </p>
            </div>

            {/* Search Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
                <div className="space-y-4">
                    {selectedColleges.map((college, index) => (
                        <MobileSearchBar
                            key={index}
                            index={index}
                            collegeNames={collegeNames}
                            onSelect={handleCollegeSelect}
                            onRemove={removeSearchBar}
                            showRemove={index >= 2}
                        />
                    ))}

                    {/* Add College Button */}
                    {selectedColleges.length < 3 && (
                        <button
                            onClick={addSearchBar}
                            className="w-full flex items-center justify-center py-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-[#357E86] hover:text-[#357E86] transition-colors"
                        >
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Add Another College
                        </button>
                    )}

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-2">
                        <button
                            onClick={() => setShowFilter(!showFilter)}
                            className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors flex items-center justify-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            Filters
                        </button>
                        <button
                            className="flex-1 py-3 px-4 bg-[#357E86] text-white rounded-xl font-medium hover:bg-[#2a636b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            disabled={selectedColleges.filter(Boolean).length < 2}
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            Compare
                        </button>
                    </div>
                </div>
            </div>

            {/* Filter Section */}
            {showFilter && (
                <MobileFilterCheckbox
                    filters={filters}
                    onToggle={toggleFilter}
                    onSelectAll={toggleSelectAll}
                />
            )}

            {/* Comparison Results */}
            {selectedColleges.length > 0 && selectedColleges[0] && (
                <>
                    <MobileCollegeHeader colleges={selectedColleges.filter(Boolean)} />
                    <MobileComparisonTable colleges={selectedColleges.filter(Boolean)} filters={filters} />
                </>
            )}

            {/* Factors Section */}
            <MobileFactorsSection />

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#357E86] to-[#2a636b] rounded-xl shadow-lg p-6 my-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#357E86]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">
                    Need Expert Guidance?
                </h2>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                    Our education counselors can help you choose the perfect college for your career goals
                </p>
                <button
                    onClick={() => setShowModal(true)}
                    className="w-full py-3 px-6 bg-white text-[#357E86] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md"
                >
                    Talk to an Expert
                </button>
            </div>
        </div>
    );
};

const MobileFactorsSection = () => {
    const factors = [
        {
            title: "Academic Quality",
            description: "Check if the college offers a well-structured curriculum and experienced faculty for quality learning.",
            icon: "https://edukyu.com//assets/cxp-assets/imgs/compare-colleges/support-mentor.gif"
        },
        {
            title: "Accreditation",
            description: "Verify if the college is accredited by bodies like UGC, AICTE, or AIU for trusted education.",
            icon: "https://edukyu.com//assets/cxp-assets/imgs/compare-colleges/accrediation.gif"
        },
        {
            title: "Costs and Financial Aid",
            description: "Check if the college offers scholarships, grants, or loans to make your education more affordable.",
            icon: "https://edukyu.com/assets/cxp-assets/imgs/blog/icons/no-cost.gif"
        },
        {
            title: "Alumni Network",
            description: "Ensure the college has a robust alumni network and corporate ties for professional success.",
            icon: "https://edukyu.com//assets/cxp-assets/imgs/compare-colleges/alumni-network.gif"
        },
        {
            title: "College Facilities",
            description: "Look for modern infrastructure that enhances learning and skill development.",
            icon: "https://edukyu.com/assets/cxp-assets/imgs/blog/icons/scholarship2.gif"
        },
        {
            title: "Placement Support",
            description: "Choose a college with strong placement records and industry tie-ups.",
            icon: "https://edukyu.com//assets/cxp-assets/imgs/blog/icons/placement.gif"
        }
    ];

    return (
        <div className="mb-8">
            <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Key Factors in College Selection</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Consider these essential factors before making your decision
                </p>
            </div>

            <div className="space-y-4">
                {factors.map((factor, index) => (
                    <MobileFactorsCard
                        key={index}
                        title={factor.title}
                        description={factor.description}
                        icon={factor.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default CompareCollegeMobile;