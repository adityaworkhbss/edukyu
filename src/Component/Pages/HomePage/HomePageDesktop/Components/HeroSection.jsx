import React from "react";
import GridContainer from "@/GlobalComponent/GridContainer";
import GridComponent from "@/GlobalComponent/GridComponent";

const HeroSection = ({ imageUrl }) => {
    return (
        // <GridContainer>
            <section className="relative text-hero-text py-[72px] w-full">
                {/* Background image or fallback */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: imageUrl
                            ? `url(${imageUrl})`
                            : "linear-gradient(to right, #d1d5db, #9ca3af)",
                        opacity: 1,
                        zIndex: 0,
                    }}
                />

                {/* Content on top */}
                <div className="flex flex-inline px-[56px]">
                    <div className="relative z-10 items-center w-full">
                        {/*<GridComponent gridStart={1} gridEnd={5}>*/}
                        <div>
                            <div className="text-white font-[Outfit] text-[32px] font-semibold leading-none">
                                Lorem Ipsum is placeholder text used in the graphic, print.
                            </div>

                            <div className="text-white font-[Outfit] text-[20px] font-normal leading-none pt-3">
                                Lorem Ipsum is placeholder text used in the graphic, print.
                                Lorem Ipsum is placeholder text used in the graphic, print.
                                Lorem Ipsum is placeholder text used in the graphic, print.
                                Lorem Ipsum is placeholder text used in the graphic, print.
                            </div>

                            <button className="bg-white/80 mt-[48px] font-[outfit] text-foreground border border-white/80 rounded-[12px] px-8 py-3 font-medium text-lg transition-colors hover:bg-white">
                                Get Started
                            </button>
                        </div>
                        {/*</GridComponent>*/}
                    </div>

                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/6405fd06c99d97c3f8c90c6f6b73d72df04f0b76?placeholderIfAbsent=true"
                            alt="Career navigation illustration"
                            className="w-[358px] h-[318px] flex-shrink-0 aspect-[179/159] cover mb-[-22px] mt-3"
                        />
                </div>
            </section>
        // </GridContainer>
    );
};

export default HeroSection;
