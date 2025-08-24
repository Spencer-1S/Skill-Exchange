package com.university.skillexchange.dto;

import com.university.skillexchange.model.ResourceType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;
import java.util.Set;

public class ResourceDto {
    
    private Long id;
    
    @NotBlank
    @Size(max = 200)
    private String title;
    
    @Size(max = 1000)
    private String description;
    
    private ResourceType type;
    
    @Size(max = 100)
    private String subject;
    
    @Size(max = 100)
    private String department;
    
    @Size(max = 20)
    private String courseCode;
    
    @Size(max = 50)
    private String academicYear;
    
    @Size(max = 20)
    private String semester;
    
    @Size(max = 500)
    private String fileUrl;
    
    @Size(max = 100)
    private String fileName;
    
    private Long fileSize;
    
    @Size(max = 50)
    private String fileType;
    
    private UserDto uploader;
    
    private boolean isPublic;
    
    private boolean isApproved;
    
    private int downloadCount;
    
    private int viewCount;
    
    private double rating;
    
    private int ratingCount;
    
    private LocalDateTime createdAt;
    
    private LocalDateTime updatedAt;
    
    private Set<String> tags;
    
    // Constructors
    public ResourceDto() {}
    
    public ResourceDto(Long id, String title, String description, ResourceType type) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.type = type;
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public ResourceType getType() {
        return type;
    }
    
    public void setType(ResourceType type) {
        this.type = type;
    }
    
    public String getSubject() {
        return subject;
    }
    
    public void setSubject(String subject) {
        this.subject = subject;
    }
    
    public String getDepartment() {
        return department;
    }
    
    public void setDepartment(String department) {
        this.department = department;
    }
    
    public String getCourseCode() {
        return courseCode;
    }
    
    public void setCourseCode(String courseCode) {
        this.courseCode = courseCode;
    }
    
    public String getAcademicYear() {
        return academicYear;
    }
    
    public void setAcademicYear(String academicYear) {
        this.academicYear = academicYear;
    }
    
    public String getSemester() {
        return semester;
    }
    
    public void setSemester(String semester) {
        this.semester = semester;
    }
    
    public String getFileUrl() {
        return fileUrl;
    }
    
    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }
    
    public String getFileName() {
        return fileName;
    }
    
    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
    
    public Long getFileSize() {
        return fileSize;
    }
    
    public void setFileSize(Long fileSize) {
        this.fileSize = fileSize;
    }
    
    public String getFileType() {
        return fileType;
    }
    
    public void setFileType(String fileType) {
        this.fileType = fileType;
    }
    
    public UserDto getUploader() {
        return uploader;
    }
    
    public void setUploader(UserDto uploader) {
        this.uploader = uploader;
    }
    
    public boolean isPublic() {
        return isPublic;
    }
    
    public void setPublic(boolean aPublic) {
        isPublic = aPublic;
    }
    
    public boolean isApproved() {
        return isApproved;
    }
    
    public void setApproved(boolean approved) {
        isApproved = approved;
    }
    
    public int getDownloadCount() {
        return downloadCount;
    }
    
    public void setDownloadCount(int downloadCount) {
        this.downloadCount = downloadCount;
    }
    
    public int getViewCount() {
        return viewCount;
    }
    
    public void setViewCount(int viewCount) {
        this.viewCount = viewCount;
    }
    
    public double getRating() {
        return rating;
    }
    
    public void setRating(double rating) {
        this.rating = rating;
    }
    
    public int getRatingCount() {
        return ratingCount;
    }
    
    public void setRatingCount(int ratingCount) {
        this.ratingCount = ratingCount;
    }
    
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    
    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
    
    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
    
    public Set<String> getTags() {
        return tags;
    }
    
    public void setTags(Set<String> tags) {
        this.tags = tags;
    }
}
