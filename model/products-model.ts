import mongoose, { Schema } from 'mongoose';
import { IProduct } from '../types/product';

export const productSchema = new Schema<IProduct>({
    flavor: {
        required: true,
        type: String,
    },
    price: {
        required: true,
        type: Number,
    },
    stock: {
        required: true,
        type: Number,
    },
    image: {
        required: true,
        type: String,
    },
});

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
