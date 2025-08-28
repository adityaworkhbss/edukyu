const AdmissionProcessMobile = ({ course }) => {
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
        <div className="w-full bg-white py-8 ">
            {/* Heading */}
            <h2 className="text-[#024B53] font-[Outfit] text-[28px] font-semibold leading-normal mb-3">
                Admission Process of {courseName}
            </h2>

            {/* Subtitle */}
            <p className="text-[#515150] font-[Outfit] text-[14px] font-normal leading-normal mb-6">
                Follow these simple steps to secure your admission and start your journey towards academic excellence.
            </p>

            {/* Steps */}
            <div className="flex flex-col gap-6 relative">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 relative">
                        {/* Number Circle */}
                        <div className="bg-[#EFFDFE] min-w-[32px] min-h-[32px] rounded-[6px] flex items-center justify-center z-10">
                            <span className="text-black font-[Outfit] font-semibold text-[16px]">
                                {step?.step || index + 1}
                            </span>
                        </div>

                        {/* Connector Line */}
                        {index !== steps.length - 1 && (
                            <div className="absolute left-[16px] top-[32px] w-[2px] h-[calc(100%+8px)] bg-gray-300 z-0"></div>
                        )}

                        {/* Step Content */}
                        <div className="flex flex-col gap-1">
                            {step?.title && (
                                <span className="text-black font-[Outfit] text-[16px] font-semibold leading-normal">
                                    {step.title}
                                </span>
                            )}
                            <span className="text-[#333] font-[Outfit] text-[14px] font-normal leading-normal">
                                {step?.description || step}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdmissionProcessMobile;
