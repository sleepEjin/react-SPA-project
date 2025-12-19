package com.kh.project.repository;

import com.kh.project.entity.Post;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class PostRepositoryImpl implements PostRepository {

    private final EntityManager em;

    @Override
    public void save(Post post) {
        em.persist(post);
    }

    @Override
    public Optional<Post> findById(Long id) {
        return Optional.ofNullable(em.find(Post.class, id));
    }

    @Override
    public List<Post> findAll() {
        // Fetch Join을 사용하면 연관된 Member와 Rink를 한 번에 가져와 성능이 좋아집니다.
        return em.createQuery(
                        "select p from Post p " +
                                "join fetch p.member m " +
                                "join fetch p.rink r", Post.class)
                .getResultList();
    }

    @Override
    public void delete(Post post) {
        em.remove(post);
    }
}