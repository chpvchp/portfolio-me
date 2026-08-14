// import { useState } from 'react';

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: '',
  // });
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitted(true);
  //   setTimeout(() => setIsSubmitted(false), 3000);
  //   setFormData({ name: '', email: '', subject: '', message: '' });
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-dark-card border border-dark-border rounded-full px-4 py-1.5 text-sm text-primary-light mb-4">
            Kết nối
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Liên hệ <span className="gradient-text">tôi</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Hãy kết nối với tôi để cùng tạo ra những sản phẩm tuyệt vời
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Contact info */}
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Hãy cùng trò chuyện! 👋
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Tôi luôn sẵn sàng cho những cơ hội mới, dự án thú vị hoặc chỉ đơn giản là trò chuyện về công nghệ. 
              Đừng ngần ngại liên hệ với tôi nhé!
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: '📧', label: 'Email', value: 'caohoangphuc025@gmail.com' },
                { icon: '📱', label: 'Điện thoại', value: '+84 354 294 289 (0354 294 289)' },
                { icon: '📍', label: 'Địa chỉ', value: 'Vĩnh Long, Việt Nam (Bến Tre, Việt Nam cũ)' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 bg-dark-card border border-dark-border rounded-lg p-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-sm text-text-muted">{item.label}</div>
                    <div className="text-text-primary">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-text-muted mb-4">Theo dõi tôi:</p>
              <div className="flex gap-3">
                {[
                  { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', href: 'https://github.com/chpvchp' },
                  { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', href: 'https://www.facebook.com/hoang.phuc.494074/' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          {/* <div className="bg-dark-card border border-dark-border rounded-2xl p-6 sm:p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Gửi thành công!</h3>
                <p className="text-text-secondary">Cảm ơn bạn! Tôi sẽ phản hồi sớm nhất có thể.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-lighter border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                    placeholder="Nguyễn Văn B"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-lighter border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                    Chủ đề
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-lighter border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                    placeholder="Cơ hội hợp tác"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    Tin nhắn
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-lighter border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Nội dung tin nhắn..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  Gửi tin nhắn →
                </button>
              </form>
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
