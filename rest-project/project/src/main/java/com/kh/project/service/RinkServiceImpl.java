package com.kh.project.service;

import com.kh.project.dto.RinkDto;
import com.kh.project.entity.Rink;
import com.kh.project.repository.RinkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class RinkServiceImpl implements RinkService {

    private final RinkRepository rinkRepository;

    @Override
    @Transactional
    public Long createRink(RinkDto.Create createDto) {
        Rink rink = createDto.toEntity();
        rinkRepository.save(rink);
        return rink.getRinkId();
    }

    @Override
    public List<RinkDto.Response> getAllRinks() {
        return rinkRepository.findAll().stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public RinkDto.Response getRinkById(Long rinkId) {
        Rink rink = rinkRepository.findById(rinkId)
                .orElseThrow(() -> new IllegalArgumentException("해당 아이스링크를 찾을 수 없습니다. ID: " + rinkId));
        return convertToResponse(rink);
    }

    // Entity -> DTO 변환 메서드 (클래스 내부 선언)
    private RinkDto.Response convertToResponse(Rink r) {
        return RinkDto.Response.of(
                r.getRinkId(),
                r.getRinkName(),
                r.getLocation(),
                r.getDescription(),
                r.getImageUrl()
        );
    }
}