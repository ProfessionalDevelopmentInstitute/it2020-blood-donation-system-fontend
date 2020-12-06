export interface UserModel {
  id?: number;
  password?: string;
  email: string;
  role: string;
}

export const ROLES: string[] = ['USER', 'ADMIN'];
