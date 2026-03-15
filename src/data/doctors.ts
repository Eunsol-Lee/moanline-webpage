export interface Doctor {
  name: string;
  role: string;
  credentials: string[];
  memberships: string[];
  description?: string;
  featured: boolean;
}

export const doctors: Doctor[] = [
  {
    name: "이병권",
    role: "대표원장",
    credentials: [
      "성형외과전문의",
      "대구가톨릭대학교병원 성형외과 외래교수",
      "동경대학교 의학부 성형외과 연수",
    ],
    memberships: [
      "대한성형외과학회(KSPRS) 정회원",
      "대한미용성형외과학회(KSAPS) 정회원",
      "대한모발이식학회(KSHRS) 정회원",
      "국제모발이식학회(ISHRS) 정회원",
      "아시아모발이식학회 정회원",
      "대한미세수술학회 정회원",
    ],
    description:
      "수천례의 헤어라인교정술 경험. 대학병원 흉터피부복원술·고난이도 눈성형술 경력을 바탕으로 얼굴성형 디자인과 성형수술 노하우를 헤어라인교정술에 접목. 아시아 대표 헤어라인교정 브랜드를 이끌고 있습니다.",
    featured: true,
  },
  {
    name: "홍석원",
    role: "원장",
    credentials: [
      "성형외과전문의",
      "순천향대학교병원 성형외과 외래교수",
      "국군수도병원 성형외과 과장 역임",
    ],
    memberships: [
      "대한성형외과학회 전문의",
      "대한모발이식학회(KSHRS) 정회원",
      "국제모발이식학회(ISHRS) 정회원",
      "아시아모발이식학회 정회원",
    ],
    featured: false,
  },
  {
    name: "김세훈",
    role: "원장",
    credentials: ["성형외과전문의"],
    memberships: [
      "대한성형외과학회(KSPRS) 정회원",
      "대한모발이식학회(KSHRS) 정회원",
      "국제모발이식학회(ISHRS) 정회원",
      "아시아모발이식학회 정회원",
    ],
    featured: false,
  },
];
