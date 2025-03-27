import { create } from 'zustand';
import AuthState from './types';

export const useAuthStore = create<AuthState>((set) => ({
    isLoggedIn: true, 
    logout: () => set({ isLoggedIn: false }),
}));