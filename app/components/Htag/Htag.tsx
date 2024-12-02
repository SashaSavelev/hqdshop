import { HtagProps } from './Htag.props';

import {Comfortaa} from "next/font/google";
import styles from './Htag.module.css';

const inter = Comfortaa({subsets: ["cyrillic"]});




export const Htag = ({ tag, children, color }: HtagProps): JSX.Element => {
    switch (tag) {
        case 'h1':
            return <h1 className={`${inter.className} ${styles[tag]} ${styles[color]}`}>{children}</h1>;
        case 'h2':
            return <h2 className={`${inter.className} ${styles[tag]} ${styles[color]}`}>{children}</h2>;
        case 'h3':
            return <h3 className={`${inter.className} ${styles[tag]} ${styles[color]}`}>{children}</h3>;
        default:
            return <></>;
    }
};
