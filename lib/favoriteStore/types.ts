export type FavoriteIds = string[];

export type State = {
    ids: FavoriteIds;
}

export type Actions = {
    setFavoritesIds: (favoriteIds: FavoriteIds) => void;
    clearFavoritesIds: () => void;
    toggleFavorites: (id: string)=> void;
};
