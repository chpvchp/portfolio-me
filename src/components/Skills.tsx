const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 60 },
        { name: 'TypeScript', level: 50 },
        { name: 'Tailwind CSS', level: 75 },
        { name: 'HTML / CSS', level: 80 },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 50 },
        { name: 'Python', level: 75 },
        { name: 'PostgreSQL / MySQL', level: 70 },
        { name: 'REST API', level: 60 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: '🚀',
      skills: [
        { name: 'Docker', level: 65 },
        { name: 'AWS / Azure', level: 5 },
        { name: 'Git / CI-CD', level: 60 },
        { name: 'Linux', level: 65 },
      ],
    },
    ,
    {
      title: 'LLM',
      icon: '🧠',
      skills: [
        { name: 'llama.cpp', level: 90 },
        { name: 'vLLM', level: 50 },
        { name: 'Transformer', level: 35 },
        { name: 'Pytorch', level: 40 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-dark-card border border-dark-border rounded-full px-4 py-1.5 text-sm text-primary-light mb-4">
            Chuyên môn
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Kỹ năng <span className="gradient-text">chuyên môn</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Công nghệ và công cụ tôi sử dụng hàng ngày để xây dựng sản phẩm
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category?.title}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category?.icon}</span>
                <h3 className="text-xl font-semibold text-text-primary">{category?.title}</h3>
              </div>

              <div className="space-y-5">
                {category?.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-text-secondary">{skill.name}</span>
                      <span className="text-xs text-text-muted">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-lighter rounded-full h-2">
                      <div
                        className="bg-linear-to-br from-primary to-accent h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional tech tags */}
        <div className="mt-12 text-center">
          <p className="text-text-muted mb-4">Công nghệ khác:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'LangGraph', 'Open WebUI', 'HuggingFace', 'Kaggle'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-dark-card border border-dark-border rounded-full text-sm text-text-secondary hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
