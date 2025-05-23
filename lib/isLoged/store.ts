import { create } from 'zustand';
import AuthState from './types';

export const useAuthStore = create<AuthState>((set) => ({
    isLoggedIn: false, 
    toggleIsLoggedIn: () => set((state) => ({ isLoggedIn: !state.isLoggedIn })),
}));