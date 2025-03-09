import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import Link from 'next/link';
import AddFavorite from '../AddFavorite/AddFavorite';
import Image from 'next/image';
import AddToCart from '../AddToCart/AddToCart';
import { DefaultBlur } from '@/components/Static/DefaultBlur';

const Product = async ({ item, favoritesIds }: ProductProps) => {
    return (
        <div className={styles.div}>
            <AddToCart />
            <Link href={`/item/${item._id}`}>
                <p className={styles.title}>{item.flavor}</p>
            </Link>
            <div className={styles.price}>
                <p>Цена:</p>
                <p className={styles.price_tag}>{item.price}</p>
            </div>
            
            <Image src={item.image} width={100} height={100} alt={item.flavor}  />
            <AddFavorite item={item} favoritesIds={favoritesIds} />

        </div>
    );
};

export default Product;
