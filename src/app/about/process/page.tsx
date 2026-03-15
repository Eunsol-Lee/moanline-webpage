import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactBanner from "@/components/ContactBanner";
import { processSteps } from "@/data/process";

export const metadata: Metadata = {
  title: "진료 전과정 미리보기 | 모앤라인성형외과",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="진료 전과정 미리보기"
        subtitle="상담부터 수술 후 케어까지 7단계"
        breadcrumb={[
          { label: "모앤라인성형외과", href: "/about" },
          { label: "진료 전과정" },
        ]}
      />

      <section className="bg-navy-dark py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <span className="inline-block w-10 h-0.5 bg-gold" />
            </div>
            <p className="text-white/55 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              모앤라인의 헤어라인교정술은 체계적인 7단계 프로세스로 진행됩니다. 각 단계에서 최상의 결과를 위해 원장이 직접 수행합니다.
            </p>
          </div>

          {/* Timeline — mobile: single column, desktop: alternating */}
          <div className="relative">
            {/* Center vertical line (desktop only) */}
            <div className="hidden lg:block absolute left-1/2 top-6 bottom-6 w-px bg-white/10 -translate-x-1/2 pointer-events-none" />

            <div className="flex flex-col gap-0">
              {processSteps.map((step, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={step.number} className="relative flex items-center lg:min-h-[140px]">

                    {/* ── MOBILE layout (single column) ── */}
                    <div className="flex lg:hidden items-start gap-4 w-full pb-8">
                      {/* Step circle */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-md shadow-black/40 z-10">
                          <span className="text-navy text-sm font-bold">{step.number}</span>
                        </div>
                        {index < processSteps.length - 1 && (
                          <div className="w-px flex-1 bg-white/10 mt-2 min-h-[40px]" />
                        )}
                      </div>
                      {/* Card */}
                      <div className="flex-1 bg-navy border border-white/10 hover:border-gold/40 rounded-sm p-5 transition-all duration-300">
                        <p className="text-gold/50 text-[10px] font-medium tracking-widest uppercase mb-1">
                          STEP {String(step.number).padStart(2, "0")}
                        </p>
                        <h3 className="text-sm font-bold text-white mb-2 leading-snug">{step.title}</h3>
                        <p className="text-xs text-white/55 leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    {/* ── DESKTOP layout (alternating) ── */}
                    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-0 w-full">
                      {isLeft ? (
                        <>
                          {/* Left card */}
                          <div className="pr-10 flex justify-end pb-8">
                            <div className="w-full max-w-sm bg-navy border border-white/10 hover:border-gold/40 rounded-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 text-right">
                              <p className="text-gold/50 text-[10px] font-medium tracking-widest uppercase mb-1">
                                STEP {String(step.number).padStart(2, "0")}
                              </p>
                              <h3 className="text-sm font-bold text-white mb-2 leading-snug">{step.title}</h3>
                              <p className="text-xs text-white/55 leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                          {/* Right empty */}
                          <div className="pl-10 pb-8" />
                        </>
                      ) : (
                        <>
                          {/* Left empty */}
                          <div className="pr-10 pb-8" />
                          {/* Right card */}
                          <div className="pl-10 flex justify-start pb-8">
                            <div className="w-full max-w-sm bg-navy border border-white/10 hover:border-gold/40 rounded-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
                              <p className="text-gold/50 text-[10px] font-medium tracking-widest uppercase mb-1">
                                STEP {String(step.number).padStart(2, "0")}
                              </p>
                              <h3 className="text-sm font-bold text-white mb-2 leading-snug">{step.title}</h3>
                              <p className="text-xs text-white/55 leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Center circle (absolute to the center line) */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-12 h-12 rounded-full bg-gold border-4 border-navy-dark flex items-center justify-center shadow-lg shadow-black/50">
                          <span className="text-navy text-sm font-bold">{step.number}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
