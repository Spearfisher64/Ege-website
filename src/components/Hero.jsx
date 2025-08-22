import CodeGridBackground from "./CodeGridBackground";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 bg-gray-dark"
    >
      <div className="max-w-4xl" data-aos="fade-right">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="neon-glow">Ege Olgun</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Mobile App Developer • Web Developer • SEO & Google AdSense Expert
        </p>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl">
          I build high-performance mobile apps and websites, and help content
          creators & business owners grow through SEO and monetize with Google
          AdSense.
        </p>
        <div className="space-x-4">
          <a
            href="#projects"
            className="bg-primary text-black px-8 py-3 rounded font-semibold hover:bg-primary-dark transition inline-block"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-primary px-8 py-3 rounded font-semibold hover:bg-primary hover:text-black transition inline-block"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
