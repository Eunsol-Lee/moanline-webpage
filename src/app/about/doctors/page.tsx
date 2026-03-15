import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactBanner from "@/components/ContactBanner";
import { doctors } from "@/data/doctors";

export const metadata: Metadata = {
  title: "의료진 소개 | 모앤라인성형외과",
};

export default function DoctorsPage() {
  const featured = doctors.find((d) => d.featured);
  const others = doctors.filter((d) => !d.featured);

  return (
    <>
      <PageHero
        title="의료진 소개"
        subtitle="경험과 전문성을 갖춘 성형외과전문의 팀"
        breadcrumb={[
          { label: "모앤라인성형외과", href: "/about" },
          { label: "의료진 소개" },
        ]}
      />

      <section className="bg-navy-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-4">
              <span className="inline-block w-10 h-0.5 bg-gold" />
            </div>
            <p className="text-white/55 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              모앤라인성형외과의 모든 의료진은 성형외과전문의로서 헤어라인교정술에 깊은 전문성을 보유하고 있습니다.
            </p>
          </div>

          {/* Featured Doctor */}
          {featured && (
            <div className="bg-navy border border-white/10 rounded-sm overflow-hidden mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Photo placeholder */}
                <div className="relative bg-navy-dark min-h-[320px] lg:min-h-[480px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-14 h-14 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <p className="text-white/20 text-xs">의료진 사진</p>
                  </div>
                  {/* Gold badge */}
                  <div className="absolute top-6 left-6 bg-gold px-3 py-1.5 rounded-sm">
                    <span className="text-navy text-xs font-bold tracking-wide">대표원장</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block w-6 h-0.5 bg-gold" />
                    <span className="text-gold text-xs font-medium tracking-widest uppercase">Mo&amp;Line</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-1">{featured.name}</h2>
                  <p className="text-gold text-sm font-medium mb-6">{featured.role}</p>

                  {featured.description && (
                    <p className="text-white/65 text-sm leading-relaxed mb-8 pb-8 border-b border-white/10">
                      {featured.description}
                    </p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-3 text-gold/80">
                        학력 및 경력
                      </h3>
                      <ul className="space-y-2">
                        {featured.credentials.map((c, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-white/60">
                            <span className="text-gold mt-0.5 flex-shrink-0">•</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-3 text-gold/80">
                        학회 소속
                      </h3>
                      <ul className="space-y-2">
                        {featured.memberships.map((m, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-white/60">
                            <span className="text-gold mt-0.5 flex-shrink-0">•</span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Doctors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {others.map((doctor, index) => (
              <div
                key={index}
                className="bg-navy border border-white/10 rounded-sm overflow-hidden"
              >
                {/* Photo placeholder */}
                <div className="bg-navy-dark h-48 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3">
                      <svg className="w-10 h-10 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <p className="text-white/20 text-xs">의료진 사진</p>
                  </div>
                  <div className="absolute top-4 left-4 bg-navy-dark border border-gold/30 px-3 py-1 rounded-sm">
                    <span className="text-gold text-xs font-medium">{doctor.role}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-4 pb-4 border-b border-white/10">
                    {doctor.name}
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h3 className="text-gold/80 text-xs font-semibold tracking-widest uppercase mb-2">
                        학력 및 경력
                      </h3>
                      <ul className="space-y-1.5">
                        {doctor.credentials.map((c, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-white/60">
                            <span className="text-gold mt-0.5 flex-shrink-0">•</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-gold/80 text-xs font-semibold tracking-widest uppercase mb-2">
                        학회 소속
                      </h3>
                      <ul className="space-y-1.5">
                        {doctor.memberships.map((m, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-white/60">
                            <span className="text-gold mt-0.5 flex-shrink-0">•</span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
