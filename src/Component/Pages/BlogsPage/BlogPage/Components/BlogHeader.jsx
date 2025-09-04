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
        <>
            <div className="flex">
                <div className="bg-hero-gradient h-[600px] w-full bg-[#025E68] pl-12 flex gap-x-6">
                    <div className="w-1/2">
                        <div
                            className="text-[#FFC70F] font-[Outfit] pt-[72px] text-[52px] font-semibold leading-normal mb-6"
                        >
                            {title}
                        </div>

                        <div className="text-white font-[Outfit] text-[40px]  font-normal leading-normal">
                            {metatitle}
                        </div>
                    </div>


                    <div className="relative w-1/2 pt-[72px]">
                        <img src={BlogBanner1.src} />
                        <img className="absolute top-[165px] left-[250px]" src={BlogBanner2.src} />
                    </div>
                </div>

            </div>
        </>
    );
};

export default BlogHeader;
