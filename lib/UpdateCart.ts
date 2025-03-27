import { IProduct } from '@/types/product';
import { LOGIN } from '@/lib/routes';

type CartUpdate = {
    item: IProduct;
    action: "increase" | "decrease";
};

export const updateCart = async ({ item, action }: CartUpdate) => {
   
   
    try {
        const result = await fetch('http://localhost:8081/api/updateCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                item,
                action, 
            }) 
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
        console.error(error); // Логируем ошибку, чтобы узнать, что пошло не так
    }
};
