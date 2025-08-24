export interface User {
  id: number;
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: UserRole;
  bio?: string;
  department?: string;
  studentId?: string;
  professorId?: string;
  profilePicture?: string;
  enabled?: boolean;
  emailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export enum UserRole {
  STUDENT = 'STUDENT',
  PROFESSOR = 'PROFESSOR',
  ADMIN = 'ADMIN'
}
