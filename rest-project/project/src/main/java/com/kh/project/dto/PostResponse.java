package com.kh.project.dto;

import com.kh.project.entity.Post;
import lombok.Builder;
import lombok.Getter;

import java.time.format.DateTimeFormatter;

@Getter
@Builder
public class PostResponse {
    private Long id;
    private Long rinkId;
    private String title;
    private String content;
    private String author;
    private String date; // 프론트엔드 호환용 문자열 날짜

    // Entity -> DTO 변환 (날짜 포맷팅 포함)
    public static PostResponse from(Post entity) {
        return PostResponse.builder()
                .id(entity.getId())
                .rinkId(entity.getRinkId())
                .title(entity.getTitle())
                .content(entity.getContent())
                .author(entity.getAuthor())
                // LocalDateTime -> "2025. 12. 1." 형식 문자열 변환
                .date(entity.getDate().format(DateTimeFormatter.ofPattern("yyyy. M. d.")))
                .build();
    }
}