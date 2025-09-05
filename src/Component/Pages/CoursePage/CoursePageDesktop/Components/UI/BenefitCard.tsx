import React from "react";

interface BenefitCardProps {
    children: React.ReactNode;
    className?: string;
    color?: string;            // border color (start)
    thickness?: number;       // border thickness in px
    outerRadius?: number;     // outer border radius in px
    width?: number;           // optional card width (px)
    height?: number;          // optional card height (px)
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
                                                            children,
                                                            className = "",
                                                            color = "#024B53",
                                                            thickness = 2,
                                                            outerRadius = 6,
                                                            width = 295,
                                                            height = 134,
                                                        }) => {
    // background images: top, right, bottom, left
    const bgImage = [
        // Top -> left to right
        `linear-gradient(to right, ${color}, #ffffff)`,
        // Right -> bottom to top  (to top means gradient goes from bottom -> top)
        `linear-gradient(to top, ${color}, #ffffff)`,
        // Bottom -> right to left
        `linear-gradient(to left, ${color}, #ffffff)`,
        // Left -> top to bottom
        `linear-gradient(to bottom, ${color}, #ffffff)`,
    ].join(", ");

    const bgSize = [
        // top: full width x thickness
        `100% ${thickness}px`,
        // right: thickness x full height
        `${thickness}px 100%`,
        // bottom: full width x thickness
        `100% ${thickness}px`,
        // left: thickness x full height
        `${thickness}px 100%`,
    ].join(", ");

    // background positions for each gradient
    const bgPos = [
        "top left",    // top gradient
        "top right",   // right gradient
        "bottom left", // bottom gradient
        "top left",    // left gradient
    ].join(", ");

    const innerRadius = Math.max(0, outerRadius - thickness);

    return (
        <div
            className={`relative ${className}`}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                padding: `${thickness}px`, // creates the "border" thickness area
                borderRadius: `${outerRadius}px`,
                // the four gradient sides:
                backgroundImage: bgImage,
                backgroundRepeat: "no-repeat",
                backgroundSize: bgSize,
                backgroundPosition: bgPos,
                // ensure the background is clipped to the outer rounded rect:
                backgroundClip: "padding-box",
                boxSizing: "border-box",
            }}
            role="article"
            tabIndex={0}
        >
            {/* Inner face */}
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: `${innerRadius}px`,
                    background: "#EFFDFE", // content background
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="text-[#333] text-center text-base font-normal">
                    {children}
                </div>
            </div>
        </div>
    );
};
