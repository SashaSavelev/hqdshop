'use client';
import React from 'react';
import styles from './../auth.module.css';
import { Button } from '@/components';
import { useRouter } from 'next/navigation';
import { useState, useRef } from 'react';

const RegistrationForm = () => {
    const router = useRouter();
    const [error, setError] = useState('');
    const ref = useRef<HTMLFormElement>(null);
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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

            if (response.status === 400) {
                setError('Пользователь уже существует');
                setTimeout(() => setError(''), 2000);
                ref?.current?.reset();
            }
            if (response.status === 201) {
                router.push('/login');
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <form ref={ref} onSubmit={handleSubmit} className={styles.absolute} autoComplete="off">
    <div className={styles.error}>{error}</div>
    <div className={styles.form}>
        <div>
            <div className={styles.form_field}>
                <label className={styles.label} htmlFor="name">
                    Имя
                </label>
                <input className={styles.input} type="text" name="name" id="name" autoComplete="off" />
            </div>
            <div className={styles.form_field}>
                <label className={styles.label} htmlFor="email">
                    Почта
                </label>
                <input className={styles.input} type="email" name="email" id="email" autoComplete="off" />
            </div>
            <div className={styles.form_field}>
                <label className={styles.label} htmlFor="password">
                    Пароль
                </label>
                <input className={styles.input} type="password" name="password" id="password" autoComplete="new-password" />
            </div>
        </div>
        <Button type="submit" appearance="primary" size="medium">
            Регистрация
        </Button>
    </div>
</form>
        </>
    );
};

export default RegistrationForm;
