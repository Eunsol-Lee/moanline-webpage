"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import ContactBanner from "@/components/ContactBanner";

type Category = "전체" | "헤어라인교정술" | "모발이식" | "탈모치료";

const categories: Category[] = ["전체", "헤어라인교정술", "모발이식", "탈모치료"];

const cases = [
  { id: 1, category: "헤어라인교정술", title: "이마 높이 교정", description: "무삭발 비절개 2,500모 이식", detail: "수술 후 6개월 경과" },
  { id: 2, category: "헤어라인교정술", title: "M자 탈모 개선", description: "비절개 3,000모 이식", detail: "수술 후 12개월 경과" },
  { id: 3, category: "모발이식", title: "정수리 밀도 개선", description: "절개 2,800모 이식", detail: "수술 후 8개월 경과" },
  { id: 4, category: "탈모치료", title: "전반적 탈모 케어", description: "비수술적 탈모 치료", detail: "치료 후 4개월 경과" },
  { id: 5, category: "헤어라인교정술", title: "앞머리 헤어라인 디자인", description: "무삭발 비절개 2,200모", detail: "수술 후 10개월 경과" },
  { id: 6, category: "모발이식", title: "측두부 밀도 개선", description: "비절개 1,500모 이식", detail: "수술 후 6개월 경과" },
];

export default function CasesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("전체");

  const filtered =
    activeCategory === "전체"
      ? cases
      : cases.filter((c) => c.category === activeCategory);

  return (
    <>
      <PageHero
        title="수술 사례"
        subtitle="모앤라인의 시술 결과를 확인하세요"
        breadcrumb={[{ label: "수술 사례" }]}
      />

      <section className="bg-navy-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <span className="inline-block w-10 h-0.5 bg-gold" />
            </div>
            <p className="text-white/55 text-sm sm:text-base max-w-xl mx-auto">
              수천 례의 임상 경험에서 선별된 대표 사례입니다.
            </p>
          </div>

          {/* Tab filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-medium rounded-sm border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gold border-gold text-navy"
                    : "bg-transparent border-white/20 text-white/60 hover:border-gold/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-navy border border-white/10 hover:border-gold/40 rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
              >
                {/* Before/After placeholder */}
                <div className="bg-navy-dark h-52 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex">
                    <div className="flex-1 flex items-center justify-center border-r border-white/10">
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </div>
                        <p className="text-white/25 text-xs">Before</p>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </div>
                        <p className="text-white/25 text-xs">After</p>
                      </div>
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-gold/20 text-gold text-[10px] font-medium px-2 py-1 rounded-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5">
                  <h3 className="text-white text-sm font-bold mb-1">{item.title}</h3>
                  <p className="text-white/55 text-xs mb-1">{item.description}</p>
                  <p className="text-gold/60 text-xs">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Notice */}
          <div className="bg-navy border border-white/10 rounded-sm p-5 flex items-start gap-4 max-w-2xl mx-auto">
            <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-white/55 text-sm leading-relaxed">
              실제 사례 사진은 <span className="text-white/80 font-medium">상담 시 원내에서 확인</span>하실 수 있습니다.
              개인정보 보호를 위해 온라인에서는 제한적으로 공개하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
