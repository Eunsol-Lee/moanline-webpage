import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactBanner from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "오시는 길 | 모앤라인성형외과",
};

const hours = [
  { day: "월요일 ~ 목요일", time: "10:00 – 19:00", note: "" },
  { day: "금요일 (야간 진료)", time: "10:00 – 21:00", note: "야간", highlight: true },
  { day: "토요일", time: "10:00 – 16:30", note: "" },
  { day: "일요일 · 공휴일", time: "휴무", note: "휴무", closed: true },
];

const buses = [
  { type: "지선", numbers: "4417, 4424, 1411, 4212, 4312" },
  { type: "간선", numbers: "141, 145, 148, 240" },
];

export default function LocationPage() {
  return (
    <>
      <PageHero
        title="오시는 길"
        subtitle="모앤라인성형외과를 찾아오세요"
        breadcrumb={[
          { label: "모앤라인성형외과", href: "/about" },
          { label: "오시는 길" },
        ]}
      />

      <section className="bg-navy-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Map placeholder */}
            <div className="rounded-sm overflow-hidden">
              <div className="bg-navy border border-white/10 h-80 lg:h-full min-h-[400px] flex items-center justify-center relative">
                <div className="text-center">
                  <svg className="w-16 h-16 text-white/15 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-white/30 text-sm">지도 영역</p>
                  <p className="text-white/20 text-xs mt-1">서울특별시 강남구 도산대로 104</p>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <a
                    href="https://map.naver.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2.5 bg-gold hover:bg-gold-light text-navy font-semibold text-sm transition-colors duration-200 rounded-sm"
                  >
                    네이버 지도로 보기
                  </a>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-8">
              {/* Address */}
              <div className="bg-navy border border-white/10 rounded-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-sm">주소</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed pl-11">
                  서울특별시 강남구 도산대로 104<br />
                  퍼스트에비뉴 10층, 13층<br />
                  <span className="text-white/40 text-xs">(논현동 1-1)</span>
                </p>
                <div className="mt-4 pl-11 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-gold/20 text-gold text-xs px-2 py-0.5 rounded-sm font-medium">13층</span>
                    <span className="text-white/55 text-xs">접수 · 상담 · 치료센터</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-gold/20 text-gold text-xs px-2 py-0.5 rounded-sm font-medium">10층</span>
                    <span className="text-white/55 text-xs">수술센터</span>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-navy border border-white/10 rounded-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-sm">전화</h3>
                </div>
                <div className="pl-11 flex flex-col gap-1.5">
                  <a href="tel:02-517-4890" className="text-white/70 hover:text-gold text-sm transition-colors duration-200 font-medium">
                    02-517-4890
                  </a>
                  <a href="tel:010-7467-4890" className="text-white/70 hover:text-gold text-sm transition-colors duration-200 font-medium">
                    010-7467-4890
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-navy border border-white/10 rounded-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-sm">진료시간</h3>
                </div>
                <div className="pl-11">
                  <table className="w-full text-xs">
                    <tbody>
                      {hours.map((row, i) => (
                        <tr key={i} className={`border-b border-white/5 last:border-0 ${row.highlight ? "bg-gold/5" : ""}`}>
                          <td className={`py-2 pr-4 ${row.closed ? "text-white/30" : "text-white/60"}`}>
                            {row.day}
                          </td>
                          <td className={`py-2 font-medium ${row.closed ? "text-white/30" : row.highlight ? "text-gold" : "text-white/80"}`}>
                            {row.time}
                          </td>
                          {row.highlight && (
                            <td className="py-2 pl-2">
                              <span className="bg-gold/20 text-gold text-[10px] px-1.5 py-0.5 rounded-sm">야간</span>
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Transport */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Subway */}
            <div className="bg-navy border border-white/10 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-sm">지하철</h3>
              </div>
              <p className="text-white/60 text-xs leading-relaxed pl-11">
                <span className="text-gold font-medium">3호선 신사역 2번 출구</span><br />
                도보 약 5m (바로 앞)
              </p>
            </div>

            {/* Bus */}
            <div className="bg-navy border border-white/10 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-sm">버스</h3>
              </div>
              <div className="pl-11 flex flex-col gap-2">
                {buses.map((bus, i) => (
                  <div key={i}>
                    <span className="text-gold/70 text-[10px] font-medium">{bus.type} </span>
                    <span className="text-white/60 text-xs">{bus.numbers}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Parking */}
            <div className="bg-navy border border-white/10 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-sm">주차</h3>
              </div>
              <p className="text-white/60 text-xs leading-relaxed pl-11">
                <span className="text-gold font-medium">발렛파킹 가능</span><br />
                건물 내 주차장 이용 가능
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
