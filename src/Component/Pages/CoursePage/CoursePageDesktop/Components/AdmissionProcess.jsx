import GridComponent from "@/GlobalComponent/GridComponent";


const AdmissionProcess = ({course}) => {

    // Extract course data safely - handle both direct and nested structures
    let courseData = {};
    
    if (course) {
        // Check if course has direct properties
        if (course.admissionProcess) {
            courseData = course;
        } 
        // Check if course has nested structure like CoursePageData
        else {
            const firstKey = Object.keys(course)[0];
            if (firstKey && course[firstKey]) {
                courseData = course[firstKey];
            }
        }
    }

    const steps = courseData?.admissionProcess || [];
    const courseName = courseData?.page?.title || "this program";

    // Hide component if no admission process data
    if (!steps || steps.length === 0) {
        return null;
    }

    return (
        <div className="w-full max-w-full overflow-hidden ml-0.5">
            <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none mb-4 break-words w-[65%]">
                Admission Process of {courseName}
            </div>

            <div className="text-[20px] pt-[16px] pb-[40px] font-normal text-[#535862] font-[Outfit] leading-[30px] break-words w-[65%]">
                Follow these simple steps to secure your admission and start your journey towards academic excellence.
            </div>

            {/* Steps */}
            <div className="mt-6 flex flex-col gap-10 max-w-full">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 relative w-[77%]">
                        {/* Step Number Circle */}
                        <div className="bg-[#EFFDFE] rounded-[10px] p-4 z-2 flex-shrink-0">
                            {step?.icon ? (
                                <img 
                                    src={step.icon} 
                                    alt={step.title || `Step ${step?.step || index + 1}`}
                                    className="w-6 h-6 object-contain"
                                />
                            ) : (
                                <div className="text-black font-semibold text-[18px] font-[Outfit]">
                                    {step?.step || index + 1}
                                </div>
                            )}
                        </div>


                        {/* Line Connector */}
                        {index !== steps.length - 1 && (
                            <div className="absolute top-8 left-4 w-[2px] pt-2 h-[calc(100%+16px)] bg-gray-300 z-0"></div>
                        )}

                        {/* Step Content */}
                        <div className="flex flex-col z-10 gap-3 min-w-0 flex-1">
                            {step?.title && (
                                <div className="text-black font-semibold text-[18px] font-[Outfit]">
                                    {step.title}
                                </div>
                            )}

                            <div className="mt-2 text-[#333] font-normal text-[16px] font-[Outfit] break-words">
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
