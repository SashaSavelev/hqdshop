import { create } from "zustand";
import { CartItem, Actions, State, ItemId } from "./types";
import { ICartItem } from '@/types/auth';


export const useCartStore = create<State & Actions>()((set) => ({
  elements: [],
  setElements: (elements: ICartItem[]) => {
    const cartItems: CartItem[] = elements.map((el) => ({
      itemId: el.product._id, 
      quantity: el.quantity,
    }));

    set(() => ({ elements: cartItems }));
  },
  addOrIncrease: (itemId: ItemId) => {
    set((state: State) => {
      const existingItem = state.elements.find((item) => item.itemId === itemId);
      return {
        elements: existingItem
          ? state.elements.map((item: CartItem) =>
              item.itemId === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
          : [...state.elements, { itemId, quantity: 1 }],
      };
    });
  },

  deleteOrDecrease: (itemId: ItemId) => {
    set((state: State) => {
      return {
        elements: state.elements
          .map((item: CartItem) =>
            item.itemId === itemId ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0), 
      };
    });
  },
}));

// useCartStore.subscribe((state) => {
//   console.log(state.elements);
// });
