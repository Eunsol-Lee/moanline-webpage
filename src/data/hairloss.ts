export interface HairlossTreatment {
  name: string;
  desc: string;
}

export interface HairlossItem {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints?: string[];
  treatments: HairlossTreatment[];
}

export const hairlossItems: HairlossItem[] = [
  {
    slug: "male",
    title: "남성탈모 모발이식",
    subtitle: "자연스럽게! 풍성하게!",
    description:
      "남성형 탈모의 진행 상태와 모낭 타입을 상세히 분석하여 맞춤형 모발이식 수술과 과학적 치료를 제공합니다.",
    treatments: [
      { name: "수술 전 레이저", desc: "모낭 강화" },
      { name: "수술 중 줄기세포·사이토카인 주사", desc: "생착률 향상" },
      { name: "수술 후 LLLT·자기장 치료", desc: "모낭 활성화" },
      { name: "맞춤 약물 처방", desc: "탈모 진행 억제" },
    ],
  },
  {
    slug: "female",
    title: "여성탈모 모발이식",
    subtitle: "자연스럽게! 풍성하게!",
    description:
      "넓어진 이마 헤어라인, 가르마 숱 저하, 정수리 탈모 등 여성 탈모를 맞춤 치료합니다. 잦은 다이어트로 인한 모낭 약화도 관리합니다.",
    treatments: [
      { name: "수술 전 레이저", desc: "모낭 강화" },
      { name: "수술 중 강화주사", desc: "사이토카인·줄기세포" },
      { name: "수술 후 LLLT", desc: "모발 재생 촉진" },
      { name: "지루성 두피염 관리", desc: "두피 건강 회복" },
    ],
  },
  {
    slug: "non-surgical",
    title: "비수술 탈모치료",
    subtitle: "수술 없이 탈모를 관리하는 방법",
    description:
      "모낭세포를 직접 자극하여 탈모 진행을 억제합니다. 3-4개월 내 효과가 나타나며, 96%의 환자에서 탈모 진행 억제 효과를 보입니다.",
    treatments: [
      { name: "헤어셀 자기장 치료", desc: "96.7% 개선율, 모낭세포 분화 촉진" },
      { name: "MTS + 모낭강화주사", desc: "줄기세포·성장인자 투여" },
      { name: "사이토카인 치료", desc: "모발 성장 촉진" },
      { name: "Smart Lux LLLT", desc: "저준위 레이저, 혈류 개선" },
      { name: "두피 스케일링", desc: "노폐물 제거, 수분·영양 공급" },
    ],
  },
];
