const FeeTableMobile = ({ collegeSecondry }) => {
    const programsStr = collegeSecondry?.Programs || "";
    const durationsStr = collegeSecondry?.Duration || "";
    const feesObj = collegeSecondry?.["Detail Fees"] || {};

    const programs = programsStr.split(",").map(p => p.trim());
    const durations = durationsStr.split(",").map(d => d.trim());

    const courseData = programs.map((program, index) => {
        const matchingDuration = durations.find(d =>
            d.toLowerCase().includes(program.split(" ")[0].toLowerCase())
        );

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
        <div className="w-full py-8 bg-white">
            <h2 className="text-[#024B53] font-[Outfit] text-[28px] font-semibold mb-3">
                Updated Fees for Each Course in 2025
            </h2>
            <p className="text-[#515150] font-[Outfit] text-[14px] mb-8">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </p>

            <div className="overflow-x-auto scrollbar-hide rounded-[18px] border border-[#E5E5E5]">
                <table className=" w-full border-collapse font-[Outfit]">
                    <thead className="bg-[#024B53] rounded-[12px]">
                    <tr>
                        <th className="py-3 px-4 text-left text-white text-[20px] font-semibold">Courses</th>
                        <th className="py-3 px-4 text-left text-white text-[20px] font-semibold">Fees</th>
                        <th className="py-3 px-4 text-left text-white text-[20px] font-semibold">Years</th>
                    </tr>
                    </thead>
                    <tbody className="rounded-[12px]">
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
