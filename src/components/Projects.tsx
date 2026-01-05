import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Web Page",
      description: "Servicio web corporativo para Transepicentro, una empresa de transporte turístico en Ecuador.",
      tags: ["React", "TypeScript", "PostgreSQL", "Stripe"],
      github: "https://github.com/daniesteb-DEV/tep-wba-web-transepicentro",
      live: "https://www.transepicentro-ec.com/"
    },
    {
      title: "API REST Service",
      description: "Servicio de API RESTful escalable con autenticación JWT, rate limiting y documentación completa.",
      tags: ["Java", "Springboot", "MongoDB", "Docker", "Redis"],
      github: "https://github.com/daniesteb-DEV/msa-backend-bank-challenge",
      live: "#"
    },
    {
      title: "Sistema RP360",
      description: "Sistema para la gestión de tramites en los registros de la propiedad y mercantil, optimizando procesos y mejorando la eficiencia.",
      tags: ["Java", "JSF", "PostgreSQL", "JasperSoft", "Wildfly"],
      github: "#",
      live: "https://foru.rpmr.gob.ec/FolioReal-PROPIEDAD-Web/login.xhtml"
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-primary text-sm mb-2">03.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Proyectos
          </h2>
          <div className="w-24 h-1 bg-primary/30 mt-4 rounded-full" />
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article 
              key={project.title}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 card-shadow"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex items-center gap-3">
                  <a 
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.live}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 text-xs font-mono text-primary/80 bg-primary/10 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
