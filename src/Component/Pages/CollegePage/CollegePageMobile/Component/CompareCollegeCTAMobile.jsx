import Image from "next/image";
import mainpage_cc_img1 from "@/../public/Resources/Images/mainpage_cc_img1.jpg";
import mainpage_cc_img2 from "@/../public/Resources/Images/mainpage_cc_img2.jpg";
import mainpage_cc_img3 from "@/../public/Resources/Images/mainpage_cc_img3.png";
import {usePageContext} from "@/GlobalComponent/PageContext";

const CompareCollegesCTAMobile = () => {

    const { setCurrentPage } = usePageContext();

    return (
        <div className="relative w-full rounded-[32px] h-[400px] p-5 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 top-0 h-[340px] rounded-[40px] bg-[#FDBB06] z-0" />

            {/* Text Content */}
            <div className="relative z-10 text-left">
                <div className="text-[#024B53] font-[Outfit] text-[28px] font-semibold leading-[32px] mb-4 mt-3">
                    Confused between colleges?
                </div>
                <div className="text-[#2B2B2A] font-[Outfit] text-[14px] font-normal leading-[22px] mb-6">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </div>
                <button

                    onClick={() =>{
                        setCurrentPage('compare-college');
                    }}

                    className="w-full  inline-flex items-center justify-center px-6 py-3 rounded-[12px] bg-[#024B53] text-white text-[14px] font-medium font-[Outfit]">
                    Compare Colleges
                </button>
            </div>

            {/* College Images */}
            {/* Left Image (Image 3) */}
            <div className="absolute left-10 mt-[56px] w-[100px] h-[110px] rounded-[16px] overflow-hidden z-10 shadow-md">
                <Image
                    src={mainpage_cc_img3}
                    alt="College Left"
                    width={100}
                    height={110}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Right Image (Image 1) */}
            <div className="absolute right-10 mt-[56px] w-[100px] h-[110px] rounded-[16px] overflow-hidden z-10 shadow-md">
                <Image
                    src={mainpage_cc_img1}
                    alt="College Right"
                    width={100}
                    height={110}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Center Image (Image 2) - Higher */}
            {/*<div className="absolute left-1/2 top-[220px] transform -translate-x-1/2 w-[108px] h-[121px] rounded-[16px] overflow-hidden z-10 shadow-md">*/}
            {/*    <Image*/}
            {/*        src={mainpage_cc_img2}*/}
            {/*        alt="College Center"*/}
            {/*        width={108}*/}
            {/*        height={121}*/}
            {/*        className="object-cover w-full h-full"*/}
            {/*    />*/}
            {/*</div>*/}

        </div>
    );
};

export default CompareCollegesCTAMobile;
