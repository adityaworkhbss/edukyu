const courseData = Array.from({ length: 15 }, () => ({
    course: "Online MBA",
    fee: "₹ 1,75,000",
    duration: "2 Years",
}));

const FeeTable = () => {
    return (
        <div className="w-full bg-[#FFF5F5] px-6 md:px-20 py-16 flex flex-col items-start">
            {/* Title */}
            <h2 className="text-[40px] md:text-[48px] font-semibold font-[Outfit] text-[#024B53] leading-snug">
                Updated Fees for Each <br /> Courses in 2025
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-[#4B4B4B] font-[Outfit] text-[18px] md:text-[20px] max-w-3xl mb-8">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </p>

            {/* Table */}
            <div className="w-full overflow-x-auto">
                <table className="min-w-full text-left border-collapse font-[Outfit]">
                    {/* Table Header */}
                    <thead>
                    <tr className="bg-[#024B53] text-white text-[16px] font-semibold">
                        <th className="py-3 px-4">Courses</th>
                        <th className="py-3 px-4">Fees</th>
                        <th className="py-3 px-4">Years</th>
                    </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                    {courseData.map((item, index) => (
                        <tr
                            key={index}
                            className={index % 2 === 0 ? "bg-white" : "bg-[#F3F3F3]"}
                        >
                            <td className="py-3 px-4">{item.course}</td>
                            <td className="py-3 px-4">{item.fee}</td>
                            <td className="py-3 px-4">{item.duration}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeeTable;
