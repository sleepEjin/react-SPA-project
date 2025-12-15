package com.kh.project.repository;

import com.kh.project.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, String> {
    // 아이디로 회원 찾기 (기본 메서드 findById가 있지만 명시적으로 사용 가능)
    Optional<Member> findById(String id);

    // 아이디와 비밀번호로 회원 찾기 (로그인용)
    Optional<Member> findByIdAndPassword(String id, String password);

    // 아이디 존재 여부 확인 (중복 체크용)
    boolean existsById(String id);
}