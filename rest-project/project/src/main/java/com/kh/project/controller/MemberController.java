package com.kh.project.controller;

import com.kh.project.dto.MemberDto;
import com.kh.project.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/members")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @PostMapping
    public ResponseEntity<String> signup(@RequestBody MemberDto.Create request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(memberService.createMember(request));
    }

    @PostMapping("/login") // 로그인 API
    public ResponseEntity<MemberDto.Response> login(@RequestBody MemberDto.Login request) {
        MemberDto.Response response = memberService.login(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<MemberDto.Response>> getAll() {
        return ResponseEntity.ok(memberService.getAllMembers());
    }

    @GetMapping("/{userId}")
    public ResponseEntity<MemberDto.Response> getOne(@PathVariable String userId) {
        return ResponseEntity.ok(memberService.getMemberByUserId(userId));
    }

    @PutMapping("/{userId}")
    public ResponseEntity<MemberDto.Response> update(@PathVariable String userId, @RequestBody MemberDto.Update request) {
        return ResponseEntity.ok(memberService.updateMember(userId, request));
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> delete(@PathVariable String userId) {
        memberService.deleteMember(userId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/search")
    public ResponseEntity<List<MemberDto.Response>> search(@RequestParam String keyword) {
        return ResponseEntity.ok(memberService.getMembersByName(keyword));
    }
}