import Image from "next/image";
import GridComponent from "@/GlobalComponent/GridComponent";
import mainpage_cc_img1 from "@/../public/Resources/Images/mainpage_cc_img1.jpg";
import mainpage_cc_img2 from "@/../public/Resources/Images/mainpage_cc_img2.jpg";
import mainpage_cc_img3 from "@/../public/Resources/Images/mainpage_cc_img3.png";
import mainpage_cc_img4 from "@/../public/Resources/Images/mainpage_cc_img4.jpg";
import banner_hero_image from "../../../../../../public/Resources/Images/banner_hero_image.png";
import {usePageContext} from "@/GlobalComponent/PageContext";

const CompareCollegesCTA = () => {
    const { setCurrentPage } = usePageContext();

    return (
        <div className="group w-[97.5%] relative bg-[#FDBB06] rounded-[52px] px-[56px] flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Text Section - Takes more space */}
            <div className="flex-1 text-left space-y-4 w-full">
                <div className="text-[#024B53] pt-[40px] font-[Outfit] text-[36px] font-semibold leading-none w-full">
                    Confused between colleges?
                </div>

                <div className="text-[#515150] font-[Outfit] text-[20px] font-normal leading-none w-full">
                    Compare the colleges that are on your mind, to see what all they
                    provide and choose the best that you like. Because we want the best
                    for you!
                </div>

                <button className="inline-flex mt-[8px] mb-[48px] items-center justify-center gap-[10px] px-4 py-3 rounded-[12px] bg-[#9B9B9B] group-hover:bg-[#024B53] text-white font-[Outfit] text-[14px] font-medium leading-none"
                        onClick={() => setCurrentPage('compare-college')}
                >
                    Compare Colleges
                </button>
            </div>

            {/* Images - Two rows on the right */}
            <div className="flex flex-row gap-4 flex-shrink-0">
                {/* Top Image */}
                <div className="rounded-xl overflow-hidden">
                    <Image
                        src={mainpage_cc_img1}
                        alt="College 1"
                        className="object-cover w-[172px] h-[192px]"
                    />
                </div>

                {/* Bottom Image */}
                <div className="rounded-xl overflow-hidden">
                    <Image
                        src={mainpage_cc_img2}
                        alt="College 2"
                        className="object-cover w-[172px] h-[192px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default CompareCollegesCTA;
