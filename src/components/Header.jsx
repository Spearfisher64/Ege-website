import SocialIcons from "./SocialIcons";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 md:p-10">
      <h1 className="text-2xl md:text-3xl font-bold text-primary">
        <span className="neon-glow">Ege Olgun</span>
      </h1>

      <div className="flex items-center space-x-8">
        {/* Social Icons */}
        <SocialIcons size={20} />

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-gray-300">
            <li>
              <a href="#home" className="hover:text-primary transition">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-primary transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-primary transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
