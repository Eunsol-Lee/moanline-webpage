import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactBanner from "@/components/ContactBanner";
import { treatmentItems } from "@/data/treatments";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return treatmentItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = treatmentItems.find((t) => t.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} | 모앤라인 헤어라인교정술`,
    description: item.description,
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = treatmentItems.find((t) => t.slug === slug);

  if (!item) {
    notFound();
  }

  const related = treatmentItems
    .filter((t) => t.slug !== item.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        title={item.title}
        subtitle={item.shortDesc}
        breadcrumb={[
          { label: "모앤라인 헤어라인교정술", href: "/treatments" },
          { label: item.title },
        ]}
      />

      {/* Main content */}
      <section className="bg-off-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Primary content */}
            <div className="lg:col-span-2">
              {/* Label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block w-8 h-0.5 bg-gold" />
                <span className="text-gold text-xs font-medium tracking-widest uppercase">
                  시술 소개
                </span>
              </div>

              {/* Description */}
              <div className="bg-white border border-navy/8 rounded-sm p-8 mb-8 shadow-sm">
                <p className="text-navy/75 text-base sm:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Key points */}
              {item.keyPoints && item.keyPoints.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-block w-8 h-0.5 bg-gold" />
                    <span className="text-gold text-xs font-medium tracking-widest uppercase">
                      주요 특징
                    </span>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.keyPoints.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-4 bg-white border border-navy/8 rounded-sm p-5 shadow-sm hover:border-gold/30 transition-colors duration-200"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-gold"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-navy/80 text-sm leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Back link */}
              <Link
                href="/treatments"
                className="group inline-flex items-center gap-2 text-navy/50 hover:text-gold text-sm font-medium transition-colors duration-200 mb-8"
              >
                <svg
                  className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                <span>시술 목록으로</span>
              </Link>

              {/* Related treatments */}
              {related.length > 0 && (
                <div className="bg-white border border-navy/8 rounded-sm p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-block w-6 h-0.5 bg-gold" />
                    <span className="text-gold text-xs font-medium tracking-widest uppercase">
                      다른 시술 보기
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {related.map((rel) => (
                      <li key={rel.slug}>
                        <Link
                          href={`/treatments/${rel.slug}`}
                          className="group flex items-start gap-3 py-3 border-b border-navy/6 last:border-b-0 hover:text-gold transition-colors duration-200"
                        >
                          <svg
                            className="w-4 h-4 text-gold/50 group-hover:text-gold flex-shrink-0 mt-0.5 transform group-hover:translate-x-0.5 transition-transform duration-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          <div>
                            <p className="text-navy text-sm font-medium group-hover:text-gold transition-colors duration-200 leading-snug">
                              {rel.title}
                            </p>
                            <p className="text-navy/45 text-xs mt-0.5">
                              {rel.shortDesc}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/treatments"
                    className="group mt-5 flex items-center gap-2 text-xs text-navy/40 hover:text-gold font-medium transition-colors duration-200"
                  >
                    <span>전체 시술 보기</span>
                    <svg
                      className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200"
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
                  </Link>
                </div>
              )}

              {/* CTA card */}
              <div className="mt-6 bg-navy rounded-sm p-6 relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gold/5 blur-2xl"
                />
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block w-6 h-0.5 bg-gold" />
                  <span className="text-gold text-xs font-medium tracking-widest uppercase">
                    상담 안내
                  </span>
                </div>
                <p className="text-white font-semibold text-base mb-1 leading-snug">
                  궁금하신 점이 있으신가요?
                </p>
                <p className="text-white/50 text-xs mb-5 leading-relaxed">
                  성형외과 전문의가 직접 상담합니다.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold hover:bg-gold-light text-navy font-semibold text-xs transition-colors duration-200 rounded-sm"
                >
                  무료 상담 예약
                  <svg
                    className="w-3.5 h-3.5"
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
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
