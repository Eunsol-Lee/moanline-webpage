import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { treatmentItems } from "@/data/treatments";

export const metadata: Metadata = {
  title: "모앤라인 헤어라인교정술 | 모앤라인성형외과",
  description:
    "13가지 맞춤 시술로 자연스러운 헤어라인을 완성합니다. 성별 맞춤 디자인부터 노 쉐이빙 이식까지 다양한 헤어라인 교정 시술을 제공합니다.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        title="모앤라인 헤어라인교정술"
        subtitle="13가지 맞춤 시술로 자연스러운 헤어라인을 완성합니다"
        breadcrumb={[{ label: "모앤라인 헤어라인교정술" }]}
      />

      <section className="bg-off-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-12 lg:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-0.5 bg-gold" />
              <span className="text-gold text-xs font-medium tracking-widest uppercase">
                Treatments
              </span>
            </div>
            <p className="text-navy/60 text-sm sm:text-base max-w-2xl leading-relaxed">
              개인의 안면윤곽과 모발 상태를 정밀 분석하여 최적의 헤어라인 교정
              시술을 설계합니다.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {treatmentItems.map((item, index) => (
              <Link
                key={item.slug}
                href={`/treatments/${item.slug}`}
                className="group relative bg-white border border-navy/8 hover:border-gold/40 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Card number */}
                <div className="absolute top-5 right-5 text-5xl font-bold text-navy/5 group-hover:text-gold/10 transition-colors duration-300 select-none leading-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="p-7 pr-14">
                  {/* Gold top accent bar */}
                  <div className="w-8 h-0.5 bg-gold mb-5 group-hover:w-12 transition-all duration-300" />

                  {/* Short description label */}
                  <p className="text-gold text-xs font-medium tracking-wider uppercase mb-2">
                    {item.shortDesc}
                  </p>

                  {/* Title */}
                  <h2 className="text-navy font-bold text-base sm:text-lg leading-snug mb-6 group-hover:text-navy-dark transition-colors duration-200">
                    {item.title}
                  </h2>

                  {/* Arrow link */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-navy/40 group-hover:text-gold transition-colors duration-200">
                    <span>자세히 보기</span>
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
