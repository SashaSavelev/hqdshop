'use client';
import { Button } from '@/components';
import { FaHeart } from 'react-icons/fa';
import styles from './AddFavorite.module.css';
import cn from 'classnames';
import { AddFavoriteProps } from './AddFavorite.props';

const AddFavorite = ({ size, item }: AddFavoriteProps) => {
    return (
        <div className={styles.small}>
            <Button onClick={() => console.log(2)} size="small" appearance="imageButton">
                <FaHeart className={cn(styles.small)} />
            </Button>
            <span>Добавить в избранное</span>
        </div>
    );
};

export default AddFavorite;
