import { headers } from "next/headers";

export const fetchProducts = async () => {
    try {
        const passingHeaders = await headers()
        const result = await fetch('http://localhost:8081/api/products',  {
            method: "GET",
            headers: passingHeaders
          })
          
       
        const products = await result.json();

        if (!result.ok) {
            throw new Error('Failed to fetch data');
        }
        return products;
    } catch (error) {
        console.log(error);
    }
};
