import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const found = blogPosts.find((p) => p.slug === slug);
    setPost(found);
    AOS.refresh(); // Refresh AOS after dynamic content loads
  }, [slug]);

  if (!post) {
    return (
      <section className="py-20 px-6 md:px-16 text-center">
        <h2 className="text-2xl text-gray-400">Post not found</h2>
        <Link to="/" className="text-primary hover:underline mt-4 inline-block">
          ← Back to Home
        </Link>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 md:px-16 max-w-4xl mx-auto">
      <Link
        to="/#blog"
        className="text-primary text-sm hover:underline mb-6 inline-block"
      >
        ← Back to SEO Tips
      </Link>

      <article data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex space-x-4 text-sm text-gray-500 mb-8">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <div
          className="text-gray-300 leading-relaxed blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <hr className="border-gray-800 my-12" />

      <div className="text-center">
        <Link to="/#blog" className="text-primary hover:underline font-medium">
          ← Back to All SEO Tips
        </Link>
      </div>
    </section>
  );
};

export default BlogPage;
