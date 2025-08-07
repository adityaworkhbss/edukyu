const steps = [
    {
        title: "Explore Manipal’s website",
        description:
            'Explore the official website of Manipal University Online and complete the online application by selecting the "Enrol Now" option.',
    },
    {
        title: "Upload documents",
        description:
            'Explore the official website of Manipal University Online and complete the online application by selecting the "Enrol Now" option.',
    },
    {
        title: "Make payment",
        description:
            'Explore the official website of Manipal University Online and complete the online application by selecting the "Enrol Now" option.',
    },
    {
        title: "College will reach out to you",
        description:
            'Explore the official website of Manipal University Online and complete the online application by selecting the "Enrol Now" option.',
    },
];

const AdmissionProcess = () => {
    return (
        <div className="w-full bg-[#FFF5F5] px-6 md:px-20 py-16">
            {/* Title Section */}
            <h2 className="text-[40px] md:text-[48px] font-[Outfit] font-semibold text-[#024B53] leading-snug">
                Admission Process of <br /> Manipal Online
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-[#4B4B4B] font-[Outfit] text-[18px] md:text-[20px] max-w-3xl">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </p>

            {/* Steps */}
            <div className="mt-12 flex flex-col gap-10">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 relative">
                        {/* Step Number Circle */}
                        <div className="w-8 h-8 min-w-[32px] min-h-[32px] bg-[#F3EDED] text-[#000] rounded-full flex items-center justify-center font-[Outfit] font-medium">
                            {index + 1}
                        </div>

                        {/* Line Connector */}
                        {index !== steps.length - 1 && (
                            <div className="absolute top-8 left-4 w-px h-[calc(100%+16px)] bg-gray-300 z-0"></div>
                        )}

                        {/* Step Content */}
                        <div className="flex flex-col z-10">
                            <h3 className="text-[#000] font-semibold font-[Outfit] text-[16px] md:text-[18px]">
                                {step.title}
                            </h3>
                            <p className="mt-1 text-[#4B4B4B] font-[Outfit] text-[14px] md:text-[16px]">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdmissionProcess;
