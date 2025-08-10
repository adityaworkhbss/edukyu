const FeeTableMobile = ({ collegeSecondry }) => {
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
        <div className="w-full bg-white rounded-[12px]">
            <h2 className="text-[#024B53] font-[Outfit] text-[28px] font-semibold mb-2">
                Updated Fees for Each Course in 2025
            </h2>
            <p className="text-[#515150] font-[Outfit] text-[14px] mb-4">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </p>

            <div className="overflow-x-auto rounded-[8px] border border-[#E5E5E5]">
                <table className="min-w-[500px] border-collapse font-[Outfit]">
                    <thead className="bg-[#024B53]">
                    <tr>
                        <th className="py-3 px-4 text-left text-white text-[20px] font-semibold">Courses</th>
                        <th className="py-3 px-4 text-left text-white text-[20px] font-semibold">Fees</th>
                        <th className="py-3 px-4 text-left text-white text-[20px] font-semibold">Years</th>
                    </tr>
                    </thead>
                    <tbody>
                    {courseData.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-[#E5F4F4]"}>
                            <td className="py-3 px-4 text-black text-[16px]">{item.course}</td>
                            <td className={`py-3 px-4 text-[16px] ${item.fee === "N/A" ? "text-gray-400" : "text-black"}`}>
                                {item.fee}
                            </td>
                            <td className={`py-3 px-4 text-[16px] ${item.duration === "N/A" ? "text-gray-400" : "text-black"}`}>
                                {item.duration}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeeTableMobile;
