const courseData = Array.from({ length: 12 }, () => ({
    course: "Online MBA",
    fee: "Rs 1,75,000",
    duration: "2 Years",
}));

const FeeTableMobile = () => {
    return (
        <div className="w-full bg-white rounded-[12px]">
            {/* Title */}
            <h2 className="text-[#024B53] font-[Outfit] text-[28px] font-semibold leading-normal mb-2">
                Updated Fees for Each Courses in 2025
            </h2>

            {/* Subtitle */}
            <p className="text-[#515150] font-[Outfit] text-[14px] font-normal leading-normal mb-4">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </p>

            {/* Table Wrapper - Scrollable */}
            <div className="overflow-x-auto rounded-[8px] border border-[#E5E5E5]">
                <table className="min-w-[500px] border-collapse font-[Outfit]">
                    {/* Table Header */}
                    <thead className="bg-[#024B53]">
                    <tr>
                        <th className="py-3 px-4 text-left text-white text-[20px] font-semibold">Courses</th>
                        <th className="py-3 px-4 text-left text-white text-[20px] font-semibold">Fees</th>
                        <th className="py-3 px-4 text-left text-white text-[20px] font-semibold">Years</th>
                    </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                    {courseData.map((item, index) => (
                        <tr
                            key={index}
                            className={index % 2 === 0 ? "bg-white" : "bg-[#E5F4F4]"}
                        >
                            <td className="py-3 px-4 text-black text-[16px] font-normal">{item.course}</td>
                            <td className="py-3 px-4 text-black text-[16px] font-normal">{item.fee}</td>
                            <td className="py-3 px-4 text-black text-[16px] font-normal">{item.duration}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeeTableMobile;
