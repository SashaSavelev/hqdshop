import { User } from '@/model/user-model';
import getUserToken from '@/lib/getUserToken';
import { NextResponse } from 'next/server';
import { IProduct } from '@/types/product';
import { ICartItem } from '@/types/auth';

export const POST = async (request: Request) => {
  try {
    const { item, action } = await request.json();

    console.log(action);

    const token = await getUserToken(request);
    if (!token || !token.sub) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const id = token?.sub;

    const user = await User.findOne({ _id: id });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const isPresentInCart =
      user.cart.length &&
      user.cart.some((element: ICartItem) => element.product._id == item._id);

    const quantity = user.cart.find(
      (element: ICartItem) => element.product._id == item._id
    )?.quantity;

    const updateOperationIncrease = isPresentInCart
      ? { $inc: { 'cart.$.quantity': 1 } }
      : { $push: { cart: { product: item, quantity: 1 } } };

    const updateOperationDecrease = isPresentInCart && quantity !=1 
      ? { $inc: { 'cart.$.quantity': -1 } }
      : {
          $pull: {
            cart: {
              'product._id': item._id,
            },
          },
        };

    const operation = action === "increase"? updateOperationIncrease: updateOperationDecrease    

    await User.findOneAndUpdate(
      isPresentInCart ? { _id: id, 'cart.product._id': item._id } : { _id: id },
      operation,
      { new: true }
    );

    return NextResponse.json({ message: 'Favorites updated' }, { status: 201 });
  } catch (error) {
    console.error('Error updating cart:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
};
