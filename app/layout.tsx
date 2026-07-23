import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXT SAVE — 오늘 시작할 게임을 이유와 함께",
  description: "공개된 데모 데이터로 취향 신호를 읽고 다음 게임을 고르는 NEXT SAVE 코스 목업",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
