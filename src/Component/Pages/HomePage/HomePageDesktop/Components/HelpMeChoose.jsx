import { ImageIcon } from "lucide-react";
import GridContainer from "@/GlobalComponent/GridContainer";
import GridComponent from "@/GlobalComponent/GridComponent";

const HelpMeChoose = () => {
    return (

            <div className="px-[56px] py-[64px]">
                <section className="rounded-[12px] bg-gradient-to-l w-full from-[rgba(53,126,134,0.4)] to-[#357E86]  pl-[24px] pt-[24px] pb-[40px] ">
                    <GridContainer>
                    <div className="">
                        <div className="">
                            {/* Left side - Form */}
                            <GridComponent
                                lastUsedGridEnd={0} gridStart={0} gridEnd={7}
                            >
                                <div className="bg-hero-bg text-hero-text rounded-lg relative z-10">
                                    <h2 className="text-[32px] font-semibold text-white font-[Outfit] mb-4">
                                        Help me Choose
                                    </h2>

                                    <p className="text-[24px] font-normal text-[#CDCDCD] font-[Outfit] mb-[28px]">
                                        Lorem Epsum
                                    </p>


                                    <div className="space-y-4">
                                        <p className="text-[24px] font-normal text-white font-[Outfit]">
                                            Q1. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        </p>


                                        <div className="space-y-2">
                                    <textarea
                                        className="w-full bg-white h-[64px] text-black placeholder:text-[#707070] resize-none rounded-[12px] px-3 py-2"
                                    />



                                            {/*    <button className="bg-white text-foreground hover:bg-white/90 mt-6 px-4 py-2 rounded-md font-medium transition-colors">*/}
                                            {/*    Submit*/}
                                            {/*</button>*/}

                                            <div className="text-[20px] font-normal text-[rgba(210,210,210,0.5)] font-outfit">
                                                Suggestion: Lorem ipsum dolor sit amet, consectetur adipis......
                                            </div>


                                        </div>
                                    </div>
                                </div>

                            </GridComponent>
                                {/* Right side - Image placeholders */}
                                {/*<div className="space-y-4">*/}
                                {/*    <div className="grid grid-cols-2 gap-4">*/}
                                {/*        <div className="aspect-square bg-program-image rounded-lg flex items-center justify-center">*/}
                                {/*            <ImageIcon size={32} className="text-secondary opacity-60" />*/}
                                {/*        </div>*/}
                                {/*        <div className="aspect-[3/4] bg-program-image rounded-lg flex items-center justify-center">*/}
                                {/*            <ImageIcon size={32} className="text-secondary opacity-60" />*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className="aspect-[4/3] bg-program-image rounded-lg flex items-center justify-center">*/}
                                {/*        <ImageIcon size={48} className="text-secondary opacity-60" />*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                        </div>

                    </div>
                    </GridContainer>
                </section>
            </div>

    );
};

export default HelpMeChoose;