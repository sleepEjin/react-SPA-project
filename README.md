# ⛸️ SlippeReview

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

## 🏗️ 도메인 모델 및 설계 특징
### 1. 엔티티 구조
Member (회원): userId, userName 등 상세 회원 정보 관리

Rink (아이스링크): rinkId, rinkName, imageUrl 등 링크장 시설 정보 관리

Post (후기): postId, postTitle, postContent를 포함하며 Member와 Rink를 참조하는 다대일(N:1) 관계 형성

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

📝 Request / Response 예시 (회원가입)
Request (POST /api/members)

JSON
```
{
  "userId": "iceskater123",
  "password": "password123!",
  "userName": "김철수",
  "email": "skater@example.com"
}
Response (201 Created)
```

📝 Request / Response 예시 (게시글 작성)
Request (POST /api/posts)JSON
```
{
  "postTitle": "주말 롯데월드 링크 후기",
  "postContent": "사람이 많았지만 빙질은 좋았습니다.",
  "rinkId": 1,
  "userId": "iceskater123"
}
```
## 🛠️ 설치 및 실행 (Installation & Run)
### 1. Backend (Spring Boot)
    포트: 8080 (또는 8888)

    H2 콘솔 주소: http://localhost:8080/h2-console

    JDBC URL: jdbc:h2:mem:testdb (ID: **sa**, PW: **1234**)

### 2. Frontend (React)
Proxy 설정: package.json 또는 vite.config.js에 아래 설정 추가
```
{
  "proxy": "http://localhost:8080"
}
```
실행 : **npm install** 후 ** npm run dev**

## 📂 프로젝트 구조 (Directory Structure)
```
(Project Root)
├── react-SPA/          # Frontend (React + Vite)
│   ├── src/
│   │   ├── stores/     # Zustand Store (fetch API 로직 포함)
│   │   └── pages/      # View Components
│   └── vite.config.js  # Proxy 설정 포함
│
└── rest-project/       # Backend (Spring Boot)
    ├──src/main/java/com/kh/project/
    ├── controller/   # REST API 엔드포인트
    ├── service/      # 비즈니스 로직 (Interface/ServiceImpl 분리)
    ├── repository/   # 데이터 접근 계층 (EntityManager 직접 사용)
    ├── entity/       # DB 테이블 매핑 및 연관관계 정의
    └── dto/          # 데이터 전송 객체 (정적 내부 클래스 구조)
```

## 🌟 주요 기능 (Key Features)
- 아이스링크 정보 탐색 및 상세정보 조회
- 링크장별 후기 게시판 등록, 조회, 수정, 삭제 (CRUD)
- 아이디, 비밀번호, 닉네임 유효성 검사를 통한 회원가입 및 로그인
