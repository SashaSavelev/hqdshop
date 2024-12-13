import { DetailedHTMLProps, HTMLAttributes} from 'react';
import { IProduct } from '@/types/product';


export interface ProductProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    item: IProduct;
}