'use client';
import { Button } from '@/components';
import { FaHeart } from 'react-icons/fa';
import styles from './AddFavorite.module.css';
import cn from 'classnames';
import { updateFavorites } from '@/lib/UpdateFavorites';

import { AddFavoriteProps } from './AddFavorite.props';
import { useState, useEffect } from 'react';
import { useAuthStore } from '@/lib/isLoged/store';

const AddFavorite = ({ item, isFavorite }: AddFavoriteProps) => {
  const [isFavoriteItem, setIsFavoriteItem] = useState(isFavorite);

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (isFavoriteItem && isLoggedIn) {
      setIsFavoriteItem(false);
    }
  }, [isLoggedIn]);

  async function addProduct() {
    setIsFavoriteItem((prev: boolean) => !prev);

    // if (isLoggedIn) {
      await updateFavorites(item);
    // } else {
    //   const existing = JSON.parse(localStorage.getItem('items') || '[]');
    //   if (!existing.includes(item._id)) {
    //     existing.push(item._id); 
    //   }
    //   localStorage.setItem('items', JSON.stringify(existing)); 
    // }
  }
  return (
    <div className={cn(styles.favorite)}>
      <Button onClick={addProduct} size="medium" appearance="imageButton">
        <FaHeart className={cn({ [styles.active]: isFavoriteItem })} />
      </Button>
      <span className={styles.span}>Добавить в избранное</span>
    </div>
  );
};

export default AddFavorite;
