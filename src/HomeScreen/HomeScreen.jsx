import React from "react";
import NumberOfTrust from "./NumberOfTrust/NumberOfTrust";
import CardSlider from "./CardSliders/CardSliders";
import InDemandCourseCard from "./Cards/InDemandCourseCard/InDemandCourseCard";
import {InDemandCourseCardData} from "../Data Modals/InDemandCourseCardData";
import {UniversityCardData} from "../Data Modals/UniversityCardData";
import {BlogsCardData} from "../Data Modals/BlogsCardData";
import {PrimaryDiscoverCourseCardData} from "../Data Modals/PrimaryDiscoverCourseCardData";
import UniversityCard from "./Cards/UniversityCard/UniversityCard";
import PrimaryDiscoverCourseCard from "./Cards/DiscoverCourseCard/PrimaryDiscoverCourseCard";
import BlogsCard from "./Cards/BlogsCard/BlogsCard";
import BannerSection from "./BannerSection/Component/BannerSection";
import SecondryDiscoverCourseCard from "./Cards/DiscoverCourseCard/SecondryDiscoverCourseCard";
import {SecondryDiscoverCourseCardData} from "../Data Modals/SecondryDiscoverCourseCardData";
import CareerTransitionSlider from "./CardSliders/CareerTransitionSlider";
import { GrFormNextLink } from "react-icons/gr";
import Section from "./Section/Section/Section";
import ColoredSection from "./Section/ColoredSection/ColoredSection";
import Subsection from "./Section/Subsection/Subsection";
import CTAButton from "./Section/CTAButton/CTAButton";

export default function HomeScreen() {
    return (
        <div className="home-screen">
            <BannerSection />

            <div className="my-[74px]">
                <Section>
                    <NumberOfTrust />
                </Section>
            </div>

            <Section title="In-Demand Courses" description="Discover in-demand courses across industries">
                <CardSlider
                    cardComponent={InDemandCourseCard}
                    cardData={InDemandCourseCardData}
                />
            </Section>

            <ColoredSection
                title="Universities to Explore"
                description="Unlock your potential with online programs from the best. Earn a degree from renowned universities, recognized for their excellence in online education. Experience cutting-edge curriculum, personalized support, and a global network of alumni, all delivered on your terms."
            >
                <div className="mt-12">
                    <CardSlider
                        cardComponent={UniversityCard}
                        cardData={UniversityCardData}
                    />
                </div>
            </ColoredSection>

            <Section title="Discover Our Courses">
                <CardSlider
                    cardComponent={PrimaryDiscoverCourseCard}
                    cardData={PrimaryDiscoverCourseCardData}
                />
            </Section>

            <Subsection title="Online MBA(32)">
                <CardSlider
                    cardComponent={SecondryDiscoverCourseCard}
                    cardData={SecondryDiscoverCourseCardData}
                />
            </Subsection>

            <Section
                title="Real Stories, Incredible Journeys"
                description="Swipe to find learners like you, or speak to a career expert and get started today."
                className="mb-[72px]"
            >
                <CareerTransitionSlider />
                <div className="mt-[48px] mb-[80px]">
                    <CTAButton>Talk To Expert Counsellor</CTAButton>
                </div>
            </Section>

            <Section>
                <div className="flex items-center justify-between">
                    <h2 className="text-[32px] font-semibold text-[#003E40]">Blogs</h2>
                    <button className="text-[#003E40] text-[32px]">
                        <GrFormNextLink />
                    </button>
                </div>
                <div className="w-full h-[1px] mt-[12px] mb-[48px] bg-[#003E40]"></div>
                <CardSlider
                    cardComponent={BlogsCard}
                    cardData={BlogsCardData}
                />
            </Section>
        </div>
    );
}