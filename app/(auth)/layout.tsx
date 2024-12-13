import styles from './auth.module.css';
import Image from 'next/image';
export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.center}>
          
            <Image src="/logo.jpg" width={100} height={100} alt='shop-logo'></Image>
            {children}
        </div>
    );
}
