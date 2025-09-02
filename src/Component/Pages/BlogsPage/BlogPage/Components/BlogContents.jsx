import {
    Calendar,
    MessageCircle,
    Share2,
    User,
    Tag,
    Facebook,
    Twitter,
    Linkedin,
} from "lucide-react";
import CommentSection from "@/Component/Pages/BlogsPage/BlogPage/Components/CommentSection";
import "./BlogContent.css"; // Import the CSS file

const BlogContent = ({
                         html,
                         userid,
                         category,
                         shorturl,
                         metatitle,
                         imageurl,
                         timestamp,
                         authorName = "Author",
                     }) => {

    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
            });
        } catch {
            return dateString;
        }
    };

    const shareUrl = window.location.href;
    const shareText = metatitle;

    const handleShare = (platform) => {
        let url = "";
        switch (platform) {
            case "facebook":
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                )}`;
                break;
            case "twitter":
                url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    shareText
                )}&url=${encodeURIComponent(shareUrl)}`;
                break;
            case "linkedin":
                url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    shareUrl
                )}`;
                break;
        }
        window.open(url, "_blank", "width=600,height=400");
    };

    return (
        <article className="w-full bg-background shadow-blog rounded-lg overflow-hidden">
            {/* Hero Section */}
            <div className=" bg-hero-gradient flex items-center">
                {imageurl && (
                    <div className=" inset-0">
                        <img
                            src={`https://edukyu.com/public/${imageurl}`}
                            alt={metatitle}
                            className="w-full h-[550px] object-cover flex-shrink-0 rounded-[60px] bg-cover bg-center"
                        />

                        {/* Overlay layer to create bottom cut */}
                        <div className="absolute inset-0 bg-black/40 clip-slant"></div>
                    </div>
                )}

                {/* Your content goes here */}
                <div className="relative z-10 flex flex-col md:flex-row gap-8 p-8">
                    {/* other children */}
                </div>
            </div>


            {/* Article Header */}
            <div className="bg-background  mt-[128px] border-b border-border">
                <h2 className="text-[48px] font-semibold leading-tight mb-4">
                    {metatitle}
                </h2>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center text-[20px] justify-between gap-x-[64px]">
                    <div className="flex flex-wrap items-center space-x-[64px]">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <User className="w-4 h-4" />
                            <span className="text-[20px] font-medium">{authorName}</span>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Tag className="w-4 h-4" />
                            <span className="text-[20px]">{category}</span>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="text-[20px]">{formatDate(timestamp)}</span>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-[20px]">0 Comments</span>
                        </div>
                    </div>

                    {/* Social Share Buttons */}
                    <div className="flex items-center gap-2">
                        <Share2 className="w-4 h-4 text-muted-foreground mr-2" />
                        <button
                            onClick={() => handleShare("facebook")}
                            className="hover:bg-social-hover hover:text-white transition-colors"
                        >
                            <Facebook className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => handleShare("twitter")}
                            className="hover:bg-social-hover hover:text-white transition-colors"
                        >
                            <Twitter className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => handleShare("linkedin")}
                            className="hover:bg-social-hover hover:text-white transition-colors"
                        >
                            <Linkedin className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <div className="py-[64px]">
                <div
                    className="
    prose prose-lg max-w-none
    prose-headings:text-teal-primary
    prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6
    prose-h2:text-2xl prose-h2:font-semibold prose-h2:mb-4 prose-h2:mt-8
    prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6

    prose-a:text-teal-primary prose-a:no-underline hover:prose-a:underline
    prose-strong:text-teal-secondary prose-strong:font-semibold
    prose-ul:my-4 prose-ol:my-4
    prose-li:text-foreground prose-li:mb-2
    prose-img:rounded-lg prose-img:shadow-md prose-img:my-6
    prose-blockquote:border-l-4 prose-blockquote:border-teal-primary
    prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:bg-muted
    prose-blockquote:py-2 prose-blockquote:rounded-r-md

    prose-p:text-[18px]
  "
                    dangerouslySetInnerHTML={{ __html: html }}
                />

            </div>

            <CommentSection/>
        </article>
    );
};

export default BlogContent;