export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-400 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white font-bold text-lg mb-1">
            GD<span className="text-orange-400">.</span>
          </p>
          <p className="text-sm">함께 만들어갈 것들을 기대합니다.</p>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@example.com"
            className="hover:text-orange-400 transition-colors"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-neutral-600">© {year} 홍길동. All rights reserved.</p>
      </div>
    </footer>
  );
}
