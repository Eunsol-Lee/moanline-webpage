import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { hairlossItems } from "@/data/hairloss";

export const metadata: Metadata = {
  title: "모앤라인 탈모치료 | 모앤라인성형외과",
  description:
    "남성·여성 맞춤 탈모치료와 모발이식. 남성탈모, 여성탈모, 비수술 탈모치료까지 과학적인 맞춤 솔루션을 제공합니다.",
};

export default function HairLossPage() {
  return (
    <>
      <PageHero
        title="모앤라인 탈모치료"
        subtitle="남성·여성 맞춤 탈모치료와 모발이식"
        breadcrumb={[{ label: "모앤라인 탈모치료" }]}
      />

      <section className="bg-off-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-12 lg:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-0.5 bg-gold" />
              <span className="text-gold text-xs font-medium tracking-widest uppercase">
                Hair Loss
              </span>
            </div>
            <p className="text-navy/60 text-sm sm:text-base max-w-2xl leading-relaxed">
              탈모 유형과 진행 단계를 정밀 분석하여 수술적·비수술적 맞춤
              치료를 제공합니다.
            </p>
          </div>

          {/* Large cards */}
          <div className="grid grid-cols-1 gap-8 lg:gap-10">
            {hairlossItems.map((item, index) => (
              <Link
                key={item.slug}
                href={`/hair-loss/${item.slug}`}
                className="group relative bg-white border border-navy/8 hover:border-gold/40 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Left accent panel */}
                  <div className="lg:col-span-1 bg-navy relative flex flex-col justify-between p-8 min-h-[160px] lg:min-h-0 overflow-hidden">
                    {/* Background decorative number */}
                    <span
                      aria-hidden
                      className="absolute bottom-4 right-4 text-7xl font-bold text-white/5 leading-none select-none"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="w-8 h-0.5 bg-gold mb-4" />
                      <p className="text-gold text-xs font-medium tracking-widest uppercase mb-3">
                        {item.subtitle}
                      </p>
                      <h2 className="text-white font-bold text-xl sm:text-2xl leading-snug">
                        {item.title}
                      </h2>
                    </div>

                    {/* Arrow indicator */}
                    <div className="mt-6 lg:mt-auto flex items-center gap-2 text-gold/60 group-hover:text-gold transition-colors duration-200">
                      <span className="text-xs font-semibold">자세히 보기</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="lg:col-span-4 p-8 flex flex-col justify-between">
                    {/* Description */}
                    <p className="text-navy/70 text-sm sm:text-base leading-relaxed mb-7 max-w-2xl">
                      {item.description}
                    </p>

                    {/* Treatments preview pills */}
                    <div>
                      <p className="text-navy/40 text-xs font-medium uppercase tracking-widest mb-3">
                        주요 치료 항목
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {item.treatments.map((t) => (
                          <span
                            key={t.name}
                            className="inline-flex items-center gap-2 px-4 py-2 border border-navy/10 group-hover:border-gold/25 bg-navy/3 text-navy/65 text-xs font-medium rounded-sm transition-colors duration-200"
                          >
                            <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                            {t.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
