import { Calendar, User, ArrowRight, ImageIcon } from "lucide-react";
import BlogCarousel from "@/Component/Pages/HomePage/HomePageDesktop/Components/ui/BlogCarousel";
import GridComponent from "@/GlobalComponent/GridComponent";

const BlogSection = () => {
    return (
        <section className="py-16 px-[56px] bg-background">
            <div className="">
                <div className="mb-[64px]">

                    <div className="text-[#024B53] font-[Outfit] text-[48px] font-semibold leading-none pb-[16px]">
                        Our Blogs
                    </div>


                    <GridComponent gridStart={0} gridEnd={5}>
                        <div className="text-[#515150] font-[Outfit] text-[20px] font-normal leading-none">
                            Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
                        </div>

                    </GridComponent>


                </div>

                <BlogCarousel/>
            </div>
        </section>
    );
};

export default BlogSection;