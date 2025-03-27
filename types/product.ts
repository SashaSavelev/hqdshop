export interface IProduct {
    _id: string;
    flavor: string;
    price: number;
    stock: number;
    image: string;
}

export type CartItem = {
    id: string;
    quantity: number;
}