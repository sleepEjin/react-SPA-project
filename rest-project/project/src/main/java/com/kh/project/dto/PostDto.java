package com.kh.project.dto;

import com.kh.project.entity.Member;
import com.kh.project.entity.Post;
import com.kh.project.entity.Rink;
import lombok.*;
import java.time.LocalDateTime;

public class PostDto {

    @Getter @Setter
    @AllArgsConstructor @NoArgsConstructor
    public static class Create {
        private String post_title;
        private String post_content;
        private Long member_id;
        private Long rink_id;

        public Post toEntity() {
            return Post.builder()
                    .postTitle(post_title)
                    .postContent(post_content)
                    .build();
        }
    }

    @Getter @Setter
    @AllArgsConstructor @NoArgsConstructor
    public static class Update {
        private String post_title;
        private String post_content;
    }

    @Getter @Setter
    @AllArgsConstructor @NoArgsConstructor
    @Builder
    public static class Response {
        private Long post_id;
        private String post_title;
        private String post_content;
        private String user_name; // 작성자 구분
        private String rink_name; // 장소 구분
        private LocalDateTime create_date;
        private LocalDateTime modify_date;

        // 요청하신 개별 필드 파라미터 방식의 of 메서드
        public static Response of(Long post_id, String post_title, String post_content,
                                  String user_name, String rink_name,
                                  LocalDateTime create_date, LocalDateTime modify_date) {
            return Response.builder()
                    .post_id(post_id)
                    .post_title(post_title)
                    .post_content(post_content)
                    .user_name(user_name)
                    .rink_name(rink_name)
                    .create_date(create_date)
                    .modify_date(modify_date)
                    .build();
        }
    }
}