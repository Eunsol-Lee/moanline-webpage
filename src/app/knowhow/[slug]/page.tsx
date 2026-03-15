import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactBanner from "@/components/ContactBanner";
import { knowhowItems } from "@/data/knowhow";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return knowhowItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = knowhowItems.find((i) => i.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.subtitle,
  };
}

export default async function KnowhowDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = knowhowItems.find((i) => i.slug === slug);

  if (!item) {
    notFound();
  }

  const related = knowhowItems.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={item.title}
        subtitle={item.subtitle}
        breadcrumb={[
          { label: "헤어라인교정술 노하우", href: "/knowhow" },
          { label: item.title },
        ]}
      />

      {/* Main content */}
      <section className="bg-navy-dark py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Icon & title accent */}
          <div className="flex items-center gap-4 mb-10">
            <span
              className="text-5xl"
              role="img"
              aria-label={item.title}
            >
              {item.icon}
            </span>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="inline-block w-6 h-0.5 bg-gold" />
                <span className="text-gold text-xs font-medium tracking-widest uppercase">
                  Mo&amp;Line Knowhow
                </span>
              </div>
              <p className="text-white/50 text-sm">{item.subtitle}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12">
            <p className="text-white/85 text-lg sm:text-xl leading-relaxed font-light">
              {item.description}
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-10">
            <span className="flex-1 h-px bg-white/10" />
            <span className="text-gold/60 text-xs tracking-widest uppercase">Key Points</span>
            <span className="flex-1 h-px bg-white/10" />
          </div>

          {/* Key points */}
          <ul className="space-y-4 mb-16">
            {item.keyPoints.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-navy border border-white/8 rounded-sm px-5 py-4"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/80 text-sm sm:text-base leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          {/* Back to list */}
          <div className="flex justify-center">
            <Link
              href="/knowhow"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold/40 hover:border-gold text-white/70 hover:text-gold text-sm transition-colors duration-200 rounded-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              노하우 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </section>

      {/* Related knowhow */}
      <section className="bg-navy py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <span className="inline-block w-8 h-0.5 bg-gold" />
            <h2 className="text-lg font-bold text-white">다른 노하우 보기</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((relItem) => (
              <Link
                key={relItem.slug}
                href={`/knowhow/${relItem.slug}`}
                className="group bg-navy-dark border border-white/10 hover:border-gold/40 rounded-sm p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{relItem.icon}</span>
                  <h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors duration-200 leading-snug">
                    {relItem.title}
                  </h3>
                </div>
                <p className="text-xs text-white/50 leading-relaxed">{relItem.subtitle}</p>
                <div className="flex items-center gap-1 text-gold/60 group-hover:text-gold text-xs font-medium transition-colors duration-200 mt-auto">
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
            ))}
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
