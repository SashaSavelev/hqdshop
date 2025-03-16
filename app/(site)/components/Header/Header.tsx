import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import { Submitting } from '../Submitting/Submitting';
import { Cart } from '../Cart/Cart';
import { Favorites } from '../Favorites/Favorites';
import CurrentUser from '../CurrentUser/CurrentUser';
import Link from 'next/link';
// import cn from 'classnames';

export const Header = ({}: HeaderProps): JSX.Element => {
    return (
        <div className={styles.header}>
            <Link href="/">
                <img src="/logo.jpg" alt="logo" className={styles.logo} />
            </Link>
            <Submitting />
            <Cart />
            <Favorites />
            <CurrentUser />
        </div>
    );
};
