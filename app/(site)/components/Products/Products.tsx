import styles from './Products.module.css';
import Product from '../Product/Product';
import { IProduct } from '@/types/product';
import { ProductsProps } from './Products.props';
const Products = async ({ products, favorites }: ProductsProps) => {
    const favoritesIds = (favorites || []).map((i: IProduct) => i._id);

    return (
        <div className={styles.wrap}>{products && products.map((item: IProduct) => <Product item={item} key={item._id} favoritesIds={favoritesIds} />)}</div>
    );
};

export default Products;
