import { useState, useEffect } from 'react';
import CollegeHeader from '@/Component/Pages/CompareCollegePage/CompareCollegePageDesktop/Components/CollegeHeader';
import SearchBar from '@/Component/Pages/CompareCollegePage/CompareCollegePageDesktop/Components/SearchBar';
import ComparisonTable from '@/Component/Pages/CompareCollegePage/CompareCollegePageDesktop/Components/ComparisonTable';
import FactorsCard from '@/Component/Pages/CompareCollegePage/CompareCollegePageDesktop/Components/FactorsCard';
import FilterCheckbox from '@/Component/Pages/CompareCollegePage/CompareCollegePageDesktop/Components/FilterCheckbox';
import {CompareCollegeDB} from "@/Data Model/CompareCollegeDB";

const CompareCollegeDesktop = () => {
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
    const [showInfoBox, setShowInfoBox] = useState(true);

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
        const newFilters = Object.keys(filters).reduce((acc, key) => {
            acc[key] = checked;
            return acc;
        }, {});
        setFilters(newFilters);
    };

    return (
        <div className="px-[56px] py-[64px]">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Compare Online Colleges & Universities
                </h1>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                    Make an informed decision for your future by comparing top institutions
                </p>
            </div>

            <div className="bg-white p-6 mb-8 relative">
                {/*{showInfoBox && (*/}
                {/*    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded relative">*/}
                {/*        <p className="text-blue-700">Tap on features to view more details of college</p>*/}
                {/*        <button*/}
                {/*            onClick={() => setShowInfoBox(false)}*/}
                {/*            className="absolute top-2 right-2 text-blue-500 hover:text-blue-700"*/}
                {/*        >*/}
                {/*            ×*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*)}*/}

                <div className="flex flex-wrap gap-4 items-center justify-center mb-6 relative">
                    {selectedColleges.map((college, index) => (
                        <SearchBar
                            key={index}
                            index={index}
                            collegeNames={collegeNames}
                            onSelect={handleCollegeSelect}
                            onRemove={removeSearchBar}
                            showRemove={index >= 2}
                        />
                    ))}

                    {selectedColleges.length < 3 && (
                        <button
                            onClick={addSearchBar}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#357E86] text-white hover:bg-[#357E86] transition-colors"
                            aria-label="Add another college to compare"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                    )}

                    <button
                        onClick={() => setShowFilter(!showFilter)}
                        className="absolute right-0 top-1 bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors shadow-sm"
                        aria-label="Toggle filters"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                    </button>
                </div>

                {showFilter && (
                    <FilterCheckbox
                        filters={filters}
                        onToggle={toggleFilter}
                        onSelectAll={toggleSelectAll}
                    />
                )}

                <div className="flex flex-wrap justify-center gap-4">
                    <button
                        className="px-6 py-3 bg-[#357E86] text-white rounded-lg hover:bg-[#357E86] transition-colors shadow-sm flex items-center"
                        disabled={selectedColleges.length < 2}
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Compare Now
                    </button>
                </div>
            </div>

            {selectedColleges.length > 0 && selectedColleges[0] && (
                <>
                    <CollegeHeader colleges={selectedColleges.filter(Boolean)} />
                    <ComparisonTable colleges={selectedColleges.filter(Boolean)} filters={filters} />
                </>
            )}

            <FactorsSection />

            <div className="bg-[#357E86]  rounded-xl shadow-lg p-8 my-10 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">
                    Need help choosing the right college?
                </h2>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Our education counselors can guide you to make the best decision for your career
                </p>
                <button
                    onClick={() => setShowModal(true)}
                    className="inline-flex items-center px-6 py-3 bg-white text-[#357E86] font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-md"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Talk to an Expert
                </button>
            </div>

        </div>
    );
};

const FactorsSection = () => {
    const factors = [
        {
            title: "Academic Quality",
            description: "Check if the college offers a well-structured curriculum and experienced faculty for quality learning.",
            icon: (
                "https://edukyu.com//assets/cxp-assets/imgs/compare-colleges/support-mentor.gif"
            )
        },
        {
            title: "Accreditation",
            description: "Verify if the college is accredited by bodies like UGC, AICTE, or AIU for trusted education.",
            icon: (
                "https://edukyu.com//assets/cxp-assets/imgs/compare-colleges/accrediation.gif"
            )
        },
        {
            title: "Costs and Financial Aid",
            description: "Check if the college offers scholarships, grants, or loans to make your education more\n" +
                "                            affordable.",
            icon: (
                "https://edukyu.com/assets/cxp-assets/imgs/blog/icons/no-cost.gif"
            )
        },
        {
            title: "Alumni Network",
            description: "Ensure the college has a robust alumni network and corporate ties for professional success.",
            icon: (
                "https://edukyu.com//assets/cxp-assets/imgs/compare-colleges/alumni-network.gif"
            )
        },
        {
            title: "College Facilities",
            description: "Look for modern infrastructure that enhances learning and skill development.",
            icon: (
                "https://edukyu.com/assets/cxp-assets/imgs/blog/icons/scholarship2.gif"
            )
        },
        {
            title: "Placement Support",
            description: "Choose a college with strong placement records and industry tie-ups.",
            icon: (
                "https://edukyu.com//assets/cxp-assets/imgs/blog/icons/placement.gif"
            )
        }
    ];

    return (
        <div className="mb-12 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Factors in College Selection</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
                A college isn't just about academics—consider these essential factors before making your decision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {factors.map((factor, index) => (
                    <FactorsCard
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

export default CompareCollegeDesktop;