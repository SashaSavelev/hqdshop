import { fetchProducts } from '@/lib/fetchProducts';
import Input from './components/Input/Input';
import Products from './components/Products/Products';
import { fetchUserInfo } from '@/lib/fetchFavorites';
import styles from './page.module.css';

export default async function Main({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const filters = await searchParams;

    // console.log(filters, 'filters');

    const products = await fetchProducts(filters);

    const { favorites, cart } = await fetchUserInfo();

    console.log(cart);
    return (
        <main className={styles.main}>
            <Input />
            <Products products={products} favorites={favorites} />
        </main>
    );
}
