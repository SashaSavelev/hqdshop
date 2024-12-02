export interface User {
    _id: string;
    email: string;
    password: string;
    name?: string;
  }
  
  // Типы для ответа на запросы
  export interface AuthResponse {
    user: User;
    token: string;
  }
  
  export interface Credentials {
    email: string;
    password: string;
  }