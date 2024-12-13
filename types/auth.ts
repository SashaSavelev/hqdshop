import { IProduct } from "./product";

export interface IUser  {
    _id: string;
    email: string;
    password: string;
    name?: string;
    favorites: IProduct[];
  }
  
  // Типы для ответа на запросы
  // export interface AuthResponse {
  //   user: User;
  //   token: string;
  // }
  
  // export interface Credentials {
  //   email: string;
  //   password: string;
  // }