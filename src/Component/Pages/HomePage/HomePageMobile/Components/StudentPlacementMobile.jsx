import React from 'react';

export const StudentPlacementMobile = () => {
    const placementLogos = Array(8).fill(null); // Replace with real logo data later

    // Break into groups of 4 logos per "page"
    const logoGroups = [];
    for (let i = 0; i < placementLogos.length; i += 4) {
        logoGroups.push(placementLogos.slice(i, i + 4));
    }

    return (
        <section className="mt-12">
            <h2 className="text-[28px] text-[#024B53] font-[Outfit] font-semibold leading-normal">
                Our Student Placed
            </h2>
            <p className="text-[#515150] text-[14px] font-[Outfit] font-normal leading-normal mt-2">
                Lorem Ipsum is placeholder text used in the graphic, print.
            </p>

            {/* Swipeable container */}
            <div className="flex overflow-x-auto mt-[32px] space-x-4 no-scrollbar snap-x snap-mandatory">
                {logoGroups.map((group, groupIndex) => (
                    <div
                        key={groupIndex}
                        className="flex-shrink-0 w-full snap-start grid grid-cols-2 gap-4"
                    >
                        {group.map((logo, logoIndex) => (
                            <div
                                key={logoIndex}
                                className="flex items-center justify-center bg-[#D9D9D9] rounded-lg p-2 aspect-square"
                            >
                                <img
                                    src={logo?.url || 'https://via.placeholder.com/120x60?text=Logo'}
                                    alt={`Company logo ${groupIndex * 4 + logoIndex + 1}`}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};
