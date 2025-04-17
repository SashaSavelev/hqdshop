import { User } from '@/model/user-model';
import getUserToken from '@/lib/getUserToken';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
    try {
        const token = await getUserToken(request);
        if (!token || !token.sub) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const id = token.sub;
        const user = await User.findOne({ _id: id });

        const favorites = user.favorites;
        const cart = user.cart;

        return NextResponse.json({ message: 'Got user Info', cart, favorites });
    } catch (error) {
        console.error('Error getting favorites', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
};
