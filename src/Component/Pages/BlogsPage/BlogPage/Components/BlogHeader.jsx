import BlogBanner1 from '@/../public/Resources/Images/BlogBanner/BlogBanner1.png';
import BlogBanner2 from '@/../public/Resources/Images/BlogBanner/BlogBanner2.png';

const BlogHeader = ({
                        imageurl,
                        metatitle,
                        title,
                        authorName,
                        category,
                        timestamp,
                        formatDate,
                        handleShare,
                    }) => {
    return (
        <div className="bg-hero-gradient bg-[#025E68] w-full flex flex-col lg:flex-row lg:gap-x-6 lg:pl-12">
            {/* Left side text */}
            <div className="w-full lg:w-1/2 px-5 sm:px-8 lg:px-0 pt-10 lg:pt-[72px]">
                <h1 className="text-[#FFC70F] font-[Outfit] text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-semibold leading-snug mb-4 lg:mb-6">
                    {title}
                </h1>

                <h2 className="text-white font-[Outfit] text-lg sm:text-xl md:text-2xl lg:text-[40px] font-normal leading-normal">
                    {metatitle}
                </h2>
            </div>

            {/* Right side images */}
            <div className="relative w-full lg:w-1/2 flex justify-center pt-8 lg:pt-[72px]">
                <img
                    src={BlogBanner1.src}
                    alt="Blog Banner 1"
                    className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-auto"
                />
                <img
                    src={BlogBanner2.src}
                    alt="Blog Banner 2"
                    className="absolute top-14 left-1/3 sm:top-28 sm:left-1/3 md:top-32 md:left-1/3 lg:top-[115px] lg:left-[250px] w-1/2 sm:w-1/4 md:w-auto"
                />
            </div>
        </div>
    );
};

export default BlogHeader;
