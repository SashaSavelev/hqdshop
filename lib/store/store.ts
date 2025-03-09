import { create } from 'zustand';
import { FavoriteIds, Actions, State } from './types';

export const useFavoritesStore = create<State & Actions>()(set => ({
    ids: [],
    setFavoritesIds: (groups: FavoriteIds) => {
        set(state => ({
            ids: Array.from(new Set([...state.ids, ...groups])),
        }));
    },
    toggleFavorites: (id: string) => {
        set(state => ({
           ids: state.ids.includes(id)? state.ids.filter(element=> element!==id ): [...state.ids, id]
        }));
    },
    clearFavoritesIds: () => {
        set(() => ({
            ids: [],
        }));
    },
}));
