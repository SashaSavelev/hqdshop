'use client';
import { Button } from '@/components';
import { FaHeart } from 'react-icons/fa';
import styles from './AddFavorite.module.css';
import cn from 'classnames';
import { updateFavorites } from '@/lib/UpdateFavorites';

import { AddFavoriteProps } from './AddFavorite.props';
import { useEffect } from 'react';
import { useFavoritesStore } from '@/lib/store/store';

const AddFavorite = ({ item, favoritesIds }: AddFavoriteProps) => {
    const setFavoritesIds = useFavoritesStore(state => state.setFavoritesIds);

    const toggleFavorites = useFavoritesStore(state => state.toggleFavorites);

    const ids = useFavoritesStore(state => state.ids);

    useEffect(() => {
        console.log(ids)
        setFavoritesIds(favoritesIds);
        console.log('setItDone')
    }, []);

    const included = ids.includes(item._id);

    async function addProduct() {
        toggleFavorites(item._id);
        await updateFavorites(item);
    }
    return (
        <div className={cn(styles.favorite)}>
            <Button onClick={addProduct} size="medium" appearance="imageButton">
                <FaHeart className={cn({ [styles.active]: included })} />
            </Button>
            <span className={styles.span}>Добавить в избранное</span>
        </div>
    );
};

export default AddFavorite;
