import FadeIn from "./FadeIn";
import { HOBBIES } from "@/lib/data";

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">
            Hobbies
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-neutral-900 max-w-lg leading-tight">
            일과 삶 사이,
            <br />
            <span className="text-orange-500">제가 좋아하는 것들</span>
          </h2>
        </FadeIn>

        {/* Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOBBIES.map((hobby, i) => (
            <FadeIn key={hobby.title} delay={0.1 * (i + 1)}>
              <div className="group h-full bg-white border border-orange-100 rounded-3xl p-7 hover:shadow-[0_8px_32px_rgba(249,115,22,0.12)] hover:-translate-y-1 transition-all duration-300">
                {/* Emoji bubble */}
                <div className="w-14 h-14 flex items-center justify-center bg-orange-50 rounded-2xl text-2xl mb-6 group-hover:bg-orange-100 transition-colors">
                  {hobby.emoji}
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">{hobby.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{hobby.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
