import Image from "next/image";
import collegepage_hero_img from '@/../public/Resources/Images/collegepage_hero_img.png';
import collegepage_hero from '@/../public/Resources/Images/collegepage_hero.png';

const HeroPageMobile = ({ college }) => {
  const bannerImageUrl = college?.university_info?.banner_image || collegepage_hero.src;

  return (
    <div className="relative mt-[32px] w-full max-w-[100%]  aspect-[360/506]">
      {/* Background with SVG clipping */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 360 506"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <clipPath id="heroClip" clipPathUnits="userSpaceOnUse">
            {/* Top corners rounded 30px */}
            <path d="M0 30C0 13.4314 13.4314 0 30 0H330C346.569 0 360 13.4314 360 30V400C360 414 350.612 426 337.238 429L37.238 505C18.313 510 0 495 0 475V30Z" />
          </clipPath>
        </defs>

        {/* Background Image */}
        <image
          href={bannerImageUrl}
          width="360"
          height="506"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#heroClip)"
        />

        {/* Overlay */}
        <rect
          width="360"
          height="506"
          fill="black"
          fillOpacity="0.6"
          clipPath="url(#heroClip)"
        />
      </svg>

      {/* Text Content */}
      <div className="absolute top-0 left-0 p-5 flex flex-col justify-start h-full w-full">
        <h1 className="text-white font-[Outfit] text-[24px] sm:text-[28px] font-semibold leading-snug mb-3 mt-4">
          {college.university_info.name}
        </h1>

        <p className="text-white font-[Outfit] text-[14px] font-normal leading-relaxed">
          {college.university_info.about.description}
        </p>

        {/* Button */}
        <div className="mt-6">
          <button className="rounded-[12px] bg-white text-[#024B53] font-[Outfit] text-[14px] font-medium px-5 py-2 shadow-md">
            Apply Now
          </button>
        </div>
      </div>

      {/* Foreground Student Image */}
      <div className="absolute bottom-[-10px] right-0 z-20">
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
