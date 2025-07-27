// src/components/BlogCards.jsx
const BlogCards = ({ html }) => (
    <section className="grid md:grid-cols-2 gap-6 mt-12" dangerouslySetInnerHTML={{ __html: html }} />
);

export default BlogCards;
