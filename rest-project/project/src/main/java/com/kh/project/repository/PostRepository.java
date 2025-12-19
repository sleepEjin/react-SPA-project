package com.kh.project.repository;

import com.kh.project.entity.Post;
import java.util.List;
import java.util.Optional;

public interface PostRepository {
    void save(Post post);
    Optional<Post> findById(Long id);
    List<Post> findAll();
    void delete(Post post);
}