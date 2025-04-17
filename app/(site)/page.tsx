import { fetchProducts } from '@/lib/fetchProducts';
import { fetchSession } from '@/lib/fetchSession';
import Input from './components/Input/Input';
import Products from './components/Products/Products';
import styles from './page.module.css';
import { cookies } from 'next/headers';

export default async function Main({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const filters = await searchParams;

  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('sessionId')?.value ?? '';

  const products = await fetchProducts(filters);
  const sessionInfo = await fetchSession(sessionCookie);
  return (
    <main className={styles.main}>
      <Input />
      <Products products={products} />
    </main>
  );
}
