import styles from './login.module.css';
import { GoogleProvider  } from '../components/GoogleProvider';
import { CredentialProvider } from './components/CredentialProvider';
import Link from 'next/link';
export default function Login() {
    return (
        <>
        <div className={styles.login}>
            <GoogleProvider/>
         <CredentialProvider/>
            <p>У вас нет профиля?</p>
            <Link href='/signup'>Регистрация</Link>
        </div>
        </>
    );
}
