package com.kh.project.repository;

import com.kh.project.entity.Member;
import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    void save(Member member);
    Optional<Member> findById(Long id);
    Optional<Member> findByUserId(String userId);
    List<Member> findAll();
    void delete(Member member);
    List<Member> findByNameKeyword(String keyword);
}