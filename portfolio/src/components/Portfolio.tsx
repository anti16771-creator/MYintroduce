import FadeIn from "./FadeIn";
import { PROJECTS } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">
            Portfolio
          </span>
        </FadeIn>
        <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
              만들어온
              <br />
              <span className="text-orange-500">프로젝트들</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-orange-500 transition-colors"
            >
              GitHub에서 더 보기 →
            </a>
          </FadeIn>
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-5">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.title} delay={0.08 * i}>
              <div className="group bg-orange-50/50 hover:bg-orange-50 border border-orange-100 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(249,115,22,0.10)]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                  {/* Left */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-xl mb-5">
                      {project.desc}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-semibold bg-white border border-orange-200 text-orange-500 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: links */}
                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border border-neutral-200 text-neutral-600 hover:border-orange-400 hover:text-orange-500 bg-white transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.31 3.435 9.818 8.205 11.408.6.111.82-.261.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 22.314 24 17.807 24 12.5 24 5.87 18.627.5 12 .5z"/>
                      </svg>
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors"
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
