import React from 'react'
import styles from './Products.module.css';
import { fetchProducts } from '@/lib/fetchProducts';
import Product from '../Product/Product';
import { IProduct } from '@/types/product';


const Products = async() => {
    const products = await fetchProducts();

  return (
    <div>

{products&& products.map((item: IProduct)=> <Product item={item} key={item._id}></Product>)}
    </div>
  )
}

export default Products