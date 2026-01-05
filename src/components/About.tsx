import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Código Limpio",
      description: "Escribo código mantenible, escalable y bien documentado."
    },
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description: "Creo interfaces intuitivas con atención al detalle."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizo cada proyecto para máxima velocidad."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-primary text-sm mb-2">01.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Sobre mí
          </h2>
          <div className="w-24 h-1 bg-primary/30 mt-4 rounded-full" />
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Soy un desarrollador fullstack apasionado por crear soluciones digitales 
              que combinan <span className="text-foreground">funcionalidad</span> con 
              <span className="text-foreground"> estética</span>. Mi enfoque está en 
              construir aplicaciones web modernas que ofrezcan experiencias excepcionales.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Con experiencia en tecnologías tanto del frontend como del backend, 
              me especializo en llevar proyectos desde la conceptualización hasta 
              la implementación completa, asegurando calidad en cada etapa del desarrollo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cuando no estoy programando, me encuentro explorando nuevas tecnologías, 
              contribuyendo a proyectos open source o aprendiendo sobre arquitectura de software.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="group p-6 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
