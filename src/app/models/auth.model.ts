export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserResponse {
  id: number;
  username: string;
  email: string;
  bio: string | null;
  avatarUrl: string | null;
}

export interface AuthResponse {
  user: UserResponse;
  token: string;
}