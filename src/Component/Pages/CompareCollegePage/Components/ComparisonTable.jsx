import { useState } from 'react';

const ComparisonTable = ({ colleges, filters }) => {
    const [expandedRows, setExpandedRows] = useState({});
    const [showFeesDetails, setShowFeesDetails] = useState({});

    const accreditationImages = {
        "NAAC": "https://upload.wikimedia.org/wikipedia/en/1/1d/NAAC_LOGO.png",
        "NIRF": "https://upload.wikimedia.org/wikipedia/en/5/52/National_Institutional_Ranking_Framework_logo.png",
        "UGC":"https://upload.wikimedia.org/wikipedia/en/4/4e/UGC_India_Logo.png",
        "CAREERS-360": "https://img-cdn.thepublive.com/fit-in/1280x960/filters:format(webp)/afaqs/media/post_attachments/34728a6971dffd8dc77e4b6c925faecdc8774743d099343ed19b6387ba4aaa16.jpg",
        "NBA": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/National_Board_of_Accreditation.svg/330px-National_Board_of_Accreditation.svg.png",
        "WES": "https://www.wes.org/wp-content/themes/storyware/assets/images/logo.svg",
        "ACU": "https://www.acu.ac.uk/dist/images/logo.svg",
        "QSWUR": "https://upload.wikimedia.org/wikipedia/commons/c/c0/QS_University_Rankings_Logo.jpg?20190826092038",
        "AICTE": "https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png",
        "AIU": "https://upload.wikimedia.org/wikipedia/en/5/53/Association_of_Indian_Universities_Logo.svg",
        "KSURF": "https://i0.wp.com/allaboutbelgaum.com/content/uploads/2019/09/rateing.jpg?resize=600%2C256&ssl=1",
        "AUAP": "https://auap.org/web/image/website/1/logo/AUAP?unique=5c9188c",
        "WUR": "https://static.cdnlogo.com/logos/q/27/qs-world-university-rankings.svg",
        "QS I-GAUGE": "https://bit-bangalore.edu.in/assets/images/accreditation/approval_8.png",
        "WUA": "https://www.qahe.org/wp-content/uploads/2023/05/World-University-Ecumenical-520-x-330.jpg",
        "INDIA TODAY": "https://bestcolleges.indiatoday.in/public/asset/images/new-images/it-logo.png",
        "IMPACT RANKING": "https://www.prd.timeshighereducation.com/sites/def…ews_image_style/public/impact_4.jpg?itok=OYr_aI8d",
        "ISO": "https://banner2.cleanpng.com/20180901/xwz/kisspng-iso-9-1-logo-iso-9-quality-management-systems-certificazioni-ultimate-italia-1713945295220.webp",
        "DEC": "https://www.deac.org/wp-content/uploads/2023/10/DEAC-Logo-Mark.svg",
        "DTE": "https://www.deac.org/wp-content/uploads/2023/10/DEAC-Logo-Mark.svg"
    };

    const toggleRow = (rowKey) => {
        setExpandedRows(prev => ({
            ...prev,
            [rowKey]: !prev[rowKey]
        }));
    };

    const toggleFeesDetails = (collegeIndex) => {
        setShowFeesDetails(prev => ({
            ...prev,
            [collegeIndex]: !prev[collegeIndex]
        }));
    };

    const renderAccreditation = (value) => {
        if (!value) return null;
        return value.split(',').map(acc => {
            const trimmedAcc = acc.trim();
            const imageUrl = accreditationImages[trimmedAcc];
            return imageUrl ? (
                <img
                    key={trimmedAcc}
                    src={imageUrl}
                    alt={trimmedAcc}
                    title={trimmedAcc}
                    className="w-12 h-auto mr-2 inline-block"
                />
            ) : null;
        });
    };

    const renderTextWithToggle = (text, rowKey) => {
        if (!text) return null;

        const isExpanded = expandedRows[rowKey];
        const displayText = isExpanded ? text : `${text.substring(0, 100)}${text.length > 100 ? '...' : ''}`;

        return (
            <div>
                <p>{displayText}</p>
                {text.length > 100 && (
                    <button
                        onClick={() => toggleRow(rowKey)}
                        className="text-[#357E86] text-sm mt-1"
                    >
                        {isExpanded ? 'Show Less' : 'Show More'}
                    </button>
                )}
            </div>
        );
    };

    const renderFees = (fees, collegeName, collegeIndex) => {
        if (collegeName === "NMIMS CDOE") {
            return (
                <div className="relative">
                    <div className={`${showFeesDetails[collegeIndex] ? 'hidden' : 'block'}`}>
                        {fees}
                        <button
                            onClick={() => toggleFeesDetails(collegeIndex)}
                            className="text--[#357E86] text-sm ml-2"
                        >
                            Details
                        </button>
                    </div>
                    {showFeesDetails[collegeIndex] && (
                        <div className="absolute z-10 bg-white p-3 border border-gray-200 rounded shadow-lg mt-1 w-64">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="font-medium">Program Fees</h4>
                                <button
                                    onClick={() => toggleFeesDetails(collegeIndex)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    ×
                                </button>
                            </div>
                            <ul className="space-y-2">
                                <li className="flex justify-between">
                                    <span>MBA</span>
                                    <span>₹55,000 - 1,00,000</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>B.Tech</span>
                                    <span>₹1,00,000 - 3,00,000</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Design</span>
                                    <span>₹3,00,000 - 4,00,000</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            );
        }
        return fees;
    };

    const tableData = [
        {
            label: "Institute Type",
            key: "Institute Type",
            filterKey: "instituteType",
            render: (college) => college["Institute Type"]
        },
        {
            label: "Establishment",
            key: "Establishment",
            filterKey: "establishment",
            render: (college) => college.Establishment
        },
        {
            label: "Abbreviation",
            key: "Abbreviation",
            filterKey: "abbreviation",
            render: (college) => college.Abbreviation
        },
        {
            label: "About",
            key: "About",
            filterKey: "about",
            render: (college, rowKey) => renderTextWithToggle(college.About, rowKey)
        },
        {
            label: "Accreditation",
            key: "Accreditation",
            filterKey: "accreditation",
            render: (college) => renderAccreditation(college.Accrediation)
        },
        {
            label: "Duration",
            key: "Duration",
            filterKey: "duration",
            render: (college) => college.Duration.replace(/,/g, ', ')
        },
        {
            label: "Learning Methodology",
            key: "Learning Methodology",
            filterKey: "learningMethodology",
            render: (college) => college["Learning Methodology"]
        },
        {
            label: "Fees",
            key: "Fees",
            filterKey: "fees",
            render: (college, rowKey, collegeIndex) => renderFees(college.Fees, college.Colleges.text, collegeIndex)
        },
        {
            label: "Programs",
            key: "Programs",
            filterKey: "programs",
            render: (college) => college.Programs.replace(/,/g, ', ')
        },
        {
            label: "Specialisation",
            key: "Specialisation",
            filterKey: "specialisation",
            render: (college) => college.Specialisation.replace(/,/g, ', ')
        },
        {
            label: "Review",
            key: "Review",
            filterKey: "review",
            render: (college, rowKey) => renderTextWithToggle(college.Review, rowKey)
        },
        {
            label: "Our Recommendation",
            key: "Our Recommendation",
            filterKey: "ourRecommendation",
            render: (college) => college["Our Recommendation"]
        },
        {
            label: "Eligibility",
            key: "Eligibility",
            filterKey: "eligibility",
            render: (college) => college.Eligibility.replace(/,/g, ', ')
        },
        {
            label: "Website",
            key: "Website",
            filterKey: "website",
            render: (college) => (
                <a
                    href={college.Website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#357E86] hover:underline"
                >
                    Visit
                </a>
            )
        }
    ];

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="overflow-x-auto">
                <table className="w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-[16px] font-medium text-gray-500 uppercase tracking-wider">
                            Features
                        </th>
                        {colleges.map((college, index) => (
                            <th key={index} scope="col" className="px-6 py-3 text-left text-[16px] font-medium text-gray-500 uppercase tracking-wider">
                                {college.Colleges.text}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {tableData.map((row, rowIndex) => (
                        filters[row.filterKey] && (
                            <tr key={rowIndex} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {row.label}
                                </td>
                                {colleges.map((college, colIndex) => (
                                    <td key={colIndex} className="px-6 py-4 whitespace-normal text-sm text-gray-500 max-w-xs">
                                        {row.render(college, `${row.key}-${colIndex}`, colIndex)}
                                    </td>
                                ))}
                            </tr>
                        )
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ComparisonTable;