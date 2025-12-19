package com.kh.project.service;

import com.kh.project.dto.RinkDto;
import java.util.List;

public interface RinkService {
    Long createRink(RinkDto.Create createDto); // 링크장 생성
    List<RinkDto.Response> getAllRinks();      // 전체 링크장 조회
    RinkDto.Response getRinkById(Long rinkId); // 특정 링크장 조회
}