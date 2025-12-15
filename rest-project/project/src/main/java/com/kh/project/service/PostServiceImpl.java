package com.kh.project.service;

import com.kh.project.dto.PostCreateRequest;
import com.kh.project.dto.PostResponse;
import com.kh.project.dto.PostUpdateRequest;
import com.kh.project.entity.Post;
import com.kh.project.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service // 스프링 빈 등록 (중요!)
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;

    @Override
    public List<PostResponse> getPosts(Long rinkId) {
        List<Post> posts;
        if (rinkId != null) {
            posts = postRepository.findAllByRinkIdOrderByDateDesc(rinkId);
        } else {
            posts = postRepository.findAllByOrderByDateDesc();
        }
        return posts.stream()
                .map(PostResponse::from)
                .collect(Collectors.toList());
    }

    @Override
    public PostResponse getPost(Long id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다. id=" + id));
        return PostResponse.from(post);
    }

    @Override
    @Transactional
    public PostResponse createPost(PostCreateRequest request) {
        Post post = request.toEntity();
        Post savedPost = postRepository.save(post);
        return PostResponse.from(savedPost);
    }

    @Override
    @Transactional
    public PostResponse updatePost(Long id, PostUpdateRequest request) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다. id=" + id));

        post.update(request.getTitle(), request.getContent());

        return PostResponse.from(post);
    }

    @Override
    @Transactional
    public void deletePost(Long id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다. id=" + id));
        postRepository.delete(post);
    }
}