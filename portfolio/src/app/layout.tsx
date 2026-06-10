import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "홍길동 | Portfolio",
  description: "개발자 홍길동의 포트폴리오 사이트입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
