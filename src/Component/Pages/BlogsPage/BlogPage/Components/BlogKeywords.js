// src/components/BlogKeywords.jsx
const BlogKeywords = ({ html }) => (
    <div className="mt-8 text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: html }} />
);

export default BlogKeywords;
