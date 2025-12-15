package com.kh.project.service;

import com.kh.project.dto.MemberCheckResponse;
import com.kh.project.dto.MemberLoginRequest;
import com.kh.project.dto.MemberResponse;
import com.kh.project.dto.MemberSignupRequest;
import com.kh.project.entity.Member;
import com.kh.project.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;

    @Override
    @Transactional
    public MemberResponse signup(MemberSignupRequest request) {
        if (memberRepository.existsById(request.getId())) {
            throw new IllegalArgumentException("이미 존재하는 아이디입니다.");
        }

        Member member = request.toEntity();
        Member savedMember = memberRepository.save(member);
        return MemberResponse.from(savedMember);
    }

    @Override
    public MemberResponse login(MemberLoginRequest request) {
        Member member = memberRepository.findByIdAndPassword(request.getId(), request.getPassword())
                .orElseThrow(() -> new IllegalArgumentException("아이디 또는 비밀번호가 일치하지 않습니다."));

        return MemberResponse.from(member);
    }

    @Override
    public MemberCheckResponse checkId(String id) {
        boolean exists = memberRepository.existsById(id);
        return new MemberCheckResponse(!exists); // 존재하지 않으면 사용 가능(true)
    }
}