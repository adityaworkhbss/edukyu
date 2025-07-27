// src/components/BlogContent.jsx
const BlogContent = ({ html }) => {
    console.log(html); // ✅ logs the HTML string
    return (
        <div
            className="prose max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};

export default BlogContent;
