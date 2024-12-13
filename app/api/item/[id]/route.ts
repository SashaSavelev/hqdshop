import { NextRequest } from "next/server";
import { Product } from "@/model/products-model";
import { BSON } from "bson";

export async function GET(request: NextRequest, props: {params: Promise<{id: string}>}): Promise<Response> {
    const id = await props.params;
    const slugObject = await id;
    const idForMongo = slugObject.id;
    try {
       const product = await Product.findOne ({"_id":  new BSON.ObjectId(idForMongo)})
       return new Response(JSON.stringify(product), {
         status: 200,
     });
 } catch (error) {
     return new Response(`Что-то пошло не так ${error}`, { status: 500 });
 }
};
