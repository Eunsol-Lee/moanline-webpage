import Link from "next/link";

interface ContactBannerProps {
  title?: string;
  subtitle?: string;
}

export default function ContactBanner({
  title = "지금 무료 상담을 받아보세요",
  subtitle = "성형외과 전문의가 직접 상담합니다. 궁금하신 점은 언제든 문의해 주세요.",
}: ContactBannerProps) {
  return (
    <section className="bg-navy py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Gold accent line */}
        <div className="flex justify-center mb-6">
          <span className="inline-block w-10 h-0.5 bg-gold" />
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug">
          {title}
        </h2>
        <p className="text-white/60 text-sm sm:text-base mb-8 leading-relaxed">{subtitle}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Phone number */}
          <a
            href="tel:02-517-4890"
            className="group flex items-center gap-3 px-6 py-3.5 border border-gold/40 hover:border-gold text-white hover:text-gold transition-colors duration-200 rounded-sm"
          >
            <svg
              className="w-5 h-5 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="font-semibold text-lg tracking-wide">02-517-4890</span>
          </a>

          {/* CTA button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold hover:bg-gold-light text-navy font-semibold text-sm transition-colors duration-200 rounded-sm"
          >
            상담 예약하기
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Operating hours note */}
        <p className="mt-6 text-xs text-white/35">
          평일 10:00–19:00 · 토요일 10:00–17:00 · 일요일·공휴일 휴진
        </p>
      </div>
    </section>
  );
}
