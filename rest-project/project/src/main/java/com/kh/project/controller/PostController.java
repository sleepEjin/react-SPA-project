package com.kh.project.controller;

import com.kh.project.dto.PostDto;
import com.kh.project.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    // 게시글 작성
    @PostMapping
    public ResponseEntity<Long> createPost(@RequestBody PostDto.Create request) {
        Long postId = postService.createPost(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(postId);
    }

    // 게시글 전체 목록 조회
    @GetMapping
    public ResponseEntity<List<PostDto.Response>> getAllPosts() {
        return ResponseEntity.ok(postService.getAllPosts());
    }

    // 게시글 상세 조회
    @GetMapping("/{postId}")
    public ResponseEntity<PostDto.Response> getPost(@PathVariable Long postId) {
        return ResponseEntity.ok(postService.getPostByPostId(postId));
    }

    // 게시글 수정
    @PutMapping("/{postId}")
    public ResponseEntity<PostDto.Response> updatePost(
            @PathVariable Long postId,
            @RequestBody PostDto.Update request) {
        return ResponseEntity.ok(postService.updatePost(postId, request));
    }

    // 게시글 삭제
    @DeleteMapping("/{postId}")
    public ResponseEntity<Void> deletePost(@PathVariable Long postId) {
        postService.deletePost(postId);
        return ResponseEntity.noContent().build(); // 204 No Content
    }
}