import Link from "next/link";

const socialLinks = [
  {
    label: "유튜브",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "블로그",
    href: "https://blog.naver.com/moandlineps",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
      </svg>
    ),
  },
  {
    label: "인스타그램",
    href: "https://instagram.com/moandlineps",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "카카오톡",
    href: "http://pf.kakao.com/_gxoDDT",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.77 1.56 5.21 3.93 6.67l-.99 3.7 4.27-2.83c.9.17 1.83.26 2.79.26 5.52 0 10-3.48 10-7.8S17.52 3 12 3z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { label: "헤어라인 노하우", href: "/knowhow/non-shaving-fue" },
  { label: "헤어라인교정술 궁금증", href: "/faq" },
  { label: "헤어라인교정술", href: "/treatments/gender-difference" },
  { label: "탈모치료", href: "/hair-loss/male" },
  { label: "의료진 소개", href: "/about/doctors" },
  { label: "수술사례", href: "/cases" },
  { label: "온라인상담", href: "/contact" },
  { label: "오시는길", href: "/about/location" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-1 mb-3">
              <span className="text-2xl font-bold text-white tracking-tight">모앤라인</span>
              <span className="text-2xl font-medium text-gold tracking-tight">성형외과</span>
            </Link>
            <p className="text-sm text-white/50 mb-5">자연스러운 헤어라인, 모앤라인</p>

            {/* SNS Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-navy-light text-white/60 hover:text-gold hover:bg-navy transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
              빠른 메뉴
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-gold transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
              오시는길
            </h3>
            <address className="not-italic space-y-2 text-sm text-white/60 leading-relaxed">
              <p>서울특별시 강남구 도산대로 104</p>
              <p>퍼스트에비뉴 10층·13층</p>
              <p className="pt-1">
                <a
                  href="tel:02-517-4890"
                  className="hover:text-gold transition-colors duration-150"
                >
                  Tel. 02-517-4890
                </a>
              </p>
              <p>Fax. 02-517-4891</p>
              <p>
                <a
                  href="mailto:moandlineps@naver.com"
                  className="hover:text-gold transition-colors duration-150"
                >
                  moandlineps@naver.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <dl className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/40">
            <div className="flex gap-1">
              <dt>상호</dt>
              <dd>모앤라인성형외과의원</dd>
            </div>
            <div className="flex gap-1">
              <dt>대표</dt>
              <dd>이병권</dd>
            </div>
            <div className="flex gap-1">
              <dt>등록번호</dt>
              <dd>236-01-01681</dd>
            </div>
          </dl>
          <p className="text-xs text-white/30">
            COPYRIGHT ⓒ2019 MO&amp;LINE SURGERY ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
