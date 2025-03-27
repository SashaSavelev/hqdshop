import { headers } from 'next/headers';
import { LOGIN } from './routes';

export const fetchUserInfo = async () => {
    try {
        const passingHeaders = await headers();

        const result = await fetch('http://localhost:8081/api/getUserInfo', {
            method: 'GET',
            headers: passingHeaders,
        });


        if (result.redirected && result.url.includes(LOGIN)) {
            return { message: 'Favorites not retrieved: user is not authorized.', favorites: [] };
        }

        const contentType = result.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            return { message: 'Unexpected response type. Failed to fetch favorites.', favorites: [] };
        }

        const favorites = await result.json();
        // console.log(favorites)

        return favorites;
    } catch (error) {
        console.error('Error while fetching favorites:', error);
        return { message: 'Error occurred while fetching favorites.', favorites: [] };
    }
};
