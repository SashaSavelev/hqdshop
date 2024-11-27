import styles from './auth.module.css';
import { P } from '@/components';
export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <body className={styles.center}>
         
            <P>Профиль</P>
            {children}
        </body>
    );
}
