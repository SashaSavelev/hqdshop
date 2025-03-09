import { fetchFavorites } from '@/lib/fetchFavorites';
import Products from '../components/Products/Products';

export default async function Favorites() {
    console.log(fetchFavorites)
    const favorites = await fetchFavorites();
    return (
        <div>
            <Products products={favorites.favorites} favorites={favorites} />
        </div>
    );
}
