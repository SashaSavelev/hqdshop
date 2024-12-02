import styles from './../auth.module.css';
import { GoogleProvider } from '../components/GoogleProvider';
import  Home from '../components/Home';
import { CredentialProvider } from './CredentialProvider';
import Link from 'next/link';
import cn from 'classnames';
export default function Login() {
    return (
        <>
      
            <div className={cn(styles.block, styles.container, styles.relative)}> 
                 <Home/>
                <div className={styles.block}>
                    <GoogleProvider />
                    <CredentialProvider />
                </div>
            </div>
                    <div className=''></div>
                <p className={styles.p}>У вас нет профиля?</p>
                <Link href="/signup" className={cn(styles.shadow, styles.link)}>
                    Регистрация
                </Link>
        </>
    );
}
