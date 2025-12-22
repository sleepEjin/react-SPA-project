package com.kh.project.service;
import com.kh.project.dto.MemberDto;
import com.kh.project.entity.Member;
import com.kh.project.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;

    @Override
    @Transactional
    public String createMember(MemberDto.Create createMemberDto) {
        Member member = createMemberDto.toEntity();
        memberRepository.save(member);
        return member.getUserId();
    }

    @Override
    public MemberDto.Response login(MemberDto.Login loginDto) {
        // 1. 아이디로 회원 조회
        Member member = memberRepository.findByUserId(loginDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 아이디입니다."));

        // 2. 비밀번호 일치 여부 확인 (평문 비교)
        if (!member.getUserPwd().equals(loginDto.getUserPwd())) {
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다.");
        }

        // 3. 로그인 성공 시 회원 정보 반환
        return convertToResponse(member);
    }

    @Override
    public List<MemberDto.Response> getAllMembers() {
        return memberRepository.findAll().stream().map(this::convertToResponse).collect(Collectors.toList());
    }

    @Override
    public MemberDto.Response getMemberByUserId(String userId) {
        Member member = memberRepository.findByUserId(userId).orElseThrow(() -> new IllegalArgumentException("회원 없음"));
        return convertToResponse(member);
    }

    @Override
    @Transactional
    public MemberDto.Response updateMember(String userId, MemberDto.Update updateMemberDto) {
        Member member = memberRepository.findByUserId(userId).orElseThrow(() -> new IllegalArgumentException("회원 없음"));
        member.updateMember(updateMemberDto.getUser_name(), updateMemberDto.getEmail(), updateMemberDto.getGender(),
                updateMemberDto.getAge(), updateMemberDto.getPhone(), updateMemberDto.getAddress());
        return convertToResponse(member);
    }

    @Override
    @Transactional
    public void deleteMember(String userId) {
        Member member = memberRepository.findByUserId(userId).orElseThrow(() -> new IllegalArgumentException("회원 없음"));
        memberRepository.delete(member);
    }

    @Override
    public List<MemberDto.Response> getMembersByName(String keyword) {
        return memberRepository.findByNameKeyword(keyword).stream().map(this::convertToResponse).collect(Collectors.toList());
    }

    private MemberDto.Response convertToResponse(Member m) {
        return MemberDto.Response.of(m.getId(), m.getUserId(), m.getUserName(), m.getEmail(),
                m.getGender(), m.getAge(), m.getPhone(), m.getAddress(), m.getCreateDate(), m.getModifyDate());
    }
}