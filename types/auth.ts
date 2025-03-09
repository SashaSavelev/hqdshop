import { IProduct } from "./product";

export interface ICartItem {
  product: IProduct;
  quantity: number;
}


export interface IUser  {
    _id: string;
    email: string;
    password: string;
    name?: string;
    favorites: IProduct[];
    cart: ICartItem[];
  }
  
