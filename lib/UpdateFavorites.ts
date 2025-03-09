import { IProduct } from '@/types/product';
import { NextResponse } from 'next/server';
import { LOGIN } from '@/lib/routes';

export const updateFavorites = async (item: IProduct) => {
    try {
        const result = await fetch('http://localhost:8081/api/addFavorite', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                item,
            }),
        });

        if (result.redirected && result.url.includes(LOGIN)) {
            window.location.href = result.url;
            return;
        }
        if (!result.ok) {
            throw new Error('Failed to fetch data');
        }
        return result;
    } catch (error) {
        console.log(error);
    }
};
