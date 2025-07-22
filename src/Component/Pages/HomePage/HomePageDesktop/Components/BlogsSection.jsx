import { Calendar, User, ArrowRight, ImageIcon } from "lucide-react";
import BlogCarousel from "@/Component/Pages/HomePage/HomePageDesktop/Components/ui/BlogCarousel";

const BlogSection = () => {
    return (
        <section className="py-16 px-[56px] bg-background">
            <div className="">
                {/* Header */}
                <div className="mb-10">
                    <div
                        className="text-[#000] font-[Outfit] text-[32px] font-semibold leading-[48px] tracking-[1px] mb-5"
                    >
                        Our Blogs
                    </div>

                    <div className="text-[#9B9B9B] font-[Outfit] text-[24px] font-medium">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>

                </div>

                <BlogCarousel/>
            </div>
        </section>
    );
};

export default BlogSection;