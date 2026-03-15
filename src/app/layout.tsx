import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 모앤라인성형외과",
    default: "모앤라인성형외과 | 헤어라인교정 전문",
  },
  description:
    "모앤라인성형외과는 헤어라인교정술, 모발이식, 탈모치료 전문 성형외과입니다. 성형외과전문의가 직접 시술하는 무삭발 비절개 대량이식, 자연스러운 헤어라인 디자인.",
  keywords: [
    "헤어라인교정",
    "모발이식",
    "탈모치료",
    "헤어라인성형",
    "무삭발비절개",
    "모앤라인성형외과",
    "강남헤어라인",
  ],
  authors: [{ name: "모앤라인성형외과" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "모앤라인성형외과",
    title: "모앤라인성형외과 | 헤어라인교정 전문",
    description:
      "성형외과전문의가 직접 시술하는 헤어라인교정, 모발이식, 탈모치료 전문 클리닉",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
