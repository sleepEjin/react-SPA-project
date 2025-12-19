package com.kh.project.repository;

import com.kh.project.entity.Rink;
import java.util.List;
import java.util.Optional;

public interface RinkRepository {
    void save(Rink rink);
    Optional<Rink> findById(Long id);
    List<Rink> findAll();
}