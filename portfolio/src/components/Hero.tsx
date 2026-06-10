"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  // Parallax: background moves slower than scroll
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream"
    >
      {/* Parallax decorative background */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none will-change-transform">
        {/* Big blurred circle top-right */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-orange-200/50 blur-[100px]" />
        {/* Smaller accent bottom-left */}
        <div className="absolute bottom-10 -left-20 w-[340px] h-[340px] rounded-full bg-orange-100/60 blur-[80px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={item}
          className="inline-block text-orange-500 text-sm font-semibold tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200"
        >
          Frontend Developer
        </motion.span>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-neutral-900 leading-[1.05] mb-6"
        >
          안녕하세요,
          <br />
          <span className="text-orange-500">홍길동</span>입니다.
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-neutral-500 max-w-xl mx-auto leading-relaxed mb-10"
        >
          사용자 경험을 중심에 두고 깔끔한 코드를 작성하는
          <br className="hidden md:block" />
          프론트엔드 개발자입니다.
        </motion.p>

        <motion.div variants={item} className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={() => {
              document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-sm"
          >
            포트폴리오 보기
          </button>
          <button
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white hover:bg-orange-50 text-neutral-700 font-semibold px-7 py-3.5 rounded-full border border-neutral-200 hover:border-orange-300 transition-all text-sm"
          >
            자기소개 →
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-orange-300 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], originY: 0 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
