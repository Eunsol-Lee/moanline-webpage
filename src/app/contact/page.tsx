"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import PageHero from "@/components/PageHero";
import ContactBanner from "@/components/ContactBanner";

const procedures = ["헤어라인교정술", "모발이식", "탈모치료", "일반상담"];

const regions = [
  "서울",
  "경기",
  "인천",
  "부산",
  "대구",
  "광주",
  "대전",
  "울산",
  "세종",
  "강원",
  "충북",
  "충남",
  "전북",
  "전남",
  "경북",
  "경남",
  "제주",
  "해외",
];

const ageGroups = ["10대", "20대", "30대", "40대", "50대 이상"];

const consultSteps = [
  { number: "1", label: "상담 신청", desc: "온라인 또는 전화로 신청" },
  { number: "2", label: "예약 확인", desc: "담당자가 24시간 내 연락" },
  { number: "3", label: "방문 상담", desc: "성형외과전문의 1:1 상담" },
  { number: "4", label: "수술 결정", desc: "충분한 설명 후 결정" },
];

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  if (digits.startsWith("02")) {
    if (digits.length <= 9) return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6, 10)}`;
  }
  if (digits.length <= 10) return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
}

interface FormState {
  name: string;
  phone: string;
  procedure: string;
  region: string;
  gender: string;
  age: string;
  message: string;
  privacyAgreed: boolean;
  smsAgreed: boolean;
}

const initialForm: FormState = {
  name: "",
  phone: "",
  procedure: "",
  region: "",
  gender: "",
  age: "",
  message: "",
  privacyAgreed: false,
  smsAgreed: false,
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else if (name === "phone") {
      setForm((prev) => ({ ...prev, phone: formatPhone(value) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) newErrors.name = "이름을 입력해 주세요.";
    if (!form.phone.trim()) newErrors.phone = "연락처를 입력해 주세요.";
    if (!form.procedure) newErrors.procedure = "관심 시술을 선택해 주세요.";
    if (!form.privacyAgreed) newErrors.privacyAgreed = "개인정보 수집 및 이용에 동의해 주세요.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    window.alert("상담 신청이 완료되었습니다. 담당자가 24시간 내 연락드리겠습니다.");
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <>
      <PageHero
        title="상담 예약"
        subtitle="무료 상담을 신청하세요"
        breadcrumb={[{ label: "상담 예약" }]}
      />

      <section className="bg-navy-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <span className="inline-block w-10 h-0.5 bg-gold" />
            </div>
            <p className="text-white/55 text-sm sm:text-base max-w-xl mx-auto">
              성형외과전문의가 직접 상담합니다. 궁금하신 점은 언제든 문의해 주세요.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="lg:col-span-2 bg-navy border border-white/10 rounded-sm p-8 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 이름 */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-white/70 text-xs font-medium">
                    이름 <span className="text-gold">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                    className="bg-navy-dark border border-white/15 focus:border-gold/60 rounded-sm px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none transition-colors duration-200"
                  />
                  {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
                </div>

                {/* 연락처 */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-white/70 text-xs font-medium">
                    연락처 <span className="text-gold">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    maxLength={13}
                    className="bg-navy-dark border border-white/15 focus:border-gold/60 rounded-sm px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none transition-colors duration-200"
                  />
                  {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}
                </div>
              </div>

              {/* 관심 시술 */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="procedure" className="text-white/70 text-xs font-medium">
                  관심 시술 <span className="text-gold">*</span>
                </label>
                <select
                  id="procedure"
                  name="procedure"
                  value={form.procedure}
                  onChange={handleChange}
                  className="bg-navy-dark border border-white/15 focus:border-gold/60 rounded-sm px-4 py-2.5 text-sm text-white outline-none transition-colors duration-200 appearance-none"
                >
                  <option value="" className="text-white/40">선택해 주세요</option>
                  {procedures.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                {errors.procedure && <p className="text-red-400 text-xs">{errors.procedure}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* 거주지역 */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="region" className="text-white/70 text-xs font-medium">
                    거주지역
                  </label>
                  <select
                    id="region"
                    name="region"
                    value={form.region}
                    onChange={handleChange}
                    className="bg-navy-dark border border-white/15 focus:border-gold/60 rounded-sm px-4 py-2.5 text-sm text-white outline-none transition-colors duration-200 appearance-none"
                  >
                    <option value="">선택</option>
                    {regions.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                {/* 성별 */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-white/70 text-xs font-medium">성별</span>
                  <div className="flex gap-4 mt-1">
                    {["남", "여"].map((g) => (
                      <label key={g} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="gender"
                          value={g}
                          checked={form.gender === g}
                          onChange={handleChange}
                          className="accent-gold w-4 h-4"
                        />
                        <span className="text-white/70 text-sm">{g}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 연령 */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="age" className="text-white/70 text-xs font-medium">
                    연령
                  </label>
                  <select
                    id="age"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    className="bg-navy-dark border border-white/15 focus:border-gold/60 rounded-sm px-4 py-2.5 text-sm text-white outline-none transition-colors duration-200 appearance-none"
                  >
                    <option value="">선택</option>
                    {ageGroups.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 상담 내용 */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-white/70 text-xs font-medium">
                  상담 내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="궁금하신 점이나 현재 상태를 자유롭게 적어주세요."
                  className="bg-navy-dark border border-white/15 focus:border-gold/60 rounded-sm px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none transition-colors duration-200 resize-none"
                />
              </div>

              {/* Agreements */}
              <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacyAgreed"
                    checked={form.privacyAgreed}
                    onChange={handleChange}
                    className="accent-gold w-4 h-4 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-white/60 text-xs leading-relaxed">
                    <span className="text-gold font-medium">[필수]</span> 개인정보 수집 및 이용에 동의합니다.
                    수집항목: 이름, 연락처 / 목적: 상담 예약 및 서비스 제공 / 보유기간: 상담 완료 후 1년
                  </span>
                </label>
                {errors.privacyAgreed && <p className="text-red-400 text-xs pl-7">{errors.privacyAgreed}</p>}

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="smsAgreed"
                    checked={form.smsAgreed}
                    onChange={handleChange}
                    className="accent-gold w-4 h-4 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-white/60 text-xs leading-relaxed">
                    <span className="text-white/40 font-medium">[선택]</span> SMS 수신에 동의합니다. (이벤트, 할인 정보 등)
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-3.5 bg-gold hover:bg-gold-light text-navy font-bold text-sm transition-colors duration-200 rounded-sm tracking-wide"
              >
                상담 신청하기
              </button>

              {submitted && (
                <p className="text-center text-gold text-sm font-medium animate-pulse">
                  상담 신청이 완료되었습니다. 감사합니다.
                </p>
              )}
            </form>

            {/* Side info */}
            <div className="flex flex-col gap-6">
              {/* Contact info */}
              <div className="bg-navy border border-white/10 rounded-sm p-6">
                <h3 className="text-white font-semibold text-sm mb-5 pb-4 border-b border-white/10">
                  직접 문의
                </h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="tel:02-517-4890"
                    className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors duration-200"
                  >
                    <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-0.5">전화 상담</p>
                      <p className="text-sm font-semibold">02-517-4890</p>
                    </div>
                  </a>

                  <a
                    href="https://pf.kakao.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors duration-200"
                  >
                    <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-0.5">카카오톡 상담</p>
                      <p className="text-sm font-semibold">모앤라인성형외과</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Consult steps */}
              <div className="bg-navy border border-white/10 rounded-sm p-6">
                <h3 className="text-white font-semibold text-sm mb-5 pb-4 border-b border-white/10">
                  상담 절차
                </h3>
                <div className="flex flex-col gap-4">
                  {consultSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                        <span className="text-navy text-xs font-bold">{step.number}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium leading-snug">{step.label}</p>
                        <p className="text-white/45 text-xs mt-0.5">{step.desc}</p>
                      </div>
                      {index < consultSteps.length - 1 && (
                        <div className="absolute hidden" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="bg-navy border border-white/10 rounded-sm p-6">
                <h3 className="text-white font-semibold text-sm mb-4">진료시간</h3>
                <div className="flex flex-col gap-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-white/55">월~목</span>
                    <span className="text-white/80">10:00 – 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gold">금 (야간)</span>
                    <span className="text-gold font-medium">10:00 – 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/55">토</span>
                    <span className="text-white/80">10:00 – 16:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/30">일·공휴일</span>
                    <span className="text-white/30">휴무</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
