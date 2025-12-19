package com.kh.project.service;

import com.kh.project.dto.PostDto;
import java.util.List;

public interface PostService {
    Long createPost(PostDto.Create createPostDto); // 게시글 작성
    List<PostDto.Response> getAllPosts(); // 전체 게시글 조회
    PostDto.Response getPostByPostId(Long postId); // 게시글 상세 조회
    PostDto.Response updatePost(Long postId, PostDto.Update updatePostDto); // 수정
    void deletePost(Long postId); // 삭제
}