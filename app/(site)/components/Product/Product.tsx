import React from 'react';
import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import Link from 'next/link';
import AddFavorite from '../AddFavorite/AddFavorite';

const Product = ({ item }: ProductProps) => {
    return (
        <div className={styles.div}>
            <Link href={`/item/${item._id}`}>
                <p>{item.flavor}</p>
            </Link>
            <p>{item.price}</p>
            <p>{item.price}</p>
            <p>{item.stock}</p>
             <AddFavorite size='big'/> 
        </div>
    );
};

export default Product;
