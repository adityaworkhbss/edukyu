import Image from "next/image";
import collegepage_hero_img from '@/../public/Resources/Images/collegepage_hero_img.png';
import collegepage_hero from '@/../public/Resources/Images/collegepage_hero.png';

const HeroPageMobile = () => {
    return (
        <div
            className="relative w-full rounded-[12px] overflow-hidden p-5 mt-[32px] h-[505px] flex flex-col justify-between"
            style={{
                background: ` url(${collegepage_hero.src}) center/cover no-repeat `,
            }}
        >
            {/* Text Content */}
            <div className="z-3">
                <h1
                    className="text-white font-[Outfit] text-[28px] font-semibold leading-normal mb-4 mt-3"
                >
                    Noida International University
                </h1>

                <p
                    className="text-white font-[Outfit] text-[14px] font-normal leading-normal"
                >
                    Noida International University (NIU), through its Centre for Distance and Online Education is dedicated to delivering flexible, accessible, and high-quality education.
                    <br /><br />
                    Our programs are designed with a strong emphasis on innovative teaching methodologies, practical skill development, and real-world application, ensuring a dynamic and engaging learning experience.
                </p>

                {/* Button */}
                <div className="mt-[48px]">
                    <button
                        className="rounded-[12px] bg-white text-[#024B53] font-[Outfit] text-[14px] font-medium px-5 py-2"
                    >
                        Apply Now
                    </button>
                </div>
            </div>


            {/* Foreground Student Image */}
            <div className="absolute bottom-[-10px] right-0 z-2">
                <Image
                    src={collegepage_hero_img}
                    alt="Student"
                    className="w-auto h-[300px] object-contain"
                />
            </div>
        </div>
    );
};

export default HeroPageMobile;
