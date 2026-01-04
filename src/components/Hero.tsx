import logo from "@/assets/logo.png";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <img 
            src={logo} 
            alt="DaniestebDEV Logo" 
            className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Name and title */}
        <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="font-mono text-primary text-sm md:text-base tracking-wider">
            Hola, soy
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
            Dani<span className="text-primary">esteb</span>DEV
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
            Desarrollador Fullstack creando experiencias digitales 
            <span className="text-primary"> elegantes</span> y <span className="text-primary">funcionales</span>
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6 mt-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="mailto:contact@example.com"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 group"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* CTA Button */}
        <a 
          href="#about"
          className="mt-12 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group">
            <span className="text-sm font-mono">Conoce más</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
