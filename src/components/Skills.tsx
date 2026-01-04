const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      title: "Herramientas",
      skills: ["Git", "Docker", "AWS", "Figma", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-primary text-sm mb-2">02.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Tecnologías
          </h2>
          <div className="w-24 h-1 bg-primary/30 mt-4 rounded-full" />
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="space-y-4"
            >
              <h3 className="font-mono text-primary text-sm tracking-wider">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skill}
                    className="flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
