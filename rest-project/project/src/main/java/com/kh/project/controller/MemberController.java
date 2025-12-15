package com.kh.project.controller;

import com.kh.project.dto.MemberCheckResponse;
import com.kh.project.dto.MemberLoginRequest;
import com.kh.project.dto.MemberResponse;
import com.kh.project.dto.MemberSignupRequest;
import com.kh.project.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    // 1. 회원가입
    // POST /api/members
    @PostMapping
    public ResponseEntity<MemberResponse> signup(@RequestBody MemberSignupRequest request) {
        MemberResponse response = memberService.signup(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    // 2. 로그인
    // POST /api/members/login
    @PostMapping("/login")
    public ResponseEntity<MemberResponse> login(@RequestBody MemberLoginRequest request) {
        MemberResponse response = memberService.login(request);
        return ResponseEntity.ok(response);
    }

    // 3. 아이디 중복 확인
    // GET /api/members/check/{id}
    @GetMapping("/check/{id}")
    public ResponseEntity<MemberCheckResponse> checkId(@PathVariable String id) {
        MemberCheckResponse response = memberService.checkId(id);
        return ResponseEntity.ok(response);
    }
}