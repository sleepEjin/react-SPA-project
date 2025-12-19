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