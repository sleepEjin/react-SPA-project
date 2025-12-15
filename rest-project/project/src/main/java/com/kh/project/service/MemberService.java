package com.kh.project.service;

import com.kh.project.dto.MemberCheckResponse;
import com.kh.project.dto.MemberLoginRequest;
import com.kh.project.dto.MemberResponse;
import com.kh.project.dto.MemberSignupRequest;

public interface MemberService {
    // 1. 회원가입
    MemberResponse signup(MemberSignupRequest request);

    // 2. 로그인
    MemberResponse login(MemberLoginRequest request);

    // 3. 아이디 중복 확인
    MemberCheckResponse checkId(String id);
}