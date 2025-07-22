import React from 'react';

export const StudentPlacement = () => {
    const placementLogos = Array(8).fill(null);

    return (
        <section className="mt-12">
            <h2 className="w-full max-w-[321px] text-xl text-[#181D27] font-semibold">
                Our Student Placed
            </h2>
            <p className="text-[#535862] text-base font-normal mt-2">
                Lorem Ipsum is placeholder text used in the graphic, print.
            </p>

            <div className="flex flex-wrap gap-4 mt-[35px]">
                {placementLogos.map((logo, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center bg-[rgba(217,217,217,1)] rounded-lg p-2"
                        style={{
                            width: `calc((100% - 48px) / 4)`,
                            aspectRatio: '1 / 1',
                        }}
                    >
                        <img
                            src={logo?.url || "https://via.placeholder.com/120x60?text=Logo"}
                            alt={`Company logo ${index + 1}`}
                            className="h-full w-full object-contain"
                        />
                    </div>
                ))}
            </div>

        </section>

    );
};
