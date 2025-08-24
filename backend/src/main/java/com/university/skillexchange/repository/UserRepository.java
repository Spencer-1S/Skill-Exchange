package com.university.skillexchange.repository;

import com.university.skillexchange.model.User;
import com.university.skillexchange.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    Optional<User> findByUsername(String username);
    
    Optional<User> findByEmail(String email);
    
    boolean existsByUsername(String username);
    
    boolean existsByEmail(String email);
    
    List<User> findByRole(UserRole role);
    
    List<User> findByDepartment(String department);
    
    @Query("SELECT u FROM User u WHERE u.firstName LIKE %:searchTerm% OR u.lastName LIKE %:searchTerm% OR u.username LIKE %:searchTerm%")
    List<User> findBySearchTerm(@Param("searchTerm") String searchTerm);
    
    @Query("SELECT u FROM User u WHERE u.department = :department AND u.role = :role")
    List<User> findByDepartmentAndRole(@Param("department") String department, @Param("role") UserRole role);
}
