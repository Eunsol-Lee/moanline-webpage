"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import ContactBanner from "@/components/ContactBanner";
import { faqItems } from "@/data/faq";

export default function FaqPage() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  function toggle(slug: string) {
    setOpenSlug((prev) => (prev === slug ? null : slug));
  }

  return (
    <>
      <PageHero
        title="헤어라인교정술 궁금증"
        subtitle="자주 묻는 질문과 답변"
        breadcrumb={[{ label: "헤어라인교정술 궁금증" }]}
      />

      <section className="bg-navy-dark py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <span className="inline-block w-10 h-0.5 bg-gold" />
            </div>
            <p className="text-white/55 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              헤어라인교정술에 관해 많은 분들이 궁금해하시는 질문들을 모았습니다.
            </p>
          </div>

          {/* Accordion */}
          <div className="flex flex-col divide-y divide-white/10 border border-white/10 rounded-sm overflow-hidden">
            {faqItems.map((item, index) => {
              const isOpen = openSlug === item.slug;
              return (
                <div
                  key={item.slug}
                  className={`transition-colors duration-200 ${
                    isOpen ? "border-l-4 border-l-gold" : "border-l-4 border-l-transparent"
                  }`}
                >
                  <button
                    onClick={() => toggle(item.slug)}
                    className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left bg-navy hover:bg-navy-dark transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-gold text-xs font-bold tracking-widest mt-0.5 flex-shrink-0">
                        Q{String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={`text-sm font-medium leading-snug ${isOpen ? "text-gold" : "text-white"} transition-colors duration-200`}>
                        {item.question}
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-gold flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-navy-dark px-6 py-5 pl-16">
                      <p className="text-white/65 text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA note */}
          <div className="mt-10 text-center">
            <p className="text-white/40 text-xs">
              더 궁금한 사항은 상담을 통해 성형외과전문의에게 직접 문의하세요.
            </p>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
