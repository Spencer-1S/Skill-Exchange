# University Skill Exchange Platform

A full-stack web application for university students and professors to share educational resources, built with Spring Boot (Backend) and React (Frontend).

## Features

- **User Authentication**: Register, login, and logout functionality
- **Resource Management**: Upload, download, and manage educational resources
- **Resource Types**: Support for various file types (PDF, DOC, DOCX, TXT, MP4, AVI, MOV, MP3, WAV)
- **Rating & Reviews**: Rate and review uploaded resources
- **Search & Filter**: Find resources by tags, type, and other criteria
- **User Profiles**: View and edit user profiles with statistics
- **Responsive Design**: Modern UI built with Material-UI

## Technology Stack

### Backend
- **Spring Boot 3.4.0** - Main framework
- **Spring Security** - Authentication and authorization
- **Spring Data JPA** - Database operations
- **H2 Database** - In-memory database for development
- **JWT** - Token-based authentication
- **Maven** - Build tool

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Material-UI (MUI)** - UI components
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Hook Form** - Form handling
- **React Dropzone** - File upload

## Prerequisites

Before running this application, make sure you have the following installed:

- **Java 17** or higher
- **Node.js 16** or higher
- **npm** or **yarn**

## Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd university-skill-exchange
```

### 2. Backend Setup

Navigate to the backend directory and start the Spring Boot application:

```bash
cd backend
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

**H2 Database Console**: Access the H2 database console at `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:testdb`
- Username: `sa`
- Password: (leave empty)

### 3. Frontend Setup

Open a new terminal, navigate to the frontend directory, and start the React application:

```bash
cd frontend
npm install
npm start
```

The frontend will start on `http://localhost:3000`

## Application Structure

```
university-skill-exchange/
├── backend/
│   ├── src/main/java/com/university/skillexchange/
│   │   ├── config/          # Security and JWT configuration
│   │   ├── controller/      # REST API controllers
│   │   ├── dto/            # Data Transfer Objects
│   │   ├── model/          # Entity models
│   │   ├── repository/     # Data access layer
│   │   ├── service/        # Business logic
│   │   └── SkillExchangeApplication.java
│   └── src/main/resources/
│       ├── application.yml  # Application configuration
│       └── data.sql        # Initial data
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── contexts/       # React contexts
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   └── types/          # TypeScript type definitions
│   └── package.json
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/test` - Test endpoint

### Resources (to be implemented)
- `GET /api/resources` - Get all resources
- `POST /api/resources` - Upload new resource
- `GET /api/resources/{id}` - Get resource by ID
- `PUT /api/resources/{id}` - Update resource
- `DELETE /api/resources/{id}` - Delete resource

## Default Users

The application comes with two pre-configured users:

1. **Student Account**:
   - Username: `john_doe`
   - Email: `john@university.edu`
   - Password: `password`

2. **Professor Account**:
   - Username: `jane_smith`
   - Email: `jane@university.edu`
   - Password: `password`

## Development

### Backend Development

1. **Database**: The application uses H2 in-memory database for development
2. **Hot Reload**: Spring Boot DevTools enables automatic restart on code changes
3. **Logging**: Check console logs for detailed application information

### Frontend Development

1. **Hot Reload**: React development server automatically reloads on changes
2. **TypeScript**: Full type safety with TypeScript
3. **ESLint**: Code linting is configured

## Building for Production

### Backend
```bash
cd backend
mvn clean package
java -jar target/skill-exchange-0.0.1-SNAPSHOT.jar
```

### Frontend
```bash
cd frontend
npm run build
```

## Troubleshooting

### Common Issues

1. **Port Already in Use**:
   - Backend: Change port in `application.yml` under `server.port`
   - Frontend: React will automatically suggest an alternative port

2. **Database Connection Issues**:
   - Ensure H2 console is accessible at `http://localhost:8080/h2-console`
   - Check application logs for database initialization errors

3. **Frontend Build Issues**:
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check for TypeScript compilation errors

4. **CORS Issues**:
   - Backend is configured to allow all origins for development
   - Check browser console for CORS-related errors

### Logs

- **Backend**: Check console output for Spring Boot logs
- **Frontend**: Check browser console (F12) for React and API errors

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.
