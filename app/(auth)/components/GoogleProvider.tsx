import { doSocialLogin } from '@/lib/actions';
import { Button } from '@/components';
import Image from 'next/image';
import styles from '../auth.module.css';
import cn from 'classnames'

export const GoogleProvider = (): JSX.Element => {
    return (
        <>
            <form action={doSocialLogin} className={cn(styles.form, styles.shadow)}>
                <Button size="medium" appearance="imageButton" type="submit" name="action" value="google">
                    <Image src="/googleicon.webp" width={20} height={20} alt='google-image'></Image>
                    <span>Google</span>
                </Button>
            </form>
        </>
    );
};
