const steps = [
    {
        title: "Explore Manipal’s website",
        description:
            'Explore the official website of Manipal University Online and complete the online application by selecting the "Enrol Now" option.',
    },
    {
        title: "Upload Documents",
        description:
            'Explore the official website of Manipal University Online and complete the online application by selecting the "Enrol Now" option.',
    },
    {
        title: "Make Payment",
        description:
            'Explore the official website of Manipal University Online and complete the online application by selecting the "Enrol Now" option.',
    },
    {
        title: "College will reach out to you",
        description:
            'Explore the official website of Manipal University Online and complete the online application by selecting the "Enrol Now" option.',
    },
];

const AdmissionProcessMobile = () => {
    return (
        <div className="w-full bg-white rounded-[12px]">
            {/* Heading */}
            <h2 className="text-[#024B53] font-[Outfit] text-[28px] font-semibold leading-normal mb-2">
                Admission Process of Manipal Online
            </h2>

            {/* Subtitle */}
            <p className="text-[#515150] font-[Outfit] text-[14px] font-normal leading-normal mb-6">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </p>

            {/* Steps */}
            <div className="flex flex-col gap-6 relative">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 relative">
                        {/* Number Circle */}
                        <div className="bg-[#EFFDFE] min-w-[32px] min-h-[32px] rounded-[6px] flex items-center justify-center z-10">
                            <span className="text-black font-[Outfit] font-semibold text-[16px]">
                                {index + 1}
                            </span>
                        </div>

                        {/* Connector Line */}
                        {index !== steps.length - 1 && (
                            <div className="absolute left-[16px] top-[32px] w-[2px] h-[calc(100%+8px)] bg-gray-300 z-0"></div>
                        )}

                        {/* Step Content */}
                        <div className="flex flex-col gap-1">
                            <span className="text-black font-[Outfit] text-[16px] font-semibold leading-normal">
                                {step.title}
                            </span>
                            <span className="text-[#333] font-[Outfit] text-[14px] font-normal leading-normal">
                                {step.description}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdmissionProcessMobile;
