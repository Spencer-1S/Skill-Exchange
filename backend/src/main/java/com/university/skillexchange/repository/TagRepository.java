package com.university.skillexchange.repository;

import com.university.skillexchange.model.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {
    
    Optional<Tag> findByName(String name);
    
    boolean existsByName(String name);
    
    @Query("SELECT t FROM Tag t WHERE t.name LIKE %:searchTerm%")
    List<Tag> findBySearchTerm(@Param("searchTerm") String searchTerm);
    
    @Query("SELECT t FROM Tag t JOIN t.resources r WHERE r.id = :resourceId")
    List<Tag> findByResourceId(@Param("resourceId") Long resourceId);
}
