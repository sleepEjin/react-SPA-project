package com.kh.project.service;

import com.kh.project.dto.PostDto;
import com.kh.project.entity.Member;
import com.kh.project.entity.Post;
import com.kh.project.entity.Rink;
import com.kh.project.repository.MemberRepository;
import com.kh.project.repository.PostRepository;
import com.kh.project.repository.RinkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;
    private final MemberRepository memberRepository;
    private final RinkRepository rinkRepository;

    @Override
    @Transactional // DB 쓰기 작업
    public Long createPost(PostDto.Create createPostDto) {
        // 1. 작성자(Member) 조회
        Member member = memberRepository.findById(createPostDto.getMember_id())
                .orElseThrow(() -> new IllegalArgumentException("작성자를 찾을 수 없습니다."));

        // 2. 관련 아이스링크(Rink) 조회
        Rink rink = rinkRepository.findById(createPostDto.getRink_id())
                .orElseThrow(() -> new IllegalArgumentException("아이스링크 정보를 찾을 수 없습니다."));

        Post post = Post.builder()
                .postTitle(createPostDto.getPost_title())
                .postContent(createPostDto.getPost_content())
                .member(member)
                .rink(rink)
                .build();

        postRepository.save(post);
        return post.getPostId();
    }

    @Override
    public List<PostDto.Response> getAllPosts() {
        return postRepository.findAll().stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public PostDto.Response getPostByPostId(Long postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다. ID: " + postId));
        return convertToResponse(post);
    }

    @Override
    @Transactional
    public PostDto.Response updatePost(Long postId, PostDto.Update updatePostDto) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("수정할 게시글이 존재하지 않습니다."));
        post.updatePost(updatePostDto.getPost_title(), updatePostDto.getPost_content());

        return convertToResponse(post);
    }

    @Override
    @Transactional
    public void deletePost(Long postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("삭제할 게시글이 존재하지 않습니다."));
        postRepository.delete(post);
    }

    private PostDto.Response convertToResponse(Post p) {
        return PostDto.Response.of(
                p.getPostId(),
                p.getPostTitle(),
                p.getPostContent(),
                p.getMember().getUserName(), // 작성자 이름 추출
                p.getRink().getRinkName(),       // 링크장 이름 추출
                p.getCreateDate(),
                p.getModifyDate()
        );
    }
}