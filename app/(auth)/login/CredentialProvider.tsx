'use client';

import styles from './../auth.module.css';
import { useRouter } from 'next/navigation';
import { Button } from '@/components';
import { FormEvent, useRef, useState } from 'react';
import { useAuthStore } from '@/lib/isLoged/store';


import { doCredentialLogin } from '@/lib/actions';

export const CredentialProvider = (): JSX.Element => {
    const router = useRouter();
    const [error, setError] = useState('');
    const ref = useRef<HTMLFormElement>(null);
    const toggleIsLoggedIn = useAuthStore(state=> state.toggleIsLoggedIn)
    async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
   
            const response = await doCredentialLogin(formData);
        
            
            if (!!response.error) {
                console.error(response.error);
                setError(`response.error.message`);
              
            } else {
                router.push("/");
            }
            toggleIsLoggedIn()
        } catch (e) {
            console.error(e);
            setError("Проверьте ваши данные");
        }
    }

    return (
        <>
         <form ref={ref} onSubmit={handleFormSubmit} autoComplete="on" className={styles.absolute}>
    <div className={styles.error}>{error}</div>

    <div className={styles.form}>
        <div>
            <div className={styles.form_field}>
                <label className={styles.label} htmlFor="email">
                    Почта
                </label>
                <input className={styles.input} type="email" name="email" id="email" autoComplete="email" />
            </div>
            <div className={styles.form_field}>
                <label className={styles.label} htmlFor="password">
                    Пароль
                </label>
                <input className={styles.input} type="password" name="password" id="password" autoComplete="current-password"/>
            </div>
        </div>
        <Button type="submit" appearance="primary" size="medium">
            Войти
        </Button>
    </div>
</form>
        </>
    );
};
