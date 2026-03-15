export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  detail?: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "두피와 헤어라인 진단과 상담",
    description:
      "두피진단기기와 3D 안면스캔으로 360도 안면윤곽과 헤어라인을 분석합니다. 이식 모수와 수술 후 시뮬레이션까지 상세히 상담합니다.",
  },
  {
    number: 2,
    title: "헤어라인 디자인",
    description:
      "성형외과전문의가 안면미용 노하우와 진단 데이터를 바탕으로 개인 맞춤형 헤어라인을 디자인합니다.",
  },
  {
    number: 3,
    title: "수술 전 레이저 시술",
    description:
      "프락셀 레이저로 모낭 성장에 필요한 성장인자와 혈관 생성 인자의 생성을 촉진합니다. 마취크림 후 약 10분 소요됩니다.",
  },
  {
    number: 4,
    title: "마취 및 모낭 채취",
    description:
      "부분마취 후 비절개 또는 절개 방식으로 모낭을 채취합니다. 비절개 3000모 기준 약 1.5시간 소요됩니다.",
  },
  {
    number: 5,
    title: "현미경 모낭 분리",
    description:
      "전문 인력이 채취된 모낭을 현미경으로 빠르게 분리하고 특수 용액에 보존합니다.",
  },
  {
    number: 6,
    title: "슬릿 디자인과 이식",
    description:
      "원장이 직접 정교한 슬릿을 만들고 포셉 테크닉으로 굵기별로 정리된 모낭을 이식합니다.",
  },
  {
    number: 7,
    title: "수술 후 케어",
    description:
      "EGF 젤을 이식 부위에 도포하고, 당일 샴푸 방법을 안내합니다. 맞춤 홈케어 제품을 제공합니다.",
  },
];
