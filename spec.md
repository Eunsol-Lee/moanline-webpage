# Spec: moanline-webpage

## Overview
- **Description**: 모앤라인성형외과 공식 홈페이지 — 헤어라인교정술, 모발이식, 탈모치료 전문 성형외과
- **Stack**: HTML / CSS / JavaScript (정적 웹사이트)
- **Complexity**: Medium

## Features
- [x] F01: 히어로 섹션 — DONE
- [x] F02: 진료 과목 소개 — DONE
- [x] F03: 의료진/병원 소개 — DONE
- [x] F04: 수술 전후 사례 — DONE
- [x] F05: 오시는 길 — DONE
- [x] F06: 상담 예약 폼 — DONE
- [x] F07: 반응형 디자인 — DONE
- [x] F08: 네비게이션 — DONE
- [x] F09: 푸터 — DONE

## Non-Functional
- [x] NF01: 프로젝트 구조 및 파일 조직 — DONE
- [x] NF02: README with 실행 방법 안내 — DONE
- [x] NF03: 하드코딩된 비밀 정보 없음 — DONE
- [x] NF04: 브라우저에서 에러 없이 실행 — DONE

## Key Information
- **병원명**: 모앤라인성형외과
- **대표**: 이병권
- **주소**: 서울특별시 강남구 도산대로 104, 퍼스트에비뉴 10층, 13층 (논현동 1-1)
- **대표전화**: 02-517-4890
- **휴대전화**: 010-7467-4890
- **팩스**: 02-517-4891
- **이메일**: moandlineps@naver.com
- **운영시간**:
  - 월~목: 오전 10시 ~ 오후 7시
  - 금요일(야간진료): 오전 10시 ~ 오후 9시
  - 토요일: 오전 10시 ~ 오후 4시 30분
  - 일요일/공휴일 휴무
- **SNS**: 유튜브, 네이버 블로그, 인스타그램, 카카오톡, 위챗, 샤오홍슈
- **주요 키워드**: 무삭발 비절개 대량 이식, 흉터 최소화
- **참고 사이트**: https://moandlineps.com/

## Architecture

### Directory / Module Map

```
moanline-webpage/           ← 프로젝트 루트 (정적 웹사이트)
├── index.html              ← 단일 진입점 (원페이지 스크롤)
├── css/
│   └── style.css           ← 전역 스타일 (CSS 변수, 컴포넌트, 반응형)
├── js/
│   └── main.js             ← 모든 클라이언트 동작 (네비게이션, 애니메이션, 폼)
└── assets/
    └── images/             ← 정적 이미지 에셋 (현재 placeholder 상태)
```

### Shared / Entry Point

- **index.html**: 유일한 HTML 파일. 모든 섹션을 포함하는 원페이지 구조.
  - `<link>` → `css/style.css`
  - `<script>` → `js/main.js` (defer, body 하단)
  - CDN: Google Fonts (Noto Sans KR), Font Awesome 6

### Section 구조 (index.html)

| 섹션 ID      | 역할                                      |
|-------------|------------------------------------------|
| `#hero`     | 히어로 — 슬로건, CTA, 운영시간              |
| `#services` | 진료 과목 카드 3개 (헤어라인, 모발이식, 탈모) |
| stats-band  | 숫자 강조 배너 (경력, 건수, 만족도)           |
| `#doctor`   | 대표원장 소개, 병원 철학                     |
| `#gallery`  | Before/After 갤러리 (탭 필터 포함)          |
| `#location` | 오시는 길 — 지도 placeholder, 운영시간      |
| `#contact`  | 상담 예약 폼 + 사이드 정보                   |
| footer      | 병원 정보, SNS, 저작권                      |

### CSS Architecture

- **CSS Custom Properties** (`:root`): 색상, 폰트 크기, 간격, 그림자 토큰
- **Mobile-first** breakpoints: 600px / 768px / 900px / 1200px
- **Utility classes**: `.container`, `.section`, `.btn`, `.section-badge`, `.reveal`
- **Animations**: `.fade-up` (히어로 진입), `.reveal` + Intersection Observer (스크롤 페이드)

### JS Architecture (main.js)

| 기능                        | 구현 방식                                         |
|----------------------------|--------------------------------------------------|
| 헤더 스크롤 효과              | `scroll` 이벤트 + throttle → `.is-scrolled` 클래스 |
| 활성 네비게이션 표시           | Scroll 기반 섹션 감지 → `.is-active` 클래스        |
| 햄버거 메뉴                  | 클릭 토글 → `.is-open` 클래스                      |
| 섹션 페이드인                | `IntersectionObserver` → `.is-visible` 클래스     |
| 갤러리 탭 필터               | 클릭 이벤트 → `.is-hidden` 토글                    |
| 상담 폼 유효성 검사           | submit 이벤트 + 커스텀 validation                  |
| 전화번호 자동 포맷            | `input` 이벤트 → 하이픈 자동 삽입                   |
| 맨 위로 버튼                 | Scroll + IntersectionObserver → `.is-visible`    |

## Progress
Total: 13 items | Done: 13 | Pending: 0

## Lessons Learned
- Scaffold agent가 단일 패스로 모든 파일을 생성할 수 있었음 (정적 HTML/CSS/JS 특성)
- KakaoTalk 아이콘으로 fa-brands fa-square-js가 잘못 사용됨 → fa-solid fa-comment으로 수정

## Recent Changes
- Iteration 1: 전체 프로젝트 scaffold + 구현 완료
- Fix: KakaoTalk 아이콘 수정, README.md 생성
