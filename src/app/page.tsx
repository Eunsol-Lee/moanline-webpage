import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
        {/* Background decorative elements */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-36">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/30 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
              <span className="text-gold text-xs font-medium tracking-widest uppercase">
                성형외과전문의 직접 시술
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              자연스러운 헤어라인,
              <br />
              <span className="text-gold">모앤라인</span>성형외과
            </h1>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              무삭발 비절개 대량이식부터 정밀한 슬릿 디자인까지,
              <br className="hidden sm:block" />
              원장이 직접 모든 과정을 수행합니다.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-navy font-bold transition-colors duration-200 rounded-sm text-sm sm:text-base"
              >
                무료 상담 예약
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/knowhow/non-shaving-fue"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 hover:border-gold text-white hover:text-gold transition-colors duration-200 rounded-sm text-sm sm:text-base"
              >
                노하우 알아보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-off-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <span className="inline-block w-8 h-0.5 bg-gold" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
              모앤라인만의 차별화된 노하우
            </h2>
            <p className="text-foreground/60 text-sm sm:text-base">
              수천례의 경험으로 완성한 헤어라인교정술
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "✂️",
                title: "무삭발 비절개 대량이식",
                desc: "3000모 이상도 삭발 없이 비절개로 가능. 1.5~2시간 내 완료.",
                href: "/knowhow/non-shaving-fue",
              },
              {
                icon: "✏️",
                title: "정밀 슬릿 디자인",
                desc: "개인 얼굴 비례에 맞는 자연스럽고 불규칙한 헤어라인 구현.",
                href: "/knowhow/slit-design",
              },
              {
                icon: "👨‍⚕️",
                title: "원장 직접 시술",
                desc: "디자인부터 채취, 이식까지 모든 핵심 과정을 원장이 직접 진행.",
                href: "/knowhow/doctor-performs",
              },
              {
                icon: "🌿",
                title: "잔머리 그라데이션",
                desc: "가는모부터 점진적 그라데이션으로 본래 헤어라인 같은 자연스러움.",
                href: "/knowhow/gradation",
              },
              {
                icon: "🔄",
                title: "고난이도 재수술",
                desc: "타 병원 수술 후 어색해진 헤어라인, 재교정 전문 노하우.",
                href: "/knowhow/revision",
              },
              {
                icon: "💎",
                title: "고생착 모낭이식술",
                desc: "모낭 손상 최소화, 두피 적정화 케어로 안정적인 밀도 보장.",
                href: "/knowhow/high-engraftment",
              },
            ].map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="group bg-white rounded-lg p-6 border border-transparent hover:border-gold/30 hover:shadow-lg hover:shadow-navy/5 transition-all duration-200"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{feature.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Treatment Links */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <span className="inline-block w-8 h-0.5 bg-gold" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">진료 분야</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "헤어라인교정술",
                desc: "M자, 넓은이마, 재교정, 구레나룻 등 다양한 헤어라인 케이스",
                href: "/treatments/gender-difference",
                items: ["M자 헤어라인 교정", "넓은 이마 대량이식", "헤어라인 재교정", "노 쉐이빙 이식"],
              },
              {
                title: "탈모치료",
                desc: "남성·여성 탈모, 비수술 탈모치료까지 과학적으로 관리",
                href: "/hair-loss/male",
                items: ["남성탈모 모발이식", "여성탈모 모발이식", "비수술 탈모치료"],
              },
              {
                title: "모앤라인 소개",
                desc: "성형외과 전문의와 수천례 경험으로 이루어진 팀",
                href: "/about",
                items: ["의료진 소개", "진료 전과정", "수술 케어와 보증제", "오시는길"],
              },
            ].map((section) => (
              <div key={section.href} className="bg-navy rounded-lg p-8 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
                <p className="text-white/50 text-sm mb-5 leading-relaxed">{section.desc}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={section.href}
                  className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:gap-3 transition-all duration-200"
                >
                  자세히 보기
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
