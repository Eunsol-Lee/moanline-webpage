import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactBanner from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "수술 고객 케어와 보증제 | 모앤라인성형외과",
};

const preCareItems = [
  {
    title: "두피 진단",
    description:
      "고화질 영상 분석으로 두피 건강, 탈모 진행 정도, 모발 굵기, 밀도를 정밀 진단합니다. 수술 전 두피 상태를 정확히 파악하여 최적의 수술 계획을 수립합니다.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "레이저 시술",
    description:
      "프락셀 레이저로 모낭 성장에 필요한 성장인자와 혈관 생성 인자의 생성을 촉진합니다. 수술 2~3주 전부터 관리하여 이식 모낭의 생착률을 높입니다.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const postCareItems = [
  {
    title: "줄기세포 배양액 도포",
    description: "이식 부위에 줄기세포 배양액을 도포하여 모낭 생착 및 재생을 촉진합니다.",
  },
  {
    title: "헤어셀 자기장 치료",
    description: "자기장 치료로 두피 혈행을 개선하고 이식 모발의 성장을 촉진합니다.",
  },
  {
    title: "MTS + 모낭강화주사",
    description: "미세 침 시술과 모낭강화 성분 주입으로 두피 재생 및 모발 강화를 돕습니다.",
  },
  {
    title: "LLLT 레이저",
    description: "저출력 레이저로 두피 세포의 에너지 대사를 활성화하여 모발 성장을 지원합니다.",
  },
  {
    title: "2주차 스케일링",
    description: "수술 2주 후 전문 두피 스케일링으로 이식 부위를 청결하게 유지합니다.",
  },
];

export default function CarePage() {
  return (
    <>
      <PageHero
        title="수술 고객 케어와 보증제"
        subtitle="수술 전후 체계적인 관리 시스템"
        breadcrumb={[
          { label: "모앤라인성형외과", href: "/about" },
          { label: "수술 고객 케어와 보증제" },
        ]}
      />

      {/* Pre-surgery Care */}
      <section className="bg-navy-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <span className="inline-block w-10 h-0.5 bg-gold" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
              수술 전 케어
            </h2>
            <p className="text-white/55 text-sm sm:text-base max-w-lg mx-auto">
              수술 전 철저한 진단과 준비로 최적의 수술 환경을 조성합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {preCareItems.map((item, index) => (
              <div
                key={index}
                className="bg-navy border border-white/10 hover:border-gold/40 rounded-sm p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <div className="w-8 h-px bg-gold/30" />
                <p className="text-xs text-white/55 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-surgery Care */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <span className="inline-block w-10 h-0.5 bg-gold" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
              수술 후 케어
            </h2>
            <p className="text-white/55 text-sm sm:text-base max-w-lg mx-auto">
              수술 후 전문적인 케어로 이식 모낭의 생착률을 극대화합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {postCareItems.map((item, index) => (
              <div
                key={index}
                className="bg-navy-dark border border-white/10 hover:border-gold/40 rounded-sm p-5 flex flex-col gap-3 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                    <span className="text-navy text-xs font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-xs text-white/55 leading-relaxed pl-9">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Home Care */}
          <div className="bg-navy-dark border border-gold/20 rounded-sm p-8 flex flex-col sm:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-2">홈 케어 — 맞춤형 케어 제품 제공</h3>
              <div className="w-8 h-px bg-gold/30 mb-3" />
              <p className="text-sm text-white/60 leading-relaxed">
                개인 두피 상태에 맞춰 선별된 <span className="text-gold font-medium">맞춤 샴푸와 토닉</span>을 제공합니다.
                전문적인 홈케어 제품과 사용 방법 안내로 수술 후 두피 건강을 집에서도 효과적으로 관리할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
