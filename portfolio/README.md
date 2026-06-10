# 🍊 포트폴리오 웹사이트

Next.js 14 + TypeScript + Tailwind CSS + Framer Motion으로 만든 원페이지 포트폴리오 사이트입니다.

## 🚀 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── globals.css       # 전역 스타일
│   ├── layout.tsx        # 루트 레이아웃
│   └── page.tsx          # 메인 페이지
├── components/
│   ├── Navbar.tsx        # 상단 네비게이션
│   ├── Hero.tsx          # 히어로 섹션
│   ├── About.tsx         # 자기소개 섹션
│   ├── Hobbies.tsx       # 취미 섹션
│   ├── Portfolio.tsx     # 포트폴리오 섹션
│   ├── Footer.tsx        # 푸터
│   └── FadeIn.tsx        # 애니메이션 래퍼
└── lib/
    └── data.ts           # 콘텐츠 데이터 (여기만 수정!)
```

## ✏️ 내 정보로 수정하기

`src/lib/data.ts` 파일 하나만 수정하면 됩니다.

- **SKILLS** — 기술 스택 태그
- **HOBBIES** — 취미 카드 (이모지, 제목, 설명)
- **PROJECTS** — 포트폴리오 프로젝트 (제목, 설명, 태그, GitHub/Live 링크)

`src/components/About.tsx` 안의 이름, 이메일, 학교 정보도 수정하세요.

## 🌐 배포 (Vercel 권장)

```bash
# Vercel CLI로 배포
npx vercel
```

또는 [vercel.com](https://vercel.com)에서 GitHub 연결 후 자동 배포.

## 🎨 디자인 커스텀

`tailwind.config.ts`의 `colors.orange` 값을 바꾸면 전체 컬러 테마가 변경됩니다.
