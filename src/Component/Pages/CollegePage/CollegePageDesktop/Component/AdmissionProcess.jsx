import GridComponent from "@/GlobalComponent/GridComponent";


const AdmissionProcess = ({college}) => {

    const steps = college?.university_info?.admission_process || [];

    if (!steps || steps.length === 0) {
        return (
        <div className="w-full max-w-full overflow-hidden">
            <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4 break-words w-full">
                Admission Process of {college?.university_info?.name}
            </div>

            <div className="text-[20px] pt-[16px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-[30px] break-words w-full">
                Admission process information will be available soon.
            </div>
        </div>
    );
}

    return (
        <div className="w-full max-w-full overflow-hidden ml-0.5">
            <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4 break-words w-[65%]">
                Admission Process of {college?.university_info?.name}
            </div>

            <div className="text-[20px] pt-[16px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-[30px] break-words w-[65%]">
                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </div>

            {/* Steps */}
            <div className="mt-6 flex flex-col gap-10 max-w-full">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 relative max-w-full">
                        {/* Step Number Circle */}
                        <div className="bg-[#EFFDFE] rounded-[10px] p-4 z-2 flex-shrink-0">
                            <div className="text-black font-semibold text-[18px] font-[Outfit]">
                                {step?.step || index + 1}
                            </div>
                        </div>


                        {/* Line Connector */}
                        {index !== steps.length - 1 && (
                            <div className="absolute top-8 left-4 w-[2px] pt-2 h-[calc(100%+16px)] bg-gray-300 z-0"></div>
                        )}

                        {/* Step Content */}
                        <div className="flex flex-col z-10 gap-3 min-w-0 flex-1">
                            {/*<div className="text-black font-semibold text-[18px] font-[Outfit]">*/}
                            {/*    Process: Step {index + 1}*/}
                            {/*</div>*/}

                            <div className="mt-3 text-[#333] font-normal text-[16px] font-[Outfit] break-words">
                                {step?.description || step}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdmissionProcess;
