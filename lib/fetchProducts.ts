import { headers } from 'next/headers';
import { Filters } from '@/app/(site)/components/Input/Input.props';

export const fetchProducts = async (filters: Filters) => {
    const { name, price } = filters;


    const queryParams: string[] = [];

    if (name) queryParams.push(`name=${encodeURIComponent(name)}`);
    if (price) queryParams.push(`price=${encodeURIComponent(price)}`);

    const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

    try {
        const passingHeaders = await headers();

        const result = await fetch(`http://localhost:8081/api/products${queryString}`, {
            method: 'GET',
            headers: passingHeaders,
        });

        const products = await result.json();

        if (!result.ok) {
            throw new Error('Failed to fetch data');
        }

        return products;
    } catch (error) {
        console.log(error);
    }
};
