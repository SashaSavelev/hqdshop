import  mongoose, {Schema} from "mongoose";
import {IUser, ICartItem} from '../types/auth';
import { productSchema } from "./products-model";

export const cartSchema = new Schema<ICartItem>({
    product: {
        required: true,
        type: productSchema
    },
    quantity: {
        required: true,
        type: Number
    }
})
 

const userSchema = new Schema<IUser>({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    favorites: {
        required: undefined,
        type: [productSchema]
    },
    cart: {
        required: undefined,
        type: [cartSchema]
    }
})

export const User = mongoose.models.User || mongoose.model("User", userSchema)