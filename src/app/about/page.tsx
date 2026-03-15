import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactBanner from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "모앤라인성형외과 소개",
};

const differentiators = [
  {
    title: "헤어라인교정 집중",
    description:
      "일반 모발이식이 아닌 헤어라인교정술에만 집중하여 깊은 전문성과 풍부한 임상 경험을 축적하고 있습니다.",
    icon: (
      <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "성형외과전문의 집도",
    description:
      "성형외과전문의로서 얼굴성형 디자인과 성형수술 노하우를 헤어라인교정술에 접목하여 자연스럽고 아름다운 결과를 제공합니다.",
    icon: (
      <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "3D 안면분석 시스템",
    description:
      "3D 안면 스캔 기술로 360도 안면윤곽을 과학적으로 분석하고 수술 시뮬레이션을 통해 예측 가능한 결과를 제공합니다.",
    icon: (
      <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    title: "원장 직접 전 과정 수행",
    description:
      "디자인부터 모낭 선별, 슬릿, 이식까지 전 과정을 원장이 직접 수행하여 일관된 퀄리티와 최상의 결과를 보장합니다.",
    icon: (
      <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

const certifications = [
  { name: "대한성형외과학회", abbr: "PRS Korea / KSPRS" },
  { name: "대한미용성형외과학회", abbr: "KSAPS" },
  { name: "대한성형외과의사회", abbr: "" },
  { name: "대한모발이식학회", abbr: "KSHRS" },
  { name: "국제모발이식학회", abbr: "ISHRS" },
  { name: "아시아모발이식학회", abbr: "Asian Association of Hair Restoration Surgeons" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="모앤라인성형외과"
        subtitle="헤어라인교정술에 집중해온 전문 의료기관"
        breadcrumb={[{ label: "모앤라인성형외과" }]}
      />

      {/* Philosophy */}
      <section className="bg-navy-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-6">
              <span className="inline-block w-10 h-0.5 bg-gold" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
              헤어라인교정에 집중합니다
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4">
              모앤라인은 일반 모발이식이 아닌 <span className="text-gold font-medium">헤어라인교정</span>에 집중합니다.
              성형외과전문의로서 보유한 얼굴성형 디자인과 성형수술의 노하우를 헤어라인교정술에 접목합니다.
            </p>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4">
              3D 안면 스캔 기술로 과학적 분석과 수술 시뮬레이션을 제공하며, 원장이 직접 디자인·모낭선별·슬릿·이식
              전 과정을 진행합니다.
            </p>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              이러한 집중과 전문성을 바탕으로 <span className="text-gold font-medium">아시아 대표 헤어라인교정 브랜드</span>로 인정받고 있습니다.
            </p>
          </div>

          {/* Differentiators Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-navy border border-white/10 hover:border-gold/40 rounded-sm p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white leading-snug">{item.title}</h3>
                <div className="w-8 h-px bg-gold/30" />
                <p className="text-xs text-white/55 leading-relaxed flex-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <span className="inline-block w-10 h-0.5 bg-gold" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
              학회 인증 및 소속
            </h2>
            <p className="text-white/55 text-sm sm:text-base">국내외 권위 있는 학회의 정회원으로 활동하고 있습니다.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-navy-dark border border-white/10 rounded-sm p-5 text-center flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-1">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <p className="text-white text-xs font-semibold leading-snug">{cert.name}</p>
                {cert.abbr && <p className="text-white/40 text-[10px] leading-snug">{cert.abbr}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
