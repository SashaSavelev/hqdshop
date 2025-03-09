import styles from './Favorites.module.css';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';

export const Favorites = (): JSX.Element => {
    return (
        <>
            <Link href="/favorites">
                <div className={styles.div}>
                    <p>Хочу купить</p>
                    <FaHeart />
                </div>
            </Link>
        </>
    );
};
