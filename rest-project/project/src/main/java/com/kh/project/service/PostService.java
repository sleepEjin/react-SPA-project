package com.kh.project.service;

import com.kh.project.dto.PostCreateRequest;
import com.kh.project.dto.PostResponse;
import com.kh.project.dto.PostUpdateRequest;

import java.util.List;

public interface PostService {

    List<PostResponse> getPosts(Long rinkId);

    PostResponse getPost(Long id);

    PostResponse createPost(PostCreateRequest request);

    PostResponse updatePost(Long id, PostUpdateRequest request);

    void deletePost(Long id);
}