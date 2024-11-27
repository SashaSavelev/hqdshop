'use client';

import styles from '../../auth.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components';

import { doCredentialLogin } from '@/app/actions';

export const CredentialProvider = (): JSX.Element => {
    const router = useRouter();
    const [error, setError] = useState('');

    async function handleFormSubmit(event: Event) {
        event.preventDefault();

        try {
            const formData = new FormData(event.currentTarget);
            const response = await doCredentialLogin(formData);
            if (!!response.error) {
                setError(response.error.message);
                console.log(response)
            } else {
                router.push('/');
            }
        } catch (error) {
            setError('Проверьте ваше данные');
        }
    }
    return (
        <>
            <div>{error}</div>
            <form onSubmit={handleFormSubmit}>
                <div className={styles.form}>
                    <div>
                        <div className={styles.form_field}>
                            <label className={styles.label} htmlFor="email">
                                Почта
                            </label>
                            <input className={styles.input} type="email" name="email" id="email" />
                        </div>
                        <div className={styles.form_field}>
                            <label className={styles.label} htmlFor="password">
                                Пароль
                            </label>
                            <input className={styles.input} type="password" name="password" id="password" />
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
