package com.kh.project.repository;

import com.kh.project.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllByRinkIdOrderByDateDesc(Long rinkId);

    List<Post> findAllByOrderByDateDesc();
}