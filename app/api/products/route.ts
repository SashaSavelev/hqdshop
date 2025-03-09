import { Product } from '@/model/products-model';
import { isNullOrUndefined } from 'util';

export const GET = async (req: Request): Promise<Response> => {
    const url = new URL(req.url);
    const name = url.searchParams.get('name');
    const price = url.searchParams.get('price');

    

    try {
        if (name || price) {
            const regexName = name ? new RegExp(name.trim(), 'i') : isNullOrUndefined;

            try {
                const filtered = await Product.find({
                    ...(regexName && { flavor: { $regex: regexName } }), // Only add regex filter if regexName is valid
                    ...(price && { price: { $lte: parseInt(price) } }) // Convert price to an integer
                });
                return new Response(JSON.stringify(filtered), {
                    status: 200,
                });
            } catch (error) {
                console.log(error);
            }
        }

        const products = await Product.find({});
        return new Response(JSON.stringify(products), {
            status: 200,
        });
    } catch (error) {
        return new Response(`Что-то пошло не так ${error}`, { status: 500 });
    }
};
