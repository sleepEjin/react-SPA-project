package com.kh.project.dto;

import com.kh.project.entity.Member;
import lombok.Builder;
import lombok.Getter;

import java.time.format.DateTimeFormatter;

@Getter
@Builder
public class MemberResponse {
    private String id;
    private String nickname;
    private String joinDate;

    public static MemberResponse from(Member member) {
        return MemberResponse.builder()
                .id(member.getId())
                .nickname(member.getNickname())
                .joinDate(member.getJoinDate().format(DateTimeFormatter.ofPattern("yyyy. M. d.")))
                .build();
    }
}