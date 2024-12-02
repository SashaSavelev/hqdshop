import Link from 'next/link';
import RegistrationForm from './RegistrationForm';
import { GoogleProvider } from '../components/GoogleProvider';
import cn from 'classnames'
import styles from './../auth.module.css'
import Home from '../components/Home';

export default function Signup() {
    return (
        <>
      <div className={cn(styles.block, styles.container, styles.relative)}> 
      <Home/>
            <div className={styles.block}>
                <GoogleProvider />
                <RegistrationForm />
                </div>
        
        </div>
            <p className={styles.p}>Уже есть профиль?</p>
            <Link href="/login" className={styles.link}>
                Войти
            </Link>
        </>
    );
}

