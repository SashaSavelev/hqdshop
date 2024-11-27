import styles from './P.module.css';
import { PProps } from './P.props';
import cn from 'classnames';
 

export const P = ({size='m', children, ...props}: PProps): JSX.Element=> {
  return (
    <p className={
        cn(
          {[styles.s]: size =='s',
            [styles.m]: size =='m',
          } 
        )
    } {...props}>{children}</p>
  )
}   