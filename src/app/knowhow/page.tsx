import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { knowhowItems } from "@/data/knowhow";

export const metadata: Metadata = {
  title: "헤어라인교정술 노하우",
};

export default function KnowhowPage() {
  return (
    <>
      <PageHero
        title="헤어라인교정술 노하우"
        subtitle="모앤라인만의 차별화된 기술력"
        breadcrumb={[{ label: "헤어라인교정술 노하우" }]}
      />

      <section className="bg-navy-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section intro */}
          <div className="text-center mb-14">
            <div className="flex justify-center mb-4">
              <span className="inline-block w-10 h-0.5 bg-gold" />
            </div>
            <p className="text-white/55 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              수천례의 임상 경험으로 완성한 모앤라인만의 9가지 핵심 노하우를 확인하세요.
            </p>
          </div>

          {/* Grid of 9 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {knowhowItems.map((item, index) => {
              const num = String(index + 1).padStart(2, "0");
              return (
                <Link
                  key={item.slug}
                  href={`/knowhow/${item.slug}`}
                  className="group relative bg-navy border border-white/10 hover:border-gold/40 rounded-sm p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
                >
                  {/* Number badge */}
                  <div className="flex items-start justify-between">
                    <span className="text-4xl font-bold text-white/8 leading-none select-none">
                      {num}
                    </span>
                    <span className="text-2xl" role="img" aria-label={item.title}>
                      {item.icon}
                    </span>
                  </div>

                  {/* Title & subtitle */}
                  <div>
                    <h2 className="text-base font-bold text-white group-hover:text-gold transition-colors duration-200 leading-snug mb-1">
                      {item.title}
                    </h2>
                    <p className="text-xs text-white/50 leading-relaxed">{item.subtitle}</p>
                  </div>

                  {/* Gold divider */}
                  <div className="w-8 h-px bg-gold/30 group-hover:w-16 group-hover:bg-gold/60 transition-all duration-300" />

                  {/* First 2 key points */}
                  <ul className="space-y-1.5 flex-1">
                    {item.keyPoints.slice(0, 2).map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/60">
                        <svg
                          className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Read more arrow */}
                  <div className="flex items-center gap-1.5 text-gold/60 group-hover:text-gold text-xs font-medium transition-colors duration-200 mt-1">
                    자세히 보기
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
