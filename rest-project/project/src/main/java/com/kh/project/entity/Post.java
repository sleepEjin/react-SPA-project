package com.kh.project.entity;

import com.kh.project.enums.CommonEnums;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "post")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Post extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postId;

    @Column(length= 50, nullable = false)
    private String postTitle;

    @Column(nullable = false)
    @Lob
    private String postContent;

    @Column(length = 1, nullable = false)
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private CommonEnums.Status status = CommonEnums.Status.Y;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "rink_id")
    private Rink rink;

    // 수정을 위한 비즈니스 로직
    public void updatePost(String postTitle, String postContent) {
        this.postTitle = postTitle;
        this.postContent = postContent;
    }
}