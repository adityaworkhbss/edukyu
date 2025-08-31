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
            <div className="relative bg-hero-gradient flex items-center justify-center p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8">

                    {imageurl && (
                        <div className="flex-shrink-0">
                            <div className="relative w-auto h-auto overflow-hidden">
                                <img
                                    src={`https://edukyu.com/public/${imageurl}`}
                                    alt={metatitle}
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Article Header */}
            <div className="bg-background p-6 md:p-8 border-b border-border">
                <h2 className="text-2xl md:text-3xl font-bold text-teal-primary mb-6 leading-tight">
                    {metatitle}
                </h2>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <User className="w-4 h-4" />
                            <span className="text-sm font-medium">{authorName}</span>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Tag className="w-4 h-4" />
                            <span className="text-sm">{category}</span>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{formatDate(timestamp)}</span>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-sm">0 Comments</span>
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
            <div className="p-6 md:p-8">
                <div
                    className="prose prose-lg max-w-none
                     prose-headings:text-teal-primary
                     prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6
                     prose-h2:text-2xl prose-h2:font-semibold prose-h2:mb-4 prose-h2:mt-8
                     prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6
                     prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4
                     prose-a:text-teal-primary prose-a:no-underline hover:prose-a:underline
                     prose-strong:text-teal-secondary prose-strong:font-semibold
                     prose-ul:my-4 prose-ol:my-4
                     prose-li:text-foreground prose-li:mb-2
                     prose-img:rounded-lg prose-img:shadow-md prose-img:my-6
                     prose-blockquote:border-l-4 prose-blockquote:border-teal-primary
                     prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:bg-muted
                     prose-blockquote:py-2 prose-blockquote:rounded-r-md"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>

            <CommentSection/>
        </article>


    );
};

export default BlogContent;
