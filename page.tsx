import FadeIn from "./FadeIn";
import { SKILLS } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <FadeIn>
          <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">
            About Me
          </span>
        </FadeIn>

        <div className="mt-6 grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900 leading-tight mb-8">
                코드로
                <br />
                <span className="text-orange-500">경험을 만듭니다.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-neutral-500 leading-[1.9] text-base mb-5">
                안녕하세요! 프론트엔드 개발자 홍길동입니다. 3년간 스타트업과 에이전시에서
                웹 서비스를 개발해왔습니다. 복잡한 문제를 단순하고 직관적인 UI로 풀어내는
                것에 큰 보람을 느낍니다.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-neutral-500 leading-[1.9] text-base mb-10">
                좋은 코드는 읽기 쉬워야 한다고 믿습니다. 빠르게 돌아가는 서비스보다
                팀원이 함께 이해하고 유지보수할 수 있는 코드를 지향합니다. 현재는
                React/Next.js 생태계를 중심으로 성장하고 있습니다.
              </p>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.35}>
              <div className="flex gap-8">
                {[
                  { num: "3+",  label: "년 경력" },
                  { num: "12+", label: "프로젝트" },
                  { num: "5+",  label: "협업 팀" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-black text-orange-500">{s.num}</p>
                    <p className="text-sm text-neutral-400 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: Skills + Card */}
          <div>
            <FadeIn delay={0.2} direction="right">
              <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8">
                <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-5">
                  기술 스택
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 text-sm font-medium bg-white border border-orange-200 text-orange-600 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <hr className="my-8 border-orange-100" />

                <div className="space-y-4">
                  {[
                    { icon: "🏫", text: "○○대학교 컴퓨터공학과 졸업" },
                    { icon: "📍", text: "서울, 대한민국" },
                    { icon: "✉️", text: "hello@example.com" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 text-sm text-neutral-600">
                      <span className="text-base">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/resume.pdf"
                  className="mt-8 flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-3 rounded-2xl transition-colors"
                >
                  이력서 다운로드 ↓
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
