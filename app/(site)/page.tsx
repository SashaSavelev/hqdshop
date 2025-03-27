import { fetchProducts } from '@/lib/fetchProducts';
import Input from './components/Input/Input';
import Products from './components/Products/Products';
import styles from './page.module.css';

export default async function Main({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const filters = await searchParams;

    const products = await fetchProducts(filters);

    return (
        <main className={styles.main}>
            <Input />
            <Products products={products} />
        </main>
    );
}
