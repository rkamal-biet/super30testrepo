export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent font-medium text-sm sm:text-base tracking-widest uppercase animate-fade-in-up">
              Welcome to my portfolio
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-4 leading-tight animate-fade-in-up animation-delay-200">
              Hi, I'm{' '}
              <span className="gradient-text">John Doe</span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animation-delay-400">
              A passionate full-stack developer crafting beautiful, 
              performant, and accessible digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              <a
                href="#projects"
                className="px-8 py-3.5 bg-accent hover:bg-accent-light text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 border border-dark-500 hover:border-accent/50 text-text-primary rounded-xl font-medium transition-all duration-300 hover:bg-dark-700/50 hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start animate-fade-in-up animation-delay-800">
              {[
                { label: 'GitHub', href: '#', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
                { label: 'LinkedIn', href: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { label: 'Twitter', href: '#', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-text-muted hover:text-accent transition-colors duration-300"
                  aria-label={social.label}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 animate-float">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-accent to-purple-600 p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center overflow-hidden">
                  <svg
                    className="w-32 h-32 sm:w-40 sm:h-40 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-dark-700 rounded-2xl border border-dark-500 flex items-center justify-center animate-scale-in">
                <span className="text-2xl sm:text-3xl">🚀</span>
              </div>
              <div className="absolute -top-4 -left-4 w-14 h-14 sm:w-18 sm:h-18 bg-dark-700 rounded-2xl border border-dark-500 flex items-center justify-center animate-scale-in animation-delay-400">
                <span className="text-xl sm:text-2xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
