import styles from './Submitting.module.css';
import Link from 'next/link';

export const Submitting = (): JSX.Element => {
    return (
        <>
            <Link href="/signup">
                <div className={styles.div}>SignUp</div>
            </Link>
            <Link href="/login">
                <div className={styles.div2}>Login</div>
            </Link>
        </>
    );
};
