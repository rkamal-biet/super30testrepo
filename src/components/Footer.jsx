export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-600 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {year} John Doe. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {['GitHub', 'LinkedIn', 'Twitter'].map((s) => (
              <a
                key={s}
                href="#"
                className="text-text-muted hover:text-accent transition-colors duration-300 text-sm"
              >
                {s}
              </a>
            ))}
          </div>

          <p className="text-text-muted text-sm">
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
