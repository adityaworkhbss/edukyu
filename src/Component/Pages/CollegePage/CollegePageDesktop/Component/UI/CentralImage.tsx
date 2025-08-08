
import React from 'react';

export const CentralImage: React.FC = () => {
    return (
        <div className="flex w-[278px] flex-col justify-end items-center absolute h-[460px] left-[360px] top-[201px] max-md:relative max-md:w-full max-md:max-w-[300px] max-md:h-auto max-md:mt-0 max-md:mb-10 max-md:mx-auto max-md:left-0 max-md:top-0 max-sm:max-w-[250px] max-sm:mb-[30px]">
            <div className="w-[278px] h-[474px] absolute rounded-[0_0_50.009px_50.009px] left-0 top-0 max-md:relative max-md:w-full max-md:h-[400px] max-sm:h-[350px]">
                <div className="w-[231px] h-[408px] border absolute rounded-[94.016px] border-dashed border-[#024B53] left-6 top-[41px] max-md:-translate-x-2/4 max-md:left-2/4 max-md:top-5 max-sm:w-[180px] max-sm:h-80" />
                <div className="w-[204px] h-[377px] absolute bg-[#024B53] rounded-[94.016px] left-[37px] top-[54px] max-md:-translate-x-2/4 max-md:left-2/4 max-md:top-[30px] max-sm:w-40 max-sm:h-[300px]" />
                <div className="w-[204px] h-[377px] absolute bg-[#024B53] rounded-[94.016px] left-[37px] top-[54px] max-md:-translate-x-2/4 max-md:left-2/4 max-md:top-[30px] max-sm:w-40 max-sm:h-[300px]" />
                <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/12b5272f2eb297c728ba41b0d9e8e594a7fb1374?width=408"
                    alt="Professional businesswoman representing NIU Online education"
                    className="w-[204px] h-[390px] absolute rounded-[94.016px] left-[37px] top-[42px] max-md:-translate-x-2/4 max-md:left-2/4 max-md:top-5 max-sm:w-40 max-sm:h-[310px]"
                />
            </div>
        </div>
    );
};

