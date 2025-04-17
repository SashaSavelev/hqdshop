import mongoose, {Schema} from "mongoose";
import { cartSchema } from "./user-model";
import { productSchema } from "./products-model";
import { ISession } from "@/types/session";

const sessionSchema = new Schema<ISession>({
    sessionId: {
        type: String,
        required: true,
    },
    favorites: {
        type: [String],
        required: true,
    } ,
    cartItems: {
        type: [cartSchema],
        required: true,
    }
})

export const Session = mongoose.models.Session || mongoose.model('Session', sessionSchema);
