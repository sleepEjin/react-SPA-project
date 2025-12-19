package com.kh.project.entity;

import com.kh.project.enums.CommonEnums;
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

    @Column(length = 50, nullable = false)
    private String userId;

    @Column(length = 50, nullable = false)
    private String userPwd;

    @Column(length =  50, nullable = false)
    private String userName;

    @Column(length = 100)
    private String email;

    @Column(length = 1)
    @Enumerated(EnumType.STRING)
    private Gender gender;

    private Integer age;

    @Column(length = 30)
    private String phone;

    @Column(length = 100)
    private String address;

    @Column(length = 1, nullable = false)
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private CommonEnums.Status status = CommonEnums.Status.Y;

    public enum Gender {
        M, F
    }

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