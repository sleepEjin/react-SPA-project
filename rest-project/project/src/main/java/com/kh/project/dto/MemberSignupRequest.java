package com.kh.project.dto;

import com.kh.project.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MemberSignupRequest {
    private String id;
    private String password;
    private String nickname;

    public Member toEntity() {
        return Member.builder()
                .id(id)
                .password(password)
                .nickname(nickname)
                .build();
    }
}