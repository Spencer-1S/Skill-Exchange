package com.university.skillexchange.repository;

import com.university.skillexchange.model.ResourceReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ResourceReviewRepository extends JpaRepository<ResourceReview, Long> {
    
    List<ResourceReview> findByResourceId(Long resourceId);
    
    List<ResourceReview> findByReviewerId(Long reviewerId);
    
    Optional<ResourceReview> findByResourceIdAndReviewerId(Long resourceId, Long reviewerId);
    
    @Query("SELECT AVG(r.rating) FROM ResourceReview r WHERE r.resource.id = :resourceId")
    Double getAverageRatingByResourceId(@Param("resourceId") Long resourceId);
    
    @Query("SELECT COUNT(r) FROM ResourceReview r WHERE r.resource.id = :resourceId")
    Long getReviewCountByResourceId(@Param("resourceId") Long resourceId);
    
    boolean existsByResourceIdAndReviewerId(Long resourceId, Long reviewerId);
}
