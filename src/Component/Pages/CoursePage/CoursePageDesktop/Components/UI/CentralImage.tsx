import React from 'react';

interface CentralImageMobileProps {
    img: string;
}

export const CentralImage: React.FC<CentralImageMobileProps> = ({ img }) => {
    if (!img || img.trim() === '') return null;

    return (
        // make this container take available space and center children both horizontally & vertically
        <div className="flex w-full h-full justify-center items-center">
            <div className="relative w-[278px] h-[460px] max-md:w-full max-md:max-w-[300px] max-md:h-auto max-sm:max-w-[250px]">
                {/* background rounded container */}
                <div className="absolute inset-0 rounded-[0_0_50.009px_50.009px] bg-transparent" />

                {/* dashed border card - centered */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[41px] w-[231px] h-[408px] border rounded-[94.016px] border-dashed border-[#024B53] max-md:top-5 max-sm:w-[180px] max-sm:h-80" />

                {/* two stacked background cards - centered */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[54px] w-[204px] h-[377px] bg-[#024B53] rounded-[94.016px] max-sm:w-40 max-sm:h-[300px]" />
                <div className="absolute left-1/2 -translate-x-1/2 top-[54px] w-[204px] h-[377px] bg-[#024B53] rounded-[94.016px] opacity-90 max-sm:w-40 max-sm:h-[300px]" />

                {/* centered image */}
                <img
                    src={img}
                    alt="Central visual"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[204px] h-[390px] rounded-[94.016px] max-md:top-1/2 max-md:left-1/2 max-sm:w-40 max-sm:h-[310px] object-cover"
                />
            </div>
        </div>
    );
};