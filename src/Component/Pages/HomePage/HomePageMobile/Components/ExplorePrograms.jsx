import React, { useState } from 'react';
import GridContainer from "@/GlobalComponent/GridContainer";

export const ExplorePrograms = () => {
    const [selectedProgram, setSelectedProgram] = useState('PG');

    const handleProgramChange = (program) => {
        setSelectedProgram(program);
    };

    const programs = Array.from({ length: 8 }).map((_, i) => ({
        id: i + 1,
        title: 'Master of Business Administration',
        duration: 'Duration - 2 Year',
        price: 'Starting @120/-per day',
        image:
            'https://api.builder.io/api/v1/image/assets/TEMP/b65a88b4c2fc598d32a0488520aefcb330494ab6?placeholderIfAbsent=true'
    }));

    return (
        <GridContainer>
            <section className="mt-12">
                <h2 className="text-[#181D27] text-xl font-semibold">
                    Explore Programs
                </h2>
                <p className="text-[#535862] text-base font-normal mt-2">
                    Lorem Ipsum is placeholder text used in the graphic, print.
                </p>

                <div className="border flex w-full overflow-hidden text-sm text-[#383837] font-normal whitespace-nowrap mt-8 rounded-lg border-solid border-[#9B9B9B]">
                    <button
                        onClick={() => handleProgramChange('PG')}
                        className={`flex-1 flex items-center gap-2.5 justify-center px-5 py-3 ${
                            selectedProgram === 'PG'
                                ? 'bg-[rgba(53,126,134,1)] text-white font-medium'
                                : 'bg-[#E1E1E1] text-[#383837]'
                        }`}
                    >
                        <div className="self-stretch my-auto">PG</div>
                    </button>

                    <button
                        onClick={() => handleProgramChange('UG')}
                        className={`flex-1 flex items-center gap-2.5 justify-center px-5 py-3 border-r border-r-[#9B9B9B] border-solid ${
                            selectedProgram === 'UG'
                                ? 'bg-[rgba(53,126,134,1)] text-white font-medium'
                                : 'bg-[#E1E1E1] text-[#383837]'
                        }`}
                    >
                        <div className="self-stretch my-auto">UG</div>
                    </button>

                    <button
                        onClick={() => handleProgramChange('Diploma')}
                        className={`flex-1 flex items-center gap-2.5 justify-center px-5 py-3 ${
                            selectedProgram === 'Diploma'
                                ? 'bg-[rgba(53,126,134,1)] text-white font-medium'
                                : 'bg-[#E1E1E1] text-[#383837]'
                        }`}
                    >
                        <div className="self-stretch my-auto">Diploma/Certificate</div>
                    </button>
                </div>



                <article className="border overflow-hidden mt-8 rounded-xl border-solid border-[#CDCDCD]">
                    <div className="flex w-full g">
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/b65a88b4c2fc598d32a0488520aefcb330494ab6?placeholderIfAbsent=true"
                            alt="Master of Business Administration program"
                            className="aspect-[2.24] bg-cover "
                        />
                    </div>
                    <div className="w-full p-4">
                        <div className="w-full">
                            <h3 className="text-black text-base font-semibold">
                                Master of Business Administration
                            </h3>
                            <div className="w-full text-sm text-[#515150] font-normal mt-3">
                                <div className="text-[#515150]">Duration - 2 Year</div>
                                <div className="text-[#515150] mt-2">Starting @120/-per day</div>
                            </div>
                        </div>
                        <div className="flex w-full gap-2.5 text-sm font-normal mt-10">
                            <button className="justify-center items-center border flex gap-2.5 overflow-hidden text-[#9B9B9B] whitespace-nowrap flex-1 shrink basis-[0%] p-3 rounded-lg border-solid border-[#9B9B9B] hover:bg-gray-50 transition-colors">
                                <div className="text-[#9B9B9B] self-stretch my-auto">Explore</div>
                            </button>
                            <button className="justify-center items-center flex gap-2.5 overflow-hidden text-white w-[100px] bg-[#679EA4] px-[5px] py-3 rounded-lg hover:bg-[#5a8a91] transition-colors">
                                <div className="self-stretch my-auto">View Program</div>
                            </button>
                        </div>
                    </div>
                </article>


            </section>
        </GridContainer>

    );
};
