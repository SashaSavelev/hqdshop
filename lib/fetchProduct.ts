import { headers } from "next/headers";


export const fetchProduct = async (id: string) => {
    try {
        const passingHeaders = await headers()

        const result = await fetch(`http://localhost:8081/api/item/${id}`,  {
            method: "GET",
            headers: passingHeaders
          });

        const product = await result.json();
        if (!result.ok) {
            throw new Error('Failed to fetch product data');
        }
        return product;
    } catch (error) {
        console.log(error);
    }
};
