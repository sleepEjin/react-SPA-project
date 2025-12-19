package com.kh.project.dto;

import com.kh.project.entity.Rink;
import lombok.*;

public class RinkDto {

    @Getter @Setter @NoArgsConstructor @AllArgsConstructor
    public static class Create {
        private String rink_name; // 필드명 변경
        private String location;
        private String description;
        private String image_url;

        public Rink toEntity() {
            return Rink.builder()
                    .rinkName(rink_name)
                    .location(location)
                    .description(description)
                    .imageUrl(image_url)
                    .build();
        }
    }

    @Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
    public static class Response {
        private Long rink_id; // 필드명 변경
        private String rink_name; // 필드명 변경
        private String location;
        private String description;
        private String image_url;

        // 개별 필드 파라미터 방식의 of 메서드
        public static Response of(Long rink_id, String rink_name, String location, String description, String image_url) {
            return Response.builder()
                    .rink_id(rink_id)
                    .rink_name(rink_name)
                    .location(location)
                    .description(description)
                    .image_url(image_url)
                    .build();
        }
    }
}