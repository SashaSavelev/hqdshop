'use client';
import styles from './Logout.module.css';
import { doSocialLogout } from '@/lib/actions';
import { useFavoritesStore } from '@/lib/store/store';
import { Button } from '@/components';

export const Logout = (): JSX.Element => {
    const clearFavoritesIds = useFavoritesStore(state => state.clearFavoritesIds);

    const handleLogOut = () => {
        doSocialLogout();
        clearFavoritesIds();
    };
    return (
        <Button appearance="primary" size="small" onClick={handleLogOut}>
            Выйти
        </Button>
    );
};
