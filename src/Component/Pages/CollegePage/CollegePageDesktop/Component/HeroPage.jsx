import Image from "next/image";
import collegepage_hero from '@/../public/Resources/Images/collegepage_hero.png';
import collegepage_hero_img from '@/../public/Resources/Images/collegepage_hero_img.png';

const HeroPage = () => {
    return (
        <div className="w-full  flex">
            {/* Left Section */}
            <div className="w-1/2 flex flex-col justify-center p-8">
                <div className="mb-4 text-[52px] font-semibold text-[#025E68] font-[Outfit]">
                    Manipal University, Jaipur
                </div>

                <div className="mb-4 text-[20px] font-normal text-[#025E68] font-[Outfit]">
                    Noida International University (NIU), through its Centre for Distance and Online Education is dedicated to delivering flexible, accessible, and high-quality education.
                    Our programs are designed with a strong emphasis on innovative teaching methodologies, practical skill development, and real-world application, ensuring a dynamic and engaging learning experience.
                </div>

                <button className="rounded-[12px] border border-white bg-[#025E68] text-white text-[14px] font-medium font-[Outfit] px-6 py-2">
                    Apply Now
                </button>

            </div>

            {/* Right Section */}
            <div className="w-1/2 relative">
                <div className=" ">
                    <Image
                        src={collegepage_hero}
                        alt="College Page Hero"
                        className=""
                    />

                </div>
                <div className="absolute bottom-[-32px] right-[56px]">
                    <Image
                        src={collegepage_hero_img}
                        alt="College Page Hero Image"
                        className=""
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroPage;
