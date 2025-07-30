import Image from "next/image";
import GridComponent from "@/GlobalComponent/GridComponent";
import mainpage_cc_img1 from "@/../public/Resources/Images/mainpage_cc_img1.jpg";
import mainpage_cc_img2 from "@/../public/Resources/Images/mainpage_cc_img2.jpg";
import mainpage_cc_img3 from "@/../public/Resources/Images/mainpage_cc_img3.png";
import mainpage_cc_img4 from "@/../public/Resources/Images/mainpage_cc_img4.jpg";
import banner_hero_image from "../../../../../../public/Resources/Images/banner_hero_image.png";

const CompareCollegesCTA = () => {
    return (
        <div className="w-full relative bg-[#FDBB06] rounded-[52px] px-[56px] flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Text Section */}
            <div className="text-left space-y-4">
                <GridComponent gridStart={0} gridEnd={5}>
                    <div className="text-[#024B53] pt-[40px] font-[Outfit] text-[36px] font-semibold leading-none">
                        Confused between colleges?
                    </div>
                </GridComponent>

                <GridComponent gridStart={0} gridEnd={5}>
                    <div className="text-[#515150] font-[Outfit] text-[20px] pt-[16px] font-normal leading-none">
                        Compare the colleges that are on your mind, to see what all they
                        provide and choose the best that you like. Because we want the best
                        for you!
                    </div>
                </GridComponent>

                <button className="inline-flex mt-[32px] mb-[40px] items-center justify-center gap-[10px] px-4 py-3 rounded-[12px] bg-[#024B53] text-white font-[Outfit] text-[14px] font-medium leading-none">
                    Compare Colleges
                </button>

            </div>


            {/* Images Grid */}
            <div className="relative w-[300px] h-[300px]"> {/* adjust size as needed */}
                {/* Top Left */}
                <div className="absolute -top-20 -left-50 rounded-xl overflow-hidden">
                    <Image
                        src={mainpage_cc_img1}
                        alt="College 1"
                        className="object-cover w-[200px] h-[200px]"
                    />
                </div>

                {/* Top Right */}
                <div className="absolute -top-20 right-10 rounded-xl overflow-hidden">
                    <Image
                        src={mainpage_cc_img2}
                        alt="College 2"
                        className="object-cover w-[200px] h-[200px]"
                    />
                </div>

                {/* Bottom Left */}
                <div className="absolute -bottom-20 -left-40 rounded-xl overflow-hidden">
                    <Image
                        src={mainpage_cc_img3}
                        alt="College 3"
                        className="object-cover w-[200px] h-[200px]"
                    />
                </div>

                {/* Bottom Right */}
                <div className="absolute -bottom-20 right-0 rounded-xl overflow-hidden">
                    <Image
                        src={mainpage_cc_img4}
                        alt="College 4"
                        className="object-cover w-[200px] h-[200px]"
                    />
                </div>
            </div>

        </div>
    );
};

export default CompareCollegesCTA;
