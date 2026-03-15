"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-4 sm:right-6 bottom-6 z-40 flex flex-col gap-2.5 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* 빠른상담 */}
      <Link
        href="/contact"
        className="group flex flex-col items-center justify-center w-14 h-14 bg-navy hover:bg-navy-light border border-gold/30 hover:border-gold rounded-full shadow-lg shadow-navy-dark/40 transition-all duration-200"
        aria-label="빠른상담"
      >
        <svg
          className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
        <span className="text-[9px] text-gold mt-0.5 font-medium leading-none">빠른상담</span>
      </Link>

      {/* 카톡상담 */}
      <a
        href="http://pf.kakao.com/_gxoDDT"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center justify-center w-14 h-14 bg-[#FEE500] hover:bg-[#FFD000] rounded-full shadow-lg shadow-navy-dark/30 transition-all duration-200"
        aria-label="카카오톡 상담"
      >
        <svg
          className="w-5 h-5 text-[#381E1F] group-hover:scale-110 transition-transform duration-200"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.77 1.56 5.21 3.93 6.67l-.99 3.7 4.27-2.83c.9.17 1.83.26 2.79.26 5.52 0 10-3.48 10-7.8S17.52 3 12 3z" />
        </svg>
        <span className="text-[9px] text-[#381E1F] mt-0.5 font-medium leading-none">카톡상담</span>
      </a>

      {/* 전화하기 */}
      <a
        href="tel:02-517-4890"
        className="group flex flex-col items-center justify-center w-14 h-14 bg-gold hover:bg-gold-light rounded-full shadow-lg shadow-navy-dark/30 transition-all duration-200"
        aria-label="전화 상담 02-517-4890"
      >
        <svg
          className="w-5 h-5 text-navy group-hover:scale-110 transition-transform duration-200"
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
        <span className="text-[9px] text-navy mt-0.5 font-medium leading-none">전화하기</span>
      </a>
    </div>
  );
}
