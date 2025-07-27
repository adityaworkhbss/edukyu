export const BlogCard = ({
                             title,
                             subtitle,
                             description,
                             image,
                             category = "BLOG",
                             readMoreUrl
                         }) => {
    // Fallback image in case of broken links
    const fallbackImage = "https://edukyu.com/public/Blogs/eee.jpg";

    // Handle image loading errors
    const handleImageError = (e) => {
        e.target.src = fallbackImage;
    };

    return (
        <div className="overflow-hidden group hover:scale-105 transition-transform duration-300 border-0 shadow-lg h-full flex flex-col">
            {/* Top Image + Overlay Section */}
            <div className="relative bg-gray-100 text-blog-teal-foreground h-[230px] flex-shrink-0">
                <div className="right-0 top-0 h-full w-full">
                    <img
                        src={`https://edukyu.com/public/${image }`}

                        alt={title || "Blog post"}
                        className="h-full w-full object-cover"
                        // onError={handleImageError}
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Bottom Text Content */}
            <div className="p-6 bg-white flex-grow flex flex-col">
                <div className="mb-3">
          <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
            {category}
          </span>
                </div>

                <h4 className="font-semibold text-lg mb-1 text-foreground line-clamp-2">
                    {title || "Untitled Blog Post"}
                </h4>

                {subtitle && (
                    <p className="text-sm text-gray-500 mb-2 line-clamp-1">
                        {subtitle}
                    </p>
                )}

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                    {description || "No description available."}
                </p>

                {readMoreUrl ? (
                    <a
                        href={readMoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium text-sm hover:underline mt-auto"
                    >
                        Read More →
                    </a>
                ) : (
                    <button className="text-primary font-medium text-sm hover:underline mt-auto cursor-not-allowed opacity-50">
                        Read More
                    </button>
                )}
            </div>
        </div>
    );
};