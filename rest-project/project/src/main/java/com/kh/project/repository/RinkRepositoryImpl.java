package com.kh.project.repository;

import com.kh.project.entity.Rink;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class RinkRepositoryImpl implements RinkRepository {
    private final EntityManager em;

    @Override
    public void save(Rink rink) { em.persist(rink); }

    @Override
    public Optional<Rink> findById(Long id) {
        return Optional.ofNullable(em.find(Rink.class, id));
    }

    @Override
    public List<Rink> findAll() {
        // JPQL에서도 변경된 엔티티 필드명(rinkName 등)을 사용해야 합니다.
        return em.createQuery("select r from Rink r", Rink.class).getResultList();
    }
}