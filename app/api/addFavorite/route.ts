import { User } from '@/model/user-model';
import getUserToken from '@/lib/getUserToken';
import { NextResponse } from 'next/server';
import { IProduct } from '@/types/product';

export const POST = async (request: Request) => {
    try {
        const { item } = await request.json();


        const token = await getUserToken(request);
        if (!token || !token.sub ) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        

        const id = token?.sub;
      
        const user = await User.findOne({ _id: id });

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        const isPresentInFavorites = user.favorites.some((product: IProduct) => product._id == item._id);

        const updateOperation = isPresentInFavorites
            ? { $pull: { favorites: { _id: item._id } } }
            : { $addToSet: { favorites: item } };

        await User.findOneAndUpdate(
            { _id: id },
            updateOperation,
            { new: true }
        );

        return NextResponse.json({ message: 'Favorites updated'}, { status: 201 });
    } catch (error) {
        console.error('Error updating favorites:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
};