# University Skill Exchange - Backend

A Spring Boot backend for the University Skill Exchange platform where students and professors can share educational resources.

## Features

- **User Management**: Student and Professor registration and authentication
- **Resource Management**: Upload, download, and manage educational resources
- **Search & Discovery**: Advanced search with filters and tags
- **Rating & Reviews**: Rate and review shared resources
- **JWT Authentication**: Secure token-based authentication
- **File Upload**: Support for various file types

## Technology Stack

- **Java 17**
- **Spring Boot 3.2.0**
- **Spring Security** with JWT
- **Spring Data JPA**
- **PostgreSQL**
- **Maven**

## Prerequisites

- Java 17 or higher
- Maven 3.6+
- PostgreSQL 12+

## Setup Instructions

### 1. Database Setup

Create a PostgreSQL database:
```sql
CREATE DATABASE university_skill_exchange;
```

### 2. Configuration

Update `src/main/resources/application.yml` with your database credentials:
```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/university_skill_exchange
    username: your_username
    password: your_password
```

### 3. Build and Run

```bash
# Navigate to backend directory
cd backend

# Build the project
mvn clean install

# Run the application
mvn spring-boot:run
```

The application will start on `http://localhost:8080`

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Users
- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/{id}` - Get user by ID
- `PUT /api/users/{id}` - Update user profile
- `DELETE /api/users/{id}` - Delete user (Admin only)

### Resources
- `GET /api/resources` - Get all public resources
- `POST /api/resources` - Upload new resource
- `GET /api/resources/{id}` - Get resource by ID
- `PUT /api/resources/{id}` - Update resource
- `DELETE /api/resources/{id}` - Delete resource
- `GET /api/resources/search` - Search resources

## Database Schema

The application uses the following main entities:
- **users**: User accounts (students, professors, admins)
- **resources**: Educational resources (lectures, notes, etc.)
- **tags**: Resource categorization
- **resource_reviews**: User reviews and ratings

## Security

- JWT-based authentication
- Role-based access control (STUDENT, PROFESSOR, ADMIN)
- Password encryption with BCrypt
- CORS enabled for frontend integration

## Development

### Project Structure
```
src/main/java/com/university/skillexchange/
├── config/          # Security and configuration
├── controller/      # REST controllers
├── dto/            # Data transfer objects
├── model/          # Entity classes
├── repository/     # Data access layer
├── service/        # Business logic
└── SkillExchangeApplication.java
```

### Adding New Features

1. Create entity in `model/` package
2. Create repository interface in `repository/` package
3. Create service class in `service/` package
4. Create DTOs in `dto/` package
5. Create controller in `controller/` package

## Testing

Run tests with:
```bash
mvn test
```

## Deployment

The application can be deployed as a JAR file:
```bash
mvn clean package
java -jar target/skill-exchange-0.0.1-SNAPSHOT.jar
```
