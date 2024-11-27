'use client';
import React from 'react';
import styles from '../../auth.module.css';
import { Button } from '@/components';
import { GoogleProvider } from '../../components/GoogleProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RegistrationForm = () => {
    const router = useRouter();
    async function handleSubmit(event: Event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);

            const name = formData.get('name');
            const email = formData.get('email');
            const password = formData.get('password');
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            response.status === 201 && router.push('/login');
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <p>Уже есть профиль?</p>
            <Link href="/login">Войти</Link>
            <form onSubmit={handleSubmit}>
                <div className={styles.form}>
                    <div>
                        <div className={styles.form_field}>
                            <label className={styles.label} htmlFor="name">
                                Имя
                            </label>
                            <input className={styles.input} type="name" name="name" id="name" />
                        </div>
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
                        Регистрация
                    </Button>
                </div>
            </form>
            <GoogleProvider />
        </>
    );
};

export default RegistrationForm;
