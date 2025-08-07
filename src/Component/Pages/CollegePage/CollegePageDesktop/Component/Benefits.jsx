import Image from "next/image";

const benefitsLeft = [
    "Online Manipal University offers students a wide range of fully online, accredited degree and diploma courses, totaling over 10 options.",
    "These courses have been approved by the UGC for online delivery.",
    "Students can choose from undergraduate programs like BCA, BBA, and B. Com, as well as postgraduate programs like MCA, MBA, M. Com, and MA JMC, all of which are offered in online mode.",
];

const benefitsRight = [
    "Additionally, the university conducts examinations online, with remote proctoring through the LMS.",
    "To facilitate easy financing, the university also offers no-cost EMI options.",
    "Moreover, scholarship opportunities are available for government employees, defense personnel, meritorious students, and differently-abled individuals.",
];

const Benefits = () => {
    return (
        <div className="w-full bg-[#FFF5F5] py-16 px-6 md:px-20">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-[#024B53] font-semibold text-[28px] md:text-[36px] font-[Outfit]">
                    Benefits of NIU Online
                </h2>
                <p className="text-[#4B4B4B] text-[16px] md:text-[18px] mt-3 font-[Outfit]">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Left Box */}
                <div className="space-y-4">
                    {benefitsLeft.map((text, i) => (
                        <div
                            key={i}
                            className="bg-white border border-[#DDDDDD] text-[#4B4B4B] text-[15px] p-4 rounded-md font-[Outfit]"
                        >
                            {text}
                        </div>
                    ))}
                </div>

                {/* Center Image */}
                <div className="flex justify-center">
                    <div className="rounded-full border border-dashed border-[#024B53] p-2">
                        <Image
                            src="/niu-building.png" // Save your uploaded image as this in the public folder
                            alt="NIU Building"
                            width={220}
                            height={220}
                            className="rounded-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Box */}
                <div className="space-y-4">
                    {benefitsRight.map((text, i) => (
                        <div
                            key={i}
                            className="bg-white border border-[#DDDDDD] text-[#4B4B4B] text-[15px] p-4 rounded-md font-[Outfit]"
                        >
                            {text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Benefits;
