const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle background decoration */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-[60px_60px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-dark-card border border-dark-border rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          <span className="text-sm text-text-secondary">Đam mê công nghệ từ 2020</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="block text-text-primary">Xin chào, tôi là</span>
          <span className="block gradient-text mt-3">Cao Hoàng Phúc</span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Học sinh THPT & Đam mê Công nghệ thông tin
        </p>

        {/* Subtitle */}
        <p className="text-base text-text-muted max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Tôi bắt đầu tò mò về máy tính từ năm 2017 và đam mê công nghệ từ 2020.
          <br className="hidden sm:block" />
          Hiện là học sinh trường THPT Lê Hoàng Chiếu, Vĩnh Long.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#projects"
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            Xem dự án của tôi →
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-dark-border text-text-primary font-medium rounded-full hover:border-primary hover:text-primary transition-all duration-300"
          >
            Liên hệ tôi
          </a>
        </div>

        {/* Tech stack icons */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {['Python', 'React', 'TypeScript', 'Docker', 'FastAPI', 'PostgreSQL'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-dark-card border border-dark-border rounded-full text-sm text-text-secondary hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {[
            { number: '6+', label: 'Năm sử dụng máy tính' },
            { number: '6+', label: 'Năm đam mê CNTT' },
            { number: '1+', label: 'Dự án' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.number}</div>
              <div className="text-sm text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
