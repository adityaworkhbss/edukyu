import GridComponent from "@/GlobalComponent/GridComponent";

const courseData = Array.from({ length: 15 }, () => ({
    course: "Online MBA",
    fee: "₹ 1,75,000",
    duration: "2 Years",
}));

const FeeTable = () => {
    return (
        <div className="w-full  flex flex-col items-start">
            <GridComponent gridStart={0} gridEnd={6}>
                <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4">
                    Updated Fees for Each Courses in 2025
                </div>
            </GridComponent>

            <GridComponent gridStart={0} gridEnd={6}>
                <div className="text-[20px] pt-[16px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-[30px]">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </div>
            </GridComponent>

            {/* Table */}
            <div className="w-full rounded-t-[12px] overflow-x-auto">
                <table className="min-w-full text-center border-collapse font-[Outfit]">
                    {/* Table Header */}
                    <thead>
                    <tr className="bg-[#024B53] text-white text-[28px] font-semibold ">
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
                            className={index % 2 === 0 ? "bg-white text-[20px]" : "bg-[#F3F3F3] text-[20px]"}
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
