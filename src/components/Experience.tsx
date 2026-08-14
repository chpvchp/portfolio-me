const Experience = () => {
  const experiences = [
    {
      title: 'Bắt đầu sử dụng máy tính',
      role: "Khởi đầu",
      period: '2017',
      description: 'Tôi bắt đầu làm quen và sử dụng máy tính từ năm 2017, khám phá thế giới công nghệ số.',
      technologies: ['Computer', 'Internet', 'Office', "Email"],
    },
    {
      title: 'Bắt đầu đam mê công nghệ',
      role: "Đam mê",
      period: '2020',
      description: 'Từ năm 2020, tôi thực sự đam mê công nghệ thông tin và bắt đầu học lập trình, khám phá các công nghệ mới.',
      technologies: ['Python', 'Internet', 'Youtube', "Web"],
    },
    {
      title: 'Học tập và phát triển kỹ năng',
      role: "Phát triển",
      period: '2024 - Hiện tại',
      description: 'Liên tục học hỏi và phát triển kỹ năng với nhiều công nghệ: React, TypeScript, Docker, FastAPI, PostgreSQL, AI/ML, Local LLM...',
      technologies: ['React', 'TypeScript', 'Docker', 'FastAPI', 'AI'],
    },
  ];

  const education = [
    {
      degree: 'Học sinh THPT',
      school: 'Trường THPT Lê Hoàng Chiếu',
      period: 'Hiện tại',
      description: 'Đang theo học tại trường THPT Lê Hoàng Chiếu, xã Thạnh Trị, tỉnh Vĩnh Long.',
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-dark-card border border-dark-border rounded-full px-4 py-1.5 text-sm text-primary-light mb-4">
            Hành trình
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Quá trình <span className="gradient-text">học tập</span>
          </h2>
        </div>

        {/* Experience timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-dark-border transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-2 border-4 border-dark"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover">
                    <span className="inline-block bg-primary/10 text-primary-light text-xs px-3 py-1 rounded-full mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold text-text-primary mb-1">{exp.role}</h3>
                    <p className="text-text-secondary text-sm mb-4">{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-dark-lighter rounded text-xs text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Education section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">🎓 Giáo dục</h3>
          <div className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="text-4xl">🎓</div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-text-primary mb-1">{education[0].degree}</h4>
                <p className="text-primary-light text-sm mb-1">{education[0].school}</p>
                <span className="inline-block bg-dark-lighter text-text-muted text-xs px-3 py-1 rounded-full mb-3">
                  {education[0].period}
                </span>
                <p className="text-text-secondary text-sm">{education[0].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
