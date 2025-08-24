package com.university.skillexchange.repository;

import com.university.skillexchange.model.Resource;
import com.university.skillexchange.model.ResourceType;
import com.university.skillexchange.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResourceRepository extends JpaRepository<Resource, Long> {
    
    Page<Resource> findByIsPublicTrueAndIsApprovedTrue(Pageable pageable);
    
    Page<Resource> findByUploader(User uploader, Pageable pageable);
    
    List<Resource> findByType(ResourceType type);
    
    List<Resource> findBySubject(String subject);
    
    List<Resource> findByDepartment(String department);
    
    List<Resource> findByCourseCode(String courseCode);
    
    @Query("SELECT r FROM Resource r WHERE r.isPublic = true AND r.isApproved = true AND " +
           "(r.title LIKE %:searchTerm% OR r.description LIKE %:searchTerm% OR r.subject LIKE %:searchTerm%)")
    Page<Resource> findBySearchTerm(@Param("searchTerm") String searchTerm, Pageable pageable);
    
    @Query("SELECT r FROM Resource r WHERE r.isPublic = true AND r.isApproved = true AND r.department = :department")
    Page<Resource> findByDepartment(@Param("department") String department, Pageable pageable);
    
    @Query("SELECT r FROM Resource r WHERE r.isPublic = true AND r.isApproved = true AND r.type = :type")
    Page<Resource> findByType(@Param("type") ResourceType type, Pageable pageable);
    
    @Query("SELECT r FROM Resource r WHERE r.isPublic = true AND r.isApproved = true AND r.uploader.id = :uploaderId")
    Page<Resource> findByUploaderId(@Param("uploaderId") Long uploaderId, Pageable pageable);
    
    @Query("SELECT r FROM Resource r WHERE r.isPublic = true AND r.isApproved = true ORDER BY r.downloadCount DESC")
    Page<Resource> findMostDownloaded(Pageable pageable);
    
    @Query("SELECT r FROM Resource r WHERE r.isPublic = true AND r.isApproved = true ORDER BY r.rating DESC")
    Page<Resource> findTopRated(Pageable pageable);
    
    @Query("SELECT r FROM Resource r WHERE r.isPublic = true AND r.isApproved = true ORDER BY r.createdAt DESC")
    Page<Resource> findLatest(Pageable pageable);
    
    @Query("SELECT r FROM Resource r WHERE r.isPublic = true AND r.isApproved = true AND r.uploader.department = :department")
    Page<Resource> findByUploaderDepartment(@Param("department") String department, Pageable pageable);
}
