package com.kh.project.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "member")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Member extends BaseTimeEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false, unique = true)
    private String userId;

    @Column(name = "user_pwd", nullable = false)
    private String userPwd;

    @Column(name = "user_name", nullable = false)
    private String userName;

    private String email;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private Integer age;
    private String phone;
    private String address;

    public enum Gender { MALE, FEMALE }

    // 수정 로직 (더티 체킹용)
    public void updateMember(String userName, String email, Gender gender, Integer age, String phone, String address) {
        this.userName = userName;
        this.email = email;
        this.gender = gender;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}