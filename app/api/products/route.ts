import { Product } from '@/model/products-model';

export const GET = async (request: Request): Promise<Response> => {
    try {
        const products = await Product.find({});
        return new Response(JSON.stringify(products), {
            status: 200,
        });
    } catch (error) {
        return new Response(`Что-то пошло не так ${error}`, { status: 500 });
    }
};
