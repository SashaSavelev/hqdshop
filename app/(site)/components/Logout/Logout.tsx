'use client';
import styles from './Logout.module.css';
import { doSocialLogout } from '@/lib/actions';
import { Button } from '@/components';
import { useAuthStore } from '@/lib/isLoged/store';

export const Logout = (): JSX.Element => {

    const logout = useAuthStore(state=> state.logout)

    const handleLogOut = () => {
        logout()
        doSocialLogout();
    };
    return (
        <Button appearance="primary" size="small" onClick={handleLogOut}>
            Выйти
        </Button>
    );
};
