import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import { Submitting } from '../Submitting/Submitting';
import { Cart } from "../Cart/Cart";
import { Favorite } from '../Favorite/Favorite';
 
// import cn from 'classnames';

export  const Header = ({}: HeaderProps): JSX.Element=> {
    return (
        <div className={styles.header}>
            <img src="/logo.jpg" alt="logo" className={styles.logo}/>
            <Submitting/> 
            <Cart/>
            <Favorite/>
        </div>
    )
}