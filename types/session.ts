import { CartItem } from "@/lib/cartStore/types";
export interface ISession {
    sessionId: string;
    favorites: string[];
    cartItems: CartItem[];

}