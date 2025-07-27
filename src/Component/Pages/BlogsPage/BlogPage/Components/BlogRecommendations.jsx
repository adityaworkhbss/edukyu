// src/components/BlogRecommendations.jsx
const BlogRecommendations = ({ html }) => (
    <section className="mt-10 bg-gray-50 p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Recommended Articles</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </section>
);

export default BlogRecommendations;
