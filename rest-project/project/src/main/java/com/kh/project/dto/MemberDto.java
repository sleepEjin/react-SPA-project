package com.kh.project.dto;

import com.kh.project.entity.Member;
import lombok.*;
import java.time.LocalDateTime;

public class MemberDto {

    @Getter @Setter @NoArgsConstructor @AllArgsConstructor
    public static class Create {
        private String userId;
        private String userPwd;
        private String user_name;
        private String email;
        private Member.Gender gender;
        private Integer age;
        private String phone;
        private String address;

        public Member toEntity() {
            return Member.builder()
                    .userId(userId).userPwd(userPwd).userName(user_name)
                    .email(email).gender(gender).age(age).phone(phone).address(address)
                    .build();
        }
    }

    @Getter @Setter @NoArgsConstructor @AllArgsConstructor
    public static class Login {
        private String userId;
        private String userPwd;
    }

    @Getter @Setter @NoArgsConstructor @AllArgsConstructor
    public static class Update {
        private String user_name;
        private String email;
        private Member.Gender gender;
        private Integer age;
        private String phone;
        private String address;
    }

    @Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
    public static class Response {
        private Long id;
        private String userId;
        private String user_name;
        private String email;
        private Member.Gender gender;
        private Integer age;
        private String phone;
        private String address;
        private LocalDateTime create_date;
        private LocalDateTime modify_date;

        public static Response of(Long id, String userId, String user_name, String email,
                                  Member.Gender gender, Integer age, String phone, String address,
                                  LocalDateTime create_date, LocalDateTime modify_date) {
            return Response.builder()
                    .id(id).userId(userId).user_name(user_name).email(email)
                    .gender(gender).age(age).phone(phone).address(address)
                    .create_date(create_date).modify_date(modify_date)
                    .build();
        }
    }
}