import api from './api';
import { User } from '../types/User';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  department?: string;
  studentId?: string;
  professorId?: string;
}

export interface AuthResponse {
  token: string;
  type: string;
  user: User;
}

class AuthService {
  async login(username: string, password: string): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/login', {
      username,
      password,
    });
    return response.data;
  }

  async register(userData: RegisterRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/register', userData);
    return response.data;
  }

  async getCurrentUser(): Promise<User> {
    const response = await api.get<User>('/users/me');
    return response.data;
  }

  async updateProfile(userData: Partial<User>): Promise<User> {
    const response = await api.put<User>('/users/profile', userData);
    return response.data;
  }
}

export const authService = new AuthService();
