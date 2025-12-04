# react-SPA-project
⛸️ SlippeReview (슬리퍼리뷰)SlippeReview는 서울 시내 아이스링크장의 정보와 사용자들의 생생한 방문 후기를 공유하는 SPA(Single Page Application) 서비스입니다.사용자는 다양한 링크장의 위치와 가격 정보를 확인하고, 방문 경험을 게시글로 작성하여 다른 스케이터들과 공유할 수 있습니다.
분류,기술
Framework,(v19)
Build Tool,
Styling,
Routing,React Router DOM (v7)
State Management,Context API (Migration to Zustand)
Storage,LocalStorage (데이터 영속성 관리)
✨ Key Features
1. 아이스링크 정보 탐색
서울 주요 아이스링크(롯데월드, 목동, 태릉 등)의 위치, 가격, 운영 정보 제공

카드 형태의 UI로 직관적인 정보 확인

2. 링크장별 후기 게시판
게시글 작성: 한줄평과 상세 후기를 작성하여 등록

검색 기능: 게시글 제목을 기준으로 실시간 필터링 검색

상세 보기: 작성자, 날짜, 본문 내용을 확인

게시글 삭제: 본인이 작성한 글에 한해 삭제 가능

3. 회원 관리 (Authentication)
회원가입: 아이디, 비밀번호, 닉네임 유효성 검사 및 등록

로그인/로그아웃: 전역 상태 관리를 통한 사용자 세션 유지

마이페이지: 가입 정보(아이디, 가입일, 닉네임) 확인

모든 데이터는 LocalStorage에 저장되어 새로고침 후에도 유지됩니다.📂 Project Structure
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