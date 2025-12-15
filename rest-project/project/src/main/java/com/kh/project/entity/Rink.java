package com.kh.project.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Rink {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String location;

    private String time;

    @Column(length = 1000)
    private String description;

    private String img;

    @Builder
    public Rink(String name, String location, String time, String description, String img) {
        this.name = name;
        this.location = location;
        this.time = time;
        this.description = description;
        this.img = img;
    }
}