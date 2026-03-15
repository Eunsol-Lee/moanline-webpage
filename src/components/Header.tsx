"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface MenuItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: MenuItem[];
}

const navItems: NavItem[] = [
  {
    label: "헤어라인교정술 노하우",
    dropdown: [
      { label: "무삭발 비절개 대량 이식", href: "/knowhow/non-shaving-fue" },
      { label: "흉터 최소화 두피절개술", href: "/knowhow/scar-minimization" },
      { label: "잔머리부터 그라데이션 구현", href: "/knowhow/gradation" },
      { label: "자연스러운 헤어라인 슬릿 디자인", href: "/knowhow/slit-design" },
      { label: "고난이도 재수술노하우", href: "/knowhow/revision" },
      { label: "고생착 모낭이식술로 안정적 밀도", href: "/knowhow/high-engraftment" },
      { label: "업그레이드된 모낭 이식술 노하우", href: "/knowhow/upgraded-technique" },
      { label: "슬릿, 채취, 이식 원장 진행", href: "/knowhow/doctor-performs" },
      { label: "연예인의 노 쉐이빙 헤어라인교정", href: "/knowhow/celebrity-no-shaving" },
    ],
  },
  {
    label: "헤어라인교정술 궁금증",
    href: "/faq",
  },
  {
    label: "모앤라인 헤어라인교정술",
    dropdown: [
      { label: "여성·남성 헤어라인 교정술의 차이", href: "/treatments/gender-difference" },
      { label: "안면윤곽과 헤어라인 3D 분석 디자인", href: "/treatments/3d-analysis" },
      { label: "비절개/절개 모낭채취", href: "/treatments/extraction" },
      { label: "수술 전후 두피 적정화 케어", href: "/treatments/scalp-care" },
      { label: "M자, 어색한 헤어라인 교정", href: "/treatments/m-shape" },
      { label: "넓은 이마 대량 모발이식", href: "/treatments/wide-forehead" },
      { label: "헤어라인 재교정", href: "/treatments/re-correction" },
      { label: "제모·반영구 문신한 헤어라인 교정", href: "/treatments/tattoo-correction" },
      { label: "흉터 부위 모발이식", href: "/treatments/scar-transplant" },
      { label: "구레나룻, 측면 헤어라인 교정", href: "/treatments/sideburn" },
      { label: "미니 헤어라인교정", href: "/treatments/mini-correction" },
      { label: "정수리, 쌍가마, 밀도보강 모발이식", href: "/treatments/crown" },
      { label: "노 쉐이빙 모낭이식술", href: "/treatments/no-shaving" },
    ],
  },
  {
    label: "모앤라인 탈모치료",
    dropdown: [
      { label: "남성탈모 모발이식", href: "/hair-loss/male" },
      { label: "여성탈모 모발이식", href: "/hair-loss/female" },
      { label: "비수술 탈모치료", href: "/hair-loss/non-surgical" },
    ],
  },
  {
    label: "모앤라인성형외과",
    dropdown: [
      { label: "헤어라인교정에 집중", href: "/about" },
      { label: "의료진 소개", href: "/about/doctors" },
      { label: "진료 전과정 미리보기", href: "/about/process" },
      { label: "수술 고객 케어와 보증제", href: "/about/care" },
      { label: "진료시간, 오시는길", href: "/about/location" },
    ],
  },
  {
    label: "고객센터",
    dropdown: [
      { label: "온라인상담", href: "/contact" },
      { label: "온라인예약", href: "/contact" },
      { label: "수술사례", href: "/cases" },
      { label: "고객후기", href: "/reviews" },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<number | null>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMouseEnter = (index: number) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy shadow-lg shadow-navy-dark/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 flex-shrink-0">
            <span className="text-xl lg:text-2xl font-bold text-white tracking-tight">
              모앤라인
            </span>
            <span className="text-xl lg:text-2xl font-medium text-gold tracking-tight">
              성형외과
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href && !item.dropdown ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/90 hover:text-gold transition-colors duration-200 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/90 hover:text-gold transition-colors duration-200 whitespace-nowrap"
                    aria-expanded={openDropdown === index}
                  >
                    {item.label}
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === index && (
                  <div
                    className="absolute top-full left-0 mt-0 bg-navy-light border border-gold/20 rounded-b-lg shadow-xl shadow-navy-dark/60 min-w-[220px] py-2 z-50"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdown.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        href={sub.href}
                        className="block px-4 py-2.5 text-sm text-white/80 hover:text-gold hover:bg-navy transition-colors duration-150 border-b border-white/5 last:border-0"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-navy bg-gold hover:bg-gold-light transition-colors duration-200 rounded-sm"
            >
              상담 예약
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
              aria-label="메뉴 열기"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-navy-dark/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* Drawer */}
        <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-navy overflow-y-auto">
          <div className="px-4 py-4">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full py-3 text-sm font-semibold text-navy bg-gold hover:bg-gold-light transition-colors duration-200 rounded-sm mb-4"
            >
              상담 예약
            </Link>

            <nav className="space-y-1">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-white/10">
                  {item.href && !item.dropdown ? (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between w-full px-3 py-3.5 text-sm font-medium text-white/90 hover:text-gold transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setMobileAccordion(mobileAccordion === index ? null : index)
                        }
                        className="flex items-center justify-between w-full px-3 py-3.5 text-sm font-medium text-white/90 hover:text-gold transition-colors"
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileAccordion === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileAccordion === index && item.dropdown && (
                        <div className="bg-navy-dark pb-2">
                          {item.dropdown.map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-6 py-2.5 text-sm text-white/70 hover:text-gold transition-colors border-b border-white/5 last:border-0"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
