import mongoose from "mongoose";

export async function dbConnect(){
    try {
       const connection = await mongoose.connect(String(process.env.MONGO_DB_CONNECTION_STRING));

       return connection
    } catch (error) {
        throw new Error(error);
    }
}