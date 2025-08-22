import { Github, Linkedin, Twitter } from "lucide-react";

const SocialIcons = ({ size = 20, className = "" }) => {
  return (
    <div className={`flex space-x-5 ${className}`}>
      {/* GitHub */}
      <a
        href="https://github.com/Spearfisher64"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-gray-400 hover:text-primary transition-colors duration-200 transform hover:scale-110"
      >
        <Github size={size} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/ege-olgun-237ab11b2"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-gray-400 hover:text-primary transition-colors duration-200 transform hover:scale-110"
      >
        <Linkedin size={size} />
      </a>

      {/* Twitter/X */}
      <a
        href="https://x.com/Spearfisher35"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter / X"
        className="text-gray-400 hover:text-primary transition-colors duration-200 transform hover:scale-110"
      >
        <Twitter size={size} />
      </a>
    </div>
  );
};

export default SocialIcons;
