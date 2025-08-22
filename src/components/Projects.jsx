const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      desc: "A React Native app with payment integration and offline support.",
      tech: "React Native, Firebase",
    },
    {
      title: "Search Engine Optimized Website",
      desc: "A website for your store fully optimized for best profits.",
      tech: "React, Tailwind, Vite",
    },
    {
      title: "AdSense Monetization Guide",
      desc: "Content site earning $3k/month via AdSense and SEO.",
      tech: "SEO, Google AdSense",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-gray-dark">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-medium p-6 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <h3 className="text-xl font-bold text-primary mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.desc}</p>
            <p className="text-sm text-primary font-medium">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
