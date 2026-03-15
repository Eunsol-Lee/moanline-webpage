import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactBanner from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "고객 후기 | 모앤라인성형외과",
};

const categoryColors: Record<string, string> = {
  헤어라인교정술: "bg-gold/20 text-gold",
  모발이식: "bg-blue-900/40 text-blue-300",
  탈모치료: "bg-emerald-900/40 text-emerald-300",
};

const reviews = [
  {
    id: 1,
    date: "2024.11.15",
    category: "모발이식",
    title: "2주차 모발이식 후기",
    excerpt:
      "수술 후 2주가 지났습니다. 담당 선생님이 세심하게 설명해 주셔서 불안함 없이 수술을 받을 수 있었어요. 경과가 기대됩니다.",
  },
  {
    id: 2,
    date: "2024.11.03",
    category: "헤어라인교정술",
    title: "헤어라인 교정 2주차",
    excerpt:
      "이마가 넓어서 오래 고민하다가 결정했는데, 디자인 단계부터 정말 꼼꼼하게 상담해 주셨어요. 2주차인데 벌써 자연스러운 라인이 기대됩니다.",
  },
  {
    id: 3,
    date: "2024.10.22",
    category: "헤어라인교정술",
    title: "헤어라인 교정 3개월 후기",
    excerpt:
      "3개월이 지나니 이식한 모발이 자라기 시작했어요. 원장님이 직접 디자인하셔서 그런지 정말 자연스럽습니다. 많이 고민했는데 잘 결정한 것 같아요.",
  },
  {
    id: 4,
    date: "2024.10.08",
    category: "모발이식",
    title: "비절개 모발이식 6개월 경과",
    excerpt:
      "6개월이 지나니 확실히 달라졌어요. 뒷머리에 흔적도 없고 이식된 부위도 자연스럽게 자라고 있습니다. 무삭발로 수술한 게 정말 편했어요.",
  },
  {
    id: 5,
    date: "2024.09.17",
    category: "탈모치료",
    title: "탈모 케어 4개월 후기",
    excerpt:
      "약 4개월 동안 레이저 치료와 주사 치료를 병행했어요. 머리카락이 굵어지고 빠지는 양이 줄었습니다. 꾸준히 관리받으니 확실히 효과가 있네요.",
  },
  {
    id: 6,
    date: "2024.09.05",
    category: "헤어라인교정술",
    title: "수술 1년 후기",
    excerpt:
      "수술한 지 1년이 됐습니다. 완전히 자연스럽게 자랐고 주변에서 눈치채는 사람이 없어요. 비밀이 유지되면서도 이렇게 변할 수 있다니 정말 만족합니다.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="고객 후기"
        subtitle="모앤라인을 경험한 고객님들의 이야기"
        breadcrumb={[{ label: "고객 후기" }]}
      />

      <section className="bg-navy-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <span className="inline-block w-10 h-0.5 bg-gold" />
            </div>
            <p className="text-white/55 text-sm sm:text-base max-w-xl mx-auto">
              실제 고객님들의 경험을 확인해 보세요. 더 많은 후기는 상담 시 안내해 드립니다.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-navy border border-white/10 hover:border-gold/40 rounded-sm p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-medium px-2 py-0.5 rounded-sm ${
                      categoryColors[review.category] ?? "bg-white/10 text-white/60"
                    }`}
                  >
                    {review.category}
                  </span>
                  <span className="text-white/30 text-xs">{review.date}</span>
                </div>

                {/* Gold divider */}
                <div className="w-8 h-px bg-gold/30" />

                {/* Title */}
                <h3 className="text-white text-sm font-bold leading-snug">{review.title}</h3>

                {/* Excerpt */}
                <p className="text-white/55 text-xs leading-relaxed flex-1">{review.excerpt}</p>

                {/* Blurred read more */}
                <div className="relative mt-2">
                  <div className="h-6 bg-gradient-to-t from-navy to-transparent absolute inset-x-0 bottom-0" />
                  <div className="flex items-center gap-1.5 text-gold/40 text-xs">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <span>로그인 후 전체 보기</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Notice */}
          <div className="bg-navy border border-white/10 rounded-sm p-5 flex items-start gap-4 max-w-2xl mx-auto">
            <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <p className="text-white/55 text-sm leading-relaxed">
              실제 후기는 <span className="text-white/80 font-medium">로그인 후 확인</span>하실 수 있습니다.
              개인정보 보호를 위해 회원만 전체 내용을 열람할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
