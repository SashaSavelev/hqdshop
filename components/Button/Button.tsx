import { ButtonProps } from "./Button.props";
import cn from 'classnames';
import styles from './Button.module.css';
import { Roboto } from "next/font/google";

const inter = Roboto({
    weight: '400',
    subsets: ['latin'],
  })
export const Button = ({children, appearance, size, ...props}:ButtonProps):JSX.Element=> {
 return (
    <button className={cn({
        [styles.primary]: appearance=='primary',
        [styles.imageButton]: appearance =='imageButton',
        [styles.small]: size == 'small',
        [styles.medium]: size == 'medium',
        [styles.big]: size == 'big',
    },styles.button, inter.className)}
    {...props}
     >{children}</button>
 )
}