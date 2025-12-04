# react-SPA-project

# 🚀 프로젝트명 (Project Name)
⛸️ SlippeReview (슬리퍼리뷰)

## 📘 개요 (Overview)
- SlippeReview는 서울 시내 아이스링크장의 정보와 사용자들의 생생한 방문 후기를 공유하는 SPA(Single Page Application) 서비스입니다.
- 사용자는 다양한 링크장의 위치와 가격 정보를 확인하고, 방문 경험을 게시글로 작성하여 다른 스케이터들과 공유할 수 있습니다.

## 🧱 기술 스택 (Tech Stack)
| 구분 | 사용 기술 |
|------|------------|
| Frontend | React |
| Library | styled-components, react-router-dom, zustand |

## 🛠️ 설치 및 실행 (Installation & Run)
# 1. 프로젝트 클론
git clone https://github.com/sleepEjin/react-SPA-project.git

# 2. 웹 애플리케이션 실행
- 브라우저에서 접속
http://localhost:8080/프로젝트명

## 📂 프로젝트 구조 (Directory Structure)
src/
├── components/      # 공통 컴포넌트 (Header, Layout 등)
├── contexts/        # (구) 전역 상태 관리 (UserContext, PostContext)
├── stores/          # Zustand 스토어 (useUserStore, usePostStore)
├── pages/           # 페이지 컴포넌트
│   ├── Home.jsx         # 랜딩 페이지
│   ├── Login.jsx        # 로그인
│   ├── Signup.jsx       # 회원가입
│   ├── IcelinkList.jsx  # 링크장 목록
│   ├── Board.jsx        # 후기 게시판 목록
│   ├── PostDetail.jsx   # 게시글 상세
│   ├── PostWrite.jsx    # 게시글 작성
│   └── MyPage.jsx       # 마이페이지
├── routes/          # 라우팅 설정 (Routes, routepaths)
└── assets/          # 이미지 및 정적 파일

## 🌟 주요 기능 (Key Features)
✅ 아이스링크 정보 탐색 및 상세정보 조회
✅ 링크장별 후기 게시판 등록, 조회, 수정, 삭제 (CRUD)
✅ 아이디, 비밀번호, 닉네임 유효성 검사를 통한 회원가입 및 로그인

## 💡 학습 포인트 (Learning Points)
- React의 주요 개념(Hooks, Props, Routing 등) 학습한 라이브러리 등을 활용