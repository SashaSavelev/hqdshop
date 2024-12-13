import  mongoose, {Schema} from "mongoose";
import {IUser} from '../types/auth';
import { productSchema } from "./products-model";
 

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
    }
})

export const User = mongoose.models.User || mongoose.model("User", userSchema)