package com.kh.project.dto;

import com.kh.project.entity.Post;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostCreateRequest {
    private Long rinkId;
    private String title;
    private String content;
    private String author;

    public Post toEntity() {
        return Post.builder()
                .rinkId(rinkId)
                .title(title)
                .content(content)
                .author(author)
                .build();
    }
}