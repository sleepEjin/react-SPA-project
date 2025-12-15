# ⛸️ SlippeReview (슬리퍼리뷰) - Full Stack Ver.

## 📘 개요 (Overview)
**SlippeReview**는 서울 시내 아이스링크장의 정보와 사용자들의 생생한 방문 후기를 공유하는 풀스택 웹 애플리케이션입니다.
기존 SPA(React) 구조에 **Spring Boot REST API 백엔드**를 연동하여, 실제 데이터를 서버 DB(H2)에 저장하고 관리하도록 고도화하였습니다.

## 🧱 기술 스택 (Tech Stack)

### Frontend
| 구분 | 기술 |
|------|------|
| **Framework** | React, Vite |
| **State Mgt** | Zustand (API 연동) |
| **Styling** | Styled-components |
| **Routing** | React-router-dom |

### Backend
| 구분 | 기술 |
|------|------|
| **Framework** | Spring Boot 3.x |
| **Language** | Java 17+ |
| **Database** | H2 (In-Memory), Spring Data JPA |
| **Tools** | Lombok, Gradle |

---

## 📡 API 명세 (API Specification)
백엔드 서버는 **RESTful 원칙**을 따르며, 모든 데이터는 **JSON** 포맷으로 주고받습니다.

### 1️⃣ 회원 (Members)
**Base URL:** `/api/members`

| 기능 | HTTP Method | URI | 상태 코드 | 설명 |
| :--- | :---: | :--- | :---: | :--- |
| **회원가입** | `POST` | `/api/members` | `201` | 신규 회원 등록 |
| **로그인** | `POST` | `/api/members/login` | `200` | 아이디/비밀번호 검증 |
| **중복 확인** | `GET` | `/api/members/check/{id}` | `200` | 아이디 사용 가능 여부 확인 |

### 2️⃣ 게시글 (Posts)
**Base URL:** `/api/posts`

| 기능 | HTTP Method | URI | 상태 코드 | 설명 |
| :--- | :---: | :--- | :---: | :--- |
| 목록 조회 | `GET` | `/api/posts?rinkId={id}` | `200` | 전체 또는 특정 링크장 후기 조회 |
| 상세 조회 |`GET` | `/api/posts/{id}` |`200` | 게시글 상세 내용 조회 |
| 작성 | `POST` |`/api/posts` | `201` | 새 후기 등록 |
| 수정 | `PUT` | `/api/posts/{id}` | `200` | 제목 및 내용 수정 |
| 삭제 | `DELETE` | `/api/posts/{id}` | `204` | 게시글 삭제 |

🛠️ 설치 및 실행 (Installation & Run)
1. Backend (Spring Boot)
서버는 8888 포트에서 실행됩니다.

# 1. rest-project 폴더로 이동 (IDE 열기)
# 2. ProjectApplication.java 실행 (Run)
# -> Started ProjectApplication in ... seconds (JVM running for ...)
2. Frontend (React)
프론트엔드는 3000 포트에서 실행되며, API 요청을 8888 포트로 프록시합니다.

# 1. react-SPA 폴더로 이동
cd react-SPA

# 2. 의존성 설치 (최초 1회)
npm install

# 3. 개발 서버 실행
npm run dev

## 📂 프로젝트 구조 (Directory Structure)
(Project Root)
├── react-SPA/          # Frontend (React + Vite)
│   ├── src/
│   │   ├── stores/     # Zustand Store (fetch API 로직 포함)
│   │   └── pages/      # View Components
│   └── vite.config.js  # Proxy 설정 포함
│
└── rest-project/       # Backend (Spring Boot)
    ├── src/main/java/com/kh/project/
    │   ├── controller/ # MemberController, PostController
    │   ├── service/    # 비즈니스 로직 (ServiceImpl)
    │   ├── repository/ # JPA Repository
    │   ├── entity/     # DB 테이블 매핑 (Member, Post)
    │   └── dto/        # 데이터 전송 객체 (Request/Response)
    └── resources/
        └── application.yml # DB 및 포트(8888) 설정

## 🌟 주요 기능 (Key Features)
- 아이스링크 정보 탐색 및 상세정보 조회
- 링크장별 후기 게시판 등록, 조회, 수정, 삭제 (CRUD)
- 아이디, 비밀번호, 닉네임 유효성 검사를 통한 회원가입 및 로그인
