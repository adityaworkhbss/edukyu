import React from "react";

interface BenefitCardProps {
    children: React.ReactNode;
    className?: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
                                                            children,
                                                            className = "",
                                                        }) => {
    const color = "#024B53";      // border start color
    const thickness = 2;          // border thickness
    const outerRadius = 10;       // same as your old rounded-[10px]
    const innerRadius = outerRadius - thickness;

    // background images for 4 borders
    const bgImage = [
        `linear-gradient(to right, ${color}, #ffffff)`, // top
        `linear-gradient(to top, ${color}, #ffffff)`,   // right
        `linear-gradient(to left, ${color}, #ffffff)`,  // bottom
        `linear-gradient(to bottom, ${color}, #ffffff)` // left
    ].join(", ");

    const bgSize = [
        `100% ${thickness}px`,  // top
        `${thickness}px 100%`,  // right
        `100% ${thickness}px`,  // bottom
        `${thickness}px 100%`   // left
    ].join(", ");

    const bgPos = [
        "top left",    // top
        "top right",   // right
        "bottom left", // bottom
        "top left"     // left
    ].join(", ");

    return (
        <article
            className={`relative flex items-center justify-center w-[295px] h-[134px] p-[${thickness}px] ${className}`}
            style={{
                borderRadius: `${outerRadius}px`,
                backgroundImage: bgImage,
                backgroundRepeat: "no-repeat",
                backgroundSize: bgSize,
                backgroundPosition: bgPos,
                backgroundClip: "padding-box",
                boxSizing: "border-box",
            }}
            role="article"
            tabIndex={0}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: `${innerRadius}px`,
                    background: "#EFFDFE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="text-[#333] text-center text-base font-normal max-sm:text-sm max-sm:leading-[1.4]">
                    {children}
                </div>
            </div>
        </article>
    );
};
