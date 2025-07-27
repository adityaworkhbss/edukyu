// src/components/BlogContent.jsx
const BlogContent = ({ html }) => (
    <div className="prose max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: html }} />
);

export default BlogContent;
