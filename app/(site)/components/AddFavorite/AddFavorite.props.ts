import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { IProduct } from '@/types/product';

export interface AddFavoriteProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isFavorite: boolean;
    item: IProduct;
}
