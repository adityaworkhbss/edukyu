export const BlogCard = ({ title, subtitle, description, image, category }) => {
    return (
        <div className="overflow-hidden group hover:scale-105 transition-transform duration-300 border-0 shadow-lg">
            {/* Top Image + Overlay Section */}
            <div className="relative bg-blog-teal text-blog-teal-foreground h-[230px]">

                <div className="right-0 top-0 h-full">
                    <img
                        src={image}
                        alt="Student"
                        className="h-full w-full  object-center bg-cover"
                    />
                </div>
            </div>

            {/* Bottom Text Content */}
            <div className="p-6 bg-white">
                <div className="mb-3">
          <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
            {category}
          </span>
                </div>
                <h4 className="font-semibold text-lg mb-3 text-foreground line-clamp-2">
                    {title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {description}
                </p>
                <button className="text-primary font-medium text-sm hover:underline">
                    Read More
                </button>
            </div>
        </div>
    );
};
