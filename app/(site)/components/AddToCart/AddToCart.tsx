'use client';

import styles from './AddToCart.module.css';
import { Button } from '@/components';
import { FaCartShopping, FaMinus, FaPlus } from 'react-icons/fa6';
import { AddToCartProps } from './AddToCart.props';
import { updateCart } from '@/lib/UpdateCart';
import { useState, useEffect } from 'react';
import { useAuthStore } from '@/lib/isLoged/store';

const AddToCart = ({ item, cartInfo }: AddToCartProps) => {
  const [quantity, setQuantity] = useState<number | null>(
    cartInfo && cartInfo?.quantity
  );

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  // console.log(isLoggedIn)
  async function addToCart() {
    await updateCart({ item, action: 'increase' });
    setQuantity((prev) => (prev !== null ? prev + 1 : 1));
  }

  async function deleteFromCart() {
    await updateCart({ item, action: 'decrease' });
    setQuantity((prev) => (prev !== null && prev !== 1 ? prev - 1 : null));
  }

  useEffect(() => {
    if (!isLoggedIn) {
      setQuantity(null);
    }
  }, [isLoggedIn]);

  return (
    <div>
      <Button onClick={addToCart} size="medium" appearance="imageButton">
        <FaCartShopping />
        <p>{quantity}</p>
      </Button>
      {quantity && (
        <>
          <Button
            onClick={deleteFromCart}
            size="medium"
            appearance="imageButton"
          >
            <FaMinus />
          </Button>
          <Button onClick={addToCart} size="medium" appearance="imageButton">
            <FaPlus />
          </Button>
        </>
      )}
    </div>
  );
};

export default AddToCart;
