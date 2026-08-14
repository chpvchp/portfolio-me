const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-dark-card border border-dark-border rounded-full px-4 py-1.5 text-sm text-primary-light mb-4">
            Về tôi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Giới thiệu <span className="gradient-text">về tôi</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar section */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 border border-dark-border flex items-center justify-center overflow-hidden">
                <div className="text-8xl sm:text-9xl">👨‍💻</div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Content section */}
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Học sinh THPT & Đam mê Công nghệ thông tin
            </h3>
            
            <p className="text-text-secondary leading-relaxed mb-6">
              Tôi là Cao Hoàng Phúc, sinh ngày 12/03/2009. Tôi bắt đầu tò mò về máy tính từ năm 2017 
              và thực sự đam mê công nghệ từ năm 2020. Hiện tại tôi đang là học sinh trường THPT 
              Lê Hoàng Chiếu, xã Thạnh Trị, tỉnh Vĩnh Long.
            </p>

            <p className="text-text-secondary leading-relaxed mb-8">
              Đam mê của tôi nằm ở lĩnh vực Công nghệ thông tin, Khoa học máy tính và AI. 
              Tôi đặc biệt quan tâm đến Local LLM, llama.cpp, OpenWebUI và các công nghệ 
              hiện đại như Python, React, TypeScript, Docker, FastAPI. Tôi luôn học hỏi và 
              khám phá những công nghệ mới để phát triển bản thân.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Tên', value: 'Cao Hoàng Phúc' },
                { label: 'Ngày sinh', value: '12/03/2009' },
                { label: 'Email', value: 'caohoangphuc025@gmail.com' },
                { label: 'Trường', value: 'THPT Lê Hoàng Chiếu' },
              ].map((info) => (
                <div key={info.label} className="bg-dark-card border border-dark-border rounded-lg p-3">
                  <div className="text-xs text-text-muted mb-1">{info.label}</div>
                  <div className="text-sm text-text-primary">{info.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
