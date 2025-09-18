import Image from "next/image";
import mainpage_cc_img1 from "@/../public/Resources/Images/mainpage_cc_img1.jpg";
import mainpage_cc_img2 from "@/../public/Resources/Images/mainpage_cc_img2.jpg";
import mainpage_cc_img3 from "@/../public/Resources/Images/mainpage_cc_img3.png";
import { usePageContext } from "@/GlobalComponent/PageContext";
import Link from "next/link";

const CompareCollegesCTAMobile = () => {

    const { setCurrentPage } = usePageContext();

    return (
        <div className="relative w-full rounded-[32px] mt-8  overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 top-0 h-[363px] rounded-[40px] bg-[#FDBB06] z-0" />

            {/* Text Content */}
            <div className="relative z-10 text-left px-5 pt-8 pb-6">
                <div className="text-[#024B53] font-[Outfit] text-[28px] font-semibold leading-[32px] mb-3">
                    Confused between colleges?
                </div>
                <div className="text-[#2B2B2A] font-[Outfit] text-[14px] font-normal leading-[22px] mb-6">
                    Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                </div>
                <Link href="/compare-colleges">
                    <button
                        //onClick={() => setCurrentPage('compare-colleges-college')}
                        className="w-full inline-flex items-center justify-center px-4 py-3 rounded-[12px] bg-[#024B53] text-white text-[14px] font-medium font-[Outfit]">
                        Compare Colleges
                    </button>
                </Link>
                {/* <button
                    onClick={() => setCurrentPage('compare-colleges-college')}
                    className="w-full mt-2 inline-flex items-center justify-center px-6 py-3 rounded-[12px] bg-[#024B53] text-white text-[14px] font-medium font-[Outfit]">
                    Compare Colleges
                </button> */}
            </div>

            {/* College Images side by side with offset */}
            <div className="relative z-10 flex justify-center items-start gap-2">
                {/* Left Image (Image 3) - 32px lower */}
                <div className="w-[100px] h-[110px] rounded-[16px] overflow-hidden shadow-md mt-8">
                    <Image
                        src={mainpage_cc_img3}
                        alt="College Left"
                        width={108}
                        height={121}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Center Image (Image 2) - at top */}
                <div className="w-[108px] h-[121px] rounded-[16px] overflow-hidden shadow-md">
                    <Image
                        src={mainpage_cc_img2}
                        alt="College Center"
                        width={108}
                        height={121}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Right Image (Image 1) - 32px lower */}
                <div className="w-[100px] h-[110px] rounded-[16px] overflow-hidden shadow-md mt-8">
                    <Image
                        src={mainpage_cc_img1}
                        alt="College Right"
                        width={108}
                        height={121}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

        </div>
    );
};

export default CompareCollegesCTAMobile;
