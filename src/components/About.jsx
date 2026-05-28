export default function About() {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Technologies', value: '20+' },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Turning ideas into reality through code
            </h3>
            <p className="text-text-secondary leading-relaxed">
              I'm a full-stack developer with over 5 years of experience building 
              web applications. I specialize in React, Node.js, and modern 
              JavaScript ecosystems. I'm passionate about creating clean, 
              efficient, and user-friendly applications that solve real-world problems.
            </p>
            <p className="text-text-secondary leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or writing technical articles 
              to share knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'PostgreSQL'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm bg-dark-700 border border-dark-500 text-text-secondary rounded-lg"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 sm:p-8 text-center card-hover"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="text-3xl sm:text-4xl font-extrabold gradient-text">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
