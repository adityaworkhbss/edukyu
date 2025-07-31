import Image from "next/image";
import { ImageIcon, Instagram, Linkedin } from "lucide-react";
import GridContainer from "@/GlobalComponent/GridContainer";
import GridComponent from "@/GlobalComponent/GridComponent";
import GraduateBanner from '@/../public/Resources/Images/GraduateBanner.png';
import React, {useState} from "react";
import CareerSuccessCard from "@/Component/Pages/HomePage/HomePageDesktop/Components/ui/CareerSuccessCard";

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
                    <div className="mb-[64px]">
                        <GridComponent gridStart={0} gridEnd={5}>
                            <div className="text-[48px] font-[600] leading-none text-[#024B53] font-[Outfit] mb-[16px]">
                                Testimonials
                            </div>
                        </GridComponent>

                        <GridComponent gridStart={0} gridEnd={5}>
                            <div className="text-[20px] font-[400] leading-none text-[#515150] font-[Outfit]">
                                Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                            </div>
                        </GridComponent>
                    </div>

                    <CareerSuccessCard
                    />

                </div>
            </section>
        </GridContainer>
    );
};

export default OurProudGraduates;
