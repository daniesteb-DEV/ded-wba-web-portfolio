import { Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-card/30">
      <div className="max-w-2xl mx-auto text-center">
        {/* Section header */}
        <div className="mb-12">
          <p className="font-mono text-primary text-sm mb-2">04.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-primary/30 mt-4 mx-auto rounded-full" />
        </div>

        {/* Content */}
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          ¿Tienes un proyecto en mente o quieres colaborar? 
          Me encantaría escuchar tu propuesta. Estoy abierto a nuevas 
          oportunidades y siempre dispuesto a charlar sobre tecnología.
        </p>

        {/* CTA Button */}
        <a 
          href="mailto:contact@example.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
        >
          <Mail className="w-5 h-5" />
          <span>Envíame un mensaje</span>
          <Send className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
