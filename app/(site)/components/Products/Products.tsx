import styles from './Products.module.css';
import Product from '../Product/Product';
import { IProduct } from '@/types/product';
import { ICartItem } from '@/types/auth';
import { ProductsProps } from './Products.props';
import { fetchUserInfo } from '@/lib/fetchFavorites';
const Products = async ({ products }: ProductsProps) => {
    const { favorites, cart } = await fetchUserInfo();

    const favoritesIds = (favorites || []).map((i: IProduct) => i._id);

    
    const cartItems= (cart || []).map((item: ICartItem) => ({
        id: item.product._id,
        quantity: item.quantity
    }));
    

    return (
        <div className={styles.wrap}>
            {products && products.map((item: IProduct) => <Product item={item} key={item._id} cartItems={cartItems} favoritesIds={favoritesIds} />)}</div>
    );
};

export default Products;
