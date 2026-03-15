import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative bg-navy min-h-[200px] sm:min-h-[240px] flex flex-col justify-end overflow-hidden">
      {/* Background decorative elements */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
      >
        {/* Top-right gold circle blur */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        {/* Bottom-left accent */}
        <div className="absolute bottom-0 left-0 w-64 h-1 bg-gradient-to-r from-gold/40 to-transparent" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10 sm:pt-32 sm:pb-12 w-full">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-white/40">
              <li>
                <Link href="/" className="hover:text-gold transition-colors duration-150">
                  홈
                </Link>
              </li>
              {breadcrumb.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg
                    className="w-3 h-3 text-white/20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  {item.href && index < breadcrumb.length - 1 ? (
                    <Link
                      href={item.href}
                      className="hover:text-gold transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className={index === breadcrumb.length - 1 ? "text-gold/80" : ""}>
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Gold accent */}
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block w-8 h-0.5 bg-gold" />
          <span className="text-gold text-xs font-medium tracking-widest uppercase">
            Mo&amp;Line
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-2 text-sm sm:text-base text-white/60 max-w-xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
