import Image from "next/image";
import { ImageIcon, Instagram, Linkedin } from "lucide-react";
import GridContainer from "@/GlobalComponent/GridContainer";
import GridComponent from "@/GlobalComponent/GridComponent";
import GraduateBanner from '@/../public/Resources/Images/GraduateBanner.png';
import React, {useState} from "react";

const OurProudGraduates = () => {
    const graduates = Array.from({ length: 9 }, (_, i) => ({
        id: i + 1,
        image: "placeholder"
    }));

    const [currentSlide, setCurrentSlide] = useState(4); // Middle slide is active

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <GridContainer>
            <section className="py-[64px] px-[56px] bg-background">
                <div>
                    <div className="mb-[40px]">
                        <h2 className="text-[32px] font-bold text-foreground mb-[20px]">
                            Our Proud Graduates
                        </h2>
                        <p className="text-muted-foreground text-[24px]">Lorem Epsum</p>
                    </div>

                    <div className="inline-flex items-start mb-[40px]">
                        {/* Left - Main Graduate Image */}
                        <GridComponent lastUsedGridEnd={0} gridStart={0} gridEnd={3}>
                            <div className="aspect-1/1 bg-program-image rounded-lg flex items-center justify-center">
                                <ImageIcon size={64} className="text-secondary opacity-60" />
                            </div>
                        </GridComponent>

                        {/* Right - Info & Buttons */}
                        <div className="space-y-6 pl-[40px]">
                            <div className="flex items-center gap-4">
                                {/* Previous Button */}
                                <div className="flex w-[200px] h-[80px] px-[20.436px] pt-[10px] pb-[9px] justify-center items-center bg-secondary text-secondary-foreground rounded-md">
                                    <div
                                        className="w-full h-full bg-no-repeat bg-[length:100.365%_149.275%]"
                                        style={{
                                            backgroundImage: `url(${GraduateBanner.src})`,
                                        }}
                                    ></div>
                                </div>

                                <div className="flex-1 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="181"
                                        height="15"
                                        viewBox="0 0 181 15"
                                        fill="none"
                                        stroke="#000"
                                        strokeWidth="2"
                                    >
                                        <path d="M0.292893 6.79289C-0.0976311 7.18342 -0.0976311 7.81658 0.292893 8.20711L6.65685 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819457 8.07107 0.428932C7.68054 0.0384078 7.04738 0.0384078 6.65685 0.428932L0.292893 6.79289ZM1 7.5V8.5H181V7.5V6.5H1V7.5Z" />
                                    </svg>
                                </div>


                                {/* Next Button */}
                                <div className="flex w-[200px] h-[80px] px-[20.436px] pt-[10px] pb-[9px] justify-center items-center bg-secondary text-secondary-foreground rounded-md">
                                    <div
                                        className="w-full h-full bg-no-repeat bg-[length:100.365%_149.275%]"
                                        style={{
                                            backgroundImage: `url(${GraduateBanner.src})`,
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <div>
                                <div className="text-[20px] font-medium text-[#000000] font-[Outfit] leading-normal mb-5">
                                    Pooja Sarkar
                                </div>

                                <div className="text-[16px] font-normal text-[#707070] font-[Outfit] leading-normal">
                                    "EduKyu's personalized guidance, in-depth program comparisons, and expert career counseling were invaluable. They didn't just tell me about the programs; they understood my aspirations, my strengths, and my weaknesses, and then matched me with the perfect program. They will not only help you find the right program, but they will equip you with the tools and confidence to transform your career."
                                </div>

                            </div>

                            <div className="flex gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                                    <path d="M19.5 3.75C20.362 3.75 21.1886 4.09241 21.7981 4.7019C22.4076 5.3114 22.75 6.13805 22.75 7V20C22.75 20.862 22.4076 21.6886 21.7981 22.2981C21.1886 22.9076 20.362 23.25 19.5 23.25H6.5C5.63805 23.25 4.8114 22.9076 4.2019 22.2981C3.59241 21.6886 3.25 20.862 3.25 20V7C3.25 6.13805 3.59241 5.3114 4.2019 4.7019C4.8114 4.09241 5.63805 3.75 6.5 3.75H19.5ZM19.5 5.91667H6.5C6.21268 5.91667 5.93713 6.0308 5.73397 6.23397C5.5308 6.43713 5.41667 6.71268 5.41667 7V20C5.41667 20.2873 5.5308 20.5629 5.73397 20.766C5.93713 20.9692 6.21268 21.0833 6.5 21.0833H19.5C19.7873 21.0833 20.0629 20.9692 20.266 20.766C20.4692 20.5629 20.5833 20.2873 20.5833 20V7C20.5833 6.71268 20.4692 6.43713 20.266 6.23397C20.0629 6.0308 19.7873 5.91667 19.5 5.91667ZM8.66667 11.3333C8.93201 11.3334 9.18812 11.4308 9.3864 11.6071C9.58469 11.7834 9.71137 12.0264 9.74242 12.2899L9.75 12.4167V17.8333C9.74969 18.1095 9.64396 18.375 9.45441 18.5758C9.26486 18.7766 9.0058 18.8974 8.73016 18.9136C8.45451 18.9298 8.18309 18.8401 7.97135 18.6629C7.75961 18.4857 7.62353 18.2343 7.59092 17.9601L7.58333 17.8333V12.4167C7.58333 12.1293 7.69747 11.8538 7.90063 11.6506C8.1038 11.4475 8.37935 11.3333 8.66667 11.3333ZM11.9167 10.25C12.1704 10.25 12.4161 10.339 12.6109 10.5015C12.8057 10.664 12.9373 10.8898 12.9827 11.1394C13.2009 11.0134 13.4262 10.9002 13.6576 10.8003C14.3802 10.4916 15.4624 10.3215 16.4396 10.6281C16.952 10.7906 17.4666 11.0939 17.8479 11.6107C18.1892 12.0711 18.3733 12.6312 18.4102 13.2606L18.4167 13.5V17.8333C18.4164 18.1095 18.3106 18.375 18.1211 18.5758C17.9315 18.7766 17.6725 18.8974 17.3968 18.9136C17.1212 18.9298 16.8498 18.8401 16.638 18.6629C16.4263 18.4857 16.2902 18.2343 16.2576 17.9601L16.25 17.8333V13.5C16.25 13.1425 16.1633 12.9757 16.107 12.8988C16.026 12.7983 15.9146 12.7268 15.7896 12.6951C15.4126 12.5759 14.8698 12.6388 14.5091 12.7926C13.9674 13.0244 13.4713 13.3884 13.1333 13.7253L13 13.8683V17.8333C12.9997 18.1095 12.894 18.375 12.7044 18.5758C12.5149 18.7766 12.2558 18.8974 11.9802 18.9136C11.7045 18.9298 11.4331 18.8401 11.2213 18.6629C11.0096 18.4857 10.8735 18.2343 10.8409 17.9601L10.8333 17.8333V11.3333C10.8333 11.046 10.9475 10.7705 11.1506 10.5673C11.3538 10.3641 11.6293 10.25 11.9167 10.25ZM8.66667 8.08333C8.95398 8.08333 9.22953 8.19747 9.4327 8.40063C9.63586 8.6038 9.75 8.87935 9.75 9.16667C9.75 9.45398 9.63586 9.72953 9.4327 9.9327C9.22953 10.1359 8.95398 10.25 8.66667 10.25C8.37935 10.25 8.1038 10.1359 7.90063 9.9327C7.69747 9.72953 7.58333 9.45398 7.58333 9.16667C7.58333 8.87935 7.69747 8.6038 7.90063 8.40063C8.1038 8.19747 8.37935 8.08333 8.66667 8.08333Z" fill="#6A6A69"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                                    <path d="M8.44935 2.66675H17.5493C21.016 2.66675 23.8327 5.48341 23.8327 8.95008V18.0501C23.8327 19.7165 23.1707 21.3147 21.9923 22.4931C20.814 23.6714 19.2158 24.3334 17.5493 24.3334H8.44935C4.98268 24.3334 2.16602 21.5167 2.16602 18.0501V8.95008C2.16602 7.28364 2.82801 5.68545 4.00636 4.50709C5.18471 3.32874 6.78291 2.66675 8.44935 2.66675ZM8.23268 4.83341C7.19834 4.83341 6.20636 5.24431 5.47497 5.9757C4.74357 6.70709 4.33268 7.69907 4.33268 8.73341V18.2667C4.33268 20.4226 6.07685 22.1667 8.23268 22.1667H17.766C18.8004 22.1667 19.7923 21.7559 20.5237 21.0245C21.2551 20.2931 21.666 19.3011 21.666 18.2667V8.73341C21.666 6.57758 19.9218 4.83341 17.766 4.83341H8.23268ZM18.6868 6.45841C19.046 6.45841 19.3904 6.60109 19.6444 6.85504C19.8983 7.109 20.041 7.45343 20.041 7.81258C20.041 8.17173 19.8983 8.51617 19.6444 8.77012C19.3904 9.02408 19.046 9.16675 18.6868 9.16675C18.3277 9.16675 17.9833 9.02408 17.7293 8.77012C17.4754 8.51617 17.3327 8.17173 17.3327 7.81258C17.3327 7.45343 17.4754 7.109 17.7293 6.85504C17.9833 6.60109 18.3277 6.45841 18.6868 6.45841ZM12.9993 8.08341C14.4359 8.08341 15.8137 8.6541 16.8295 9.66992C17.8453 10.6857 18.416 12.0635 18.416 13.5001C18.416 14.9367 17.8453 16.3144 16.8295 17.3302C15.8137 18.3461 14.4359 18.9167 12.9993 18.9167C11.5628 18.9167 10.185 18.3461 9.16919 17.3302C8.15336 16.3144 7.58268 14.9367 7.58268 13.5001C7.58268 12.0635 8.15336 10.6857 9.16919 9.66992C10.185 8.6541 11.5628 8.08341 12.9993 8.08341ZM12.9993 10.2501C12.1374 10.2501 11.3107 10.5925 10.7013 11.202C10.0918 11.8115 9.74935 12.6381 9.74935 13.5001C9.74935 14.362 10.0918 15.1887 10.7013 15.7982C11.3107 16.4077 12.1374 16.7501 12.9993 16.7501C13.8613 16.7501 14.688 16.4077 15.2974 15.7982C15.9069 15.1887 16.2493 14.362 16.2493 13.5001C16.2493 12.6381 15.9069 11.8115 15.2974 11.202C14.688 10.5925 13.8613 10.2501 12.9993 10.2501Z" fill="#6A6A69"/>
                                </svg>

                            </div>
                        </div>
                    </div>

                    {/* Graduate avatars row */}
                    <div className="flex justify-center gap-3">
                        {[...Array(9)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleSlideChange(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`rounded-full transition-all ${
                                    index === currentSlide
                                        ? 'w-8 h-8 bg-[#5C5C5C]'
                                        : 'w-7 h-7 bg-[#9B9B9B] blur-[2px] opacity-70'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </GridContainer>
    );
};

export default OurProudGraduates;
