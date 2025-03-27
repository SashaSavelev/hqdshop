import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { IProduct } from '@/types/product';
import { CartItem } from '@/types/product';

export interface AddToCartProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    item: IProduct;
    cartInfo: CartItem | null;
}
