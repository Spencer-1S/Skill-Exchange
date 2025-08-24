-- Insert sample users
INSERT INTO users (username, email, password, first_name, last_name, role, department, student_id, professor_id, enabled, email_verified, created_at, updated_at) 
VALUES 
('john_doe', 'john@university.edu', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'John', 'Doe', 'STUDENT', 'Computer Science', 'CS001', NULL, true, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('jane_smith', 'jane@university.edu', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Jane', 'Smith', 'PROFESSOR', 'Computer Science', NULL, 'PROF001', true, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert sample tags
INSERT INTO tags (name, description, color) 
VALUES 
('Machine Learning', 'Machine learning and artificial intelligence topics', '#FF6B6B'),
('Web Development', 'Web development technologies and frameworks', '#4ECDC4'),
('Python', 'Python programming language and libraries', '#45B7D1'),
('JavaScript', 'JavaScript and related technologies', '#F7DC6F'),
('React', 'React.js framework and ecosystem', '#61DAFB'),
('Data Science', 'Data science and analytics', '#FF8C42'),
('AI', 'Artificial Intelligence and related topics', '#9B59B6');

