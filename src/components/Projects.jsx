import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '🛒',
    live: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description:
      'Real-time chat application powered by AI with natural language processing and sentiment analysis.',
    tags: ['Next.js', 'OpenAI', 'WebSocket', 'PostgreSQL'],
    image: '🤖',
    live: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Task Management Tool',
    description:
      'Collaborative project management tool with Kanban boards, time tracking, and team analytics.',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    image: '📋',
    live: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description:
      'Interactive weather dashboard with real-time data, forecasts, and beautiful data visualizations.',
    tags: ['React', 'D3.js', 'REST API', 'CSS Modules'],
    image: '🌤️',
    live: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Social Media Analytics',
    description:
      'Analytics platform for social media metrics with custom reports and scheduled exports.',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    image: '📊',
    live: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Portfolio Builder',
    description:
      'Drag-and-drop portfolio builder for developers with customizable templates and one-click deploy.',
    tags: ['Next.js', 'Tailwind', 'Prisma', 'Vercel'],
    image: '🚀',
    live: '#',
    github: '#',
  },
]

const filters = ['All', 'React', 'Next.js', 'Node.js', 'Python']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = projects.filter(
    (p) => activeFilter === 'All' || p.tags.includes(activeFilter)
  )

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-500 rounded-full mx-auto mt-4" />
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Some of my recent work that I'm proud of
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-accent text-white shadow-lg shadow-accent/25'
                  : 'bg-dark-700 text-text-secondary hover:bg-dark-600 border border-dark-500'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="glass rounded-2xl overflow-hidden group card-hover"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="h-48 bg-dark-700 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    className="flex-1 text-center px-4 py-2 bg-accent hover:bg-accent-light text-white rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 text-center px-4 py-2 border border-dark-500 hover:border-accent/50 text-text-primary rounded-lg text-sm font-medium transition-all duration-300 hover:bg-dark-700/50"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
