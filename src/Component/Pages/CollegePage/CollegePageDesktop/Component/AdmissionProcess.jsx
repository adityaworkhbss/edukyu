import GridComponent from "@/GlobalComponent/GridComponent";

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
        <div className="w-full ">
            <GridComponent gridStart={0} gridEnd={6}>
                <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4">
                    Admission Process of Manipal Online
                </div>
            </GridComponent>

            <GridComponent gridStart={0} gridEnd={6}>
                <div className="text-[20px] pt-[16px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-[30px]">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </div>
            </GridComponent>

            {/* Steps */}
            <div className="mt-6 flex flex-col gap-10">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 relative">
                        {/* Step Number Circle */}
                        <div className="bg-[#EFFDFE] rounded-[10px] p-4 z-2">
                            <div className="text-black font-semibold text-[18px] font-[Outfit]">
                                {index + 1}
                            </div>
                        </div>


                        {/* Line Connector */}
                        {index !== steps.length - 1 && (
                            <div className="absolute top-8 left-4 w-[2px] pt-2 h-[calc(100%+16px)] bg-gray-300 z-0"></div>
                        )}

                        {/* Step Content */}
                        <div className="flex flex-col z-10 gap-3">
                            <div className="text-black font-semibold text-[18px] font-[Outfit]">
                                {step.title}
                            </div>

                            <div className="mt-1 text-[#333] font-normal text-[16px] font-[Outfit]">
                                {step.description}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdmissionProcess;
