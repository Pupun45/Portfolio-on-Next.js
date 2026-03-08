import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 md:py-24 border-t border-foreground/5 bg-background">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center gap-8">
        <h2 className="text-xl font-semibold tracking-wider uppercase text-foreground">Jyotiranjan</h2>
        
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/jyotiranjan-behera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-foreground transition-colors hover:-translate-y-1 transform duration-300"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/jyotiranjan-behera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-foreground transition-colors hover:-translate-y-1 transform duration-300"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-foreground/50 hover:text-foreground transition-colors hover:-translate-y-1 transform duration-300"
          >
            <FiMail size={24} />
          </a>
        </div>

        <p className="text-sm font-light text-foreground/40 mt-4">
          © {currentYear} Jyotiranjan Behera. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
