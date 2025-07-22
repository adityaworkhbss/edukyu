import { ImageIcon } from "lucide-react";
import GridContainer from "@/GlobalComponent/GridContainer";
import GridComponent from "@/GlobalComponent/GridComponent";

const ContactSection = (imageUrl) => {
    return (
        <section className="pt-[63px]  pb-[85px] bg-background">
            <GridContainer>
                    <div className="px-[56px] flex items-start justify-between w-full gap-6">
                        <GridComponent lastUsedGridEnd={0} gridStart={0} gridEnd={5}>
                            <div className="pl-[24px] w-full">
                                <div className="aspect-[4/3] rounded-[16px] overflow-hidden bg-[#CDCDCD] flex items-center justify-center">
                                    {imageUrl ? (
                                        <img
                                            src={imageUrl}
                                            alt="Program"
                                            className="w-full h-[302px] object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-[302px] bg-[#CDCDCD]" />
                                    )}
                                </div>
                            </div>
                        </GridComponent>

                        <GridComponent lastUsedGridEnd={0} gridStart={0} gridEnd={5}>
                            <div className=" w-full">
                                <div className="space-y-[32px]">
                                    <div className="text-[32px] font-semibold text-black leading-none font-outfit mb-[32px]">
                                        Contact us
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-foreground font-medium">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                        <p className="text-muted-foreground text-sm">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-[12px] pt-[80px]">
                                    <input
                                        type="tel"
                                        placeholder="Contact number"
                                        className="flex-1 h-12 rounded-md border border-input bg-program-image px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    />
                                    <button
                                        className="flex w-[154px] h-auto text-white font-[Outfit] px-[16px] py-[12px] bg-[#679EA4] justify-center items-start size-[20px] gap-[13.072px] bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md font-medium transition-colors"
                                    >
                                        Send request
                                    </button>

                                </div>
                            </div>
                        </GridComponent>
                    </div>
            </GridContainer>
        </section>
    );
};

export default ContactSection;