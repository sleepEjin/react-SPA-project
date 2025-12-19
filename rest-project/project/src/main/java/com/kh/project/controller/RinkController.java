package com.kh.project.controller;

import com.kh.project.dto.RinkDto;
import com.kh.project.service.RinkService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rinks")
@RequiredArgsConstructor
public class RinkController {

    private final RinkService rinkService;

    // 아이스링크 등록 (관리자용 혹은 테스트 데이터 입력용)
    @PostMapping
    public ResponseEntity<Long> createRink(@RequestBody RinkDto.Create request) {
        Long rinkId = rinkService.createRink(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(rinkId);
    }

    // 아이스링크 전체 목록 조회 (React 메인 페이지 혹은 리스트 페이지용)
    @GetMapping
    public ResponseEntity<List<RinkDto.Response>> getAllRinks() {
        List<RinkDto.Response> rinks = rinkService.getAllRinks();
        return ResponseEntity.ok(rinks);
    }

    // 아이스링크 단건 조회 (상세 페이지용)
    @GetMapping("/{rinkId}")
    public ResponseEntity<RinkDto.Response> getRink(@PathVariable Long rinkId) {
        RinkDto.Response rink = rinkService.getRinkById(rinkId);
        return ResponseEntity.ok(rink);
    }
}