import GridComponent from "@/GlobalComponent/GridComponent";

const courseData = Array.from({ length: 15 }, () => ({
    course: "Online MBA",
    fee: "₹ 1,75,000",
    duration: "2 Years",
}));

const FeeTable = ({ collegeSecondry }) => {

    const programsStr = collegeSecondry?.Programs || "";
    const durationsStr = collegeSecondry?.Duration || "";
    const feesObj = collegeSecondry?.["Detail Fees"] || {};

    // Convert strings to arrays
    const programs = programsStr.split(",").map(p => p.trim());
    const durations = durationsStr.split(",").map(d => d.trim());

    // Merge data into table rows
    const courseData = programs.map((program, index) => {
        // Find duration for this program
        const matchingDuration = durations.find(d =>
            d.toLowerCase().includes(program.split(" ")[0].toLowerCase())
        );

        // Find fee for this program
        const feeKey = Object.keys(feesObj).find(key =>
            key.toLowerCase().includes(program.split(" ")[0].toLowerCase())
        );

        return {
            course: program || "N/A",
            fee: feesObj[feeKey] || "N/A",
            duration: matchingDuration ? matchingDuration.split(":")[1]?.trim() : "N/A"
        };
    });

    return (
        <div className="w-full pt-16 pb-4 flex flex-col items-start max-w-full overflow-hidden ">
            <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4 break-words w-full" style={{ width: 'calc(200% / 3 - 32px)' }}>
                Updated Fees for Each Courses in 2025
            </div>

            <div className="text-[20px]  pb-[24px] font-normal text-[#535862] font-[Outfit] leading-[30px] break-words w-full" style={{ width: 'calc(200% / 3 - 32px)' }}>
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </div>

            {/* Table */}
            <div className="w-[97%] rounded-[12px] overflow-x-auto" style={{ width: 'calc(200% / 2 - 40px)' }}>
                <table className="w-full text-center border-collapse font-[Outfit] min-w-full table-fixed">
                    {/* Table Header */}
                    <thead>
                    <tr className="bg-[#024B53] text-white text-[28px] font-semibold ">
                        <th className="py-3 px-4 text-left w-1/3">Courses</th>
                        <th className="py-3 px-4 w-1/3">Fees</th>
                        <th className="py-3 px-4 w-1/3">Years</th>
                    </tr>
                    </thead>

                        {/* Table Body */}
                        <tbody>
                        {courseData.map((item, index) => {
                            return (
                                <tr
                                    key={index}
                                    className={index % 2 === 0 ? "bg-white text-[20px]" : "bg-[#F3F3F3] text-[20px]"}
                                >
                                    <td className="py-3 px-4 text-left break-words whitespace-normal max-w-[20px]" title={item.course}>
                                        {item.course}
                                    </td>
                                    <td
                                        className={`py-3 px-4 ${item.fee === "N/A" ? "text-gray-400" : "text-black"}`}
                                    >
                                        {item.fee}
                                    </td>
                                    <td
                                        className={`py-3 px-4 ${item.duration === "N/A" ? "text-gray-400" : "text-black"}`}
                                    >
                                        {item.duration}
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default FeeTable;