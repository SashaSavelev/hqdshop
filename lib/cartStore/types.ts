import { ICartItem } from "@/types/auth";

export type ItemId = string;

export type CartItem = {
    itemId: ItemId;
    quantity: number;
}

export type State = {
    elements: CartItem[];
}

export type Actions = {
    
    setElements: (elements: ICartItem[])=> void;
    addOrIncrease: (itemId: ItemId)=> void; 
   deleteOrDecrease: (itemId: ItemId)=> void; 

}