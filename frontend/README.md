# University Skill Exchange - Frontend

A modern React frontend for the University Skill Exchange platform built with TypeScript, Material-UI, and React Router.

## Features

- **Modern UI/UX**: Clean and responsive design using Material-UI
- **Authentication**: JWT-based authentication with protected routes
- **Resource Management**: Upload, view, and manage educational resources
- **Search & Discovery**: Advanced search with filters
- **User Profiles**: User profile management
- **Responsive Design**: Mobile-friendly interface

## Technology Stack

- **React 18** with TypeScript
- **Material-UI (MUI)** for UI components
- **React Router** for navigation
- **React Query** for data fetching
- **Axios** for API communication
- **React Hook Form** for form handling
- **React Hot Toast** for notifications

## Prerequisites

- Node.js 16+ and npm/yarn
- Backend API running on `http://localhost:8080`

## Setup Instructions

### 1. Install Dependencies

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
# or
yarn install
```

### 2. Environment Configuration

Create a `.env` file in the frontend directory:
```env
REACT_APP_API_URL=http://localhost:8080/api
```

### 3. Start Development Server

```bash
npm start
# or
yarn start
```

The application will start on `http://localhost:3000`

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── auth/           # Authentication components
│   ├── layout/         # Layout components (Navbar, etc.)
│   └── resources/      # Resource-related components
├── contexts/           # React contexts (Auth, etc.)
├── pages/              # Page components
├── services/           # API services
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── App.tsx             # Main App component
└── index.tsx           # Entry point
```

## Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## Key Components

### Authentication
- **AuthContext**: Manages user authentication state
- **ProtectedRoute**: Protects routes requiring authentication
- **Login/Register**: Authentication forms

### Layout
- **Navbar**: Main navigation with user menu
- **App**: Main app structure with routing

### Pages
- **Home**: Landing page with features and statistics
- **Dashboard**: User dashboard for managing resources
- **Login/Register**: Authentication pages
- **Profile**: User profile management
- **ResourceDetail**: Individual resource view
- **UploadResource**: Resource upload form

## API Integration

The frontend communicates with the backend through:
- **api.ts**: Base axios configuration with interceptors
- **authService.ts**: Authentication API calls
- **resourceService.ts**: Resource management API calls

## Styling

The application uses Material-UI (MUI) for consistent styling:
- Custom theme with primary/secondary colors
- Responsive design with breakpoints
- Consistent spacing and typography

## State Management

- **React Context**: For global state (authentication)
- **React Query**: For server state management
- **Local State**: For component-specific state

## Development

### Adding New Features

1. Create components in appropriate directories
2. Add types in `types/` directory
3. Create API services in `services/` directory
4. Add routes in `App.tsx`
5. Update navigation in `Navbar.tsx`

### Code Style

- Use TypeScript for type safety
- Follow React functional component patterns
- Use Material-UI components for consistency
- Implement proper error handling
- Add loading states for better UX

## Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

### Environment Variables

For production, set the appropriate environment variables:
- `REACT_APP_API_URL`: Backend API URL

## Contributing

1. Follow the existing code structure
2. Use TypeScript for all new code
3. Add proper error handling
4. Test your changes thoroughly
5. Update documentation as needed
