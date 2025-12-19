package com.kh.project.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "rink")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Rink extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rink_id")
    private Long rinkId; // 기존 id에서 변경

    @Column(name = "rink_name", nullable = false)
    private String rinkName; // 기존 name에서 변경

    private String location;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "image_url")
    private String imageUrl; // 이미지 경로 필드
}