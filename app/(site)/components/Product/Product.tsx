import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import Link from 'next/link';
import AddFavorite from '../AddFavorite/AddFavorite';
import Image from 'next/image';
import AddToCart from '../AddToCart/AddToCart';

const Product = async ({ item, favoritesIds, cartItems }: ProductProps) => {
    const includedFavorite = favoritesIds.includes(item._id);
    
    const includedCartItem = cartItems.find(el => el.id === item._id);

    const cartInfo = !!includedCartItem ? includedCartItem : null;
    return (
        <div className={styles.div}>
            <AddToCart item={item} cartInfo={cartInfo} />
            <Link href={`/item/${item._id}`}>
                <p className={styles.title}>{item.flavor}</p>
            </Link>
            <div className={styles.price}>
                <p>Цена:</p>
                <p className={styles.price_tag}>{item.price}</p>
            </div>

            <Image src={item.image} width={100} height={100} alt={item.flavor} />
            <AddFavorite item={item} isFavorite={includedFavorite} />
        </div>
    );
};

export default Product;
