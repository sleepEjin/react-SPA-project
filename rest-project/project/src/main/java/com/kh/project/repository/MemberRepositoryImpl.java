package com.kh.project.repository;
import com.kh.project.entity.Member;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class MemberRepositoryImpl implements MemberRepository {
    private final EntityManager em;

    @Override
    public void save(Member member) { em.persist(member); }

    @Override public Optional<Member> findById(Long id) {
        return Optional.ofNullable(em.find(Member.class, id));
    }

    @Override
    public Optional<Member> findByUserId(String userId) {
        return em.createQuery("select m from Member m where m.userId = :userId", Member.class)
                .setParameter("userId", userId).getResultStream().findFirst();
    }

    @Override
    public List<Member> findAll() { return em.createQuery("select m from Member m", Member.class).getResultList(); }

    @Override
    public void delete(Member member) { em.remove(member); }

    @Override
    public List<Member> findByNameKeyword(String keyword) {
        return em.createQuery("select m from Member m where m.userName like :keyword", Member.class)
                .setParameter("keyword", "%" + keyword + "%").getResultList();
    }
}