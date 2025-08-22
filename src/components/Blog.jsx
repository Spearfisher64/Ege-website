const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "How I Made $3,000/month with Google AdSense in 6 Months",
      excerpt:
        "A step-by-step breakdown of content strategy, keyword research, and ad placement that scaled a niche site to $3k/month.",
      readTime: "8 min read",
      date: "May 10, 2025",
    },
    {
      id: 2,
      title: "Top 5 SEO Mistakes New Bloggers Make (And How to Fix Them)",
      excerpt:
        "From poor keyword targeting to broken internal linking — here are the most common SEO pitfalls and how to avoid them.",
      readTime: "6 min read",
      date: "April 28, 2025",
    },
    {
      id: 3,
      title: "Mobile-First Indexing: Why Your Site Needs to Be Faster",
      excerpt:
        "Google prioritizes mobile performance. Learn how to audit your site and boost speed for better rankings and ad revenue.",
      readTime: "10 min read",
      date: "April 15, 2025",
    },
  ];

  return (
    <section id="blog" className="py-20 px-6 md:px-16 bg-black">
      <div data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          SEO & AdSense Tips
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Sharing insights from my journey in SEO and monetization. Learn how to
          grow your site and earn with AdSense.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        {posts.map((post) => (
          <article
            key={post.id}
            data-aos="fade-up"
            data-aos-delay={post.id * 100}
            className="border-t border-gray-800 pt-8 hover:border-primary transition-colors"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="mb-2 md:mb-0">
                <h3 className="text-xl font-bold text-white hover:text-primary transition duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-400 mt-2">{post.excerpt}</p>
              </div>
            </div>
            <div className="flex space-x-4 text-sm text-gray-500 mt-4">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://yourblog.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium inline-flex items-center"
        >
          View All Articles
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Blog;
