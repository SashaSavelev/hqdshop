import { fetchUserInfo } from '@/lib/fetchFavorites';
import Products from '../components/Products/Products';

export default async function Favorites() {
    const {favorites} = await fetchUserInfo();
    return (
        <div>
            <Products products={favorites}  />
        </div>
    );
}
